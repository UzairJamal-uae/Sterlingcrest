import { useState, useEffect } from 'react';
import { Menu, X, Truck, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import sterl from '../assets/images/sterl.png';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Carrier Portal', id: 'carrier-portal' },
    { name: 'Shipper Portal', id: 'shipper-portal' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'top-4 mx-auto w-[92%] md:w-[88%] max-w-7xl rounded-full bg-white/75 backdrop-blur-xl border border-gray-200/50 shadow-lg px-6 py-3.5'
            : 'top-0 w-full bg-white border-b border-gray-100 px-6 md:px-12 py-5'
        }`}
      >
        <div className="flex items-center justify-between mx-auto max-w-7xl">
          {/* Logo and Brand Name */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 group text-left focus:outline-none"
            id="nav-logo"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white shadow-md transition-transform group-hover:scale-105 duration-300">
              <img src={sterl} alt="S" />
            </div>
            <div>
              <span className="block text-sm md:text-base font-extrabold tracking-wider text-black font-sans uppercase">
                Sterlingcrest
              </span>
              <span className="block text-[9px] md:text-[10px] font-semibold tracking-widest text-gray-500 font-sans uppercase">
                Logistics LLC
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="px-3.5 py-1.5 text-[13px] font-semibold text-gray-600 hover:text-black rounded-full transition-all duration-200 hover:bg-gray-50 cursor-pointer"
                id={`nav-link-${link.id}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Call to Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+18005550199"
              className="flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-gray-700 hover:text-black bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200/40 transition-colors duration-200"
              id="nav-phone"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>(657) 751-5684</span>
            </a>
            <button
              onClick={() => handleLinkClick('quote')}
              className="px-5 py-2 text-[13px] font-bold text-white bg-black hover:bg-gray-800 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
              id="nav-quote-cta"
            >
              Get a Quote
            </button>
          </div>

          {/* Hamburger Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-0 z-40 bg-white shadow-2xl border-b border-gray-200 pt-24 pb-8 px-6 flex flex-col gap-6 lg:hidden"
            id="mobile-nav-panel"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className="w-full text-left py-2.5 px-4 rounded-xl text-sm font-semibold text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                  id={`mobile-nav-link-${link.id}`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <hr className="border-gray-100" />

            <div className="flex flex-col gap-3">
              <a
                href="tel:+18005550199"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-gray-700 bg-gray-50 border border-gray-200 rounded-xl"
              >
                <Phone className="h-4 w-4" />
                <span>Call Us: (657) 751-5684</span>
              </a>
              <button
                onClick={() => handleLinkClick('quote')}
                className="w-full py-3 text-sm font-bold text-white bg-black hover:bg-gray-800 rounded-xl text-center shadow-lg cursor-pointer"
              >
                Request Custom Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
