import File2 from "../imports/File2";
import ClincFile from "../imports/File2-16-4190";
import GoZotGoFile from "../imports/File3";
import ComingSoonFile from "../imports/File4";

interface FilesWidgetProps {
  onSkintelClick?: () => void;
  onGoZotGoClick?: () => void;
}

export function FilesWidget({ onSkintelClick, onGoZotGoClick }: FilesWidgetProps) {
  return (
    <div className="relative w-full h-full rounded-[26.318px] overflow-visible shadow-[0px_3.448px_3.448px_0px_rgba(0,0,0,0.25)]">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 backdrop-blur-[69.379px] bg-[rgba(7,9,8,0.67)] rounded-[26.318px]" />
      
      {/* Projects Grid - 2x2 layout */}
      <div className="relative grid grid-cols-2 gap-[10px] p-[9.57px] h-full">
        {/* Top Left: Skintel - Using exact Figma import */}
        <div className="relative">
          <File2 onClick={onSkintelClick} />
        </div>

        {/* Top Right: Clinc - Using exact Figma import */}
        <div className="relative">
          <ClincFile />
        </div>

        {/* Bottom Left: Go, Zot, Go! - Using exact Figma import */}
        <div className="relative overflow-visible">
          <GoZotGoFile onClick={onGoZotGoClick} />
        </div>

        {/* Bottom Right: COMING SOON - Using exact Figma import */}
        <ComingSoonFile />
      </div>
    </div>
  );
}