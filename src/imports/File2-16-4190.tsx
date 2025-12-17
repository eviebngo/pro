import imgGroup331 from "figma:asset/d40bc80770410c3a9c2fc96bd5bf523b85ee42e0.png";

function TextContainer() {
  return <div className="h-[31px] shrink-0 w-[7px]" data-name="Text Container" />;
}

function WhiteBlur() {
  return (
    <div className="absolute left-1/2 top-[13px] -translate-x-1/2 w-[46px]">
      <div className="h-[40.5px] relative w-[54px]">
        <div className="absolute inset-[-54.57%_-40.93%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 85">
            <g filter="url(#filter0_f_clinc)" id="Vector 57">
              <path d="M22.1 22.1C22.1 22.1 35.8 13.8 49.1 22.1C62.4 30.4 76.1 22.1 76.1 22.1V62.6C76.1 62.6 62.4 70.9 49.1 62.6C35.8 54.3 22.1 62.6 22.1 62.6V22.1Z" fill="#D9D9D9" fillOpacity="0.18" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="84.7" id="filter0_f_clinc" width="98.2" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_clinc" stdDeviation="11.05" />
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
    <div className="relative rounded-[16.748px] size-full" data-name="File 2">
      {/* Glassmorphism background - matching ProfileWidget */}
      <div className="absolute inset-0 backdrop-blur-[50px] bg-[rgba(28,28,30,0.29)] rounded-[16.748px] border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]" />
      <WhiteBlur />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8.374px] items-center px-[8.374px] py-[10.766px] relative size-full">
          <TextContainer />
          <div className="bg-clip-text bg-gradient-to-r flex flex-col font-['SF_Pro_Text:Regular',sans-serif] from-[#16259a] from-[8.502%] justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-nowrap to-[#ffffff] to-[87.5%] tracking-[0.1196px]" style={{ WebkitTextFillColor: "transparent" }}>
            <p className="leading-[1.4] whitespace-pre">Clinc</p>
          </div>
          <TextContainer />
          <div className="h-[58px] relative shrink-0 w-[89px]" data-name="Group 33 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGroup331} />
          </div>
          <TextContainer />
        </div>
      </div>
    </div>
  );
}