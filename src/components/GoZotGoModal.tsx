import { motion, AnimatePresence } from 'framer-motion';
// Note: Replace this with the "Do, don't." case study image when available
import caseStudyImage from '../assets/Go, Zot, Go!.png';
import skintelThumbnail from '../assets/Skintel thumbnail.png';
import clincThumbnail from '../assets/clinc thumbnail.png';

interface GoZotGoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit?: () => void;
  onSkintelClick?: () => void;
}

export function GoZotGoModal({ isOpen, onClose, onEdit, onSkintelClick }: GoZotGoModalProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
    <>
      {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]"
          />
          
          {/* Modal Wrapper - Centers the modal */}
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
            style={{ paddingBottom: 0 }}
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ 
                duration: 0.5, 
                ease: [0.25, 0.1, 0.25, 1],
                opacity: { duration: 0.4 }
              }}
        style={{
                width: '80vw',
                maxWidth: '1200px',
                height: '95vh',
                maxHeight: '1300px',
                pointerEvents: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
            {/* MacBook Air Frame */}
            <div 
              className="w-full h-full flex flex-col relative"
              style={{
                filter: 'drop-shadow(0 20px 60px rgba(0, 0, 0, 0.3))',
                borderRadius: '24px',
                overflow: 'hidden',
              }}
            >
              {/* Top Bezel with Notch */}
              <div 
                className="relative bg-[#1d1d1f] flex-shrink-0"
                style={{
                  height: '32px',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  padding: '0 24px',
                }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-[#1d1d1f]"
                  style={{
                    width: '120px',
                    height: '20px',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                  }}
                >
                  {/* Camera hole */}
                  <div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] rounded-full"
                    style={{
                      width: '8px',
                      height: '8px',
                    }}
                  />
                </div>
                
                {/* Exit Button - Top Left */}
        <button
          onClick={onClose}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 w-6 h-6 rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] flex items-center justify-center transition-all hover:scale-110 group z-10"
                  aria-label="Close"
                  style={{
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                  }}
        >
          <svg
                    className="w-3 h-3 text-[#4d0000] opacity-0 group-hover:opacity-100 transition-opacity"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

                {/* Edit Button - Top Right */}
                <button
                  onClick={onEdit}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 w-6 h-6 rounded-full bg-[#4a9eff] hover:bg-[#3a8eef] flex items-center justify-center transition-all hover:scale-110 group z-10"
                  aria-label="Edit"
                  style={{
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <svg
                    className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              </div>

              {/* Screen Area */}
              <div 
                className="flex-1 bg-[#000000] relative"
                style={{
                  borderRadius: '0',
                  minHeight: 0,
                  overflow: 'hidden',
                }}
              >
                {/* Modal Content - Scrollable (both horizontal and vertical) with glass border around viewport */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'auto',
                    scrollbarWidth: 'thin',
                    borderRadius: '32px',
                    border: 'none',
                    background: '#ffffff',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    zIndex: 1,
                    padding: 0,
                    margin: 0,
                  }}
                >
                  {/* White X button - positioned absolutely over the case study, sticky at top right */}
                  <div
                    style={{
                      position: 'sticky',
                      top: '10px',
                      zIndex: 10000,
                      width: '100%',
                      height: 0,
                      pointerEvents: 'none',
                      marginBottom: 0,
                    }}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        onClose();
                      }}
                      className="absolute flex items-center justify-center transition-all hover:scale-110"
                      aria-label="Close"
                      style={{
                        top: '0',
                        right: '10px',
                        width: '40px',
                        height: '40px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        padding: 0,
                        margin: 0,
                        position: 'absolute',
                        zIndex: 10001,
                        pointerEvents: 'auto',
                      }}
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          filter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.2)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.15))',
                          WebkitFilter: 'drop-shadow(0 1px 3px rgba(0, 0, 0, 0.2)) drop-shadow(0 0 2px rgba(0, 0, 0, 0.15))',
                        }}
                      >
                        <line x1="18" y1="6" x2="6" y2="18" stroke="#ffffff"></line>
                        <line x1="6" y1="6" x2="18" y2="18" stroke="#ffffff"></line>
                      </svg>
                    </button>
                  </div>

                  {/* Image wrapper - crops 20px from top, no bottom gap */}
                  <div
                    style={{
                      position: 'relative',
                      overflow: 'hidden',
                      marginTop: '-20px',
                      lineHeight: 0,
                      marginBottom: 0,
                      paddingBottom: 0,
                      display: 'block',
                      background: '#ffffff',
                    }}
                  >
                    {/* Image - allows scrolling, cropped 20px from top, flush with bottom */}
                    <img
                      src={caseStudyImage}
                      alt="Go, Zot, Go! Case Study"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        margin: 0,
                        padding: 0,
                        marginBottom: 0,
                        paddingBottom: 0,
                        imageRendering: 'auto',
                        WebkitImageRendering: '-webkit-optimize-contrast',
                        msInterpolationMode: 'bicubic',
                        transform: 'translateY(-20px)',
                        verticalAlign: 'bottom',
                        background: '#ffffff',
                      }}
                    />
                  </div>

                  {/* Next Case Studies Preview Section - White space with previews - flush with case study */}
                  <div
                    style={{
                      width: '100%',
                      padding: '0 40px 80px 40px',
                      marginTop: '-20px',
                      marginBottom: 0,
                      paddingTop: '60px',
                      background: '#ffffff',
                      display: 'block',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '36px',
                        fontWeight: 600,
                        marginTop: 0,
                        marginBottom: '48px',
                        paddingTop: 0,
                        color: '#1d1d1f',
                        textAlign: 'center',
                      }}
                    >
                      More Case Studies
                    </h3>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr',
                        gap: '40px',
                        maxWidth: '1000px',
                        margin: '0 auto',
                      }}
                    >
                      {/* Skintel Preview */}
                      <motion.div
                        className="cursor-pointer overflow-hidden"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          onSkintelClick?.();
                        }}
                        style={{
                          height: '280px',
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 101,
                          cursor: 'pointer',
                          pointerEvents: 'auto',
                          backgroundColor: 'transparent',
                        }}
                        whileHover={{
                          y: -8,
                          transition: { duration: 0.2 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={skintelThumbnail}
                          alt="Skintel Case Study"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            pointerEvents: 'none',
                            userSelect: 'none',
                          }}
                        />
                      </motion.div>

                      {/* Clinc Preview */}
                      <motion.div
                        className="cursor-pointer overflow-hidden"
                        onClick={() => {
                          window.location.href = '/clinc';
                        }}
                        style={{
                          height: '280px',
                          width: '100%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                        whileHover={{
                          y: -8,
                          transition: { duration: 0.2 },
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={clincThumbnail}
                          alt="Clinc Clinical Trials Dashboard"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                          }}
                        />
                      </motion.div>
          </div>
        </div>
      </div>

      <style>{`
                  /* Custom Scrollbar Styling */
                  div::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                  }
                  
                  div::-webkit-scrollbar-track {
                    background: transparent;
                  }
                  
                  div::-webkit-scrollbar-thumb {
                    background: rgba(0, 0, 0, 0.2);
                    border-radius: 4px;
                  }
                  
                  div::-webkit-scrollbar-thumb:hover {
                    background: rgba(0, 0, 0, 0.3);
                  }
                  
                  /* Horizontal scrollbar styling */
                  div::-webkit-scrollbar:horizontal {
                    height: 8px;
        }
      `}</style>
              </div>

              {/* Bottom Bezel/Chassis */}
              <div 
                className="bg-gradient-to-b from-[#2a2a2a] to-[#1d1d1f] flex-shrink-0 relative"
                style={{
                  height: '24px',
                  borderBottomLeftRadius: '0',
                  borderBottomRightRadius: '0',
                }}
              >
                {/* MacBook Air indent line */}
                <div
                  className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-b from-transparent via-[#3a3a3a] to-transparent"
                  style={{
                    width: '200px',
                    height: '2px',
                    borderRadius: '1px',
                  }}
                />
              </div>
            </div>
          </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
