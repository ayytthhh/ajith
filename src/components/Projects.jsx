import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import { projects } from '../data/projects';

/**
 * Projects Section / Latest Projects
 * ==================================
 * Background: bgAlt (#323946)
 * Displays a 6-project responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
 * sourced from src/data/projects.js.
 * Features hover overlay, tech badges, and direct links to Demo & GitHub.
 */
const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 sm:py-28 bg-bgAlt relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Latest"
          highlight="Projects"
          subtitle="Explore recent academic explorations, software experiments, and web tools I've built."
        />

        {/* 1/2/3 Columns Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group relative bg-bg rounded-2xl overflow-hidden border border-gray-700/60 hover:border-accent/80 hover:shadow-[0_0_25px_rgba(0,238,255,0.22)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-bgAlt/50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Subtle dark gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-60"
                  aria-hidden="true"
                />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-bg/90 text-accent border border-accent/30 backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Desktop Hover Quick Action Overlay */}
                <div className="absolute inset-0 bg-bg/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h4 className="text-lg font-bold text-text mb-2">{project.title}</h4>
                  <p className="text-xs text-gray-300 line-clamp-3 mb-5 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="px-4 py-1.5 rounded-full bg-accent text-bg font-semibold text-xs flex items-center gap-1.5 shadow-[0_0_10px_#00eeff] hover:scale-105 transition-transform"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code of ${project.title} on GitHub`}
                      className="px-4 py-1.5 rounded-full bg-bgAlt text-text font-semibold text-xs border border-accent/40 flex items-center gap-1.5 hover:border-accent hover:text-accent transition-colors"
                    >
                      <FaGithub className="text-xs" />
                      <span>GitHub</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-text mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-bgAlt text-accent/90 border border-gray-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Accessible links for mobile & focusable controls */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-accent hover:underline flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-accent rounded"
                    >
                      <FaExternalLinkAlt className="text-[10px]" />
                      <span>Live Preview</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-gray-300 hover:text-white flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-accent rounded"
                    >
                      <FaGithub className="text-sm" />
                      <span>Repository</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

