import svgPaths from "../imports/svg-q6aejxki18";

function AccessorySymbol() {
  return (
    <div className="h-[35.264px] relative shrink-0 w-[20.277px]" data-name="Accessory Symbol">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 36">
        <g id="Accessory Symbol">
          <g id="Vector">
            <path d={svgPaths.pf8dd500} fill="#7F7F7F" fillOpacity="0.4" style={{ mixBlendMode: "luminosity" }} />
            <path d={svgPaths.pf8dd500} fill="#C2C2C2" fillOpacity="0.5" style={{ mixBlendMode: "overlay" }} />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p2c117380} fill="#7F7F7F" fillOpacity="0.45" style={{ mixBlendMode: "luminosity" }} />
            <path d={svgPaths.p2c117380} fill="#C2C2C2" style={{ mixBlendMode: "overlay" }} />
          </g>
        </g>
      </svg>
    </div>
  );
}

function TextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[11.208px] items-start leading-[13.794px] not-italic relative shrink-0 text-[12.932px] w-full" data-name="Text Container">
      <div className="font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[#c2c2c2] w-full">
        <p className="[white-space-collapse:collapse] mb-0">Digital Home</p>
      </div>
      <p className="[white-space-collapse:collapse] font-['SF_Pro_Text:Semibold',sans-serif] relative shrink-0 text-white w-full">Lights</p>
      <p className="[white-space-collapse:collapse] font-['SF_Pro_Text:Regular',sans-serif] relative shrink-0 text-[#c2c2c2] w-full">100%</p>
    </div>
  );
}

export function LightToggleWidget() {
  return (
    <div className="bg-[rgba(0,0,0,0)] relative rounded-[18.967px] size-full" data-name="Widget Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[13.794px] relative size-full">
          <div className="absolute left-0 size-[158px] top-0" data-name="Background">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[rgba(37,37,37,0)] inset-0" />
              <div className="absolute backdrop-blur-[50px] backdrop-filter bg-[rgba(156,156,156,0)] inset-0 mix-blend-overlay" />
            </div>
          </div>
          <AccessorySymbol />
          <TextContainer />
        </div>
      </div>
    </div>
  );
}