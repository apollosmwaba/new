import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const categories = ['All', 'Weddings', 'Corporate', 'Church Services', 'Live Events', 'Photography', 'Printing'];

const portfolioItems = [
  { title: 'Wedding Coverage', category: 'Weddings', description: 'Complete wedding media coverage with professional videography and photography.', image: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
  { title: 'Corporate Conference', category: 'Corporate', description: 'Full event coverage for corporate conferences and business events.', image: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
  { title: 'Sunday Service', category: 'Church Services', description: 'High-quality audio and video production for religious events.', image: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
  { title: 'Music Festival', category: 'Live Events', description: 'Multi-camera live production for music festivals and concerts.', image: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
  { title: 'Fashion Editorial', category: 'Photography', description: 'Professional fashion photography and editorial shoots.', image: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
  { title: 'Event Banners', category: 'Printing', description: 'Large format banners and promotional materials for events.', image: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
  { title: 'Political Rally', category: 'Live Events', description: 'Complete media coverage for political party rallies and campaigns.', image: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
  { title: 'Graduation Ceremony', category: 'Corporate', description: 'Professional coverage of academic graduation ceremonies.', image: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
  { title: 'Portrait Session', category: 'Photography', description: 'Professional portrait photography for individuals and families.', image: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-brand-900">
        <div className="absolute inset-0 opacity-20">
          <img src="https://image.qwenlm.ai/generated-images/f56e9f72-770f-45e0-ad38-6366ad2bb59b/_result.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Portfolio
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Portfolio
            </motion.h1>
            <motion.p variants={fadeUp} className="text-brand-300 text-lg max-w-2xl leading-relaxed">
              Visual proof of our exceptional work and satisfied clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24 lg:py-32 bg-brand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-900 text-white'
                    : 'bg-white text-brand-600 hover:bg-brand-100 border border-brand-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="group relative overflow-hidden cursor-pointer bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/70 transition-all duration-500 flex items-end">
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-accent text-xs font-semibold tracking-wider uppercase">{item.category}</span>
                    <h3 className="text-white text-xl font-display font-bold mt-1 mb-2">{item.title}</h3>
                    <p className="text-brand-300 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Want to Be Our Next Success Story?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-brand-400 text-lg mb-8 max-w-xl mx-auto">
              Let us capture your next event with the same professionalism and creativity.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white font-semibold text-sm uppercase tracking-wider hover:bg-accent-dark transition-all duration-300 group"
              >
                Book Our Services
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
