import React from "react";
import svgPaths from "../imports/svg-vpp7ttfaou";

type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={`absolute ${additionalClassNames}`}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 54 54">
        {children}
      </svg>
    </div>
  );
}

export function BottomDock() {
  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 z-50" style={{ bottom: '20px' }}>
      <div className="relative rounded-[12.07px] shadow-[0px_3.448px_5.69px_0px_rgba(0,0,0,0.25)] backdrop-blur-[50px] border border-white/2" style={{ width: '450px', height: '95px', WebkitBackdropFilter: 'blur(50px)', backgroundColor: 'rgba(0, 0, 0, 0.005)', opacity: 0.95 }}>
        <div className="size-full">
          <div className="content-stretch flex items-center justify-center p-[15px] relative size-full">
            <div className="content-stretch flex gap-[23.277px] items-center relative shrink-0">
            {/* Home Icon - First */}
            <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none">
                  <div className="relative" style={{ width: '65px', height: '65px' }} data-name="Home">
                    <Wrapper additionalClassNames="inset-[-10.44%_-19.33%_-28.22%_-19.33%]">
                        <g filter="url(#filter0_d_1_109)" id="Home">
                          <g clipPath="url(#clip0_1_109)">
                            <rect fill="var(--fill-0, black)" fillOpacity="0.01" height="38.7954" rx="8.62119" shapeRendering="crispEdges" width="38.7954" x="7.50044" y="4.05196" />
                            {/* White triangular vectors on diagonal sides - rendered first (behind) */}
                            <g filter="url(#filter_triangle1_1_109)" id="Triangle Top Left Home">
                              <path d="M7.50044 4.05196 L20.00044 4.05196 L7.50044 20.05196 Z" fill="white" fillOpacity="0.8" />
                            </g>
                            <g filter="url(#filter_triangle2_1_109)" id="Triangle Bottom Right Home">
                              <path d="M46.29584 42.84736 L33.79584 42.84736 L46.29584 26.84736 Z" fill="white" fillOpacity="0.8" />
                            </g>
                            <g transform="translate(2, 1)">
                              <g filter="url(#filter1_f_1_109)" id="Vector 6" opacity="0.43">
                                <path d={svgPaths.p351ef800} fill="var(--fill-0, white)" fillOpacity="0.77" />
                              </g>
                              <g filter="url(#filter2_f_1_109)" id="Vector 26">
                                <path d="M36.0365 34.3124H13.6214" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeOpacity="0.47" strokeWidth="4.3106" />
                              </g>
                              <g filter="url(#filter3_i_1_109)" id="Group 1">
                                <g filter="url(#filter4_di_1_109)" id="Vector 1" opacity="0.43">
                                  <path d={svgPaths.p2efb3e00} fill="var(--fill-0, #939393)" fillOpacity="0.9" shapeRendering="crispEdges" />
                                </g>
                                <g filter="url(#filter5_di_1_109)" id="Vector 2" opacity="0.43">
                                  <path d={svgPaths.p89b7900} fill="var(--fill-0, #BFBFBF)" />
                                </g>
                                <g filter="url(#filter6_i_1_109)" id="Vector 3" opacity="0.43">
                                  <path d={svgPaths.p2578cb00} fill="var(--fill-0, #DFDFDF)" />
                                </g>
                                <g filter="url(#filter7_i_1_109)" id="Vector 4" opacity="0.43">
                                  <path d={svgPaths.p32182600} fill="var(--fill-0, #EFEFEF)" fillOpacity="0.62" />
                                </g>
                                <g filter="url(#filter8_i_1_109)" id="Vector 5" opacity="0.43">
                                  <path d={svgPaths.p3db08e80} fill="var(--fill-0, white)" fillOpacity="0.5" />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50.5202" id="filter0_d_1_109" width="50.5202" x="0" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="3.44848" />
                            <feGaussianBlur stdDeviation="2.9312" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_109" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_109" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="32.6993" id="filter1_f_1_109" width="35.0247" x="7.24174" y="4.65545">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_109" stdDeviation="1.03454" edgeMode="duplicate" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.6215" id="filter2_f_1_109" width="36.0366" x="6.81068" y="27.5016">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_109" stdDeviation="2.32772" edgeMode="duplicate" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="27.699" id="filter3_i_1_109" width="31.7465" x="7.5866" y="6.72454">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-2.58636" dy="-0.862119" />
                            <feGaussianBlur stdDeviation="3.83643" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_109" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="29.0126" id="filter4_di_1_109" width="31.3359" x="9.08509" y="7.58666">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="1.08786" />
                            <feGaussianBlur stdDeviation="0.543932" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_109" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_109" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="1.4656" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="shape" mode="normal" result="effect2_innerShadow_1_109" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="24.9715" id="filter5_di_1_109" width="20.9424" x="14.3845" y="9.58788">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="1.08786" />
                            <feGaussianBlur stdDeviation="0.543932" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_109" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_109" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-0.862119" dy="-0.862119" />
                            <feGaussianBlur stdDeviation="0.819013" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="shape" mode="normal" result="effect2_innerShadow_1_109" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="18.1817" id="filter6_i_1_109" width="15.4621" x="16.8732" y="12.2983">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-0.862119" dy="-0.862119" />
                            <feGaussianBlur stdDeviation="0.387954" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_109" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.2864" id="filter7_i_1_109" width="11.1106" x="18.776" y="14.746">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-0.862119" dy="-0.862119" />
                            <feGaussianBlur stdDeviation="0.387954" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_109" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="8.66293" id="filter8_i_1_109" width="7.57506" x="20.6798" y="17.4656">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-0.862119" dy="-0.862119" />
                            <feGaussianBlur stdDeviation="0.387954" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_109" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="100" id="filter_triangle1_1_109" width="100" x="-30" y="-30">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_109" stdDeviation="12" edgeMode="duplicate" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="100" id="filter_triangle2_1_109" width="100" x="-5" y="7">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_109" stdDeviation="12" edgeMode="duplicate" />
                          </filter>
                          <clipPath id="clip0_1_109">
                            <rect fill="white" height="38.7954" rx="8.62119" width="38.7954" x="7.50044" y="4.05196" />
                          </clipPath>
                        </defs>
                    </Wrapper>
                  </div>
                </div>
              </div>
              {/* Project Icon - Second */}
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none">
                  <div className="relative" style={{ width: '65px', height: '65px' }} data-name="Project" data-version="v4">
                    <Wrapper additionalClassNames="inset-[-10.44%_-19.33%_-28.22%_-19.33%]">
                        <g filter="url(#filter0_d_1_119)" id="Project">
                          <g clipPath="url(#clip0_1_119)">
                            <rect fill="var(--fill-0, black)" fillOpacity="0.01" height="38.7954" rx="8.62119" shapeRendering="crispEdges" width="38.7954" x="7.50044" y="4.05196" />
                            <g transform="translate(-2.0, -2.0)">
                              <g id="Frame 26">
                                <path d="M 18.85 19.3 L 37.15 19.3 Q 37.5 19.3 37.5 19.65 L 37.5 20 L 18.5 20 L 18.5 19.65 Q 18.5 19.3 18.85 19.3 Z" fill="url(#whiteGradient_1_119)" />
                              </g>
                              <g filter="url(#filter3_i_1_119)" id="Rectangle 3">
                                <path d={svgPaths.pfd2ef80} fill="#6a6a6a" fillOpacity="1" />
                              </g>
                              <g filter="url(#filter4_d_1_119_v3)" id="Vector 6">
                                <path d={svgPaths.p3beb6700} fill="#7a7a7a" fillOpacity="1" shapeRendering="crispEdges" style={{ mixBlendMode: 'normal' }} />
                              </g>
                              <g filter="url(#filter5_d_1_119)" id="Frame 29">
                                <g clipPath="url(#clip1_1_119)">
                                  <path d={svgPaths.p2fe85800} fill="#9a9a9a" fillOpacity="0.8" shapeRendering="crispEdges" />
                                  <g filter="url(#filter6_f_1_119)" id="Vector 7">
                                    <path d={svgPaths.p2d05b200} fill="#cccccc" fillOpacity="0.9" />
                                    <path d={svgPaths.p2d05b200} stroke="#cccccc" strokeOpacity="0.9" strokeWidth="0.890137" />
                                  </g>
                                </g>
                              </g>
                              <g filter="url(#filter2_f_1_119)" id="Vector 8">
                                <path d={svgPaths.p2f305100} stroke="#555555" strokeOpacity="0.8" strokeWidth="2" />
                              </g>
                              <g filter="url(#filter7_f_1_119)" id="L Triangle Bottom Right">
                                <path d="M 46.3 42.8 L 46.3 26 L 30 42.8 Z" fill="#222222" fillOpacity="0.95" />
                              </g>
                            </g>
                            {/* White triangular vectors on diagonal sides */}
                            <g filter="url(#filter4_f_1_119)" id="Triangle Top Left">
                              <path d="M4.5 4.05 L17 4.05 L4.5 20 Z" fill="white" fillOpacity="0.8" />
                            </g>
                            <g filter="url(#filter5_f_1_119)" id="Triangle Bottom Right">
                              <path d="M43.3 42.85 L30.8 42.85 L43.3 26.7 Z" fill="white" fillOpacity="0.8" />
                            </g>
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="57.4171" id="filter0_d_1_119" width="57.4171" x="0" y="2.38419e-07">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="3.44848" />
                            <feGaussianBlur stdDeviation="4.65544" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_119" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_119" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1.35032" id="filter1_i_1_119" width="24.7055" x="16.5516" y="17.3731">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="-0.337581" dy="-0.675162" />
                            <feGaussianBlur stdDeviation="0.675162" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_119" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="50" id="filter2_f_1_119" width="50" x="-3" y="-3">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_119" stdDeviation="4" edgeMode="duplicate" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="0.862119" id="filter3_i_1_119" width="21.553" x="17.9321" y="18.7942">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feMorphology in="SourceAlpha" operator="dilate" radius="2.02784" result="effect1_innerShadow_1_119" />
                            <feOffset dx="-3.04176" dy="-3.04176" />
                            <feGaussianBlur stdDeviation="1.21671" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.9 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_119" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40" id="filter4_d_1_119" width="45" x="8" y="8">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="0.890137" dy="0.890137" />
                            <feGaussianBlur stdDeviation="5" edgeMode="duplicate" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_119" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_119" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="40" id="filter4_d_1_119_v3" width="45" x="8" y="8">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="0.890137" dy="0.890137" />
                            <feGaussianBlur stdDeviation="5" edgeMode="duplicate" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_119" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_119" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35" id="filter5_d_1_119" width="45" x="8" y="12">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="0.890137" dy="0.890137" />
                            <feGaussianBlur stdDeviation="5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_119" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_119" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.2072" id="filter6_f_1_119" width="30.3007" x="14.5921" y="17.2189">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_119" stdDeviation="4" edgeMode="duplicate" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="100" id="filter4_f_1_119" width="100" x="-30" y="-30">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_119" stdDeviation="12" edgeMode="duplicate" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="100" id="filter5_f_1_119" width="100" x="-5" y="7">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_119" stdDeviation="12" edgeMode="duplicate" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter7_f_1_119" width="20" x="32" y="28">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_119" stdDeviation="15" edgeMode="duplicate" />
                          </filter>
                          <linearGradient gradientUnits="userSpaceOnUse" id="whiteGradient_1_119" x1="18.5" x2="37.5" y1="19.65" y2="19.65">
                            <stop stopColor="#ffffff" stopOpacity="0.9" />
                            <stop offset="0.5" stopColor="#ffffff" stopOpacity="0.7" />
                            <stop offset="1" stopColor="#ffffff" stopOpacity="0.9" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_119" x1="15.5483" x2="42.2789" y1="25.3522" y2="25.5449">
                            <stop stopColor="#474747" />
                            <stop offset="0.480769" stopColor="#868686" />
                            <stop offset="1" stopColor="#939393" />
                          </linearGradient>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_119" x1="15.5483" x2="42.2697" y1="27.6811" y2="27.9212">
                            <stop stopColor="#5A5A5A" />
                            <stop offset="0.480769" stopColor="#989898" />
                            <stop offset="1" stopColor="#9D9D9D" />
                          </linearGradient>
                          <clipPath id="clip0_1_119">
                            <rect fill="white" height="38.7954" rx="8.62119" width="38.7954" x="7.50044" y="4.05196" />
                          </clipPath>
                          <clipPath id="clip1_1_119">
                            <path d={svgPaths.p2fe85800} fill="white" />
                          </clipPath>
                        </defs>
                    </Wrapper>
                  </div>
                </div>
              </div>
              {/* App Icon - Third */}
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none">
                  <div className="relative" style={{ width: '65px', height: '65px' }} data-name="App Icon">
                    <Wrapper additionalClassNames="inset-[-10.44%_-19.33%_-28.22%_-19.33%]">
                      <g filter="url(#filter0_d_1_145)" id="App Icon">
                        <g clipPath="url(#clip0_1_145)">
                          <rect fill="url(#paint0_linear_1_145)" fillOpacity="0.33" height="38.7954" rx="8.62119" shapeRendering="crispEdges" width="38.7954" x="7.50044" y="4.05196" />
                          <path d={svgPaths.p1b7d1580} fill="url(#paint1_radial_1_145)" id="Vector" opacity="0.5" />
                          <g id="Vector_2">
                            <path d={svgPaths.p123af600} fill="url(#paint2_linear_1_145)" fillOpacity="0.6" />
                            <path d={svgPaths.pfaf7c00} stroke="var(--stroke-0, white)" strokeOpacity="0.6" strokeWidth="0.705603" />
                          </g>
                          <path d={svgPaths.p26ef7300} fill="url(#paint3_radial_1_145)" id="Ellipse 39" />
                          <g filter="url(#filter1_d_1_145)" id="Ellipse 37">
                            <circle cx="26.6288" cy="23.0392" fill="var(--fill-0, black)" r="3.63827" />
                            <circle cx="26.6288" cy="23.0392" r="2.93266" stroke="var(--stroke-0, white)" strokeWidth="1.41121" />
                          </g>
                          <g filter="url(#filter2_f_1_145)" id="Vector 19">
                            <path d={svgPaths.p3d45fb00} stroke="var(--stroke-0, black)" strokeWidth="1.72424" />
                          </g>
                          <g filter="url(#filter3_f_1_145)" id="Vector 20">
                            <path d={svgPaths.p3c7a1200} stroke="var(--stroke-0, black)" strokeWidth="1.72424" />
                          </g>
                          <g filter="url(#filter4_df_1_145)" id="Vector 24">
                            <path d={svgPaths.p3053fc00} shapeRendering="crispEdges" stroke="var(--stroke-0, black)" strokeOpacity="0.4" strokeWidth="1.29318" />
                          </g>
                          <g filter="url(#filter5_df_1_145)" id="Vector 25">
                            <path d={svgPaths.p39582f00} shapeRendering="crispEdges" stroke="var(--stroke-0, black)" strokeOpacity="0.4" strokeWidth="1.29318" />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="53.7962" id="filter0_d_1_145" width="53.7962" x="0" y="-2.38419e-07">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="3.44848" />
                          <feGaussianBlur stdDeviation="3.75022" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_145" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_145" mode="normal" result="shape" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.2977" id="filter1_d_1_145" width="13.2977" x="19.98" y="16.3903">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset />
                          <feGaussianBlur stdDeviation="1.50529" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_145" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_145" mode="normal" result="shape" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.3413" id="filter2_f_1_145" width="45.976" x="3.4534" y="0.307769">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_1_145" stdDeviation="4.87097" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="28.8482" id="filter3_f_1_145" width="54.2815" x="-0.0735583" y="-4.68455">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_1_145" stdDeviation="5.21582" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="29.8098" id="filter4_df_1_145" width="27.5587" x="-2.93004" y="23.4451">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="3.44848" />
                          <feGaussianBlur stdDeviation="1.72424" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_145" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_145" mode="normal" result="shape" />
                          <feGaussianBlur result="effect2_foregroundBlur_1_145" stdDeviation="3.27605" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="29.6849" id="filter5_df_1_145" width="29.8442" x="26.8597" y="24.4332">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dy="3.44848" />
                          <feGaussianBlur stdDeviation="1.72424" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_145" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_145" mode="normal" result="shape" />
                          <feGaussianBlur result="effect2_foregroundBlur_1_145" stdDeviation="3.27605" />
                        </filter>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_145" x1="26.8981" x2="26.8981" y1="42.8473" y2="4.05196">
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="#484848" />
                        </linearGradient>
                        <radialGradient cx="0" cy="0" gradientTransform="translate(26.7078 23.0391) rotate(130.211) scale(12.3911)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_145" r="1">
                          <stop stopColor="#F3F3F3" />
                          <stop offset="1" stopColor="#BEBEBE" />
                        </radialGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_145" x1="26.7078" x2="26.7078" y1="14.0074" y2="32.0708">
                          <stop stopColor="#EEEEEE" />
                          <stop offset="1" stopColor="#BBBBBB" />
                        </linearGradient>
                        <radialGradient cx="0" cy="0" gradientTransform="translate(26.6288 23.1802) rotate(-90) scale(14.8177)" gradientUnits="userSpaceOnUse" id="paint3_radial_1_145" r="1">
                          <stop offset="0.375866" stopColor="#494949" />
                          <stop offset="1" stopColor="#B1B0AD" stopOpacity="0" />
                        </radialGradient>
                        <clipPath id="clip0_1_145">
                          <rect fill="white" height="38.7954" rx="8.62119" width="38.7954" x="7.50044" y="4.05196" />
                        </clipPath>
                      </defs>
                    </Wrapper>
                  </div>
                </div>
              </div>
              {/* About Icon - Fourth */}
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none">
                  <div className="relative" style={{ width: '65px', height: '65px' }} data-name="About">
                    <Wrapper additionalClassNames="inset-[-10.44%_-19.33%_-28.22%_-19.33%]">
                      <g filter="url(#filter0_d_1_127)" id="About">
                        <g clipPath="url(#clip0_1_127)">
                          <rect fill="var(--fill-0, black)" fillOpacity="0.001" height="38.8" rx="8.62119" shapeRendering="crispEdges" width="38.8" x="7.5" y="4.05" />
                          <g filter="url(#filter1_d_1_127)" id="hooman" opacity="0.6">
                            <path d={svgPaths.p14b373c0} fill="url(#paint0_linear_1_127)" id="Ellipse 4" stroke="url(#paint1_linear_1_127)" strokeWidth="1.4232" />
                            <circle cx="26.6376" cy="15.5425" fill="url(#paint2_linear_1_127)" id="Ellipse 3" r="4.83888" stroke="url(#paint3_linear_1_127)" strokeWidth="1.70784" />
                            <path d={svgPaths.p1abfe8b2} fill="url(#paint4_linear_1_127)" id="Vector 11" stroke="url(#paint5_linear_1_127)" strokeWidth="1.4232" />
                            <path d={svgPaths.p1567bf80} fill="url(#paint6_linear_1_127)" id="Vector 10" stroke="url(#paint7_linear_1_127)" strokeWidth="1.4232" />
                            <path d={svgPaths.p9a22e00} fill="url(#paint8_linear_1_127)" id="Vector 9" stroke="url(#paint9_linear_1_127)" strokeWidth="1.4232" />
                          </g>
                          <g filter="url(#filter2_f_1_127)" id="Vector 13">
                            <path d={svgPaths.p3b07d800} fill="var(--fill-0, black)" />
                            <path d={svgPaths.p3b07d800} stroke="var(--stroke-0, #121212)" strokeWidth="1.72424" />
                          </g>
                          <g filter="url(#filter3_f_1_127)" id="Vector 14">
                            <path d={svgPaths.p1b272800} fill="var(--fill-0, black)" />
                            <path d={svgPaths.p1b272800} stroke="var(--stroke-0, #121212)" strokeWidth="1.72424" />
                          </g>
                          {/* White triangular vectors on diagonal sides */}
                          <g filter="url(#filter4_f_1_127)" id="Triangle Top Left">
                            <path d="M4.5 4.05 L17 4.05 L4.5 20 Z" fill="white" fillOpacity="0.8" />
                          </g>
                          <g filter="url(#filter5_f_1_127)" id="Triangle Bottom Right">
                            <path d="M43.3 42.85 L30.8 42.85 L43.3 26.7 Z" fill="white" fillOpacity="0.8" />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="53.1065" id="filter0_d_1_127" width="53.1065" x="0" y="0">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dx="0" dy="3.44848" />
                          <feGaussianBlur stdDeviation="3.5778" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_127" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_127" mode="normal" result="shape" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="35.6126" id="filter1_d_1_127" width="37.37" x="8.81477" y="8.12548">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dx="0.862119" dy="2.58636" />
                          <feGaussianBlur stdDeviation="2.1553" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_127" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_127" mode="normal" result="shape" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="47.4897" id="filter2_f_1_127" width="48.0588" x="-7.56324" y="9.39562">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_1_127" stdDeviation="7.88839" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="47.4897" id="filter3_f_1_127" width="48.0588" x="12.1799" y="-9.81358">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_1_127" stdDeviation="7.88839" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="100" id="filter4_f_1_127" width="100" x="-30" y="-30">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_1_127" stdDeviation="12" edgeMode="duplicate" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="100" id="filter5_f_1_127" width="100" x="-5" y="7">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                          <feGaussianBlur result="effect1_foregroundBlur_1_127" stdDeviation="12" edgeMode="duplicate" />
                        </filter>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_127" x1="26.6376" x2="26.6376" y1="18.9582" y2="26.9281">
                          <stop stopColor="#B5B5B5" />
                          <stop offset="1" stopColor="#4F4F4F" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_127" x1="26.6376" x2="26.6376" y1="18.9582" y2="26.9281">
                          <stop stopColor="#E1E1E1" />
                          <stop offset="1" stopColor="#999999" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_127" x1="26.6376" x2="26.6376" y1="9.84972" y2="21.2353">
                          <stop stopColor="#B5B5B5" />
                          <stop offset="1" stopColor="#4F4F4F" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_127" x1="26.6376" x2="26.6376" y1="9.84972" y2="21.2353">
                          <stop stopColor="#E1E1E1" />
                          <stop offset="1" stopColor="#999999" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_1_127" x1="38.5924" x2="14.6827" y1="28.6358" y2="28.6358">
                          <stop stopColor="#9A9A9A" />
                          <stop offset="0.5" stopColor="#696969" />
                          <stop offset="1" stopColor="#9A9A9A" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_1_127" x1="26.6376" x2="26.6376" y1="21.2351" y2="36.0364">
                          <stop stopColor="#E1E1E1" />
                          <stop offset="1" stopColor="#999999" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint6_linear_1_127" x1="38.5926" x2="38.5926" y1="26.1222" y2="30.6765">
                          <stop stopColor="#B5B5B5" />
                          <stop offset="1" stopColor="#4F4F4F" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint7_linear_1_127" x1="38.5926" x2="38.5926" y1="26.1222" y2="30.6765">
                          <stop stopColor="#E1E1E1" />
                          <stop offset="1" stopColor="#999999" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint8_linear_1_127" x1="14.6827" x2="14.6827" y1="25.7897" y2="30.3439">
                          <stop stopColor="#B5B5B5" />
                          <stop offset="1" stopColor="#4F4F4F" />
                        </linearGradient>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint9_linear_1_127" x1="14.6827" x2="14.6827" y1="25.7897" y2="30.3439">
                          <stop stopColor="#E1E1E1" />
                          <stop offset="1" stopColor="#999999" />
                        </linearGradient>
                        <clipPath id="clip0_1_127">
                          <rect fill="white" height="38.8" rx="8.62119" width="38.8" x="7.5" y="4.05" />
                        </clipPath>
                      </defs>
                    </Wrapper>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center relative shrink-0">
                <div className="flex-none">
                  <div className="relative" style={{ width: '65px', height: '65px' }} data-name="Connect">
                    <Wrapper additionalClassNames="inset-[-10.44%_-19.33%_-28.22%_-19.33%]">
                        <g filter="url(#filter0_d_1_137)" id="Connect">
                          <g clipPath="url(#clip0_1_137)">
                          <rect fill="var(--fill-0, black)" fillOpacity="0.001" height="38.8" rx="8.62119" shapeRendering="crispEdges" width="38.8" x="7.5" y="4.05" />
                            {/* Ellipses behind the frame */}
                            <g filter="url(#filter3_f_1_137)" id="Ellipse 6">
                              <path d={svgPaths.p2abfa200} fill="white" fillOpacity="0.3" />
                            </g>
                            <g filter="url(#filter4_f_1_137)" id="Ellipse 7">
                              <path d={svgPaths.p2e7e0af1} fill="white" fillOpacity="0.3" />
                            </g>
                            {/* Main content on top */}
                            <g filter="url(#filter1_di_1_137)" id="Frame 27">
                              <g clipPath="url(#clip1_1_137)">
                                <g transform="translate(27.05, 23.15) scale(1.15) translate(-27.05, -23.15)">
                                  <rect fill="url(#paint0_linear_1_137)" fillOpacity="0.45" height="18.1045" rx="1.81045" shapeRendering="crispEdges" width="25.3463" x="14.3758" y="14.2" />
                                  <path d={svgPaths.p2a802c80} fill="var(--fill-0, #D9D9D9)" fillOpacity="0.42" id="Vector 17" />
                                  <path d={svgPaths.pfb84bf2} fill="var(--fill-0, #C3C3C3)" fillOpacity="0.67" id="Vector 18" />
                                  <g filter="url(#filter2_i_1_137)" id="Vector 15">
                                    <path d={svgPaths.p22d98400} fill="var(--fill-0, black)" fillOpacity="0.84" />
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="55.6929" id="filter0_d_1_137" width="55.6929" x="-1.78814e-07" y="0">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dx="0.862119" dy="2.58636" />
                            <feGaussianBlur stdDeviation="4.224385" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_137" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_137" mode="normal" result="shape" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="22.7599" id="filter1_di_1_137" width="29.4845" x="12.3067" y="15.3457">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="1.72424" />
                            <feGaussianBlur stdDeviation="1.03454" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_137" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_137" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="-0.862119" />
                            <feGaussianBlur stdDeviation="0.603483" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="shape" mode="normal" result="effect2_innerShadow_1_137" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="23.5897" id="filter2_i_1_137" width="25.5726" x="14.3758" y="14.1711">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="3.44848" />
                            <feGaussianBlur stdDeviation="1.72424" />
                            <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0.836182 0 0 0 0 0.835145 0 0 0 0 0.835145 0 0 0 0.14 0" />
                            <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1_137" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="80" id="filter3_f_1_137" width="80" x="-15" y="-20">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_137" stdDeviation="5.21582" edgeMode="duplicate" />
                          </filter>
                          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="80" id="filter4_f_1_137" width="80" x="-5" y="-5">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                            <feGaussianBlur result="effect1_foregroundBlur_1_137" stdDeviation="5.21582" edgeMode="duplicate" />
                          </filter>
                          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_137" x1="36.8986" x2="15.7767" y1="17.07" y2="33.4502">
                            <stop stopColor="#494747" />
                            <stop offset="0.514423" stopColor="#4E4E4E" />
                            <stop offset="1" stopColor="#CFCFCF" />
                          </linearGradient>
                          <clipPath id="clip0_1_137">
                            <rect fill="white" height="38.8" rx="8.62119" width="38.8" x="7.5" y="4.05" />
                          </clipPath>
                          <clipPath id="clip1_1_137">
                            <rect fill="white" height="18.1045" rx="1.81045" width="25.3463" x="14.3758" y="14.2" />
                          </clipPath>
                        </defs>
                    </Wrapper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

