import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaDownload } from 'react-icons/fa';
import HexImage from './HexImage';
import { socials } from '../data/socials';

/**
 * Hero Section
 * ============
 * Matches the reference layout:
 * - Left: "Hello, It's Me" -> "Ajith P C" -> Typing role in cyan -> intro -> socials -> Pill CV button
 * - Right: Hexagon portrait frame with neon cyan glow
 */
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-0 bg-bg overflow-hidden"
    >
      {/* Background subtle radial ambient light */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & Call-to-actions */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-medium text-text/90 mb-2">
              Hello, It's Me
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text mb-3 sm:mb-4">
              Ajith P C
            </h1>

            {/* Dynamic typing tagline */}
            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-text mb-6 min-h-[44px]">
              <span>And I'm a </span>
              <TypeAnimation
                sequence={[
                  'CSE AI Student',
                  2200,
                  'Web Developer',
                  2200,
                  'Future ML Engineer',
                  2200,
                  'Problem Solver',
                  2200,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent text-glow font-bold"
              />
            </div>

            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-8">
              First-year B.Tech CSE (Artificial Intelligence) student at{' '}
              <span className="text-white font-medium">Thejus Engineering College, Thrissur</span>.
              Curious, driven, and excited about building intelligent web apps, mastering data structures,
              and exploring the frontiers of Machine Learning.
            </p>

            {/* Social Media Link Icons */}
            <div className="flex items-center gap-3 sm:gap-4 mb-9">
              {socials.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.ariaLabel}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-accent/70 text-accent flex items-center justify-center hover:bg-accent hover:text-bg hover:shadow-[0_0_18px_#00eeff] hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                );
              })}
            </div>

            {/* Pill CTA: Download CV */}
            <div>
              {/* TODO: Put your resume file named 'cv.pdf' in the public/ folder */}
              <a
                href="/cv.pdf"
                download="Ajith_PC_Resume.pdf"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-accent text-bg font-semibold text-sm sm:text-base tracking-wide shadow-[0_0_15px_#00eeff] hover:shadow-[0_0_25px_#00eeff] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg"
              >
                <FaDownload className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Hexagon Profile Picture Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            {/* Hexagon image component */}
            <HexImage alt="Ajith P C - First-year CSE AI Student" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

