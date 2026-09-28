import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    eventDate: '',
    eventLocation: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-brand-900">
        <div className="absolute inset-0 opacity-20">
          <img src="https://image.qwenlm.ai/generated-images/93b926de-13a1-432e-8939-dcaba71bf0c9/_result.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Contact Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeUp} className="text-brand-300 text-lg max-w-2xl leading-relaxed">
              Get in touch for inquiries, quotes, or to book our services.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 lg:py-32 bg-brand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="lg:col-span-4"
            >
              <motion.h2 variants={fadeUp} className="font-display text-2xl font-bold text-brand-900 mb-8">
                Contact Information
              </motion.h2>

              <div className="space-y-6">
                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-900 mb-1">Phone</h3>
                    <a href="tel:+260977601739" className="text-brand-500 hover:text-accent transition-colors duration-300">
                      (+260) 977 601 739
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-900 mb-1">Email</h3>
                    <a href="mailto:pillarofstonezambia@gmail.com" className="text-brand-500 hover:text-accent transition-colors duration-300">
                      pillarofstonezambia@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-900 mb-1">Location</h3>
                    <p className="text-brand-500">
                      Mphangwe Holdings Building,<br />
                      Plot 704 Freedom Way,<br />
                      Kabwe - Zambia
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Map placeholder */}
              <motion.div variants={fadeUp} className="mt-10 bg-brand-200 h-48 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} className="text-brand-400 mx-auto mb-2" />
                  <p className="text-brand-500 text-sm">Kabwe, Zambia</p>
                </div>
              </motion.div>

              {/* Working Hours */}
              <motion.div variants={fadeUp} className="mt-8 p-6 bg-white border border-brand-200">
                <h3 className="font-semibold text-brand-900 mb-3">Working Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-brand-500">Monday - Friday</span>
                    <span className="text-brand-900 font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-500">Saturday</span>
                    <span className="text-brand-900 font-medium">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-brand-500">Sunday</span>
                    <span className="text-brand-900 font-medium">By Appointment</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="lg:col-span-8"
            >
              <div className="bg-white p-8 lg:p-12 border border-brand-200">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-brand-900 mb-3">Thank You!</h3>
                    <p className="text-brand-500 mb-6">Your inquiry has been submitted successfully. We'll get back to you shortly.</p>
                    <button
                      onClick={() => { setIsSubmitted(false); setFormData({ fullName: '', phone: '', email: '', service: '', eventDate: '', eventLocation: '', message: '' }); }}
                      className="text-accent font-semibold text-sm uppercase tracking-wider border-b-2 border-accent pb-1 hover:text-accent-dark transition-colors duration-300"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2 className="font-display text-2xl font-bold text-brand-900 mb-8">Send Us an Inquiry</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-brand-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-400' : 'border-brand-200'} bg-brand-50 text-brand-900 focus:outline-none focus:border-accent transition-colors duration-300`}
                          placeholder="Your full name"
                        />
                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-400' : 'border-brand-200'} bg-brand-50 text-brand-900 focus:outline-none focus:border-accent transition-colors duration-300`}
                          placeholder="Your phone number"
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-brand-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${errors.email ? 'border-red-400' : 'border-brand-200'} bg-brand-50 text-brand-900 focus:outline-none focus:border-accent transition-colors duration-300`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-700 mb-2">Service Required *</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border ${errors.service ? 'border-red-400' : 'border-brand-200'} bg-brand-50 text-brand-900 focus:outline-none focus:border-accent transition-colors duration-300`}
                        >
                          <option value="">Select a service</option>
                          <option value="videography">Videography</option>
                          <option value="photography">Photography</option>
                          <option value="livestreaming">Livestreaming</option>
                          <option value="sound-systems">Sound Systems</option>
                          <option value="printing">Printing Services</option>
                          <option value="event-coverage">Full Event Coverage</option>
                        </select>
                        {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-brand-700 mb-2">Event Date</label>
                        <input
                          type="date"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-brand-200 bg-brand-50 text-brand-900 focus:outline-none focus:border-accent transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-brand-700 mb-2">Event Location</label>
                        <input
                          type="text"
                          name="eventLocation"
                          value={formData.eventLocation}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-brand-200 bg-brand-50 text-brand-900 focus:outline-none focus:border-accent transition-colors duration-300"
                          placeholder="Event venue or city"
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className="block text-sm font-medium text-brand-700 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-3 border ${errors.message ? 'border-red-400' : 'border-brand-200'} bg-brand-50 text-brand-900 focus:outline-none focus:border-accent transition-colors duration-300 resize-none`}
                        placeholder="Tell us about your event and requirements..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-semibold text-sm uppercase tracking-wider hover:bg-accent-dark transition-all duration-300 group"
                    >
                      <Send size={16} />
                      Send Inquiry
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
