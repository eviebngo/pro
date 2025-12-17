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
    <div className="relative w-full min-h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* Wallpaper Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${wallpaper}')`,
          transform: 'scaleX(-1)'
        }}
      />

      {/* Main Content - Matching original Mac1 proportions */}
      <div className="relative w-[1920px] h-[1080px] scale-[0.8] origin-center">
        {/* Profile Widget - Top left with 5px padding */}
        <div className="absolute flex h-[218.978px] items-center justify-center left-[5px] top-[5px] w-[407.782px]">
          <ProfileWidget />
        </div>

        {/* Files/Projects Widget - Below Profile (bento grid) */}
        <div className="absolute flex h-[189.008px] items-center justify-center left-[5px] top-[235px] w-[404.334px]">
          <FilesWidget />
        </div>

        {/* Music/Spotify Widget - Below Files/Projects widget */}
        <div className="absolute flex h-[115.524px] items-center justify-center left-[5px] top-[436px] w-[247.133px]">
          <SpotifyWidget />
        </div>

        {/* Light/Dark Mode Toggle Widget - Right of Spotify */}
        <div className="absolute flex items-center justify-center left-[264px] size-[136.215px] top-[440px]">
          <LightToggleWidget />
        </div>

        {/* Location/Map Widget - Top right */}
        <div className="absolute flex h-[136.215px] items-center justify-center left-[840px] top-[26px] w-[291.396px]">
          <LocationWidget />
        </div>

        {/* Reminders Widget - Under Location/Maps widget */}
        <div className="absolute flex h-[305.19px] items-center justify-center left-[840px] top-[160px] w-[291.396px]">
          <ReminderWidget />
        </div>

        {/* Quote Widget - Below Reminders, aligned right */}
        <div className="absolute flex items-center justify-end left-[840px] top-[480px] w-[291.396px]">
          <div className="size-[136.215px] flex items-center justify-center">
            <QuoteWidget />
          </div>
        </div>

        {/* Calendar Widget - Top right area */}
        <div className="absolute flex items-center justify-center left-[681.79px] size-[136.215px] top-[26px]">
          <CalendarWidget />
        </div>

        {/* Dock/Navbar - Bottom center */}
        <div className="absolute bottom-[20px] left-1/2 transform -translate-x-1/2 w-[320px] h-[70px]">
          <Navbar />
        </div>
      </div>
    </div>
  );
}