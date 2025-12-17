function Frame() {
  return <div className="bg-[rgba(168,168,168,0.18)] h-[58.5px] rounded-[3.3px] shadow-[0px_0.6px_0.6px_0px_rgba(0,0,0,0.25)] w-[90.75px]" />;
}

function ComingSoon() {
  return (
    <div className="absolute h-[124.8px] left-[-3.81px] overflow-clip top-[-25.62px] w-[192px]" data-name="COMING SOON">
      {/* COM */}
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[3.3px] left-[18.3px] text-[#eae7e2] text-[30px] top-[42.3px] tracking-[0.45px]">
        COM<span className="text-[rgba(234,231,226,0)]">I</span>
      </p>
      
      {/* ING */}
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[3.3px] left-[90.9px] text-[#eae7e2] text-[30px] top-[42.3px] tracking-[0.45px]">
        ING
      </p>
      
      {/* SOON */}
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[3.3px] left-[80.1px] text-[#eae7e2] text-[30px] top-[82.2px] tracking-[0.45px]">
        SOON
      </p>
      
      {/* Rotated frames */}
      <div className="absolute flex h-[80.479px] items-center justify-center left-[44.55px] top-[35.4px] w-[103.018px]" style={{ "--transform-inner-width": "90.75", "--transform-inner-height": "58.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[344.616deg]">
          <Frame />
        </div>
      </div>
      
      <div className="absolute flex h-[87.501px] items-center justify-center left-[-18px] top-[-40.2px] w-[105.812px]" style={{ "--transform-inner-width": "90.75", "--transform-inner-height": "58.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[21.329deg]">
          <Frame />
        </div>
      </div>
      
      <div className="absolute flex h-[94.605px] items-center justify-center left-[135.15px] top-[81.6px] w-[107.649px]" style={{ "--transform-inner-width": "90.75", "--transform-inner-height": "58.5" } as React.CSSProperties}>
        <div className="flex-none rotate-[28.381deg]">
          <Frame />
        </div>
      </div>
      
      {/* Description text */}
      <p className="absolute font-['SF_Compact:Medium',sans-serif] font-[556] leading-[3.6px] left-[187.65px] text-[#e8e5dd] text-[3px] text-nowrap text-right top-[10.35px] translate-x-[-100%] whitespace-pre">WEBSITE REDESIGN WITH INTENTION</p>
      <p className="absolute font-['SF_Compact:Medium',sans-serif] font-[556] leading-[3.6px] left-[53.2px] text-[#e8e5dd] text-[3px] text-nowrap text-right top-[110.7px] translate-x-[-100%] whitespace-pre">{`VISUAL & USER CENTRIC REVAMP`}</p>
      <p className="absolute font-['SF_Compact:Medium',sans-serif] font-[556] leading-[3.6px] left-[186.8px] text-[#e8e5dd] text-[3px] text-nowrap text-right top-[16.5px] translate-x-[-100%] whitespace-pre">EXPECTED JAN 2025</p>
    </div>
  );
}

function ImageContainer() {
  return <div className="absolute h-[58.616px] left-[204.75px] top-[10.77px] w-[61.009px]" data-name="Image Container" />;
}

function WhiteBlur() {
  return (
    <div className="absolute left-1/2 top-[13px] -translate-x-1/2 w-[46px]">
      <div className="h-[40.5px] relative w-[54px]">
        <div className="absolute inset-[-54.57%_-40.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 85">
            <g filter="url(#filter0_f_comingsoon)" id="Vector 57">
              <path d="M22.1 22.1C22.1 22.1 35.8 13.8 49.1 22.1C62.4 30.4 76.1 22.1 76.1 22.1V62.6C76.1 62.6 62.4 70.9 49.1 62.6C35.8 54.3 22.1 62.6 22.1 62.6V22.1Z" fill="#D9D9D9" fillOpacity="0.18" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="84.7" id="filter0_f_comingsoon" width="98.2" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_comingsoon" stdDeviation="11.05" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function File() {
  return (
    <div className="relative rounded-[16.748px] size-full" data-name="File 4">
      {/* Glassmorphism background - matching ProfileWidget and ReminderWidget */}
      <div className="absolute inset-0 backdrop-blur-[50px] bg-[rgba(28,28,30,0.29)] rounded-[16.748px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]" />
      <WhiteBlur />
      
      <div className="relative overflow-clip size-full rounded-[16.748px]">
        <ComingSoon />
        <ImageContainer />
      </div>
    </div>
  );
}