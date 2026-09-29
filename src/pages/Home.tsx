import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, ArrowRight, CheckCircle } from 'lucide-react';
import { images } from '../constants/images';
import sound from '../../public/images/spund.png';
import crusade from '../../public/images/1.jpg';
import linus from '../../public/images/PILLAR.jpg';
import TypingEffect from '../components/TypingEffect';

const heroImages = [crusade, images.hero2, images.hero3, sound];
// images.hero1

const slides = [
  {
    eyebrow: 'PILLAR OF STONE',
    country: 'ZAMBIA',
    heading: 'YOUR EVENT MEDIA PARTNER',
    subheading: 'LIVESTREAMING | RECORDING | CRUSADES | CORPORATE EVENTS | POLITICAL PARTY RALLIES | WEDDINGS',
    description: 'From live broadcasts to lasting memories, we are your media partner. We professionally cover all events—corporate, political, religious, and personal—with photography, videography, and livestreaming.',
    cta: 'Book Now',
    ctaLink: '/contact',
  },
  {
    eyebrow: 'PILLAR OF STONE',
    country: 'ZAMBIA',
    heading: 'PRINTING SERVICES',
    subheading: 'QUALITY PRINTING SOLUTIONS',
    description: 'Complete printing services from banners to business cards and promotional materials.',
    cta: 'Get Quote',
    ctaLink: '/contact',
  },
  {
    eyebrow: 'PILLAR OF STONE',
    country: 'ZAMBIA',
    heading: 'FULL EVENT COVERAGE',
    subheading: 'CAPTURING YOUR PERFECT DAY',
    description: 'Complete wedding media coverage with professional videography and photography.',
    cta: 'View Portfolio',
    ctaLink: '/portfolio',
  },
  {
    eyebrow: 'PILLAR OF STONE',
    country: 'ZAMBIA',
    heading: 'FULL SOUND SYSTEM',
    subheading: 'FRONT HOUSE + MONITORS + BACKLINE FOR LIVE EVENTS',
    description: 'We bring the gear so you can bring the show. From our full sound system and digital mixer to drums, guitars, keyboards, microphones, stage monitors and projection equipment, we provide an all-in-one production solution for live events.',
    cta: 'Learn More',
    ctaLink: '/services',
  },
];

