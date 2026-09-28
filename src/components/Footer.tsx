import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg font-display">P</span>
              </div>
              <div>
                <span className="text-white font-semibold text-sm tracking-wide uppercase block">Pillar of Stone</span>
                <span className="text-accent text-xs tracking-widest uppercase">Zambia</span>
              </div>
            </div>
            <p className="text-brand-400 text-sm leading-relaxed">
              Professional event media coverage and printing services delivering exceptional quality and customer satisfaction across Zambia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About Us', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'Media', path: '/media' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-brand-400 text-sm hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Our Services</h4>
            <ul className="space-y-3">
              {['Videography', 'Photography', 'Sound Systems', 'Printing Services', 'Event Coverage'].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-brand-400 text-sm hover:text-accent transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-0.5 shrink-0" />
                <a href="tel:+260977601739" className="text-brand-400 text-sm hover:text-accent transition-colors duration-300">
                  (+260) 977 601 739
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-0.5 shrink-0" />
                <a href="mailto:pillarofstonezambia@gmail.com" className="text-brand-400 text-sm hover:text-accent transition-colors duration-300">
                  pillarofstonezambia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                <span className="text-brand-400 text-sm">
                  Mphangwe Holdings Building, Plot 704 Freedom Way, Kabwe - Zambia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-700 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-brand-500 text-sm">
            © 2026 Pillar of Stone Zambia. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-accent transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-brand-500 hover:text-accent transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
