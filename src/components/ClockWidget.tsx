import { useState, useEffect } from 'react';

export function ClockWidget() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Calculate rotation angles
  const secondAngle = (seconds / 60) * 360;
  const minuteAngle = ((minutes + seconds / 60) / 60) * 360;
  const hourAngle = ((hours % 12 + minutes / 60) / 12) * 360;

  // Format digital time
  const formatTime = () => {
    const h = hours % 12 || 12;
    const m = minutes.toString().padStart(2, '0');
    const s = seconds.toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    return `${h}:${m}:${s} ${period}`;
  };

  // Get date string
  const getDateString = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                   'July', 'August', 'September', 'October', 'November', 'December'];
    
    return `${days[time.getDay()]}, ${months[time.getMonth()]} ${time.getDate()}`;
  };

  return (
    <div className="w-full">
      {/* Analog Clock */}
      <div className="relative w-40 h-40 mx-auto mb-6">
        {/* Clock face */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 border-2 border-white/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-xl">
          {/* Hour markers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-3 bg-white/60 left-1/2 top-3 rounded-full"
              style={{
                transform: `translateX(-50%) rotate(${i * 30}deg)`,
                transformOrigin: '0 77px'
              }}
            />
          ))}
          
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg" />
          
          {/* Hour hand */}
          <div
            className="absolute w-1.5 h-12 bg-white rounded-full left-1/2 bottom-1/2 origin-bottom transition-transform duration-1000 shadow-lg"
            style={{
              transform: `translateX(-50%) rotate(${hourAngle}deg)`
            }}
          />
          
          {/* Minute hand */}
          <div
            className="absolute w-1 h-16 bg-white rounded-full left-1/2 bottom-1/2 origin-bottom transition-transform duration-1000 shadow-lg"
            style={{
              transform: `translateX(-50%) rotate(${minuteAngle}deg)`
            }}
          />
          
          {/* Second hand */}
          <div
            className="absolute w-0.5 h-20 bg-red-400 left-1/2 bottom-1/2 origin-bottom transition-transform duration-100 shadow-lg"
            style={{
              transform: `translateX(-50%) rotate(${secondAngle}deg)`
            }}
          />
        </div>
      </div>

      {/* Digital time */}
      <div className="text-center">
        <div className="text-white text-3xl font-mono mb-2 drop-shadow-lg">
          {formatTime()}
        </div>
        <div className="text-white/70 text-sm">
          {getDateString()}
        </div>
      </div>
    </div>
  );
}