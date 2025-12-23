import { CalendarWidget } from './components/CalendarWidget';
import { SpotifyWidget } from './components/SpotifyWidget';
import { ReminderWidget } from './components/ReminderWidget';
import { ProfileWidget } from './components/ProfileWidget';
import { LocationWidget } from './components/LocationWidget';
import { FilesWidget } from './components/FilesWidget';
import { ClockWidget } from './components/ClockWidget';
import { QuoteWidget } from './components/QuoteWidget';
import { Navbar } from './components/Navbar';
import { BottomDock } from './components/BottomDock';
import { useState } from 'react';
import { LoadingAnimation } from './components/LoadingAnimation';
import wallpaper from './assets/755813083720c0adbc5183e6dde8189c.jpg';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center" style={{ margin: 0, padding: 0 }}>
      {/* Loading Animation */}
      <LoadingAnimation onLoadingComplete={() => setIsLoaded(true)} />
      
      {/* Wallpaper Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${wallpaper}')`,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      />

      {/* Top Navbar - Apple inspired - Outside scaled container */}
      <div 
        className="fixed z-50" 
        style={{ 
          top: 0, 
          left: 0, 
          right: 0, 
          margin: 0, 
          padding: 0,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <Navbar />
      </div>

      {/* Main Content - Matching original Mac1 proportions */}
      <div 
        className="relative w-[1920px] h-[1080px] scale-[0.8] origin-center"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        {/* Profile Widget - Top left with 5px padding */}
        <div style={{ position: 'absolute', top: '-55px', left: '-100px', width: '407.782px', height: '218.978px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ProfileWidget />
        </div>

        {/* Files/Projects Widget - Below Profile (bento grid) */}
        <div style={{ position: 'absolute', top: '175px', left: '-100px', width: '404.334px', height: '189.008px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FilesWidget />
        </div>

        {/* Music/Spotify Widget - Below Files/Projects widget */}
        <div style={{ position: 'absolute', top: '376px', left: '-100px', width: '247.133px', height: '115.524px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SpotifyWidget />
        </div>

        {/* Location/Map Widget - Top right */}
        <div style={{ position: 'absolute', top: '-34px', left: '1250px', width: '291.396px', height: '136.215px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LocationWidget />
        </div>

        {/* Reminders Widget - Under Location/Maps widget */}
        <div style={{ position: 'absolute', top: '122px', left: '1250px', width: '291.396px', height: '305.19px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <ReminderWidget />
        </div>

        {/* Quote Widget - Below Reminders, aligned right */}
        <div style={{ position: 'absolute', top: '440px', left: '1405px', width: '136.215px', height: '136.215px', zIndex: 5, transform: 'none' }}>
          <QuoteWidget />
        </div>

        {/* Calendar Widget - Top right area */}
        <div style={{ position: 'absolute', top: '-34px', left: '1100px', width: '136.215px', height: '136.215px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CalendarWidget />
        </div>

      </div>

      {/* Bottom Dock - Icon navbar */}
      <div
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 1s ease-in-out',
        }}
      >
        <BottomDock />
      </div>
    </div>
  );
}