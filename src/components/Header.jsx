import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ['Home', 'About', 'Services', 'Contact', 'Tools'];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm" id="header">
      {/* Subtle bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[28px] font-semibold text-charcoal font-serif tracking-tight"
          id="header-logo"
        >
          Elementum
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10" id="desktop-nav">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={`relative text-[14px] font-medium tracking-wide text-gray-400 hover:text-purple transition-colors duration-300 ${
                i === 0 ? 'text-charcoal' : ''
              }`}
            >
              {link}
              {i === 0 && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-purple rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Hamburger – styled premium lines */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span
            className={`block w-6 h-[2px] bg-charcoal transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-charcoal transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-[2px] bg-charcoal transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-off-white px-6 pb-6 pt-2" id="mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-3 text-[15px] text-gray-500 hover:text-purple transition-colors duration-300 font-medium border-b border-gray-100 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
