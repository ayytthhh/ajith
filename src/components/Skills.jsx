import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skills } from '../data/skills';

/**
 * Skills Section / What I'm Learning
 * ==================================
 * Background: bg (#1f242d)
 * Displays 4 skill cards sourced from src/data/skills.js
 * with icons, descriptions, tags, and subtle hover glow.
 */
const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-bg relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="What I'm"
          highlight="Learning"
          subtitle="Building a solid technical foundation as a first-year student through hands-on practice, college coursework, and personal projects."
        />

        {/* 4-Card Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.id}
                variants={cardVariants}
                className="group relative bg-bgAlt rounded-2xl p-6 sm:p-7 border border-gray-700/60 flex flex-col justify-between hover:border-accent/70 hover:shadow-[0_0_25px_rgba(0,238,255,0.2)] hover:-translate-y-2 transition-all duration-300"
              >
                {/* Top: Icon + Badge */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-bg border border-accent/40 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-bg group-hover:shadow-[0_0_15px_#00eeff] transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    {skill.badge && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                        {skill.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-text mb-3 group-hover:text-accent transition-colors">
                    {skill.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom: Skill pills */}
                <div>
                  <div className="pt-4 border-t border-gray-700/50 flex flex-wrap gap-1.5">
                    {skill.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-bg text-gray-300 font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

