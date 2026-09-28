import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const videos = [
  { id: '7kGVLuInZZs', title: 'Chilu | Nalekumfwafye. @ 2024 Forthright Music Fest', category: 'Music' },
  { id: 'w-IuMWguhS0', title: 'Fire Power Crusade | Third Night | Inkongole | Collins | The Machine', category: 'Crusade' },
  { id: 'YZYGkubCG2I', title: 'Ephraim (Son of Africa) ~ Mulifyonse', category: 'Music' },
  { id: 'EnQ6qQiqpb0', title: 'Kabwe Dijays Vs Artists Match', category: 'Sports' },
  { id: 'si1KFm23qZY', title: 'Dr. Nevers Mumba | SUNDAY SERVICE | THE SPIRIT OF THE EDGE', category: 'Church' },
];

export default function Media() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-brand-900">
        <div className="absolute inset-0 opacity-20">
          <img src="https://image.qwenlm.ai/generated-images/fa256584-0276-4f13-918d-9b04ebf94db5/_result.png" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-accent text-sm font-semibold tracking-[0.3em] uppercase mb-4">
              Media
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our YouTube Streams
            </motion.h1>
            <motion.p variants={fadeUp} className="text-brand-300 text-lg max-w-2xl leading-relaxed">
              See our professional work in action. Browse our latest live streams and event coverage on YouTube.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-24 lg:py-32 bg-brand-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Featured Video */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            className="mb-12"
          >
            <a
              href={`https://www.youtube.com/watch?v=${videos[0].id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${videos[0].id}/maxresdefault.jpg`}
                  alt={videos[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-brand-900/30 group-hover:bg-brand-900/50 transition-colors duration-500 flex items-center justify-center">
                <div className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play size={32} className="text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 bg-gradient-to-t from-brand-900/90 to-transparent">
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">{videos[0].category}</span>
                <h3 className="text-white text-xl lg:text-2xl font-display font-bold mt-2">{videos[0].title}</h3>
              </div>
            </a>
          </motion.div>

          {/* Other Videos */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {videos.slice(1).map((video) => (
              <motion.a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="group relative overflow-hidden bg-brand-900"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-brand-900/40 group-hover:bg-brand-900/60 transition-colors duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={20} className="text-white ml-0.5" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-900/90 to-transparent">
                  <span className="text-accent text-[10px] font-semibold tracking-wider uppercase">{video.category}</span>
                  <p className="text-white text-sm font-medium line-clamp-2 mt-1">{video.title}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* YouTube Channel Link */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-16"
          >
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-900 text-white font-semibold text-sm uppercase tracking-wider hover:bg-brand-800 transition-all duration-300 group"
            >
              Visit Our YouTube Channel
              <ExternalLink size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Reminder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'Live Streaming', desc: 'Professional live broadcast to YouTube and Facebook for your events.' },
              { title: 'Video Production', desc: 'Cinematic video coverage with multi-camera setups and professional editing.' },
              { title: 'Event Coverage', desc: 'Complete media coverage for any type of event, any size, anywhere in Zambia.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6"
              >
                <h3 className="font-display text-xl font-bold text-brand-900 mb-3">{item.title}</h3>
                <p className="text-brand-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
