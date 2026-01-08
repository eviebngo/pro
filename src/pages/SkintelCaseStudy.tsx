import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import caseStudyImage from '../assets/skintel case study.png';

export function SkintelCaseStudy() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ 
        duration: 0.5, 
        ease: [0.25, 0.1, 0.25, 1],
        opacity: { duration: 0.4 }
      }}
      className="fixed inset-0 bg-white overflow-hidden flex flex-col"
      style={{
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
      }}
    >
      {/* Back button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-50 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition-all hover:scale-110 shadow-lg backdrop-blur-sm"
        aria-label="Go back"
      >
        <svg
          className="w-6 h-6 text-gray-700"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Full Screen Case Study Image - Full width with vertical scroll */}
      <div 
        className="w-full h-full overflow-y-auto overflow-x-hidden"
        style={{
          scrollbarWidth: 'thin',
          margin: 0,
          padding: 0,
        }}
      >
        <img
          src={caseStudyImage}
          alt="Skintel Case Study"
          className="block"
          style={{
            width: '100%',
            minWidth: '1280px',
            height: 'auto',
            display: 'block',
            margin: 0,
            padding: 0,
            imageRendering: 'auto',
            WebkitImageRendering: '-webkit-optimize-contrast',
            msInterpolationMode: 'bicubic',
          }}
        />
      </div>

      <style>{`
        /* Custom Scrollbar Styling */
        div::-webkit-scrollbar {
          width: 8px;
        }
        
        div::-webkit-scrollbar-track {
          background: transparent;
        }
        
        div::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </motion.div>
  );
}
