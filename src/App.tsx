import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CarrierPortal from './components/CarrierPortal';
import ShipperPortal from './components/ShipperPortal';
import RequestQuote from './components/RequestQuote';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset calculation for the sticky/floating navbar
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased overflow-x-hidden selection:bg-black selection:text-white">
      {/* Scrollable Floating Navbar */}
      <Navbar onNavigate={handleNavigate} />

      <main className="relative">
        {/* Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* Services Section */}
        <Services />

        {/* Why Choose Us Accordion and Warehouse Banner */}
        <WhyChooseUs />

        {/* Carrier Portal with DOT/MC credential matching */}
        <CarrierPortal />

        {/* Shipper Portal with Secure Vetting checklist */}
        <ShipperPortal />

        {/* Request a Quote with route distance and rate estimator */}
        <RequestQuote />

        {/* About Us Company Profile and Pillars */}
        <AboutUs />

        {/* FAQ section with Shipper vs Carrier tab filter */}
        <FAQ />

        {/* Detailed Contact blocks & active dispatch hotline alert */}
        <Contact />
      </main>

      {/* Structured Footer with legal & licensing registrations */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
