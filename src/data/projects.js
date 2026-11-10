import project1Img from '../assets/projects/project1.svg';
import project2Img from '../assets/projects/project2.svg';
import project3Img from '../assets/projects/project3.svg';
import project4Img from '../assets/projects/project4.svg';
import project5Img from '../assets/projects/project5.svg';
import project6Img from '../assets/projects/project6.svg';

/**
 * Projects Data
 * =============
 * 6 curated projects representing a first-year CSE AI student's journey.
 * TODO: Replace descriptions, images, tags, or links with your own work anytime!
 */
export const projects = [
  {
    id: 1,
    title: 'Campus Event Hub',
    category: 'Web Application',
    description:
      'A responsive event discovery platform for Thejus Engineering College students featuring upcoming tech fests, workshops, and automated registration tracking.',
    image: project1Img,
    tags: ['React', 'Tailwind CSS', 'Vite', 'Local Storage'],
    // TODO: Replace with your actual live demo link
    liveUrl: 'https://example.com/demo/campus-event-hub',
    // TODO: Replace with your actual repository link
    githubUrl: 'https://github.com/example/campus-event-hub',
  },
  {
    id: 2,
    title: 'AI Sentiment Analyzer',
    category: 'Machine Learning / NLP',
    description:
      'An interactive natural language processing application that classifies user reviews and tweets into Positive, Neutral, or Negative sentiment scores with confidence percentages.',
    image: project2Img,
    tags: ['Python', 'NLP', 'Scikit-Learn', 'Flask API'],
    // TODO: Replace with your actual live demo link
    liveUrl: 'https://example.com/demo/ai-sentiment-analyzer',
    // TODO: Replace with your actual repository link
    githubUrl: 'https://github.com/example/ai-sentiment-analyzer',
  },
  {
    id: 3,
    title: 'Sorting Algorithm Visualizer',
    category: 'Algorithms & Data Structures',
    description:
      'An educational visualization tool demonstrating QuickSort, MergeSort, and BubbleSort in real-time with step-by-step swap animations and speed controls.',
    image: project3Img,
    tags: ['JavaScript', 'HTML5 Canvas', 'CSS3', 'Algorithms'],
    // TODO: Replace with your actual live demo link
    liveUrl: 'https://example.com/demo/sorting-visualizer',
    // TODO: Replace with your actual repository link
    githubUrl: 'https://github.com/example/sorting-visualizer',
  },
  {
    id: 4,
    title: 'Smart Study Planner',
    category: 'Student Productivity',
    description:
      'A focused dashboard built for engineering students featuring a Pomodoro focus timer, B.Tech semester course syllabus checklist, and local storage state persistence.',
    image: project4Img,
    tags: ['React', 'Hooks', 'Tailwind CSS', 'Web Audio'],
    // TODO: Replace with your actual live demo link
    liveUrl: 'https://example.com/demo/smart-study-planner',
    // TODO: Replace with your actual repository link
    githubUrl: 'https://github.com/example/smart-study-planner',
  },
  {
    id: 5,
    title: 'Handwritten Digit Recognizer',
    category: 'Computer Vision',
    description:
      'A machine learning experiment trained on the famous MNIST dataset. Users can draw any digit on an interactive canvas and view live neural network predictions.',
    image: project5Img,
    tags: ['Python', 'TensorFlow', 'NumPy', 'Canvas API'],
    // TODO: Replace with your actual live demo link
    liveUrl: 'https://example.com/demo/digit-recognizer',
    // TODO: Replace with your actual repository link
    githubUrl: 'https://github.com/example/digit-recognizer',
  },
  {
    id: 6,
    title: 'Personal Developer Portfolio',
    category: 'Portfolio / UI',
    description:
      'A modern, high-performance single-page portfolio built with React 18, Tailwind CSS, Framer Motion animations, neon cyan aesthetics, and responsive layout.',
    image: project6Img,
    tags: ['React 18', 'Tailwind CSS', 'Framer Motion', 'EmailJS'],
    // TODO: Replace with your actual live demo link
    liveUrl: 'https://example.com/demo/portfolio',
    // TODO: Replace with your actual repository link
    githubUrl: 'https://github.com/example/ajith-portfolio',
  },
];

