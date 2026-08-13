import { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_DATA } from '../data';

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<'all' | 'shipper' | 'carrier'>('all');
  const [activeFAQ, setActiveFAQ] = useState<string | null>(null);

  const filteredFAQs = FAQ_DATA.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-gray-100 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-6 md:px-12"
      >
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">
            Support Desk & Information
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-[900] tracking-tight text-black uppercase" id="faq-title">
            FREQUENTLY ASKED <span className="text-gray-500 font-[900]">QUESTIONS</span>
          </h2>
          <div className="h-1.5 w-20 bg-black mx-auto rounded-full" />
          <p className="text-gray-600 text-sm sm:text-base font-sans">
            Have questions about load requirements, QuickPay terms, compliance checks, or insurance? We have gathered answers to some of the most common concerns.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center gap-2.5 p-1.5 bg-gray-50 border border-gray-200/60 max-w-md mx-auto rounded-full mb-10" id="faq-tabs">
          <button
            onClick={() => { setActiveTab('all'); setActiveFAQ(null); }}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-black text-white shadow-md'
                : 'text-gray-500 hover:text-black hover:bg-gray-100'
            }`}
          >
            All FAQs
          </button>
          <button
            onClick={() => { setActiveTab('shipper'); setActiveFAQ(null); }}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
              activeTab === 'shipper'
                ? 'bg-black text-white shadow-md'
                : 'text-gray-500 hover:text-black hover:bg-gray-100'
            }`}
          >
            Shippers
          </button>
          <button
            onClick={() => { setActiveTab('carrier'); setActiveFAQ(null); }}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer ${
              activeTab === 'carrier'
                ? 'bg-black text-white shadow-md'
                : 'text-gray-500 hover:text-black hover:bg-gray-100'
            }`}
          >
            Carriers
          </button>
        </div>

        {/* FAQ Accordions */}
        <div className="space-y-4" id="faq-accordions">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="space-y-3"
            >
              {filteredFAQs.map((faq) => {
                const isOpen = activeFAQ === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'bg-gray-50/50 border-black/10 shadow-sm'
                        : 'bg-white border-gray-200/50 hover:bg-gray-50/20 hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => setActiveFAQ(isOpen ? null : faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                      id={`faq-btn-${faq.id}`}
                    >
                      <div className="flex items-center gap-4 pr-4">
                        <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                          isOpen ? 'bg-black text-white' : 'bg-gray-50 text-gray-500'
                        }`}>
                          <HelpCircle className="h-4 w-4" />
                        </div>
                        <span className="font-extrabold text-black tracking-tight text-sm sm:text-base">
                          {faq.question}
                        </span>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-300 ${
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
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-500 leading-relaxed pl-15 border-t border-gray-50/80">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating Helpline Accent */}
        <div className="mt-12 p-6 bg-gray-50 border border-gray-200/60 rounded-3xl text-center space-y-3 max-w-lg mx-auto">
          <div className="flex justify-center">
            <div className="h-9 w-9 bg-black text-white rounded-xl flex items-center justify-center">
              <MessageSquare className="h-4.5 w-4.5" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm font-extrabold text-black">Still have queries?</p>
            <p className="text-xs text-gray-500 max-w-sm mx-auto">
              Our support dispatch and compliance officers are available during working hours to answer any operational questions instantly.
            </p>
          </div>
          <div className="pt-2">
            <a
              href="mailto:info@sterlingcrestlogistics.com"
              className="inline-block text-xs font-bold text-black hover:underline"
            >
              info@sterlingcrestlogistics.com
            </a>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
