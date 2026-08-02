import { Truck, ArrowUp, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = 2026; // Setting year from metadata time

  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Why Choose Us', id: 'why-choose-us' },
    { name: 'Carrier Portal', id: 'carrier-portal' },
    { name: 'Shipper Portal', id: 'shipper-portal' },
    { name: 'Request Quote', id: 'quote' },
    { name: 'About Us', id: 'about' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  const services = [
    { name: 'Dry Van Truckloads (FTL)', id: 'services' },
    { name: 'Reefer / Temp-Control', id: 'services' },
    { name: 'LTL Freight Consolidation', id: 'services' },
    { name: 'Specialized / Heavy Haul', id: 'services' },
    { name: 'Drop Trailer Programs', id: 'services' },
    { name: 'Warehousing & Cross-Dock', id: 'services' },
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Brand */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-3 text-left group focus:outline-none"
              id="footer-logo"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black shadow-md">
                <Truck className="h-5 w-5 stroke-[2]" />
              </div>
              <div>
                <span className="block text-base font-extrabold tracking-wider text-white uppercase font-sans">
                  Sterlingcrest
                </span>
                <span className="block text-[10px] font-semibold tracking-widest text-gray-400 uppercase font-sans">
                  Logistics LLC
                </span>
              </div>
            </button>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Elite freight management with the absolute integrity and security your supply chain demands. Bridging premium carrier networks and shippers nationwide with 24/7 responsiveness.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Quick Access</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-xs text-gray-400 hover:text-white transition-colors cursor-pointer py-0.5"
                  id={`footer-link-${link.id}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 3: Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Services</h4>
            <div className="space-y-2.5">
              {services.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => onNavigate(item.id)}
                  className="block text-left text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Column 4: Compliance Details */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400">Compliance Info</h4>
            <div className="text-xs text-gray-400 space-y-1.5 leading-normal">
              <p><strong>FMCSA MC:</strong> #69863573</p>
              <p><strong>USDOT:</strong> #6924869</p>
              <p><strong>BOND:</strong> $75,000 BMC-84</p>
              <p className="pt-2">Licensed property broker under FMCSA authority.</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-gray-500 text-center sm:text-left">
            &copy; {currentYear} STERLINGCREST LOGISTICS LLC. All shipments protected and covered under active cargo protocols. All rights reserved.
          </p>

          {/* Scroll to Top and Policy links */}
          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-[11px] text-gray-500">
              <a href="#about" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#about" className="hover:text-white transition-colors">Terms of Carrier Service</a>
            </div>
            
            <button
              onClick={handleScrollTop}
              className="h-10 w-10 rounded-full bg-white/10 hover:bg-white text-black hover:text-black flex items-center justify-center transition-all cursor-pointer shadow-md hover:-translate-y-1"
              title="Scroll to top"
              id="footer-scroll-top"
            >
              <ArrowUp className="h-4.5 w-4.5 text-white hover:text-black" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
