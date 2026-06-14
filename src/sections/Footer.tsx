import { Facebook, Instagram } from 'lucide-react';

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Our Story', href: '#story' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-off-black border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-[5vw] py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl text-white mb-3">GRAY EQUINE</h3>
            <p className="font-sans text-sm text-white/50 leading-relaxed">
              Where South West WA&apos;s beauty meets the joy of horses. 
              A trusted family riding school in Metricup.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="block font-sans text-sm text-white/70 hover:text-sunset transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="block font-sans text-sm text-white/70 hover:text-sunset transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Contact
            </h4>
            <div className="space-y-3 font-sans text-sm text-white/70">
              <p>
                <span className="text-white/40">Phone:</span>{' '}
                <a href="tel:0897550199" className="hover:text-sunset transition-colors duration-300">
                  (08) 9755 0199
                </a>
              </p>
              <p>
                <span className="text-white/40">Email:</span>{' '}
                <a href="mailto:hello@grayequine.com.au" className="hover:text-sunset transition-colors duration-300">
                  hello@grayequine.com.au
                </a>
              </p>
              <p>
                <span className="text-white/40">Address:</span>
                <br />
                Metricup, WA 6280
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mb-4">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/61555500454937"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:border-transparent hover:text-white transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <p className="font-sans text-xs text-white/40">
            &copy; {new Date().getFullYear()} Gray Equine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
