import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaMapMarkerAlt, FaCodeBranch, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import HexImage from './HexImage';

/**
 * About Me Section
 * ================
 * Background: bgAlt (#323946)
 * Layout: Hexagon photo left, bio and goals right, interactive "Read More" expansion.
 */
const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-28 bg-bgAlt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hexagon Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1"
          >
            {/* TODO: You can pass a different photo here if desired, or keep default */}
            <HexImage alt="Ajith P C - About Me Portrait" />
          </motion.div>

          {/* Right Column: Bio Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 text-center lg:text-left order-1 lg:order-2 flex flex-col items-center lg:items-start"
          >
            {/* Section Tag */}
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-accent uppercase mb-2">
              Get To Know Me
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text mb-4">
              About <span className="text-accent text-glow">Me</span>
            </h2>

            {/* Sub-headline */}
            <h3 className="text-lg sm:text-xl font-semibold text-accent/90 mb-5">
              First-Year B.Tech CSE (Artificial Intelligence) Student
            </h3>

            {/* Core Paragraphs */}
            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              <p>
                Hi there! I'm <strong className="text-text font-semibold">Ajith P C</strong>, a
                first-year undergraduate student studying Computer Science and Engineering with a
                specialization in Artificial Intelligence at{' '}
                <span className="text-accent font-medium">Thejus Engineering College, Thrissur, Kerala</span>.
              </p>
              <p>
                My journey into tech began with genuine curiosity about how software solves everyday
                challenges and how machines can learn from patterns. Right now, I'm strengthening my
                fundamentals in C and Python, while diving deep into modern web development with React
                and Tailwind CSS.
              </p>
            </div>

            {/* Quick Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 w-full max-w-xl text-left">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-bg/60 border border-gray-700/60">
                <FaGraduationCap className="text-accent text-xl shrink-0" />
                <div>
                  <p className="text-xs text-gray-400">Degree & Stream</p>
                  <p className="text-sm font-medium text-text">B.Tech CSE (AI)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl bg-bg/60 border border-gray-700/60">
                <FaMapMarkerAlt className="text-accent text-xl shrink-0" />
                <div>
                  <p className="text-xs text-gray-400">Campus & Location</p>
                  <p className="text-sm font-medium text-text">Thejus EC, Thrissur</p>
                </div>
              </div>
            </div>

            {/* Interactive Expandable Bio Section */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-6 bg-bg/40 p-5 rounded-2xl border border-gray-700/60 text-left"
                >
                  <h4 className="text-base font-semibold text-accent flex items-center gap-2">
                    <FaCodeBranch /> What I'm Aiming to Achieve:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 pl-1 text-sm text-gray-300">
                    <li>Build a rock-solid base in Data Structures, Algorithms, and Object-Oriented Programming.</li>
                    <li>Master modern full-stack web technologies to convert ideas into clean, functional tools.</li>
                    <li>Gain hands-on expertise in Machine Learning, predictive models, and Computer Vision.</li>
                    <li>Collaborate with fellow students on open-source repositories and hackathon builds.</li>
                  </ul>
                  <p className="text-xs text-gray-400 italic pt-1">
                    "I believe great things are built step-by-step through consistent curiosity, writing code, and learning from mistakes."
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pill "Read More" Button */}
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full bg-accent text-bg font-semibold text-sm sm:text-base tracking-wide shadow-[0_0_15px_#00eeff] hover:shadow-[0_0_25px_#00eeff] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <span>{expanded ? 'Show Less' : 'Read More'}</span>
              {expanded ? <FaChevronUp className="w-3.5 h-3.5" /> : <FaChevronDown className="w-3.5 h-3.5" />}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

