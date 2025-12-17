import { useState, useEffect } from 'react';

export function SpotifyWidget() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(254); // Song duration in seconds (4:14)

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <div className="bg-[rgba(0,0,0,0)] h-[115.524px] relative rounded-[11.768px] w-[247.133px]">
      <div className="absolute backdrop-blur-[50px] bg-gradient-to-b content-stretch flex from-[rgba(68,77,86,0.17)] gap-[8px] h-[115.524px] items-center left-[calc(50%+0.43px)] overflow-visible px-[11.699px] py-[9.505px] rounded-[16.086px] to-[rgba(67,77,86,0.17)] top-0 translate-x-[-50%] w-[247.133px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Album Art */}
        <div className="relative rounded-[4.387px] shrink-0 size-[96.514px]">
          <img 
            alt="Album Art" 
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4.387px] size-full transition-transform duration-500 hover:scale-105" 
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400" 
          />
        </div>

        {/* Music Details */}
        <div className="flex flex-col gap-[12px] h-full items-start justify-end flex-1 min-w-0 pl-2 pb-1">
          {/* Text Container */}
          <div className="flex flex-col gap-[6px] items-start w-full">
            <p className="font-['SF_Pro_Text',sans-serif] leading-[11.699px] not-italic text-[#d0d9ea] text-[7px] tracking-[0.0731px] uppercase drop-shadow-lg">
              Now Playing
            </p>
            
            <div className="flex gap-[4.387px] items-center w-full">
              <p className="font-['SF_Pro_Text',sans-serif] leading-[11.699px] not-italic text-[10px] text-white drop-shadow-lg">
                Not Like Us
              </p>
              
              <div className="relative shrink-0 size-[8.753px] bg-white/30 backdrop-blur-sm rounded-sm flex items-center justify-center border border-white/40">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                  <rect fill="white" fillOpacity="0.91" height="8.75313" rx="1.16708" width="8.75313" />
                  <text className="font-['SF_Pro',sans-serif] drop-shadow-lg" fill="black" fontSize="6.5625" fontWeight="900" x="2.2" y="7.2">E</text>
                </svg>
              </div>
            </div>

            <p className="font-['SF_Pro_Text',sans-serif] leading-[11.699px] not-italic text-[#d0d9ea] text-[9px] w-full drop-shadow-lg">
              Kendrick Lamar
            </p>
          </div>

          {/* Playback Controls */}
          <div className="flex flex-col gap-[6px] items-start w-full pr-2">
            {/* Progress Bar */}
            <div className="relative w-full">
              <div className="h-[2.919px] bg-white/20 backdrop-blur-sm border border-white/10 rounded-full overflow-hidden relative w-full shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-white/80 to-white/60 rounded-full transition-all duration-1000 shadow-lg"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <div className="flex justify-between text-[7px] text-[#d0d9ea]/70 mt-1 px-0.5">
                <span className="drop-shadow-md">{formatTime(currentTime)}</span>
                <span className="drop-shadow-md">{formatTime(duration)}</span>
              </div>
            </div>

            {/* Play/Pause Button */}
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-gradient-to-r from-[rgba(94,94,94,0.38)] to-[rgba(94,94,94,0.38)] backdrop-blur-xl border border-white/20 flex gap-[4px] h-[20px] items-center justify-center px-[8px] py-[4px] rounded-[86.212px] w-full transition-all duration-300 hover:bg-white/20 hover:scale-105 shadow-lg"
            >
              <div className="relative shrink-0 size-[10px]">
                {isPlaying ? (
                  <svg className="block size-full drop-shadow-lg" fill="white" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <path fillRule="evenodd" clipRule="evenodd" d="M5 3h1.5v9H5V3zm4.5 0H11v9H9.5V3z" />
                  </svg>
                ) : (
                  <svg className="block size-full drop-shadow-lg" fill="white" preserveAspectRatio="none" viewBox="0 0 15 15">
                    <path d="M5 3l7 4.5L5 12V3z" />
                  </svg>
                )}
              </div>
              <p className="font-['SF_Pro_Text',sans-serif] leading-[12px] not-italic text-[10px] text-nowrap text-white tracking-[-0.3px] drop-shadow-lg">
                {isPlaying ? 'Pause' : 'Play'}
              </p>
            </button>
          </div>
        </div>

        {/* Apple Music Icon */}
        <div className="absolute h-[15.354px] left-[223.01px] top-[9.51px] w-[11.974px] bg-white/20 backdrop-blur-sm p-1 rounded-lg border border-white/30 shadow-lg">
          <svg className="block size-full drop-shadow-lg" fill="white" preserveAspectRatio="none" viewBox="0 0 12 16">
            <path d="M11.5 0.5C11.5 0.223858 11.2761 0 11 0C10.7239 0 10.5 0.223858 10.5 0.5V9.5C10.5 9.77614 10.2761 10 10 10H9.5C8.67157 10 8 10.6716 8 11.5C8 12.3284 8.67157 13 9.5 13C10.3284 13 11 12.3284 11 11.5V4.5L11.5 4.5V0.5ZM4.5 5.5C4.5 5.22386 4.27614 5 4 5C3.72386 5 3.5 5.22386 3.5 5.5V12.5C3.5 12.7761 3.27614 13 3 13H2.5C1.67157 13 1 13.6716 1 14.5C1 15.3284 1.67157 16 2.5 16C3.32843 16 4 15.3284 4 14.5V7.5H4.5V5.5Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}