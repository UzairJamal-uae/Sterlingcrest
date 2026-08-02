import { useState } from 'react';
import { ChevronDown, Handshake, ShieldCheck, FileCheck, CircleDollarSign, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
const warehouseImage = "/src/assets/images/sterlingcrest_warehouse_1784317963002.jpg";

export default function WhyChooseUs() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const keyPoints = [
    {
      title: 'Trusted Partnerships & Compliance',
      description: 'At Sterlingcrest, we treat every load with absolute integrity. We maintain rigorous standards, continuous compliance monitoring, and daily verification of carrier credentials to eliminate double brokerage and ensure strict risk mitigation.',
      icon: Handshake
    },
    {
      title: 'Premium Market-Leading Rates',
      description: 'We leverage deep lane histories, seasonal volumes, and automated spot-pricing algorithms to optimize freight bills. Shippers secure lower costs, while carriers receive premium rates to maximize backhauls.',
      icon: CircleDollarSign
    },
    {
      title: 'No Aggressive Long-Term Commitments',
      description: 'We earn your loyalty with every single delivery. We operate with transparent spot quotes and master service agreements that put flexibility first, proving our worth through flawless execution.',
      icon: FileCheck
    },
    {
      title: 'Fast Payment & Factoring Integrations',
      description: 'Carriers keep their business moving with our fast financing. Choose from our 24/48-hour QuickPay programs, fast electronic direct deposits, or seamless interfaces with third-party factoring brokers.',
      icon: ShieldCheck
    }
  ];

  const benefitsList = [
    '24/7/365 Dedicated Dispatch Assistance',
    'Integrated ELD Tracking and Automated Alerts',
    'Strict Double-Brokerage Defense Systems',
    'Customized KPI Reporting & Fuel Surcharges'
  ];

  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 via-slate-100/60 to-gray-50 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Column - Accordions */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">
                The Sterlingcrest Advantage
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-[900] tracking-tight text-black uppercase" id="why-choose-us-title">
                WHY CHOOSE <span className="text-gray-500 font-[900]">US</span>
              </h2>
              <div className="h-1.5 w-20 bg-black rounded-full" />
              <p className="text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed">
                At SterlingCrest Logistics LLC, we go beyond traditional freight brokerage. Our relentless commitment to excellence, technological precision, and absolute transparency separates us from the rest.
              </p>
            </div>

            {/* Accordion Component */}
            <div className="space-y-3" id="why-choose-us-accordion">
              {keyPoints.map((point, idx) => {
                const IconComponent = point.icon;
                const isOpen = activeAccordion === idx;
                
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-white border-black/10 shadow-md'
                        : 'bg-white/45 border-gray-200/50 hover:bg-white hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => setActiveAccordion(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                      id={`why-choose-us-btn-${idx}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`p-2.5 rounded-xl transition-colors ${
                          isOpen ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                        }`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="font-extrabold text-black tracking-tight text-sm sm:text-base font-sans">
                          {point.title}
                        </span>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-black' : ''
                      }`} />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-500 leading-relaxed pl-16 border-t border-gray-50">
                            {point.description}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image/Banner Column */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
            id="why-choose-us-image-wrapper"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 aspect-[3/4]">
              <img
                src={warehouseImage}
                alt="Modern automated logistics hub"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Interactive over-lay badge */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/85 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                <span className="text-[10px] font-extrabold tracking-widest text-zinc-400 uppercase">
                  NATIONWIDE NETWORK
                </span>
                <p className="text-base font-extrabold text-white mt-1 leading-tight font-sans">
                  Seamless Cross-Border Capacity
                </p>
                
                {/* List of custom bullet values */}
                <div className="mt-4 space-y-2.5">
                  {benefitsList.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-gray-300">
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-zinc-700 text-white shrink-0">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span className="font-sans">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
