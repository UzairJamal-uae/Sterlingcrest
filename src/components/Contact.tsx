import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const contactInfo = [
    {
      label: 'ADDRESS',
      value: 'CLERMONT, IN',
      subtext: 'United States Logistics Hub',
      icon: MapPin,
      actionText: 'Get Directions',
      href: 'https://maps.google.com/?q=CLERMONT, IN'
    },
    {
      label: 'PHONE',
      value: '(657) 751-5684',
      subtext: 'Toll-free Dispatch Desk',
      icon: Phone,
      actionText: 'Call Dispatcher',
      href: 'tel:+16577515684'
    },
    {
      label: 'EMAIL',
      value: 'info@sterlingcrestlogistics.com',
      subtext: 'Rate confirmations & BOLs',
      icon: Mail,
      actionText: 'Send Email',
      href: 'mailto:info@sterlingcrestlogistics.com'
    },
    {
      label: 'HOURS',
      value: 'Monday - Friday, 6:00 AM - 6:00 PM EST',
      subtext: 'After-hours support: available for active, in-transit loads only',
      icon: Clock,
      actionText: 'Check Status',
      href: '#home'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-gray-50 border-b border-gray-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 md:px-12"
      >
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">
            Secure connection
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-[900] tracking-tight text-black uppercase" id="contact-title">
            GET IN <span className="text-gray-500 font-[900]">TOUCH</span>
          </h2>
          <div className="h-1.5 w-20 bg-black mx-auto rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base font-sans">
            Ready to secure your freight or join our dispatch network? Contact us today. Our brokers and compliance teams are standing by.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="contact-cards-grid">
          {contactInfo.map((info, idx) => {
            const IconComponent = info.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-8 bg-white rounded-3xl border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Icon badge */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <IconComponent className="h-5 w-5 stroke-[1.75]" />
                  </div>

                  <div className="space-y-2">
                    <span className="block text-[10px] font-extrabold tracking-widest text-gray-400 uppercase">
                      {info.label}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-black tracking-tight leading-tight font-sans break-words overflow-wrap-anywhere">
                      {info.value}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium font-sans">
                      {info.subtext}
                    </p>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 mt-6 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-800 hover:text-black group/link">
                  <a href={info.href} target={info.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer" className="flex items-center gap-1.5 cursor-pointer font-sans">
                    {info.actionText}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Alert banner */}
        <div className="mt-12 p-6 bg-white border border-gray-200/50 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 text-left">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-black font-sans">Active Carrier Emergency Line</p>
              <p className="text-xs text-gray-500 leading-normal font-sans">
                Drivers on the road can reach our critical support center 24 hours a day at <strong>(657) 751-5684 ext. 9</strong>.
              </p>
            </div>
          </div>
          <a
            href="tel:+18005550199"
            className="px-6 py-3 bg-black text-white hover:bg-gray-800 font-bold text-xs rounded-xl transition-all shadow-md shrink-0 text-center cursor-pointer font-sans"
          >
            Emergency Dispatch Hot-Line
          </a>
        </div>

      </motion.div>
    </section>
  );
}
