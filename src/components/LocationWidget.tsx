import imgMap from 'figma:asset/321d246a214b9fe043e9a1d7ce50d532371d5969.png';
import imgContactPhoto from 'figma:asset/c9c6e0d8191cc1583f6734e4f0cf3bb84983d05a.png';

export function LocationWidget() {
  return (
    <div className="bg-[rgba(0,0,0,0)] h-[136.215px] relative rounded-[14.656px] w-[291.396px]">
      <div className="absolute backdrop-blur-[50px] h-[136.215px] left-0 overflow-clip right-0 rounded-[18.967px] top-0 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        {/* Map Background */}
        <div className="absolute h-[158px] left-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-0 w-[338px]">
          <div className="absolute inset-0 opacity-[0.85] overflow-hidden pointer-events-none">
            <img 
              alt="Map" 
              className="absolute h-[196.13%] left-[-0.22%] max-w-none top-[-46.76%] w-[140.53%]" 
              src={imgMap} 
            />
          </div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute bg-gradient-to-b from-[66.138%] from-[rgba(48,63,84,0)] h-[158px] left-0 to-[#303f54] top-0 w-[338px]" />
        <div className="absolute blur-[0.35px] filter h-[56px] left-0 top-[102px] w-[338px]" />

        {/* Location Overlay Circle */}
        <div className="absolute bottom-[48.28px] left-[122.42px] size-[28.45px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
            <g>
              <circle cx="14.225" cy="14.225" fill="#2a5d45" r="14.225" style={{ fillOpacity: 1 }} />
              <circle cx="14.225" cy="14.225" r="13.7939" stroke="white" strokeWidth="0.862119" style={{ strokeOpacity: 0.8 }} />
            </g>
          </svg>
        </div>

        {/* Contact Pin/Avatar */}
        <div className="absolute left-[127.78px] size-[17.242px] top-[54.83px]">
          <div className="absolute inset-[-50%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 26">
              <g filter="url(#filter0_d_contact)">
                <circle cx="12.9316" cy="12.9316" fill="url(#paint0_linear_contact)" r="8.62119" shapeRendering="crispEdges" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="25.863" id="filter0_d_contact" width="25.863" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="4.31059" />
                  <feGaussianBlur stdDeviation="2.1553" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_contact" />
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_contact" mode="normal" result="shape" />
                </filter>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_contact" x1="12.9316" x2="12.9316" y1="4.31059" y2="21.5527">
                  <stop stopColor="#555555" />
                  <stop offset="1" stopColor="#222222" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="absolute inset-[17.39%]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-full">
              <img 
                alt="Contact" 
                className="absolute h-[118.36%] left-[-7.22%] max-w-none top-[-13.13%] w-[116.67%]" 
                src={imgContactPhoto} 
              />
            </div>
          </div>
        </div>

        {/* Location Text - Top */}
        <div className="absolute flex flex-col font-['SF_Pro_Text',sans-serif] h-[6.897px] justify-center leading-[0] left-[13.79px] not-italic overflow-ellipsis overflow-hidden text-[10.345px] text-white top-[118.97px] tracking-[-0.2586px] translate-y-[-50%] w-[263.808px]">
          <p className="leading-[13.794px] drop-shadow-md">LOS FELIZ</p>
        </div>

        {/* Address Text - Bottom */}
        <div className="absolute flex flex-col font-['SF_Pro_Text',sans-serif] h-[8.621px] justify-center leading-[13.794px] left-[13.79px] not-italic overflow-ellipsis overflow-hidden text-[12.07px] text-nowrap text-white top-[102.59px] tracking-[-0.2586px] translate-y-[-50%] w-[263.808px]">
          <p className="drop-shadow-lg">2899 Hyperion Ave</p>
        </div>
      </div>
    </div>
  );
}