const videos = [
  { id: '7kGVLuInZZs', title: 'Chilu | Nalekumfwafye. @ 2024 Forthright Music Fest' },
  { id: 'w-IuMWguhS0', title: 'Fire Power Crusade | Third Night | Inkongole | Collins | The Machine' },
  { id: 'YZYGkubCG2I', title: 'Ephraim (Son of Africa) ~ Mulifyonse' },
  { id: 'EnQ6qQiqpb0', title: 'Kabwe Dijays Vs Artists Match' },
  { id: 'si1KFm23qZY', title: 'Dr. Nevers Mumba | SUNDAY SERVICE | THE SPIRIT OF THE EDGE' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div>
      {/* HERO CAROUSEL */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover scale-105"
              style={{
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 8s ease-out',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-brand-900/50" />
          </div>
        ))}

        {/* Content */}
        <div className="relative h-full flex items-center justify-center px-4 sm:px-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-4xl mx-auto px-2 sm:px-0"
            >
              <motion.h1 variants={fadeUp} className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white leading-[1.1] mb-3 sm:mb-4">
                {slides[currentSlide].heading}
              </motion.h1>
              {slides[currentSlide].subheading && (
                <motion.p variants={fadeUp} className="text-accent-white text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wider uppercase mb-3 sm:mb-4 drop-shadow-lg text-stroke-white">
                  <TypingEffect text={slides[currentSlide].subheading} speed={30} />
                </motion.p>
              )}
              <motion.p variants={fadeUp} className="text-brand-300 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                {slides[currentSlide].description}
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link
                  to={slides[currentSlide].ctaLink}
                  className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-4 bg-accent text-white font-semibold text-sm sm:text-base uppercase tracking-wider hover:bg-accent-dark transition-all duration-300 group min-w-[160px] justify-center"
                >
                  {slides[currentSlide].cta}
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Slide Controls */}
        <div className="absolute bottom-4 sm:bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            {/* Slide Counter */}
            <div className="flex items-center gap-2 sm:gap-4">
              <span className="text-white text-xl sm:text-2xl font-bold font-display">
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <div className="w-8 sm:w-12 h-[1px] bg-white/30" />
              <span className="text-white/50 text-xs sm:text-sm">
                {String(slides.length).padStart(2, '0')}
              </span>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3 sm:gap-3">
              <button
                onClick={prevSlide}
                className="w-12 h-12 sm:w-12 sm:h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-brand-900 transition-all duration-300 touch-manipulation"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 sm:w-12 sm:h-12 border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-brand-900 transition-all duration-300 touch-manipulation"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div
            className="h-full bg-accent transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-12 sm:py-16 lg:py-32 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-accent text-base font-semibold tracking-[0.2em] uppercase mb-4">
                About Us
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 leading-tight mb-4 sm:mb-6">
                Pillar of Stone Zambia
              </motion.h2>
              <motion.p variants={fadeUp} className="text-brand-600 text-lg sm:text-xl leading-relaxed mb-4 sm:mb-6">
                is a premier multimedia and printing company dedicated to delivering exceptional event coverage and high quality printing solutions.We specialize in providing professional media coverage and printing services for a wide variety of events across Zambia.<br />
                <br />
                As your trusted event partner, we offer comprehensive media coverage including videography, photography and sound system rentals for churches, rallies, weddings, kitchen parties, graduations, Chilanga Mulilo, birthdays, fashion shoots, engagements, anniversaries, studios and corporate events.
              </motion.p>
             
              <motion.div variants={fadeUp}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-brand-900 font-semibold text-sm uppercase tracking-wider border-b-2 border-accent pb-1 hover:text-accent transition-colors duration-300"
                >
                  Learn More About Us
                  <ArrowRight size={14} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={fadeUp}
              className="relative"
            >
              <div className="relative">
                {/* <img
src={images.hero3}
                alt="Professional event coverage by Pillar of Stone Zambia"                  className="w-full h-[400px] lg:h-[500px] object-cover"
                /> */}

                <img src={linus} alt="pillar" className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[700px] object-cover" />
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-brand-900 text-white p-4 sm:p-6 lg:p-8">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-accent">10+</div>
                  <div className="text-xs sm:text-sm text-brand-300 mt-1">Years</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-12 sm:py-16 lg:py-32 bg-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-accent text-base font-semibold tracking-[0.2em] uppercase mb-4">
              What We Do
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Our Services
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-700">
            {[
              { num: '01', title: 'Media Coverage', desc: 'Professional video coverage for weddings, church services, corporate events, rallies and more, with livestreaming capabilities.', img: images.hero1 },
              { num: '02', title: 'Photography', desc: 'Capturing important moments with professional photography services for events, portraits, fashion shoots and more.', img: images.hero3 },
              { num: '03', title: 'Sound Systems', desc: 'Complete sound system rentals including speakers, microphones, mixers and professional audio technicians for events.', img: images.hero4 },
              { num: '04', title: 'Printing Services', desc: 'High-quality printing including banners, business cards, flyers, certificates, T-shirts and promotional materials.', img: images.hero2 },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="group relative bg-brand-800 p-6 sm:p-8 lg:p-12 hover:bg-brand-700 transition-colors duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <img src={service.img} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10">
                  <span className="text-accent text-base font-bold tracking-wider">{service.num}</span>
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3 mb-4">{service.title}</h3>
                  <p className="text-brand-400 text-base sm:text-lg leading-relaxed mb-6">{service.desc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-accent text-base font-semibold uppercase tracking-wider group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-12 sm:py-16 lg:py-32 bg-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="lg:col-span-5"
            >
              <motion.p variants={fadeUp} className="text-accent text-base font-semibold tracking-[0.2em] uppercase mb-4">
                Our Standards
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 leading-tight mb-6">
                Why Choose Pillar of Stone Zambia?
              </motion.h2>
              <motion.p variants={fadeUp} className="text-brand-500 leading-relaxed">
                We don't just cover events. Our team brings years of experience, professional-grade equipment and an unwavering commitment to excellence to every project.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="lg:col-span-7 space-y-8"
            >
              {[
                { title: 'Professional Quality', desc: 'Industry-leading standards in every service we provide. From 4K video production to large-format printing, we deliver results that exceed expectations.' },
                { title: 'Timely Delivery', desc: ' We understand that deadlines matter and we consistently meet them without compromising quality.' },
                { title: 'Reliable Support', desc: 'Dedicated customer support throughout your project. From initial consultation to final delivery, our team is with you every step of the way.' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex gap-6 group"
                >
                  <div className="shrink-0 w-12 h-12 bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <CheckCircle size={20} className="text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-900 mb-2">{feature.title}</h3>
                    <p className="text-brand-500 text-base sm:text-lg leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* YOUTUBE / MEDIA SECTION */}
      <section className="py-12 sm:py-16 lg:py-32 bg-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-accent text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Our Work
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 leading-tight mb-4">
              A Preview of Some of Our YouTube Streams
            </motion.h2>
            <motion.p variants={fadeUp} className="text-brand-500 text-lg sm:text-xl">
              See our professional work in action.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {videos.slice(0, 3).map((video, index) => (
              <motion.a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
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
                  <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-brand-900/90 to-transparent">
                  <p className="text-white text-sm font-medium line-clamp-2">{video.title}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              to="/media"
              className="inline-flex items-center gap-2 text-brand-900 font-semibold text-sm uppercase tracking-wider border-b-2 border-accent pb-1 hover:text-accent transition-colors duration-300"
            >
              View All Media <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO PREVIEW */}
      <section className="py-12 sm:py-16 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-accent text-base font-semibold tracking-[0.2em] uppercase mb-4">
              Portfolio
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-900 leading-tight mb-4">
              Our Portfolio
            </motion.h2>
            <motion.p variants={fadeUp} className="text-brand-500 text-lg sm:text-xl">
              Visual proof of our exceptional work and satisfied clients.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {[
              { title: 'Wedding Coverage', category: 'Weddings', img: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
              { title: 'Corporate Event', category: 'Corporate', img: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
              { title: 'Church Service', category: 'Religious', img: 'https://pillarofstonezm.netlify.app/images/MEDIa.jpg' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                className="group relative overflow-hidden cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/70 transition-all duration-500 flex items-end">
                  <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-accent text-xs font-semibold tracking-wider uppercase">{item.category}</span>
                    <h3 className="text-white text-xl font-display font-bold mt-1">{item.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mt-12"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-brand-900 font-semibold text-sm uppercase tracking-wider border-b-2 border-accent pb-1 hover:text-accent transition-colors duration-300"
            >
              View Full Portfolio <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-12 sm:py-16 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.hero1} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-900/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
              Planning an Event?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-brand-300 text-lg sm:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
              Let us help you make it unforgettable with our professional media coverage and printing services.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-4 bg-accent text-white font-semibold text-sm sm:text-base uppercase tracking-wider hover:bg-accent-dark transition-all duration-300 group w-full sm:w-auto justify-center min-w-[160px] touch-manipulation"
              >
                Contact Us Now
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-4 sm:py-4 border-2 border-white text-white font-semibold text-sm sm:text-base uppercase tracking-wider hover:bg-white hover:text-brand-900 transition-all duration-300 w-full sm:w-auto justify-center min-w-[160px] touch-manipulation"
              >
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
