import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { sendContactEnquiry } from "@/api/messageApi";
import ProcessSection from "@/components/ProcessSection";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      return setError("Please fill in all required fields.");
    }

    try {
      setLoading(true);
      const res = await sendContactEnquiry(formData);

      if (res?.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(res?.message || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      const serverMessage =
        err.response?.data?.message ||
        err.message ||
        "An error occurred while sending your message. Please try again.";
      setError(serverMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-[#151514] select-none">

      {/* Contact Hero Header (Swiss Minimalist Layout) */}
      <section className="relative z-10 w-full bg-[#f4f0eb] border-b border-[#e2dcd5] py-4 sm:py-6 lg:py-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div>
            <div>
              <div className="flex items-center gap-3">
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[#151514]">
                  START A CONVERSATION
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold font-display leading-[0.92] tracking-[0.015em] uppercase text-[#151514]">
                Let's build something exceptional
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info Section */}
      <section className="relative z-10 w-full py-6 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-12 bg-[#f4f0eb]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* LEFT COLUMN: Clean Minimalist Form */}
            <div className="lg:col-span-7 bg-white/70 hover:bg-white rounded-2xl border border-[#ded8d0] p-7 sm:p-10 shadow-sm transition-all duration-300">
              <div className="mb-8">
                <h2 className="font-display text-2xl sm:text-3xl tracking-wide text-[#151514] uppercase mb-1">
                  Send us a Message
                </h2>
                <p className="font-body text-xs sm:text-sm text-[#151514]/70">
                  Fill out the form below and an engineer or strategist will connect with you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 flex flex-col items-center text-center gap-3 bg-secondary/10 border border-secondary/30 rounded-xl p-6">
                  <CheckCircle2 className="w-10 h-10 text-secondary" />
                  <h3 className="font-display text-2xl text-[#151514] uppercase tracking-wide">
                    Message Received!
                  </h3>
                  <p className="font-body text-sm text-[#151514]/80 max-w-md">
                    Thank you for reaching out. We will review your requirements and respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block font-body text-xs uppercase tracking-wider text-[#151514] font-semibold"
                      >
                        Your Name <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        disabled={loading}
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#ded8d0] focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-[#151514] placeholder-[#151514]/40 text-sm font-body outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block font-body text-xs uppercase tracking-wider text-[#151514] font-semibold"
                      >
                        Email Address <span className="text-secondary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        disabled={loading}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#ded8d0] focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-[#151514] placeholder-[#151514]/40 text-sm font-body outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block font-body text-xs uppercase tracking-wider text-[#151514] font-semibold"
                    >
                      Subject <span className="text-secondary">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      disabled={loading}
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Platform Architecture / Web Redesign"
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#ded8d0] focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-[#151514] placeholder-[#151514]/40 text-sm font-body outline-none transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block font-body text-xs uppercase tracking-wider text-[#151514] font-semibold"
                    >
                      Message <span className="text-secondary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      disabled={loading}
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your brand, timeline, budget, and goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-[#ded8d0] focus:border-secondary focus:ring-1 focus:ring-secondary/50 text-[#151514] placeholder-[#151514]/40 text-sm font-body outline-none resize-none transition-all"
                    />
                  </div>

                  {/* Error Banner */}
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-600 font-body flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#151514] text-[#f4f0eb] hover:bg-secondary hover:text-primary transition-all duration-300 font-body text-sm font-medium group active:scale-95 shadow-sm cursor-pointer disabled:opacity-60"
                    >
                      <span>{loading ? "Sending Enquiry..." : "Send Inquiry"}</span>
                      <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: Contact Information */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white/70 hover:bg-white rounded-2xl border border-[#ded8d0] p-7 sm:p-8 space-y-7 shadow-sm transition-all duration-300">
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl tracking-wide text-[#151514] uppercase mb-1">
                    Direct Channels
                  </h2>
                  <p className="font-body text-xs sm:text-sm text-[#151514]/70">
                    Reach our leadership and team through phone, email, or physical offices.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Headquarters */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <span className="block font-semibold text-[#151514] text-xs uppercase tracking-wider mb-1 font-body">
                        Headquarters
                      </span>
                      <p className="text-[#151514]/70 text-xs sm:text-sm leading-relaxed">
                        Trendzupmedia Creations Pvt.Ltd. 307/3rd Floor Vardhaman Gee Dee Plaza Building, Dwarka Sector 12, New Delhi 110075
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                      <Phone className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <span className="block font-semibold text-[#151514] text-xs uppercase tracking-wider mb-1 font-body">
                        Phone Number
                      </span>
                      <a
                        href="tel:+919310563727"
                        className="text-[#151514] hover:text-secondary text-sm font-medium transition-colors"
                      >
                        +91 9310563727
                      </a>
                      <span className="block text-[11px] text-[#151514]/50 font-mono mt-0.5">
                        Mon – Sat: 9:00 AM – 6:00 PM IST
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-secondary/15 border border-secondary/30 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                      <Mail className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <span className="block font-semibold text-[#151514] text-xs uppercase tracking-wider mb-1 font-body">
                        Email Inquiries
                      </span>
                      <a
                        href="mailto:TechyTech@gmail.com"
                        className="block text-[#151514] hover:text-secondary text-sm font-medium transition-colors"
                      >
                        TechyTech@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="bg-white/70 rounded-2xl border border-[#ded8d0] p-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#151514]/5 flex items-center justify-center text-[#151514] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-[#151514] text-xs uppercase tracking-wider mb-0.5">
                    Response Window
                  </span>
                  <p className="text-xs text-[#151514]/70 leading-relaxed">
                    Average response time for client proposals and technical inquiries is under 12 hours.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
