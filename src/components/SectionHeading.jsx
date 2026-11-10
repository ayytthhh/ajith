import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionHeading Component
 * ========================
 * Standardized section title with neon cyan accent text
 * and subtle scroll fade-in animation.
 *
 * Example: <SectionHeading title="About" highlight="Me" subtitle="..." />
 */
const SectionHeading = ({
  title = '',
  highlight = '',
  subtitle = '',
  center = true,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`mb-12 sm:mb-16 ${center ? 'text-center' : 'text-left'} ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text inline-block">
        {title}{' '}
        {highlight && (
          <span className="text-accent text-glow">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;

