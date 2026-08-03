import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, HelpCircle, Calculator, Compass, Landmark, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { QuoteRequest } from '../types';

export default function RequestQuote() {
  const [formData, setFormData] = useState<QuoteRequest>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    origin: '',
    destination: '',
    freightType: '',
    weight: '',
    details: ''
  });

  const [agreedTerms, setAgreedTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Real-time calculation state
  const [routeDistance, setRouteDistance] = useState<number | null>(null);
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  // Dynamic estimate generator based on Origin/Destination characters
  useEffect(() => {
    if (formData.origin.trim().length > 3 && formData.destination.trim().length > 3) {
      // Create a deterministic pseudo-random distance based on the length of input
      const combinedLength = formData.origin.length + formData.destination.length;
      const distance = (combinedLength * 42) % 1800 + 350; // Between 350 and 2150 miles
      
      let ratePerMile = 2.15; // default
      if (formData.freightType === 'reefer') ratePerMile = 2.75;
      else if (formData.freightType === 'flatbed') ratePerMile = 2.95;
      else if (formData.freightType === 'ltl') ratePerMile = 1.35;

      setRouteDistance(distance);
      setEstimatedCost(Math.round(distance * ratePerMile));
    } else {
      setRouteDistance(null);
      setEstimatedCost(null);
    }
  }, [formData.origin, formData.destination, formData.freightType]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.companyName || !formData.contactName || !formData.email || !formData.phone || !formData.origin || !formData.destination || !formData.freightType) {
      setErrorMessage('Please complete all required fields (*).');
      return;
    }

    if (!agreedTerms) {
      setErrorMessage('You must agree to the privacy terms to request an instant quote.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedQuote({ ...formData });
      // Reset
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        origin: '',
        destination: '',
        freightType: '',
        weight: '',
        details: ''
      });
      setAgreedTerms(false);
    }, 1200);
  };

  return (
    <section id="quote" className="py-20 md:py-28 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Quote Submission Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
            id="quote-form-panel"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-600">
                Brokerage Pricing Desk
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-[900] tracking-tight text-black uppercase" id="quote-title">
                REQUEST A <span className="text-gray-500 font-[900]">QUOTE</span>
              </h2>
              <div className="h-1.5 w-20 bg-black rounded-full" />
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                Receive a rapid, obligation-free lane quote customized for your transit. Fill out the logistics requirements below, and our spot rate operators will contact you in under 15 minutes with exact truck availability.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!submittedQuote ? (
                <motion.form
                  key="quote-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  {errorMessage && (
                    <div className="p-3.5 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-xl">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="e.g. Acme Manufacturing"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                        required
                      />
                    </div>

                    {/* Contact Name */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Origin */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                        Origin (City, State) *
                      </label>
                      <input
                        type="text"
                        name="origin"
                        value={formData.origin}
                        onChange={handleInputChange}
                        placeholder="e.g. CLERMONT, IN"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                        required
                      />
                    </div>

                    {/* Destination */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                        Destination (City, State) *
                      </label>
                      <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        placeholder="e.g. Chicago, IL"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Freight Type */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                        Freight Type *
                      </label>
                      <select
                        name="freightType"
                        value={formData.freightType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black text-gray-700"
                        required
                      >
                        <option value="">Select Trailer Type</option>
                        <option value="dry-van">Dry Van (Full Truckload)</option>
                        <option value="reefer">Reefer (Temperature-Controlled)</option>
                        <option value="flatbed">Flatbed / Step Deck</option>
                        <option value="ltl">Less Than Truckload (LTL)</option>
                        <option value="partial">Partial Load</option>
                        <option value="hazmat">Hazardous Materials (Hazmat)</option>
                      </select>
                    </div>

                    {/* Weight */}
                    <div className="space-y-1">
                      <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                        Approximate Weight (lbs)
                      </label>
                      <input
                        type="number"
                        name="weight"
                        value={formData.weight}
                        onChange={handleInputChange}
                        placeholder="e.g. 42000"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Shipment Details */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider">
                      Shipment Details & Special Requirements
                    </label>
                    <textarea
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="e.g. Requires food-grade trailer, strapping required, liftgate needed at delivery..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:border-black rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  {/* Agree checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="quote-terms-checkbox"
                      checked={agreedTerms}
                      onChange={(e) => setAgreedTerms(e.target.checked)}
                      className="h-4.5 w-4.5 rounded border-gray-300 text-black focus:ring-black cursor-pointer mt-0.5"
                      required
                    />
                    <label htmlFor="quote-terms-checkbox" className="text-[11px] text-gray-500 select-none cursor-pointer leading-relaxed">
                      By checking this box, you agree to receive spot-quote notifications, transit schedules, and phone consultations from SterlingCrest Logistics. I acknowledge the company&apos;s <span className="underline">Privacy Policy</span>.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-4 bg-black text-white hover:bg-gray-800 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-sm"
                    id="quote-submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin text-white" />
                        Generating Spot Calculation...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        GET INSTANT QUOTE
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="quote-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-gray-50 border border-gray-200/60 rounded-3xl p-8 text-center space-y-6"
                >
                  <div className="flex justify-center">
                    <div className="h-14 w-14 bg-black text-white rounded-full flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-emerald-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-black tracking-tight">SPOT QUOTE INITIATED</h3>
                    <p className="text-xs sm:text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                      Your quote reference <strong>#SC-{Math.floor(Math.random() * 90000) + 10000}</strong> has been created. A rate confirmation has been sent to <strong>{submittedQuote.email}</strong>.
                    </p>
                  </div>

                  <hr className="border-gray-200 max-w-md mx-auto" />

                  <div className="grid grid-cols-2 gap-4 text-left max-w-md mx-auto text-xs bg-white p-5 rounded-2xl border border-gray-100">
                    <div>
                      <p className="text-gray-400"><strong>Company:</strong></p>
                      <p className="text-black font-semibold mt-0.5">{submittedQuote.companyName}</p>
                    </div>
                    <div>
                      <p className="text-gray-400"><strong>Contact:</strong></p>
                      <p className="text-black font-semibold mt-0.5">{submittedQuote.contactName}</p>
                    </div>
                    <div className="mt-2">
                      <p className="text-gray-400"><strong>Origin Lane:</strong></p>
                      <p className="text-black font-semibold mt-0.5">{submittedQuote.origin}</p>
                    </div>
                    <div>
                      <p className="text-gray-400"><strong>Destination Lane:</strong></p>
                      <p className="text-black font-semibold mt-0.5">{submittedQuote.destination}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setSubmittedQuote(null)}
                    className="px-6 py-2.5 bg-black hover:bg-gray-800 text-white font-bold text-xs rounded-full transition-colors cursor-pointer"
                  >
                    Submit Another Quote
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Side: Real-Time pricing Estimator Widget */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5"
            id="pricing-estimator-panel"
          >
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 bg-black/5 rounded-xl flex items-center justify-center">
                  <Calculator className="h-4.5 w-4.5 text-black" />
                </div>
                <div>
                  <h3 className="font-extrabold text-black tracking-tight text-sm sm:text-base font-sans">
                    Route & Spot Estimator
                  </h3>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    Live market average rates
                  </p>
                </div>
              </div>

              <hr className="border-gray-200" />

              <div className="space-y-4">
                {routeDistance ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-5"
                  >
                    {/* Distance Metric */}
                    <div className="p-4 bg-white rounded-2xl border border-gray-200/60 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Compass className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-xs text-gray-500 font-semibold font-sans">Estimated Distance</p>
                          <p className="text-[11px] text-gray-400">Zip-to-Zip highway miles</p>
                        </div>
                      </div>
                      <p className="text-lg font-extrabold text-black font-mono">
                        {routeDistance} <span className="text-xs font-semibold text-gray-400">mi</span>
                      </p>
                    </div>

                    {/* Spot Pricing Metric */}
                    <div className="p-5 bg-black text-white rounded-2xl flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <Landmark className="h-4.5 w-4.5 text-gray-400" />
                          <p className="text-xs text-gray-400 font-bold uppercase tracking-wider font-sans">Spot Rate Range</p>
                        </div>
                        <span className="text-[9px] font-extrabold bg-white/10 px-2 py-0.5 rounded-full text-white">
                          LIVE MARKET
                        </span>
                      </div>
                      
                      <div className="mt-4 flex items-baseline justify-between">
                        <p className="text-2xl sm:text-3xl font-extrabold tracking-tight font-mono">
                          ${Math.round(estimatedCost! * 0.93)} - ${Math.round(estimatedCost! * 1.07)}
                        </p>
                        <p className="text-xs text-gray-400 font-medium font-mono">
                          ~ ${(estimatedCost! / routeDistance!).toFixed(2)}/mi
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10 text-[10px] text-gray-400 leading-normal font-sans">
                        *Note: Computed price represents current truck capacity indexes and is subject to fuel adjustments and accessory fees.
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="py-12 text-center text-gray-400 space-y-3.5">
                    <HelpCircle className="h-10 w-10 text-gray-300 mx-auto" />
                    <div className="space-y-1">
                      <p className="text-sm font-extrabold text-black font-sans">Awaiting Lane Entry</p>
                      <p className="text-xs text-gray-500 max-w-[240px] mx-auto font-sans">
                        Type an <strong>Origin</strong> and <strong>Destination</strong> in the form to generate instant distance and pricing estimates.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* General Brokerage Info */}
              <div className="p-4 bg-white rounded-2xl border border-gray-200/60 text-xs text-gray-500 space-y-2">
                <p className="font-extrabold text-black font-sans">Why trust our dispatch pricing?</p>
                <p className="leading-relaxed font-sans">
                  We collect real-time data from DAT, Truckstop, and our proprietary carrier contracts to ensure that you secure highly accurate pricing matching current dispatch availability.
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
