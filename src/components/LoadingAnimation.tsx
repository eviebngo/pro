import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
  onLoadingComplete?: () => void;
}

const greetings = [
  'Hola',
  'Xin chào',
  'Hello', // Hello last, stays longer and fades with screen
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
      }, 1000); // Wait for fade-out to complete (synchronized with main page fade-in)
      return () => clearTimeout(removeTimer);
    }

    const isHello = greetings[currentIndex] === 'Hello';
    const isXinChao = greetings[currentIndex] === 'Xin chào';
    const nextIsHello = currentIndex + 1 < greetings.length && greetings[currentIndex + 1] === 'Hello';

    // Special handling for "Hello" (last greeting) - enters with slide down, then fades out smoothly (no slide down on exit)
    if (isHello) {
      // Start entering animation (slide down from above, like other greetings)
      setIsEntering(true);
      setIsLeaving(false);
      setIsFadingOut(false);
      
      // After entering animation completes, show greeting
      const enterTimer = setTimeout(() => {
        setIsEntering(false);
      }, 300); // Enter animation duration
      
      // Show "Hello" longer, then fade out smoothly with screen (no slide down)
      const showTimer = setTimeout(() => {
        setIsVisible(false);
        // Trigger main page fade-in immediately when we start fading out
        if (onLoadingComplete) {
          onLoadingComplete();
        }
        const removeTimer = setTimeout(() => {
          setShouldRender(false);
        }, 1000); // Synchronized fade-out duration
        return () => clearTimeout(removeTimer);
      }, 1500 + 300); // Display time for Hello + enter animation

      return () => {
        clearTimeout(enterTimer);
        clearTimeout(showTimer);
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
      // If transitioning to "Hello", fade out instead of slide down (match Hello's animation style)
      if (nextIsHello) {
        // Start fade out
        setIsFadingOut(true);
        // After fade completes, move to next greeting
        const fadeTimer = setTimeout(() => {
          setIsFadingOut(false);
          setCurrentIndex(prev => prev + 1);
        }, 300); // Fade duration - matches the transition timing
        return () => clearTimeout(fadeTimer);
      } else {
        // Normal slide down animation
        setIsLeaving(true);
        // After slide-down animation, move to next greeting
        const nextTimer = setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
        }, 300); // Slower leave animation
        return () => clearTimeout(nextTimer);
      }
    }, 600 + 300); // Longer display time + enter animation

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(showTimer);
    };
  }, [currentIndex, onLoadingComplete]);

  if (!shouldRender) return null;

  const isHello = greetings[currentIndex] === 'Hello';
  const isXinChao = greetings[currentIndex] === 'Xin chào';
  const nextIsHello = currentIndex + 1 < greetings.length && greetings[currentIndex + 1] === 'Hello';

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
        transition: 'opacity 1s ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          transform: isEntering
            ? 'translateY(-30px)' 
            : isLeaving && !isXinChao && !isHello
            ? 'translateY(30px)' 
            : 'translateY(0)',
          opacity: isEntering || (isLeaving && !isXinChao && !isHello) || isFadingOut ? 0 : 1,
          transition: (isHello && !isEntering) || isFadingOut
            ? 'opacity 0.3s ease-out' // Smooth fade-out for Hello and Xin chào when transitioning to Hello (no transform)
            : 'transform 0.3s ease-out, opacity 0.3s ease-out', // Normal animations for other greetings and Hello's enter
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
          {greetings[currentIndex]}
        </h1>
      </div>
    </div>
  );
}

