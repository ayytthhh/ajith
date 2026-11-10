import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Add subtle background shadow and blur when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-gray-800/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Main Navigation">
          {/* Logo */}
          <ScrollLink
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="cursor-pointer group select-none text-2xl sm:text-3xl font-bold tracking-tight text-text focus:outline-none"
            aria-label="Portfolio Home"
          >
            Portfolio
            <span className="text-accent transition-transform duration-300 inline-block group-hover:scale-125">
              .
            </span>
          </ScrollLink>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navItems.map((item) => (
              <li key={item.to}>
                <ScrollLink
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onSetActive={() => setActiveSection(item.to)}
                  className={`cursor-pointer font-medium text-sm lg:text-base tracking-wide transition-all duration-200 hover:text-accent relative py-1 focus:outline-none ${
                    activeSection === item.to
                      ? 'text-accent'
                      : 'text-text/90'
                  }`}
                >
                  {item.label}
                  {activeSection === item.to && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full shadow-[0_0_8px_#00eeff]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </ScrollLink>
              </li>
            ))}
          </ul>

          {/* Desktop Direct Contact CTA */}
          <div className="hidden md:block">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="cursor-pointer text-xs font-semibold px-4 py-2 rounded-full border border-accent/60 text-accent hover:bg-accent hover:text-bg hover:shadow-[0_0_15px_#00eeff] transition-all duration-300 focus:outline-none"
            >
              Get In Touch
            </ScrollLink>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg text-text hover:text-accent hover:bg-bgAlt/50 focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <HiX className="w-7 h-7 text-accent" />
            ) : (
              <HiMenuAlt3 className="w-7 h-7 text-text" />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden bg-bgAlt/98 backdrop-blur-xl border-b border-gray-700/80 px-6 pt-4 pb-8 shadow-2xl"
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <ScrollLink
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={closeMobileMenu}
                    onSetActive={() => setActiveSection(item.to)}
                    className={`block py-2 text-lg font-medium transition-colors cursor-pointer ${
                      activeSection === item.to
                        ? 'text-accent font-semibold pl-2 border-l-2 border-accent'
                        : 'text-text/80 hover:text-accent'
                    }`}
                  >
                    {item.label}
                  </ScrollLink>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-2"
              >
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={closeMobileMenu}
                  className="block text-center w-full py-2.5 rounded-full bg-accent text-bg font-semibold shadow-[0_0_12px_#00eeff] cursor-pointer"
                >
                  Contact Me
                </ScrollLink>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

