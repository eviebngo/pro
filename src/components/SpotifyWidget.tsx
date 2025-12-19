import { useState, useEffect, useRef, useCallback } from 'react';
import song1 from '../assets/Olivia Dean - Touching Toes (Acoustic).mp3';
import song2 from '../assets/The Two Lips - play [U0j4IQY7Fzc].mp3';
import song3 from '../assets/Tiffany Day - TWFNO (Official Video) [pFljeiz-KGs].mp3';

interface Song {
  title: string;
  artist: string;
  audioFile: string;
  albumCover: string;
}

// Playlist with your 3 songs - album covers will be added when you provide them
const playlist: Song[] = [
  {
    title: 'Touching Toes',
    artist: 'Olivia Dean',
    audioFile: song1,
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', // Placeholder - will update when you provide cover
  },
  {
    title: 'play',
    artist: 'The Two Lips',
    audioFile: song2,
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', // Placeholder - will update when you provide cover
  },
  {
    title: 'TWFNO',
    artist: 'Tiffany Day',
    audioFile: song3,
    albumCover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400', // Placeholder - will update when you provide cover
  },
];

export function SpotifyWidget() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = playlist[currentSongIndex];

  const handleNext = useCallback(() => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true); // Auto-play next song
  }, []);

  const handlePrevious = useCallback(() => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true); // Auto-play previous song
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Reset time when song changes
    setCurrentTime(0);
    setDuration(0);

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      // Auto-play next song
      handleNext();
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('canplay', updateDuration);
    audio.addEventListener('ended', handleEnded);

    // Load the new song
    audio.load();

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('canplay', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentSongIndex, handleNext]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing audio:', error);
          setIsPlaying(false);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSongIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    if (!isFinite(seconds) || isNaN(seconds) || seconds < 0) {
      return '0:00';
    }
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="bg-[rgba(0,0,0,0)] h-[115.524px] relative rounded-[11.768px] w-[247.133px]">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src={currentSong.audioFile} preload="metadata" />
      
      <div className="absolute backdrop-blur-[50px] bg-gradient-to-b content-stretch flex from-[rgba(68,77,86,0.17)] gap-[8px] h-[115.524px] items-start left-[calc(50%+0.43px)] overflow-visible px-[11.699px] py-[9.505px] rounded-[16.086px] to-[rgba(67,77,86,0.17)] top-0 translate-x-[-50%] w-[247.133px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Album Art */}
        <div className="relative rounded-[4.387px] shrink-0 size-[96.514px]">
          <img 
            alt="Album Art" 
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[4.387px] size-full transition-transform duration-500 hover:scale-105" 
            src={currentSong.albumCover}
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400';
            }}
          />
        </div>

        {/* Music Details */}
        <div className="flex flex-col gap-[12px] h-[96.514px] items-start justify-start flex-1 min-w-0 pl-2 pt-0">
          {/* Text Container */}
          <div className="flex flex-col gap-[6px] items-start w-full">
            <p className="font-['SF_Pro_Text',sans-serif] leading-[11.699px] not-italic text-[#d0d9ea] text-[7px] tracking-[0.0731px] uppercase drop-shadow-lg">
              Now Playing
            </p>
            
            <div className="flex gap-[4.387px] items-center w-full">
              <p className="font-['SF_Pro_Text',sans-serif] leading-[11.699px] not-italic text-[10px] text-white drop-shadow-lg">
                {currentSong.title}
              </p>
              
              <div className="relative shrink-0 size-[8.753px] bg-white/30 backdrop-blur-sm rounded-sm flex items-center justify-center border border-white/40">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
                  <rect fill="white" fillOpacity="0.91" height="8.75313" rx="1.16708" width="8.75313" />
                  <text className="font-['SF_Pro',sans-serif] drop-shadow-lg" fill="black" fontSize="6.5625" fontWeight="900" x="2.2" y="7.2">E</text>
                </svg>
              </div>
            </div>

            <p className="font-['SF_Pro_Text',sans-serif] leading-[11.699px] not-italic text-[#d0d9ea] text-[9px] w-full drop-shadow-lg">
              {currentSong.artist}
            </p>
          </div>

            {/* Playback Controls */}
            <div className="flex flex-col gap-[2px] items-start w-full pr-2" style={{ marginTop: '-5px' }}>
              {/* Progress Bar */}
              <div className="relative w-full">
                <div 
                  className="h-[2.919px] bg-white/20 backdrop-blur-sm border border-white/10 rounded-full overflow-hidden relative w-full shadow-inner cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="h-full bg-gradient-to-r from-white/80 to-white/60 rounded-full transition-all duration-1000 shadow-lg"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                
                <div className="flex justify-between text-[7px] text-[#d0d9ea]/70 mt-0.5 px-0.5">
                  <span className="drop-shadow-md">{formatTime(currentTime)}</span>
                  <span className="drop-shadow-md">{formatTime(duration)}</span>
                </div>
              </div>
            </div>

            {/* Spotify-style Playback Controls - Previous, Play/Pause, Next */}
            <div className="absolute flex gap-[10px] items-center" style={{ bottom: '12px', left: '135px', zIndex: 10 }}>
              {/* Previous Button - Gray */}
              <button 
                onClick={handlePrevious}
                className="flex items-center justify-center h-[20px] w-[20px] transition-all duration-200 hover:scale-110 cursor-pointer"
                title="Previous Song"
                style={{ color: '#b3b3b3' }}
              >
                <svg className="block size-full" fill="#b3b3b3" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6V6zm8.5 6l-7 4.5V7.5l7 4.5z" />
                </svg>
              </button>
              
              {/* Play/Pause Button - White circle with black icon */}
              <button 
                onClick={handlePlayPause}
                className="flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110"
                style={{ 
                  width: '20px', 
                  height: '20px', 
                  backgroundColor: 'white', 
                  borderRadius: '50%',
                  zIndex: 11,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <svg className="block" style={{ width: '14px', height: '14px' }} fill="black" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <rect x="7" y="4" width="4" height="16" />
                    <rect x="13" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg className="block" style={{ width: '14px', height: '14px', marginLeft: '1px' }} fill="black" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
              
              {/* Next Button - Gray */}
              <button 
                onClick={handleNext}
                className="flex items-center justify-center h-[20px] w-[20px] transition-all duration-200 hover:scale-110 cursor-pointer"
                title="Next Song"
                style={{ color: '#b3b3b3' }}
              >
                <svg className="block size-full" fill="#b3b3b3" preserveAspectRatio="none" viewBox="0 0 24 24">
                  <path d="M6 18l7-6-7-6v12zm8 0h2V6h-2v12z" />
                </svg>
              </button>
            </div>
        </div>

      </div>
    </div>
  );
}