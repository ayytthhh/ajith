import { FaCode, FaTerminal, FaBrain, FaPuzzlePiece } from 'react-icons/fa';

/**
 * Skills & What I'm Learning Data
 * ================================
 * Tone: Friendly, confident, beginner-but-ambitious.
 * TODO: Customize these skill cards or add/remove categories as you progress!
 */
export const skills = [
  {
    id: 'web-dev',
    title: 'Web Development',
    icon: FaCode,
    badge: 'Frontend Focus',
    description:
      'Building clean, mobile-first responsive web interfaces using HTML5, CSS3, Tailwind CSS, JavaScript (ES6+), and React. Passionate about component architecture and interactive UX.',
    topics: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive Design', 'Git & GitHub'],
  },
  {
    id: 'programming-languages',
    title: 'Programming (Python & C)',
    icon: FaTerminal,
    badge: 'Core Foundations',
    description:
      'Developing strong core programming fundamentals with C for low-level systems & memory concepts, and Python for data scripting, automation, and algorithmic problem-solving.',
    topics: ['Python 3', 'C Language', 'Data Structures', 'OOP Concepts', 'Scripting'],
  },
  {
    id: 'ai-ml-basics',
    title: 'AI & ML Basics',
    icon: FaBrain,
    badge: 'Specialization Track',
    description:
      'Exploring foundational concepts of Artificial Intelligence, linear algebra, and data manipulation. Currently learning NumPy, Pandas, Scikit-Learn, and basic neural network architectures.',
    topics: ['NumPy & Pandas', 'Data Preprocessing', 'Machine Learning Basics', 'Model Evaluation', 'Math for ML'],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    icon: FaPuzzlePiece,
    badge: 'Logic & DSA',
    description:
      'Tackling coding challenges to sharpen computational thinking and algorithmic efficiency. Regularly practicing foundational data structures like arrays, strings, linked lists, and searching algorithms.',
    topics: ['Algorithm Design', 'Time Complexity', 'Debugging', 'Pattern Recognition', 'LeetCode Practice'],
  },
];

