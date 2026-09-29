import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Video, Camera, Volume2, Printer } from 'lucide-react';
import { images } from '../constants/images';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const services = [
  {
    num: '01',
    icon: Video,
    title: 'Media Coverage',
    subtitle: 'Videography & Livestreaming',
    description: 'Professional video coverage for weddings, church services, corporate events, rallies and more, with livestreaming capabilities.',
    features: [
      'Multi-camera video production',
      'Live streaming to YouTube & Facebook',
      'Event highlight reels',
      'Full-length event recordings',
      'Drone aerial footage',
      'Post-production editing',
    ],
    image: images.hero1,
  },
  {
    num: '02',
    icon: Camera,
    title: 'Photography',
    subtitle: 'Professional Photo Services',
    description: 'Capturing important moments with professional photography services for events, portraits, fashion shoots and more.',
    features: [
      'Event photography',
      'Portrait & headshot sessions',
      'Fashion & editorial shoots',
      'Product photography',
      'Photo editing & retouching',
      'Digital & print delivery',
    ],
    image: images.hero3,
  },
  {
    num: '03',
    icon: Volume2,
    title: 'Sound Systems',
    subtitle: 'Professional Audio Solutions',
    description: 'Complete sound system rentals including speakers, microphones, mixers and professional audio technicians for events.',
    features: [
      'Line array speaker systems',
      'Digital mixing consoles',
      'Wireless microphone systems',
      'Stage monitors',
      'Backline equipment (drums, guitars, keyboards)',
      'Professional audio technicians',
    ],
    image: images.hero4,
  },
  {
    num: '04',
    icon: Printer,
    title: 'Printing Services',
    subtitle: 'Quality Print Solutions',
    description: 'High-quality printing including banners, business cards, flyers, certificates, T-shirts and promotional materials in different formats.',
    features: [
      'Large format banners & posters',
      'Business cards & letterheads',
      'Flyers & brochures',
      'Certificates & awards',
      'T-shirt printing',
      'Promotional materials',
    ],
    image: images.hero2,
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:pt-40 lg:pb-32 bg-brand-900">
        <div className="absolute inset-0 opacity-20">
          <img src={images.hero4} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-accent text-xs sm:text-sm font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4">
              Our Services
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Professional Solutions<br />for Every Event
            </motion.h1>
            <motion.p variants={fadeUp} className="text-brand-300 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
              From media production to printing, we offer comprehensive services designed to make your event a success.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 sm:py-20 lg:py-32 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={stagger}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <motion.div variants={fadeUp} className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div
                    className="relative overflow-hidden group"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onTouchStart={() => setHoveredIndex(index)}
                    onTouchEnd={() => setHoveredIndex(null)}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[250px] sm:h-[300px] lg:h-[400px] object-cover"
                    />
                    <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-accent text-white px-3 sm:px-4 py-2">
                      <span className="text-xs sm:text-sm font-bold tracking-wider">{service.num}</span>
                    </div>
                    {/* Overlay with description on hover/tap */}
                    <div className={`absolute inset-0 bg-brand-900/90 transition-opacity duration-300 flex items-center justify-center p-6 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <p className="text-white text-sm sm:text-base text-center leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 flex items-center justify-center">
                      <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <span className="text-accent text-xs sm:text-sm font-semibold tracking-wider uppercase">{service.subtitle}</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-brand-900 mb-3 sm:mb-4">{service.title}</h2>
                  <p className="text-brand-500 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-brand-600">
                        <div className="w-2 h-2 bg-accent rounded-full shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-brand-900 font-semibold text-xs sm:text-sm uppercase tracking-wider border-b-2 border-accent pb-1 hover:text-accent transition-colors duration-300"
                  >
                    Learn More <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              How We Work
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-white">
              Our Process
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We discuss your event needs and goals to understand exactly what you require.' },
              { step: '02', title: 'Planning', desc: 'Our team creates a detailed production plan tailored to your event.' },
              { step: '03', title: 'Execution', desc: 'We deliver professional services on the day with precision and care.' },
              { step: '04', title: 'Delivery', desc: 'Receive your finished products on time, exceeding your expectations.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center relative"
              >
                <div className="text-4xl sm:text-5xl font-bold font-display text-brand-700 mb-3 sm:mb-4">{item.step}</div>
                <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-brand-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[1px] bg-brand-700" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Need Our Services?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto px-2">
              Get in touch for a free consultation and quote for your next event.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-brand-900 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-800 transition-all duration-300 group"
              >
                Request a Quote
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
