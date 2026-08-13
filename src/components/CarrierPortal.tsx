import React, { useState } from 'react';
import { ShieldCheck, CircleDollarSign, CalendarDays, Headphones, CheckCircle2, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CarrierApplication } from '../types';

export default function CarrierPortal() {
  const [formData, setFormData] = useState<CarrierApplication>({
    legalName: '',
    mcNumber: '',
    dotNumber: '',
    email: '',
    phone: '',
    equipmentType: '',
    additionalInfo: ''
  });

  const [hasInsurance, setHasInsurance] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<CarrierApplication | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const benefits = [
    {
      title: 'Premium Lanes & Rates',
      description: 'Access highly competitive spot rates and dedicated contract lanes directly through our centralized dispatch.',
      icon: CircleDollarSign
    },
    {
      title: 'Fast Payment Programs',
      description: 'Choose between standard Net 30, premium 2.5% QuickPay (within 24-48 hours), or instant ACH bank transfers.',
      icon: ShieldCheck
    },
    {
      title: 'Consistent Year-Round Freight',
      description: 'Keep your fleet fully loaded. We utilize direct relationships with major manufacturers to eliminate empty backhauls.',
      icon: CalendarDays
    },
    {
      title: 'Quick Dispatch Support',
      description: 'Never feel stranded. Speak with our highly experienced logistics dispatch coordinators at any hour of the day or night.',
      icon: Headphones
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!formData.legalName || !formData.mcNumber || !formData.dotNumber || !formData.email || !formData.phone || !formData.equipmentType) {
      setErrorMessage('Please complete all required fields (*).');
      return;
    }

    if (!hasInsurance) {
      setErrorMessage('You must confirm cargo and liability insurance requirements to register.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      // Reset form
      setFormData({
        legalName: '',
        mcNumber: '',
        dotNumber: '',
        email: '',
        phone: '',
        equipmentType: '',
        additionalInfo: ''
      });
      setHasInsurance(false);
    }, 1200);
  };

  return (
    <section id="carrier-portal" className="py-20 md:py-28 bg-gradient-to-b from-neutral-900 to-neutral-950 border-b border-neutral-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Carrier Network Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Join our Elite Fleet
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-[900] tracking-tight text-white uppercase" id="carrier-portal-title">
                CARRIER <span className="text-zinc-400 font-[900]">PORTAL</span>
              </h2>
              <div className="h-1.5 w-20 bg-zinc-500 rounded-full" />
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
                Connect with our elite logistics desk. We invest in the long-term success of our carrier network, offering reliable volumes, expedited payments, and human dispatchers who respect your time and safety.
              </p>
            </div>

            {/* Carrier Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="carrier-benefits">
              {benefits.map((benefit, idx) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/5 space-y-4 hover:border-zinc-500/20 hover:bg-white/10 transition-all duration-300">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800 text-white shadow-md">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="font-extrabold text-white text-sm sm:text-base tracking-tight font-sans">
                        {benefit.title}
                      </h3>
                      <p className="text-xs text-gray-400 leading-relaxed font-sans">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Side: Credential Submission Form */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6"
            id="carrier-form-panel"
          >
            <div className="bg-neutral-950/60 border border-neutral-800 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden backdrop-blur-sm">
              {/* Decorative design accent */}
              <div className="absolute top-0 right-0 h-32 w-32 bg-zinc-500/10 rounded-full translate-x-12 -translate-y-12 blur-2xl" />
              
              <AnimatePresence mode="wait">
                {!submittedData ? (
                  <motion.div
                    key="carrier-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="space-y-2 mb-8">
                      <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white font-sans">
                        SUBMIT <span className="text-zinc-400">CREDENTIALS</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Enter your DOT details below to fast-track your carrier onboarding.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {errorMessage && (
                        <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-200 text-xs font-semibold rounded-xl">
                          {errorMessage}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Legal MC Holder Name */}
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            Legal Business Name *
                          </label>
                          <input
                            type="text"
                            name="legalName"
                            value={formData.legalName}
                            onChange={handleInputChange}
                            placeholder="e.g. Blue Ridge Transport"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder:text-gray-600 text-white"
                            required
                          />
                        </div>

                        {/* Equipment Type */}
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            Equipment Type *
                          </label>
                          <select
                            name="equipmentType"
                            value={formData.equipmentType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white text-white appearance-none"
                            required
                          >
                            <option value="" className="text-gray-600">Select Trailer Type</option>
                            <option value="dry-van">Dry Van (53 ft)</option>
                            <option value="reefer">Reefer (Temp Control)</option>
                            <option value="flatbed">Flatbed / Step Deck</option>
                            <option value="power-only">Power Only</option>
                            <option value="hotshot">Hotshot / Flatbed</option>
                            <option value="box-truck">Box Truck / Straight Truck</option>
                            <option value="other">Other specialized</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* MC Number */}
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            MC Number *
                          </label>
                          <input
                            type="text"
                            name="mcNumber"
                            value={formData.mcNumber}
                            onChange={handleInputChange}
                            placeholder="e.g. MC-123456"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder:text-gray-600 text-white"
                            required
                          />
                        </div>

                        {/* DOT Number */}
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            USDOT Number *
                          </label>
                          <input
                            type="text"
                            name="dotNumber"
                            value={formData.dotNumber}
                            onChange={handleInputChange}
                            placeholder="e.g. 3456789"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder:text-gray-600 text-white"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Email Address */}
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="dispatch@company.com"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder:text-gray-600 text-white"
                            required
                          />
                        </div>

                        {/* Phone Number */}
                        <div className="space-y-1">
                          <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="(555) 000-0000"
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder:text-gray-600 text-white"
                            required
                          />
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="space-y-1">
                        <label className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                          Preferred Lanes or Details (Optional)
                        </label>
                        <textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          rows={2}
                          placeholder="e.g. Texas to Midwest lanes, high-capacity dry vans available..."
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm focus:outline-none focus:border-white focus:ring-1 focus:ring-white placeholder:text-gray-600 text-white resize-none"
                        />
                      </div>

                      {/* Insurance Confirmation */}
                      <div className="flex items-start gap-3 pt-2">
                        <input
                          type="checkbox"
                          id="insurance-checkbox"
                          checked={hasInsurance}
                          onChange={(e) => setHasInsurance(e.target.checked)}
                          className="h-4 w-4 rounded border-white/25 text-black bg-neutral-900 focus:ring-white cursor-pointer mt-0.5"
                          required
                        />
                        <label htmlFor="insurance-checkbox" className="text-[11px] text-gray-400 select-none cursor-pointer leading-tight">
                          I confirm that our company carries a minimum of <strong>$1,000,000 Auto Liability</strong> and <strong>$100,000 Cargo Insurance</strong>, and we have an active FMCSA authority.
                        </label>
                      </div>

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full mt-6 py-4 bg-white text-black hover:bg-gray-100 font-bold rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg focus:outline-none flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                        id="carrier-submit-btn"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="h-4 w-4 animate-spin text-black" />
                            Verifying DOT Records...
                          </>
                        ) : (
                          'SUBMIT APPLICATION'
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="carrier-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-6"
                  >
                    <div className="flex justify-center">
                      <div className="h-16 w-16 bg-white/10 text-white flex items-center justify-center rounded-full animate-bounce">
                        <CheckCircle2 className="h-10 w-10 text-emerald-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-2xl font-extrabold text-white">APPLICATION RECEIVED</h3>
                      <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
                        Thank you, <strong>{submittedData.legalName}</strong>. Our carrier compliance division is cross-referencing MC #{submittedData.mcNumber} with the FMCSA registry.
                      </p>
                    </div>

                    <div className="p-5 bg-white/5 rounded-2xl border border-white/10 text-left max-w-sm mx-auto text-xs space-y-2">
                      <p className="text-gray-400"><strong>DOT Verification status:</strong> Pending (Automated check takes ~15 min)</p>
                      <p className="text-gray-400"><strong>Lane matching coordinator:</strong> Assigned</p>
                      <p className="text-gray-400"><strong>Registered Dispatch email:</strong> {submittedData.email}</p>
                    </div>

                    <button
                      onClick={() => setSubmittedData(null)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white font-bold text-xs rounded-full transition-colors cursor-pointer"
                    >
                      Submit Another Truck
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
