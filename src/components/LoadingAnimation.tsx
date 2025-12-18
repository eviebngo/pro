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

  useEffect(() => {
    if (currentIndex >= greetings.length) {
      // All greetings shown, fade out the entire screen
      setIsVisible(false);
      const removeTimer = setTimeout(() => {
        setShouldRender(false);
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 500); // Wait for fade-out to complete
      return () => clearTimeout(removeTimer);
    }

    const isHello = greetings[currentIndex] === 'Hello';

    // Special handling for "Hello" (last greeting) - stays longer and fades with screen (no slide down)
    if (isHello) {
      // Start entering animation
      setIsEntering(true);
      setIsLeaving(false);
      
      // After entering animation completes, show greeting
      const enterTimer = setTimeout(() => {
        setIsEntering(false);
      }, 300); // Slower enter

      // Show "Hello" longer, then fade out with screen (no slide down)
      const showTimer = setTimeout(() => {
        setIsVisible(false);
        const removeTimer = setTimeout(() => {
          setShouldRender(false);
          if (onLoadingComplete) {
            onLoadingComplete();
          }
        }, 500);
        return () => clearTimeout(removeTimer);
      }, 1500 + 300); // Longer display time for Hello

      return () => {
        clearTimeout(enterTimer);
        clearTimeout(showTimer);
      };
    }

    // For other greetings: quick transitions with slide down
    // Start entering animation
    setIsEntering(true);
    setIsLeaving(false);
    
    // After entering animation completes, show greeting
    const enterTimer = setTimeout(() => {
      setIsEntering(false);
    }, 300); // Slower enter animation

    // Show each greeting briefly, then animate out
    const showTimer = setTimeout(() => {
      setIsLeaving(true);
      
      // After slide-down animation, move to next greeting
      const nextTimer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 300); // Slower leave animation
      
      return () => clearTimeout(nextTimer);
    }, 600 + 300); // Longer display time + enter animation

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(showTimer);
    };
  }, [currentIndex, onLoadingComplete]);

  if (!shouldRender) return null;

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
        transition: 'opacity 0.8s ease-out',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          textAlign: 'center',
          transform: isEntering 
            ? 'translateY(-30px)' 
            : isLeaving && greetings[currentIndex] !== 'Hello'
            ? 'translateY(30px)' 
            : 'translateY(0)',
          opacity: (isEntering || (isLeaving && greetings[currentIndex] !== 'Hello')) ? 0 : 1,
          transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
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

