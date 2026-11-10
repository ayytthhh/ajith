import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

/**
 * Social Links Data
 * =================
 * TODO: Replace the URLs with your actual profile links.
 * All social buttons throughout the site pull directly from here.
 */
export const socials = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/ayytthhh',
    icon: FaGithub,
    ariaLabel: 'Visit Ajith P C on GitHub',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    // TODO: Replace with your LinkedIn URL
    url: 'https://linkedin.com',
    icon: FaLinkedinIn,
    ariaLabel: 'Connect with Ajith P C on LinkedIn',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    // TODO: Replace with your Instagram URL
    url: 'https://instagram.com',
    icon: FaInstagram,
    ariaLabel: 'Follow Ajith P C on Instagram',
  },
  {
    id: 'email',
    name: 'Email',
    // TODO: Replace with your actual email address
    url: 'mailto:ajith.contact@example.com',
    icon: FaEnvelope,
    ariaLabel: 'Send an email to Ajith P C',
  },
];

