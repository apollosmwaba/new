import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../public/images/assets/logo.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Media', path: '/media' },
  { label: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';
  const headerBg = isScrolled || !isHome
    ? 'bg-brand-900/95 backdrop-blur-md'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <img src={logo} alt="Pillar of Stone Logo" className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-105" />
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-xs sm:text-sm tracking-wide uppercase">Pillar of Stone</span>
              <span className="block text-accent text-[10px] sm:text-xs tracking-widest uppercase">Zambia</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300 ${
                  location.pathname === link.path
                    ? 'text-white after:w-full'
                    : 'text-brand-300 hover:text-white after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 bg-accent text-white text-xs sm:text-sm font-semibold tracking-wide uppercase hover:bg-accent-dark transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 sm:p-3"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 w-72 sm:w-80 bg-black shadow-2xl transition-transform duration-300 ease-in-out z-50 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-16 sm:pt-20 px-6">
          {/* Close Button */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-brand-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3 mt-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl sm:text-2xl font-semibold py-4 px-5 rounded-lg border border-gray-800 transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'bg-accent border-accent text-white'
                    : 'bg-gray-900/50 text-white hover:bg-gray-800 hover:border-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="mt-auto mb-8">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center px-6 py-3 bg-accent text-white font-semibold tracking-wide uppercase hover:bg-accent-dark transition-colors duration-300 rounded-lg"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
