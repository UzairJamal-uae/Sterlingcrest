import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES_DATA } from '../data';

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-widest text-gray-500"
          >
            Capabilities & Logistics Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl md:text-6xl font-display font-[900] tracking-tight text-black uppercase"
            id="services-title"
          >
            OUR <span className="text-gray-500">SERVICES</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1.5 w-24 bg-black mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto"
          >
            Comprehensive freight services tailored to support demanding supply chains. From single pallets to specialized machinery, we have your cargo covered.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid">
          {SERVICES_DATA.map((service, index) => {
            // Dynamically load the Lucide icon from the string name
            const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative flex flex-col justify-between p-8 bg-gray-50/60 hover:bg-white rounded-3xl border border-gray-200/50 hover:border-black/10 hover:shadow-2xl transition-all duration-300"
              >
                {/* Visual Highlight border on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1.5 bg-black rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

                <div className="space-y-6">
                  {/* Icon Badge */}
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white group-hover:scale-110 transition-all duration-300 shadow-md">
                    <IconComponent className="h-6 w-6 stroke-[1.75]" />
                  </div>

                  {/* Text Details */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-extrabold text-black tracking-tight" id={`service-title-${service.id}`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-2 pt-2 border-t border-gray-100">
                    {service.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-500 font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-black/60 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
