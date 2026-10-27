import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-full flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <p className="text-6xl mb-4">♻️</p>
        <h1 className="text-2xl font-bold text-[#111827] mb-2">404 - Page Not Found</h1>
        <p className="text-sm text-[#6b7280] mb-6 leading-relaxed">
          This page doesn't exist in the portfolio. It may have been moved or the URL is incorrect.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 bg-gradient-to-r from-[#065f46] to-[#10b981] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity no-underline"
          >
            <Home size={14} /> Go to Overview
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white text-[#374151] text-sm font-semibold px-4 py-2.5 rounded-xl border border-[#e5e7eb] hover:bg-[#f9fafb] transition-colors"
          >
            <ArrowLeft size={14} /> Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
