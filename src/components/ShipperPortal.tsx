import { ShieldCheck, Eye, UserCheck, BarChart3, CheckSquare, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function ShipperPortal() {
  const shipperPerks = [
    {
      title: 'Cargo Security & Integrity',
      description: 'Advanced security protocols and vetted carrier network for high-value shipments, dry vans, flatbeds, and General Freights.',
      icon: ShieldCheck
    },
    {
      title: 'Real-Time GPS Tracking',
      description: 'Complete visibility of your freight from pickup to delivery with automated geofencing notifications.',
      icon: Eye
    },
    {
      title: 'Dedicated Account Manager',
      description: 'Personalized service with a dedicated logistics professional who understands your business needs.',
      icon: UserCheck
    },
    {
      title: 'Competitive Contract Pricing',
      description: 'Access to deep contract pricing and spot rates optimized to keep your supply chain overhead minimal.',
      icon: BarChart3
    }
  ];

  const vettingSteps = [
    { check: 'FMCSA Safety Rating & active authority checks', ok: true },
    { check: 'Automated Carrier411 risk index scanning', ok: true },
    { check: 'Verified COI direct from underwriting agencies', ok: true },
    { check: 'Clean SMS/CSA scores and safety checkups', ok: true },
    { check: 'Hostile takeover & double-brokered load defense', ok: true },
  ];

  return (
    <section id="shipper-portal" className="py-20 md:py-28 bg-gradient-to-tr from-slate-50 via-gray-100/50 to-slate-50 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Vetting and compliance checklist card */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-5"
            id="shipper-vetting-panel"
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200/60 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-black text-white rounded-xl flex items-center justify-center shadow-md shadow-black/10">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-black tracking-tight text-sm sm:text-base font-sans">
                    Automated Secure Vetting
                  </h3>
                  <p className="text-[11px] text-zinc-600 font-bold tracking-widest uppercase">
                    STERLINGCREST COMPLIANCE DASHBOARD
                  </p>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Steps Checklist */}
              <div className="space-y-4">
                {vettingSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-xs sm:text-sm font-semibold text-gray-700 font-sans">
                      {step.check}
                    </span>
                    <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-emerald-600 text-white text-[10px] font-bold shadow-md shadow-emerald-600/10">
                      OK
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <div className="p-4 bg-zinc-50 border border-zinc-200 rounded-2xl flex items-center gap-3.5">
                  <div className="h-8 w-8 bg-zinc-800/10 text-zinc-800 rounded-lg flex items-center justify-center shrink-0">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <p className="text-xs text-zinc-800 leading-normal font-sans">
                    We cross-reference credentials against federal databases <strong>every 4 hours</strong> to ensure active certificates.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Shipper Portal Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 lg:col-span-7 space-y-8"
            id="shipper-perks-panel"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">
                Secure freight solutions
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-[900] tracking-tight text-black uppercase" id="shipper-portal-title">
                SHIPPER <span className="text-gray-500 font-[900]">PORTAL</span>
              </h2>
              <div className="h-1.5 w-20 bg-black rounded-full" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                Secure, reliable freight solutions for your cargo. Whether you require standard lanes or highly secure temperature-controlled reefers, our compliance vetting eliminates risk before a driver ever arrives.
              </p>
            </div>

            {/* Perks Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="shipper-perks-grid">
              {shipperPerks.map((perk, idx) => {
                const IconComponent = perk.icon;
                return (
                  <div key={idx} className="group space-y-3.5 p-6 bg-white rounded-2xl border border-gray-200/50 hover:border-black/15 transition-all shadow-sm hover:shadow-md duration-300">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-black text-white group-hover:scale-105 transition-transform duration-300 shadow-sm">
                      <IconComponent className="h-4.5 w-4.5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-extrabold text-black text-sm sm:text-base tracking-tight font-sans">
                        {perk.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed font-sans">
                        {perk.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
