import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock } from "lucide-react";
import { registerUser } from "@/api/authApi.js";
import { useAuth } from "@/context";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { fetchUser } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password) {
      return setError("All fields are required");
    }

    try {
      setLoading(true);
      const response = await registerUser({ name, email, password });
      if (response?.success) {
        await fetchUser();
        const destination = location.state?.from || "/";
        navigate(destination);
      } else {
        setError(response?.message || "Registration failed. Try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-[#151514] select-none flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Main Register Card Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Card Form */}
        <div className="rounded-2xl bg-white/70 hover:bg-white border border-[#ded8d0] p-7 sm:p-10 shadow-sm transition-all duration-300">
          <div className="mb-8 text-center space-y-2">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#151514]">
                GET STARTED
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl text-[#151514] uppercase tracking-wide">
              Create Account
            </h1>
            <p className="font-body text-xs sm:text-sm text-[#151514]/70">
              Start your journey with TechyTech
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5" noValidate>
            {/* Name Field */}
            <div className="space-y-1.5">
              <label className="block font-body text-xs uppercase tracking-wider text-[#151514] font-semibold">
                Full Name <span className="text-secondary">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#151514]/40">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-[#ded8d0] focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-[#151514] placeholder-[#151514]/40 text-sm font-body outline-none transition-all"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label className="block font-body text-xs uppercase tracking-wider text-[#151514] font-semibold">
                Email Address <span className="text-secondary">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#151514]/40">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-white border border-[#ded8d0] focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-[#151514] placeholder-[#151514]/40 text-sm font-body outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label className="block font-body text-xs uppercase tracking-wider text-[#151514] font-semibold">
                Password <span className="text-secondary">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#151514]/40">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-11 py-3.5 rounded-xl bg-white border border-[#ded8d0] focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-[#151514] placeholder-[#151514]/40 text-sm font-body outline-none transition-all"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#151514]/50 hover:text-secondary transition-colors p-1"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 font-body text-center">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full font-body font-medium text-sm rounded-full py-3.5 bg-[#151514] text-[#f4f0eb] hover:bg-secondary hover:text-primary transition-all duration-300 ease-out cursor-pointer shadow-sm active:scale-95 disabled:opacity-60"
              >
                {loading ? (
                  <span className="inline-flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-[#f4f0eb]/20 border-t-[#f4f0eb] rounded-full animate-spin"></span>
                    Creating Account...
                  </span>
                ) : (
                  <span>Create Account</span>
                )}
              </button>
            </div>

            {/* Redirect to Login */}
            <p className="text-center font-body text-xs text-[#151514]/70 pt-2">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#151514] font-semibold hover:text-secondary underline ml-1 transition-colors"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
