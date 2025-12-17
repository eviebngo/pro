import { CalendarWidget } from './components/CalendarWidget';
import { SpotifyWidget } from './components/SpotifyWidget';
import { ReminderWidget } from './components/ReminderWidget';
import { ProfileWidget } from './components/ProfileWidget';
import { LocationWidget } from './components/LocationWidget';
import { FilesWidget } from './components/FilesWidget';
import { ClockWidget } from './components/ClockWidget';
import { QuoteWidget } from './components/QuoteWidget';
import { LightToggleWidget } from './components/LightToggleWidget';
import { Navbar } from './components/Navbar';
import wallpaper from 'figma:asset/ef2a1d0434136ea93ccce8c980422c08e4cd14e3.png';

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center" style={{ margin: 0, padding: 0 }}>
      {/* Wallpaper Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${wallpaper}')`,
          transform: 'scaleX(-1)'
        }}
      />

      {/* Top Navbar - Apple inspired - Outside scaled container */}
      <div className="fixed z-50" style={{ top: 0, left: 0, right: 0, margin: 0, padding: 0 }}>
        <Navbar />
      </div>

      {/* Main Content - Matching original Mac1 proportions */}
      <div className="relative w-[1920px] h-[1080px] scale-[0.8] origin-center">
        {/* Profile Widget - Top left with 5px padding */}
        <div style={{ position: 'absolute', top: '5px', left: '-100px', width: '407.782px', height: '218.978px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ProfileWidget />
        </div>

        {/* Files/Projects Widget - Below Profile (bento grid) */}
        <div style={{ position: 'absolute', top: '235px', left: '-100px', width: '404.334px', height: '189.008px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FilesWidget />
        </div>

        {/* Music/Spotify Widget - Below Files/Projects widget */}
        <div style={{ position: 'absolute', top: '436px', left: '-100px', width: '247.133px', height: '115.524px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <SpotifyWidget />
        </div>

        {/* Light/Dark Mode Toggle Widget - Right of Profile */}
        <div style={{ position: 'absolute', top: '5px', left: '320px', width: '136.215px', height: '136.215px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LightToggleWidget />
        </div>

        {/* Location/Map Widget - Top right */}
        <div style={{ position: 'absolute', top: '26px', left: '1250px', width: '291.396px', height: '136.215px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LocationWidget />
        </div>

        {/* Reminders Widget - Under Location/Maps widget */}
        <div style={{ position: 'absolute', top: '30px', left: '1250px', width: '291.396px', height: '305.19px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
          <ReminderWidget />
        </div>

        {/* Quote Widget - Below Reminders, aligned right */}
        <div style={{ position: 'absolute', top: '500px', left: '1405px', width: '136.215px', height: '136.215px', zIndex: 5, transform: 'none' }}>
          <QuoteWidget />
        </div>

        {/* Calendar Widget - Top right area */}
        <div style={{ position: 'absolute', top: '26px', left: '1100px', width: '136.215px', height: '136.215px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <CalendarWidget />
        </div>

      </div>
    </div>
  );
}