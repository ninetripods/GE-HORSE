import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Programs', href: '#programs' },
  { label: 'Our Story', href: '#story' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Check if we're in a dark section
      const heroEl = document.getElementById('hero');
      const contactEl = document.getElementById('contact');

      if (!heroEl || !contactEl) return;

      const heroRect = heroEl.getBoundingClientRect();
      const contactRect = contactEl.getBoundingClientRect();

      // Header is typically at ~80px from top
      const headerPos = 80;
      const inHero = heroRect.top <= headerPos && heroRect.bottom >= headerPos;
      const inContact = contactRect.top <= headerPos && contactRect.bottom >= headerPos;

      setIsDark(inHero || inContact);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-[#1a1a1a]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-[5vw] flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
          className={`font-display text-2xl tracking-wide transition-colors duration-500 ${
            isDark && !isScrolled ? 'text-white' : 'text-espresso'
          }`}
        >
          GRAY EQUINE
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className={`text-xs uppercase tracking-[0.15em] font-sans font-400 transition-colors duration-500 hover:opacity-70 ${
                isDark && !isScrolled ? 'text-white' : 'text-espresso'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking-form"
            onClick={(e) => { e.preventDefault(); scrollTo('#booking-form'); }}
            className={`text-xs uppercase tracking-[0.15em] font-sans px-5 py-2.5 rounded-lg transition-all duration-300 ${
              isDark && !isScrolled
                ? 'bg-white text-espresso hover:bg-white/90'
                : 'bg-sunset text-white hover:bg-sunset-dark'
            }`}
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className={`w-6 h-6 ${isDark && !isScrolled ? 'text-white' : 'text-espresso'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isDark && !isScrolled ? 'text-white' : 'text-espresso'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-white z-50 flex flex-col items-center pt-12 gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
              className="text-xl font-display text-espresso"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking-form"
            onClick={(e) => { e.preventDefault(); scrollTo('#booking-form'); }}
            className="bg-sunset text-white px-8 py-3 rounded-lg text-sm uppercase tracking-wider font-sans mt-4"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
