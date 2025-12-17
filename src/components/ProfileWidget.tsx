import imgEllipse1 from 'figma:asset/e51e634268304fd0cd69d32e19d2ab2c45e4ce66.png';

export function ProfileWidget() {
  return (
    <div className="bg-[rgba(159,159,159,0.07)] backdrop-blur-[50px] h-[218.978px] overflow-clip relative rounded-[12.932px] w-[407.782px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
      {/* Profile Image */}
      <div className="absolute left-[22px] size-[65px] top-[21px]">
        <div className="absolute inset-[-19.5%_-24.8%_-30.11%_-24.8%]">
          <img 
            alt="Profile" 
            className="block max-w-none size-full rounded-full shadow-lg" 
            height="97.243" 
            src={imgEllipse1} 
            width="97.243" 
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute content-stretch flex flex-col h-[93.109px] items-start left-[21.55px] top-[78.45px] w-[364.676px]">
        <div className="content-stretch flex flex-col gap-[7.759px] items-start leading-[normal] not-italic relative shrink-0 w-full">
          <div className="text-shadow-[#000000_0.862px_1.724px_5.776px] font-['Inter',sans-serif] relative shrink-0 text-[17.242px] text-white w-full drop-shadow-lg">
            <p className="mb-0">&nbsp;</p>
            <p>Evie — Product Designer</p>
          </div>
          <p className="text-shadow-[#000000_0px_0px_5.69px] font-['Inter',sans-serif] relative shrink-0 text-[#b4b4b4] text-[15.518px] w-full drop-shadow-md">
            Creating memorable digital experiences through design and intuition
          </p>
        </div>
      </div>

      {/* Available for Work Badge */}
      <div className="absolute content-stretch flex gap-[7.759px] items-center left-[21.55px] top-[178.46px]">
        <div className="relative shrink-0 size-[9.483px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <circle cx="4.74165" cy="4.74165" fill="#4CA53E" r="4.74165" />
          </svg>
        </div>
        <p className="text-shadow-[rgba(0,0,0,0.2)_0px_3.448px_4.138px] font-['Inter',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#777777] text-[15.518px] text-nowrap whitespace-pre drop-shadow-md">
          Available for work
        </p>
      </div>
    </div>
  );
}
