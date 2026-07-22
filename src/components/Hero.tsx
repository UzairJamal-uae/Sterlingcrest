import { ArrowRight, ShieldCheck, Clock, Award, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const stats = [
    { label: 'On-Time Delivery', value: '99.4%', icon: Clock },
    { label: 'Vetted Carriers', value: '45K+', icon: ShieldCheck },
    { label: 'Active Coverage', value: '50 States', icon: Globe },
    { label: 'Dispatch Response', value: '< 15 Min', icon: Award },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 md:pt-36 pb-20 bg-neutral-950 overflow-hidden">
      {/* Full-bleed background truck image with dark premium overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/sterlingcrest_truck_right_to_left_1784321367948.jpg"
          alt="Sterlingcrest Logistics Premium Fleet"
          className="w-full h-full object-cover object-right lg:object-center opacity-75"
          referrerPolicy="no-referrer"
        />
        {/* Sleek twilight dark slate-gray and black gradient overlay matching CTL reference */}
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
        {/* Subtle decorative radial light in top-left */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-8 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 text-zinc-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-400 animate-pulse" />
              PREMIUM DISPATCH & LOGISTICS
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-[900] tracking-tighter text-white leading-[0.95]"
                id="hero-title"
              >
                LOGISTICS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-slate-100 to-white">
                  REDEFINED.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-sans"
                id="hero-description"
              >
                Elite freight management with the absolute integrity and security your supply chain demands. 
                We bridge shippers and premium carrier networks with absolute transparency and 24/7 accountability.
              </motion.p>
            </div>

            {/* Call to Actions - matches CTL layout buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
              id="hero-ctas"
            >
              <button
                onClick={() => onNavigate('quote')}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-zinc-200 text-black font-bold rounded-xl shadow-lg shadow-white/5 transition-all hover:-translate-y-0.5 cursor-pointer text-sm font-sans"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => onNavigate('carrier-portal')}
                className="flex items-center justify-center px-6 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold rounded-xl shadow-sm transition-all cursor-pointer text-sm font-sans backdrop-blur-sm"
              >
                Find Loads Now
              </button>

              <button
                onClick={() => onNavigate('shipper-portal')}
                className="flex items-center justify-center px-6 py-4 bg-neutral-900 hover:bg-neutral-800 text-gray-300 border border-neutral-800 font-bold rounded-xl shadow-sm transition-all cursor-pointer text-sm font-sans"
              >
                Shipper Portal
              </button>
            </motion.div>

            {/* Premium Stats Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/10"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="space-y-1 bg-white/5 border border-white/5 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Icon className="h-4.5 w-4.5 stroke-[2]" />
                      <span className="text-xl md:text-2xl font-display font-black tracking-tight text-white">{stat.value}</span>
                    </div>
                    <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest leading-none pt-1">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
