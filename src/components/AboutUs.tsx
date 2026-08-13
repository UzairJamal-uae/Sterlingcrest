import { ShieldCheck, Target, HeartHandshake, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutUs() {
  const values = [
    {
      title: 'Integrity First',
      description: 'We adhere to strict anti-double-brokering guidelines. Every cargo is tracked, fully insured, and matched with licensed and audited fleet owners.',
      icon: ShieldCheck
    },
    {
      title: 'Mission-Driven Service',
      description: 'Our mission is to eliminate supply chain headaches by handling transport logistics with total focus, allowing you to scale with absolute confidence.',
      icon: Target
    },
    {
      title: 'Carrier-First Mindset',
      description: 'We realize carriers are the lifeblood of transport. Paying clean invoices quickly and respecting drivers is central to our operational culture.',
      icon: HeartHandshake
    },
    {
      title: 'Absolute Transparency',
      description: 'No hidden fees or unexpected surcharges. We provide clear pricing and real-time transit telemetry so you know exactly where your cargo rests.',
      icon: Eye
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-[900] tracking-tight text-black uppercase" id="about-title">
              ABOUT <span className="text-gray-500 font-[900]">US</span>
            </h2>
            <div className="h-1.5 w-20 bg-black rounded-full" />
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
              Founded on the pillars of safety, responsiveness, and accountability, <strong>STERLINGCREST LOGISTICS LLC</strong> has grown into a premier freight brokerage firm trusted by manufacturers and carrier networks nationwide.
            </p>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-sans">
              We started with a simple belief: freight brokerage shouldn&apos;t be a black box. Shippers deserve to know exactly who is hauling their assets, and carrier partners deserve rapid, honest payments. By investing in modern logistics tracking and maintaining strict double-brokering defenses, we deliver peace of mind with every mile.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-black font-display">100%</p>
                <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mt-1 font-sans">FMCSA Compliant</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-black font-display">99.4%</p>
                <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mt-1 font-sans">On-Time Delivery</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-black font-display">$100K+</p>
                <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-wider mt-1 font-sans">Liability Policy</p>
              </div>
            </div>
          </motion.div>

          {/* Right Core Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            id="about-values-grid"
          >
            {values.map((val, idx) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 space-y-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-extrabold text-black text-sm sm:text-base tracking-tight font-sans">
                      {val.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-sans">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
