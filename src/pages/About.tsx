import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart } from 'lucide-react';
import { images } from '../constants/images';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-brand-900">
        <div className="absolute inset-0 opacity-20">
          <img src={images.hero1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              About Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Built to Capture.<br />Created to Deliver.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-brand-300 text-lg max-w-2xl leading-relaxed">
              Pillar of Stone Zambia is a premier multimedia and printing company dedicated to delivering exceptional event coverage and high-quality printing solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 bg-brand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-brand-900 leading-tight mb-6">
                Who We Are
              </motion.h2>
              <motion.p variants={fadeUp} className="text-brand-600 text-lg leading-relaxed mb-6">
                Based in Kabwe, Zambia, Pillar of Stone Zambia has established itself as a trusted name in professional media production and printing services. We serve a diverse clientele including churches, corporate organizations, political parties, and individuals celebrating life's important moments.
              </motion.p>
              <motion.p variants={fadeUp} className="text-brand-500 leading-relaxed mb-6">
                Our team combines technical expertise with creative vision to deliver results that exceed expectations. Whether it's a live broadcast reaching thousands, a wedding captured in cinematic detail, or a large-format banner printed with precision — we approach every project with the same dedication to excellence.
              </motion.p>
              <motion.p variants={fadeUp} className="text-brand-500 leading-relaxed">
                We believe that every event tells a story, and every story deserves to be told with professionalism, creativity, and care. That's the Pillar of Stone promise.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="relative"
            >
              <img
                src={images.hero3}
                alt="Pillar of Stone Zambia team at work"
                className="w-full h-[400px] lg:h-[550px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 lg:p-8">
                <div className="text-3xl lg:text-4xl font-bold font-display">5+</div>
                <div className="text-sm mt-1">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Our Foundation
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-brand-900">
              What Drives Us
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Our Mission',
                desc: 'To provide world-class multimedia and printing services that empower our clients to communicate their message effectively and memorably.',
              },
              {
                icon: Eye,
                title: 'Our Vision',
                desc: 'To be Zambia\'s most trusted and innovative media production company, setting the standard for quality and professionalism in the industry.',
              },
              {
                icon: Heart,
                title: 'Our Values',
                desc: 'Excellence, integrity, reliability, and creativity guide everything we do. We treat every project as if it were our own important event.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="text-center p-8 border border-brand-200 hover:border-accent transition-colors duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-6 bg-accent/10 flex items-center justify-center">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-900 mb-4">{item.title}</h3>
                <p className="text-brand-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-brand-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Events Covered' },
              { number: '200+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '10+', label: 'Team Members' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold font-display text-accent mb-2">{stat.number}</div>
                <div className="text-brand-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 lg:py-32 bg-brand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
            >
              <img
                src={images.hero4}
                alt="Sound system setup for live events"
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-accent text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                Events We Cover
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-brand-900 leading-tight mb-6">
                Serving All of Zambia
              </motion.h2>
              <motion.p variants={fadeUp} className="text-brand-500 leading-relaxed mb-8">
                From Kabwe to Lusaka and beyond, we bring our professional services to events across the country.
              </motion.p>
              <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
                {[
                  'Churches', 'Crusades', 'Corporate Events', 'Political Rallies',
                  'Weddings', 'Kitchen Parties', 'Graduations', 'Birthdays',
                  'Fashion Shoots', 'Engagements', 'Anniversaries', 'Conferences',
                ].map((event) => (
                  <div key={event} className="flex items-center gap-2 text-brand-600 text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {event}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss how we can help make your next event unforgettable.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-900 text-white font-semibold text-sm uppercase tracking-wider hover:bg-brand-800 transition-all duration-300 group"
              >
                Get in Touch
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
