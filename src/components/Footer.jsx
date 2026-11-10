import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaArrowUp } from 'react-icons/fa';
import { socials } from '../data/socials';

/**
 * Footer Component
 * ================
 * Background: bgAlt (#323946)
 * Text: "Copyright © 2026 Ajith P C | All Rights Reserved"
 * Includes social links and a smooth scroll-to-top button matching the screenshot.
 */
const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <footer className="bg-bgAlt py-8 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Copyright Notice */}
        <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
          Copyright &copy; 2026 <span className="text-text font-medium">Ajith P C</span> | All Rights Reserved
        </p>

        {/* Center: Quick Social Icons */}
        <div className="flex items-center gap-3">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.ariaLabel}
                className="w-8 h-8 rounded-full bg-bg border border-gray-700 text-gray-300 flex items-center justify-center hover:text-accent hover:border-accent hover:shadow-[0_0_10px_#00eeff] transition-all text-xs"
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Right: Scroll to top footer trigger matching the design */}
        <div>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="w-9 h-9 rounded-lg bg-accent text-bg flex items-center justify-center shadow-[0_0_10px_#00eeff] hover:shadow-[0_0_18px_#00eeff] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <FaArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

