import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onLoadingComplete?: () => void;
}

const greetings = [
  'Hola',
  'Xin chào',
  'Hello',
];

export function LoadingAnimation({ onLoadingComplete }: LoadingAnimationProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);
  const [isEntering, setIsEntering] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (currentIndex >= greetings.length) {
      // All greetings shown, fade out the entire screen
      setIsVisible(false);
      const removeTimer = setTimeout(() => {
        setShouldRender(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 400); // Wait for fade-out to complete (synchronized with main page fade-in)
      return () => clearTimeout(removeTimer);
    }

    const isXinChao = greetings[currentIndex] === 'Xin chào';
    const isHello = greetings[currentIndex] === 'Hello';
    const isLastGreeting = currentIndex === greetings.length - 1;

    // Special handling for last greeting (Hello) - fade out as soon as it shows
    if (isLastGreeting) {
      // Start entering animation (slide down from above, like other greetings)
      setIsEntering(true);
      setIsLeaving(false);
      setIsFadingOut(false);
      
      // After entering animation completes, show greeting briefly, then start fade
      const enterTimer = setTimeout(() => {
        setIsEntering(false);
        // Show Hello for a moment before starting fade
        const showTimer = setTimeout(() => {
          setIsFadingOut(true); // Fade out Hello text
          setIsVisible(false); // Fade out loading screen
          const fadeTimer = setTimeout(() => {
            setShouldRender(false);
            if (onLoadingComplete) {
              onLoadingComplete();
            }
          }, 400); // Wait for fade-out to complete
          return () => clearTimeout(fadeTimer);
        }, 1000); // Brief display time before fade
        return () => clearTimeout(showTimer);
      }, 300); // Enter animation duration

      return () => {
        clearTimeout(enterTimer);
      };
    }

    // For other greetings: quick transitions with slide down
    // Start entering animation
    setIsEntering(true);
    setIsLeaving(false);
    setIsFadingOut(false);
    
    // After entering animation completes, show greeting
    const enterTimer = setTimeout(() => {
      setIsEntering(false);
    }, 300); // Slower enter animation

    // Show each greeting briefly, then animate out
    const showTimer = setTimeout(() => {
      // Normal slide down animation
      setIsLeaving(true);
      // After slide-down animation, move to next greeting
      const nextTimer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 300); // Leave animation duration
      return () => clearTimeout(nextTimer);
    }, 600 + 300); // Display time + enter animation

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(showTimer);
    };
  }, [currentIndex, onLoadingComplete]);

  if (!shouldRender) return null;

  const isXinChao = currentIndex < greetings.length ? greetings[currentIndex] === 'Xin chào' : false;
  const isHello = currentIndex < greetings.length ? greetings[currentIndex] === 'Hello' : false;
  const currentGreeting = currentIndex < greetings.length ? greetings[currentIndex] : '';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.4s ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      {currentGreeting && (
        <div
          style={{
            textAlign: 'center',
            transform: isEntering
              ? 'translateY(-30px)' 
              : isLeaving
              ? 'translateY(30px)' 
              : 'translateY(0)',
            opacity: isEntering || isLeaving || isFadingOut ? 0 : 1,
            transition: 'transform 0.3s ease-out, opacity 0.4s ease-out', // Normal animations for all greetings
          }}
        >
          <h1
            style={{
              color: '#ffffff',
              fontSize: '64px',
              fontWeight: 300,
              fontFamily: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              letterSpacing: '-0.02em',
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {currentGreeting}
          </h1>
        </div>
      )}
    </div>
  );
}

