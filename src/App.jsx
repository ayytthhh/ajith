import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

/**
 * Main Application Component
 * ==========================
 * Single-page portfolio for Ajith P C
 * Tech stack: React 18, Vite, Tailwind CSS, Framer Motion
 */
function App() {
  return (
    <div className="min-h-screen bg-bg text-text font-poppins selection:bg-accent selection:text-bg">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Me Section */}
        <About />

        {/* 3. Skills / What I'm Learning Section */}
        <Skills />

        {/* 4. Projects Section */}
        <Projects />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;

