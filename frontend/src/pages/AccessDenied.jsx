import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ShieldAlert,
  Lock,
  ArrowLeft,
  ShoppingBag,
  LogIn,
  CheckCircle2,
} from 'lucide-react';
import { useAuth } from '@/context';

export default function AccessDenied() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Parse query params if redirected directly from server
  const queryParams = new URLSearchParams(location.search);
  const reason = queryParams.get('reason');

  let defaultReasonMessage = "You do not have permission to access or download this digital product.";
  if (reason === 'unauthenticated') {
    defaultReasonMessage = "You must be logged in to download or access this digital file.";
  } else if (reason === 'not_purchased') {
    defaultReasonMessage = "You cannot download this file because you have not completed a purchase for this eBook.";
  } else if (reason === 'not_found') {
    defaultReasonMessage = "The requested digital file was not found in storage.";
  } else if (reason === 'invalid_id') {
    defaultReasonMessage = "Invalid digital asset identification provided.";
  }

  // Read optional custom message passed via router state or query param
  const customMessage = location.state?.message || defaultReasonMessage;

  const ebookTitle = location.state?.ebookTitle || null;
  const ebookSlug = location.state?.ebookSlug || null;

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-background text-[#151514]">
      <div className="w-full max-w-lg rounded-3xl bg-white/70 hover:bg-white border border-[#ded8d0] p-8 sm:p-10 text-center shadow-sm relative overflow-hidden">
        {/* Warning Icon Badge */}
        <div className="w-20 h-20 rounded-3xl bg-red-500/10 border border-red-500/20 text-red-600 flex items-center justify-center mx-auto mb-6 shadow-sm">
          <ShieldAlert className="w-10 h-10" />
        </div>

        {/* Header */}
        <h1 className="font-display text-3xl sm:text-4xl text-[#151514] tracking-wide mb-3">
          Access <span className="text-red-600">Restricted</span>
        </h1>

        <p className="font-body text-[#151514]/75 text-sm sm:text-base leading-relaxed mb-6">
          {customMessage}
        </p>

        {ebookTitle && (
          <div className="mb-6 p-4 rounded-2xl bg-[#eae5df] border border-[#ded8d0] text-xs text-[#151514]/80 font-body">
            Target Asset: <span className="text-[#151514] font-semibold">{ebookTitle}</span>
          </div>
        )}

        {/* Information box */}
        <div className="p-4 rounded-2xl bg-white border border-[#ded8d0] text-left mb-8 space-y-2 text-xs font-body text-[#151514]/70">
          <div className="flex items-start gap-2">
            <Lock className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
            <span>Digital assets are protected and require a verified, completed purchase.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
            <span>Once payment is processed, instant lifetime download access will be unlocked.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          {ebookSlug ? (
            <Link
              to={`/products/${ebookSlug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-semibold bg-secondary text-primary hover:bg-[#dd6b35] transition-all shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Purchase to Unlock</span>
            </Link>
          ) : (
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-semibold bg-secondary text-primary hover:bg-[#dd6b35] transition-all shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Explore Products</span>
            </Link>
          )}

          {!isAuthenticated ? (
            <Link
              to="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-semibold text-[#151514] bg-white border border-[#ded8d0] hover:bg-[#eae5df] transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </Link>
          ) : (
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-body text-sm font-semibold text-[#151514] bg-white border border-[#ded8d0] hover:bg-[#eae5df] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back Home</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
