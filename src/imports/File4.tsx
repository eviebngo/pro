import comingSoonImage from '../assets/coming soon.png';

function TextContainer() {
  return <div className="h-[31px] shrink-0 w-[7px]" data-name="Text Container" />;
}

interface FileProps {
  onClick?: () => void;
}

export default function File({ onClick }: FileProps) {
  return (
    <div 
      className="relative rounded-[16.748px] size-full cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]" 
      data-name="File 4"
      onClick={onClick}
    >
      {/* Glassmorphism background - matching ProfileWidget and File2 */}
      <div className="absolute inset-0 backdrop-blur-[50px] bg-[rgba(28,28,30,0.29)] rounded-[16.748px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]" />
      
      {/* Coming Soon Image - Centered */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={comingSoonImage}
          alt="Coming Soon"
          className="max-w-[25%] max-h-[25%] object-contain"
        />
      </div>
    </div>
  );
}