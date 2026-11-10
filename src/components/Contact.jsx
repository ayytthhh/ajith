import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle, FaSpinner } from 'react-icons/fa';
import SectionHeading from './SectionHeading';

/**
 * Contact Section
 * ===============
 * Background: bg (#1f242d)
 * Includes: Name, Email, Subject, Message with inline validation,
 * EmailJS / Formspree support, and simulation fallback for local development.
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [feedbackMessage, setFeedbackMessage] = useState('');

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear validation error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate Form Fields
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = 'Subject should be at least 3 characters.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setStatus(null);
    setFeedbackMessage('');

    // Load environment keys (TODO: set your keys in .env)
    const emailServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    try {
      // 1. If EmailJS keys are provided
      if (emailServiceId && emailTemplateId && emailPublicKey) {
        await emailjs.send(
          emailServiceId,
          emailTemplateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: 'Ajith P C',
          },
          emailPublicKey
        );
        setStatus('success');
        setFeedbackMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
      // 2. Or if Formspree endpoint is provided
      else if (formspreeEndpoint && !formspreeEndpoint.includes('your_form_id')) {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setStatus('success');
          setFeedbackMessage('Thank you! Your message has been submitted via Formspree.');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error('Formspree returned an error.');
        }
      }
      // 3. Simulated Dev Mode (works instantly out-of-the-box!)
      else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus('success');
        setFeedbackMessage(
          'Message received! (Demo mode: add your EmailJS or Formspree keys to .env to deliver real emails to your inbox).'
        );
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus('error');
      setFeedbackMessage(
        'Oops! Something went wrong while sending your message. Please reach out directly via ajith.contact@example.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-bg relative overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Contact"
          highlight="Me!"
          subtitle="Have a question, an opportunity, or just want to discuss AI and web projects? Send me a message below!"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-bgAlt/90 backdrop-blur-sm rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-700/60 shadow-2xl"
        >
          {/* Status Alert Banner */}
          {status && (
            <div
              tabIndex={-1}
              className={`mb-8 p-4 rounded-xl flex items-start gap-3 text-sm ${
                status === 'success'
                  ? 'bg-accent/15 border border-accent/40 text-accent'
                  : 'bg-red-500/15 border border-red-500/40 text-red-300'
              }`}
            >
              {status === 'success' ? (
                <FaCheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-accent" />
              ) : (
                <FaExclamationCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
              )}
              <p className="leading-relaxed">{feedbackMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Row 1: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className={`w-full px-4 py-3.5 rounded-xl bg-bg border text-text placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-700 focus:border-accent'
                  }`}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className={`w-full px-4 py-3.5 rounded-xl bg-bg border text-text placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-700 focus:border-accent'
                  }`}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Subject */}
            <div>
              <label htmlFor="subject" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Subject <span className="text-accent">*</span>
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Project Collaboration / Internship Inquiry"
                className={`w-full px-4 py-3.5 rounded-xl bg-bg border text-text placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-colors ${
                  errors.subject ? 'border-red-500' : 'border-gray-700 focus:border-accent'
                }`}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-xs text-red-400">
                  {errors.subject}
                </p>
              )}
            </div>

            {/* Row 3: Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Your Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className={`w-full px-4 py-3.5 rounded-xl bg-bg border text-text placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-700 focus:border-accent'
                }`}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Center Pill Submit Button */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-10 py-3.5 rounded-full bg-accent text-bg font-semibold text-sm sm:text-base tracking-wide shadow-[0_0_15px_#00eeff] hover:shadow-[0_0_25px_#00eeff] hover:scale-105 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

