import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <a href="/" className="text-xl font-bold text-blue-700 tracking-tight">
          FOSSEE Workshops
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="/" className="hover:text-blue-600 transition">Home</a>
          <a href="/workshops" className="hover:text-blue-600 transition">Workshops</a>
          <a href="/about" className="hover:text-blue-600 transition">About</a>
          <a
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-3 text-sm text-gray-700">
          <a href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Home</a>
          <a href="/workshops" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">Workshops</a>
          <a href="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">About</a>
          <a href="/login" onClick={() => setMenuOpen(false)} className="bg-blue-600 text-white text-center py-2 rounded-lg">Login</a>
        </div>
      )}
    </nav>
  );
}
