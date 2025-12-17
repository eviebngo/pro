import svgPaths from "./svg-sff8u9k38p";
import imgImage31 from "figma:asset/5acf6059b39d941df40d6d351b3c6412acf99736.png";
import imgImage29 from "figma:asset/2b2efe45b5ac54ab58e907ea681066fd7d363ba4.png";
import imgImage24 from "figma:asset/de67008bd30dc32634ebc3a17bc6770650cfbfc7.png";
import imgImage22 from "figma:asset/b3b3143c7e4d467bf56db414c6205c93746114df.png";
import imgImage25 from "figma:asset/b715b7c1e5900dbcce8dd3b55bfa88ec1821e4c1.png";
import imgImage27 from "figma:asset/883488f9c249e5c4f9f133df5306105d528c5ab2.png";
import imgImage20 from "figma:asset/138ce01067b4c4d775dbb7d228d184da681b0f0e.png";
import imgCamera from "figma:asset/9d77be3f2640eae14e306f9ef7ab95ea7c90ec9d.png";
import imgChangeColorHere from "figma:asset/5f29f15b1bedfcdd153b71afd1876c20c7329f55.png";

function SolidChevronDown() {
  return (
    <div className="relative shrink-0 size-[1.236px]" data-name="Solid/chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
        <g id="Solid/chevron-down">
          <path clipRule="evenodd" d={svgPaths.p35b6f1c0} fill="var(--fill-0, #9CA3AF)" fillRule="evenodd" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function SelectIcon() {
  return (
    <div className="content-stretch flex gap-[0.618px] items-start relative shrink-0 w-[18.781px]" data-name="Select + icon">
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[0.865px] text-gray-700">
        <p className="leading-[1.236px]">Morning</p>
      </div>
      <SolidChevronDown />
    </div>
  );
}

function RoutineDropdown() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[0.618px] items-start pl-[0.741px] pr-[0.618px] py-[0.494px] relative rounded-[0.371px] shrink-0 w-[18.534px]" data-name="Routine Dropdown">
      <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-[-0.062px] pointer-events-none rounded-[0.433px] shadow-[0px_0.062px_0.124px_0px_rgba(0,0,0,0.05)]" />
      <SelectIcon />
    </div>
  );
}

function RetinolOil() {
  return (
    <div className="h-[7.413px] relative shrink-0 w-[5.56px]" data-name="retinol oil">
      <div className="absolute inset-0 pointer-events-none rounded-[0.371px]" data-name="image 31">
        <div className="absolute inset-0 overflow-hidden rounded-[0.371px]">
          <img alt="" className="absolute h-full left-[-16.3%] max-w-none top-[-0.77%] w-[133.33%]" src={imgImage31} />
        </div>
        <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 rounded-[0.371px]" />
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[0.247px] items-center justify-center ml-0 mt-0 not-italic relative text-[0.865px] text-gray-700 w-[6.178px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 w-full">
        <p className="leading-[1.236px]">The Ordinary</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 w-full">
        <p className="leading-[1.236px]">Retinol 1% in Squalene</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame1 />
    </div>
  );
}

function ProductCardCondensed() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[0.494px] h-[13.591px] items-center p-[0.741px] relative rounded-[0.371px] shrink-0" data-name="product card - condensed">
      <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <RetinolOil />
      <Group1 />
    </div>
  );
}

function SaCleanser() {
  return (
    <div className="h-[7.413px] relative shrink-0 w-[5.56px]" data-name="SA cleanser">
      <div className="absolute inset-0 pointer-events-none rounded-[0.371px]" data-name="image 29">
        <div className="absolute inset-0 overflow-hidden rounded-[0.371px]">
          <img alt="" className="absolute h-[75.47%] left-0 max-w-none top-[14.25%] w-full" src={imgImage29} />
        </div>
        <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 rounded-[0.371px]" />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[0.247px] items-center justify-center ml-0 mt-0 not-italic relative text-[0.865px] text-gray-700 w-[6.178px]">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 w-full">
        <p className="leading-[1.236px]">CeraVe</p>
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 w-full">
        <p className="leading-[1.236px]">Renewing SA Cleanser</p>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame2 />
    </div>
  );
}

function ProductCardCondensed1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[0.494px] h-[13.591px] items-center p-[0.741px] relative rounded-[0.371px] shrink-0" data-name="product card - condensed">
      <div aria-hidden="true" className="absolute border-[0.062px] border-red-500 border-solid inset-[-0.062px] pointer-events-none rounded-[0.433px]" />
      <SaCleanser />
      <Group2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[1.483px] items-start justify-center relative shrink-0">
      <ProductCardCondensed />
      <ProductCardCondensed1 />
    </div>
  );
}

function SaCleanser1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[0.371px] shrink-0 w-full" data-name="SA cleanser">
      <div className="absolute inset-0 pointer-events-none rounded-[0.371px]" data-name="image 29">
        <div className="absolute inset-0 overflow-hidden rounded-[0.371px]">
          <img alt="" className="absolute h-[75.47%] left-0 max-w-none top-[14.25%] w-full" src={imgImage29} />
        </div>
        <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 rounded-[0.371px]" />
      </div>
    </div>
  );
}

function CarouselProductCard() {
  return (
    <div className="bg-gray-100 content-stretch flex flex-col h-[6.796px] items-center justify-center p-[0.494px] relative rounded-[0.371px] shrink-0 w-[5.56px]" data-name="carousel product card">
      <div aria-hidden="true" className="absolute border-[#e51b1b] border-[0.062px] border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <SaCleanser1 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[1.236px] justify-center leading-[0] not-italic relative shrink-0 text-[0.618px] text-center text-gray-700 w-[4.325px]">
        <p className="leading-[1.236px]">cleanser</p>
      </div>
    </div>
  );
}

function Moisturizer() {
  return (
    <div className="relative rounded-[0.618px] shrink-0 size-[3.089px]" data-name="Moisturizer">
      <div className="absolute inset-0 pointer-events-none rounded-[0.371px]" data-name="image 24">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[0.371px] size-full" src={imgImage24} />
        <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 rounded-[0.371px]" />
      </div>
    </div>
  );
}

function CarouselProductCard1() {
  return (
    <div className="content-stretch flex flex-col gap-[0.494px] items-center justify-center px-0 py-[0.494px] relative rounded-[0.371px] shrink-0" data-name="carousel product card">
      <div aria-hidden="true" className="absolute border-[#83c18f] border-[0.062px] border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <Moisturizer />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[1.236px] justify-center leading-[0] not-italic relative shrink-0 text-[0.618px] text-center text-gray-700 w-[4.325px]">
        <p className="leading-[1.236px]">moisturizer</p>
      </div>
    </div>
  );
}

function FacialOil() {
  return (
    <div className="relative rounded-[0.371px] shrink-0 size-[3.089px]" data-name="facial oil">
      <div className="absolute inset-0 pointer-events-none rounded-[0.371px]" data-name="image 22">
        <div className="absolute inset-0 overflow-hidden rounded-[0.371px]">
          <img alt="" className="absolute h-[110.6%] left-[-15.87%] max-w-none top-[-15.98%] w-[131.15%]" src={imgImage22} />
        </div>
        <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 rounded-[0.371px]" />
      </div>
    </div>
  );
}

function CarouselProductCard2() {
  return (
    <div className="content-stretch flex flex-col gap-[0.494px] items-center justify-center px-0 py-[0.494px] relative rounded-[0.371px] shrink-0" data-name="carousel product card">
      <div aria-hidden="true" className="absolute border-[#83c18f] border-[0.062px] border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <FacialOil />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[1.236px] justify-center leading-[0] not-italic relative shrink-0 text-[0.618px] text-center text-gray-700 w-[4.325px]">
        <p className="leading-[1.236px]">facial oil</p>
      </div>
    </div>
  );
}

function Sunscreen() {
  return (
    <div className="relative rounded-[0.371px] shrink-0 size-[3.089px]" data-name="sunscreen">
      <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <div className="absolute inset-0 pointer-events-none rounded-[0.371px]" data-name="image 25">
        <div className="absolute inset-0 overflow-hidden rounded-[0.371px]">
          <img alt="" className="absolute h-[116.79%] left-[-24.71%] max-w-none top-[-13.73%] w-[148.49%]" src={imgImage25} />
        </div>
        <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 rounded-[0.371px]" />
      </div>
    </div>
  );
}

function CarouselProductCard3() {
  return (
    <div className="content-stretch flex flex-col gap-[0.494px] items-center justify-center px-0 py-[0.494px] relative rounded-[0.371px] shrink-0" data-name="carousel product card">
      <div aria-hidden="true" className="absolute border-[#83c18f] border-[0.062px] border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <Sunscreen />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[1.236px] justify-center leading-[0] not-italic relative shrink-0 text-[0.618px] text-center text-gray-700 w-[4.325px]">
        <p className="leading-[1.236px]">sunscreen</p>
      </div>
    </div>
  );
}

function EyeCream() {
  return (
    <div className="relative rounded-[0.371px] shrink-0 size-[3.089px]" data-name="eye cream">
      <div className="absolute inset-0 pointer-events-none rounded-[0.371px]" data-name="image 27">
        <div className="absolute inset-0 overflow-hidden rounded-[0.371px]">
          <img alt="" className="absolute h-[99.38%] left-[-16.55%] max-w-none top-[5.49%] w-[133.33%]" src={imgImage27} />
        </div>
        <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 rounded-[0.371px]" />
      </div>
    </div>
  );
}

function CarouselProductCard4() {
  return (
    <div className="content-stretch flex flex-col gap-[0.494px] items-center justify-center px-0 py-[0.494px] relative rounded-[0.371px] shrink-0" data-name="carousel product card">
      <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <EyeCream />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[1.236px] justify-center leading-[0] not-italic relative shrink-0 text-[0.618px] text-center text-gray-700 w-[4.325px]">
        <p className="leading-[1.236px]">eye cream</p>
      </div>
    </div>
  );
}

function Serum() {
  return (
    <div className="relative shrink-0 size-[3.089px]" data-name="serum">
      <div className="absolute inset-0 pointer-events-none rounded-[0.371px]" data-name="image 20">
        <div className="absolute inset-0 overflow-hidden rounded-[0.371px]">
          <img alt="" className="absolute h-[75.4%] left-0 max-w-none top-[16.32%] w-full" src={imgImage20} />
        </div>
        <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 rounded-[0.371px]" />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[0.494px] items-center justify-center px-0 py-[0.494px] relative rounded-[0.371px] shrink-0">
      <div aria-hidden="true" className="absolute border-[0.062px] border-gray-200 border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <Serum />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[1.236px] justify-center leading-[0] not-italic relative shrink-0 text-[0.618px] text-center text-gray-700 w-[4.325px]">
        <p className="leading-[1.236px]">serum</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[0.247px] items-center px-0 py-[0.309px] relative shrink-0 w-[21.252px]">
      <CarouselProductCard />
      <CarouselProductCard1 />
      <CarouselProductCard2 />
      <CarouselProductCard3 />
      <CarouselProductCard4 />
      <Frame3 />
    </div>
  );
}

function RoutineCarousel() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[21.252px]" data-name="routine carousel">
      <Frame4 />
    </div>
  );
}

function ProductCarouselHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[0.309px] items-start relative shrink-0 w-[21.252px]" data-name="Product Carousel + Header">
      <div className="flex flex-col font-['Josefin_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[1.236px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">Compare By Product:</p>
      </div>
      <RoutineCarousel />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[0.618px] items-center justify-center relative shrink-0 w-[23.723px]">
      <Frame6 />
      <ProductCarouselHeader />
    </div>
  );
}

function X() {
  return (
    <div className="relative shrink-0 size-[1.483px]" data-name="x">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
        <g clipPath="url(#clip0_1_3251)" id="x">
          <path d={svgPaths.p22463f00} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.123558" />
          <path d={svgPaths.p2c572600} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.123558" />
        </g>
        <defs>
          <clipPath id="clip0_1_3251">
            <rect fill="white" height="1.4827" width="1.4827" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadSynergy() {
  return (
    <div className="bg-[#fdf1f1] content-stretch flex gap-[1.236px] items-center justify-center p-[0.741px] relative rounded-[0.371px] shrink-0 w-[21.252px]" data-name="bad synergy">
      <div aria-hidden="true" className="absolute border-[#fb7373] border-[0.124px] border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[1.236px] text-center text-gray-700">
        <p className="leading-[normal]">Retinol</p>
      </div>
      <X />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[1.236px] text-center text-gray-700">
        <p className="leading-[normal]">Salicylic acid</p>
      </div>
    </div>
  );
}

function Check() {
  return (
    <div className="relative shrink-0 size-[1.483px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
        <g clipPath="url(#clip0_1_3085)" id="check">
          <path d={svgPaths.p3982cf60} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.123558" />
        </g>
        <defs>
          <clipPath id="clip0_1_3085">
            <rect fill="white" height="1.4827" width="1.4827" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadSynergy1() {
  return (
    <div className="bg-[#f2fff5] content-stretch flex gap-[1.236px] items-center justify-center p-[0.741px] relative rounded-[0.371px] shrink-0 w-[21.252px]" data-name="bad synergy">
      <div aria-hidden="true" className="absolute border-[#83c18f] border-[0.124px] border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[1.236px] text-center text-gray-700">
        <p className="leading-[normal]">Retinol</p>
      </div>
      <Check />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[1.236px] text-center text-gray-700">
        <p className="leading-[normal]">Ceramides</p>
      </div>
    </div>
  );
}

function Check1() {
  return (
    <div className="relative shrink-0 size-[1.483px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
        <g clipPath="url(#clip0_1_3085)" id="check">
          <path d={svgPaths.p3982cf60} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.123558" />
        </g>
        <defs>
          <clipPath id="clip0_1_3085">
            <rect fill="white" height="1.4827" width="1.4827" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadSynergy2() {
  return (
    <div className="bg-[#f2fff5] content-stretch flex gap-[1.236px] items-center justify-center p-[0.741px] relative rounded-[0.371px] shrink-0 w-[21.252px]" data-name="bad synergy">
      <div aria-hidden="true" className="absolute border-[#83c18f] border-[0.124px] border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[1.236px] text-center text-gray-700">
        <p className="leading-[normal]">Squalene</p>
      </div>
      <Check1 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[1.236px] text-center text-gray-700">
        <p className="leading-[normal]">Ceramides</p>
      </div>
    </div>
  );
}

function Check2() {
  return (
    <div className="relative shrink-0 size-[1.483px]" data-name="check">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
        <g clipPath="url(#clip0_1_3085)" id="check">
          <path d={svgPaths.p3982cf60} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.123558" />
        </g>
        <defs>
          <clipPath id="clip0_1_3085">
            <rect fill="white" height="1.4827" width="1.4827" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function BadSynergy3() {
  return (
    <div className="bg-[#f2fff5] content-stretch flex gap-[1.236px] items-center justify-center p-[0.741px] relative rounded-[0.371px] shrink-0 w-[21.252px]" data-name="bad synergy">
      <div aria-hidden="true" className="absolute border-[#83c18f] border-[0.124px] border-solid inset-0 pointer-events-none rounded-[0.371px]" />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[1.236px] text-center text-gray-700">
        <p className="leading-[normal]">Squalene</p>
      </div>
      <Check2 />
      <div className="basis-0 flex flex-col font-['Inter:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[1.236px] text-center text-gray-700">
        <p className="leading-[normal]">Niacinamide</p>
      </div>
    </div>
  );
}

function IngredientSynergyList() {
  return (
    <div className="content-stretch flex flex-col gap-[0.988px] items-start relative shrink-0 w-full" data-name="Ingredient Synergy List">
      <div className="flex flex-col font-['Josefin_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[1.236px] text-black text-center text-nowrap">
        <p className="leading-[normal] whitespace-pre">{`Ingredient Synergy `}</p>
      </div>
      <BadSynergy />
      <BadSynergy1 />
      <BadSynergy2 />
      <BadSynergy3 />
    </div>
  );
}

function IngredientSynergyList1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Ingredient Synergy List">
      <IngredientSynergyList />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[1.853px] items-center justify-center relative shrink-0">
      <Frame7 />
      <IngredientSynergyList1 />
    </div>
  );
}

function RoutineAnalysisContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[1.236px] items-center justify-center left-1/2 overflow-clip px-0 py-[0.494px] top-[6.86px] translate-x-[-50%] w-[24.094px]" data-name="Routine Analysis Content">
      <RoutineDropdown />
      <Frame8 />
    </div>
  );
}

function PlusCircle() {
  return (
    <div className="relative shrink-0 size-[1.977px]" data-name="plus-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
        <g id="plus-circle">
          <g id="Vector"></g>
          <g id="Vector_2"></g>
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function RoutineAnalysisHeader() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[0.988px] items-center left-1/2 pl-[1.544px] pr-[0.618px] py-[1.236px] top-[3.53px] translate-x-[-50%] w-[24.094px]" data-name="Routine Analysis - Header">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[0.865px] relative w-[0.432px]" data-name="Vector">
            <div className="absolute inset-[-7.14%_-14.29%]" style={{ "--stroke-0": "rgba(17, 24, 39, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 1">
                <path d={svgPaths.p1e16e480} id="Vector" stroke="var(--stroke-0, #111827)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.123558" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-0 flex flex-col font-['Josefin_Sans:Bold',sans-serif] font-bold grow h-full justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[1.483px] text-black text-center">
        <p className="leading-[normal]">Routine Analysis</p>
      </div>
      <PlusCircle />
    </div>
  );
}

function Time() {
  return (
    <div className="h-[0.803px] relative shrink-0 w-[2.471px]" data-name="Time">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 1">
        <g id="Time">
          <g id="Vector"></g>
        </g>
      </svg>
    </div>
  );
}

function Time1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Time">
      <Time />
    </div>
  );
}

function Notch() {
  return (
    <div className="h-[1.977px] relative shrink-0 w-[10.626px]" data-name="Notch">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
        <g clipPath="url(#clip0_1_3177)" id="Notch">
          <path d={svgPaths.p86e1b70} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_3177">
            <rect fill="white" height="1.97693" width="10.626" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NotchFrame() {
  return (
    <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex h-[2.904px] items-start justify-center overflow-clip relative shrink-0 w-[10.626px]" data-name="Notch Frame">
      <Notch />
    </div>
  );
}

function Reception() {
  return (
    <div className="h-[0.741px] relative shrink-0 w-[1.112px]" data-name="Reception">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g clipPath="url(#clip0_1_3240)" id="Reception">
          <g id="Vector"></g>
          <g id="Vector_2"></g>
          <g id="Vector_3"></g>
          <g id="Vector_4"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_3240">
            <rect fill="white" height="0.741348" width="1.11202" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function WiFi() {
  return (
    <div className="h-[0.741px] relative shrink-0 w-[1.112px]" data-name="Wi-fi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g clipPath="url(#clip0_1_3206)" id="Wi-fi">
          <g id="Vector"></g>
        </g>
        <defs>
          <clipPath id="clip0_1_3206">
            <rect fill="white" height="0.741348" width="1.11202" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[0.803px] relative shrink-0 w-[1.73px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 1">
        <g id="Battery">
          <g id="Vector" opacity="0.35"></g>
          <g id="Vector_2" opacity="0.4"></g>
          <g id="Vector_3"></g>
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.8)] content-stretch flex gap-[0.494px] grow h-full items-center justify-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Icons">
      <Reception />
      <WiFi />
      <Battery />
    </div>
  );
}

function StatusBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex h-[2.904px] items-center justify-center left-0 overflow-clip right-0 top-0" data-name="Status Bar">
      <Time1 />
      <NotchFrame />
      <Icons />
    </div>
  );
}

function HomeBar() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[2.1px] items-center justify-center left-0 overflow-clip pb-0 pt-[0.803px] px-0 right-0 top-[50.1px]" data-name="Home Bar">
      <div className="bg-black h-[0.309px] rounded-[0.185px] shrink-0 w-[8.278px]" data-name="Rectangle" />
    </div>
  );
}

function IconRight() {
  return (
    <div className="relative shrink-0 size-[1.236px]" data-name="Icon right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
        <g id="Icon right">
          <path d={svgPaths.p28b07800} fill="var(--fill-0, #006769)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonPrimary() {
  return (
    <div className="content-stretch flex gap-[0.371px] items-center justify-center px-[0.618px] py-[0.371px] relative rounded-[0.494px] shrink-0" data-name="Button-Primary">
      <div aria-hidden="true" className="absolute border-[#006769] border-[0.062px] border-solid inset-0 pointer-events-none rounded-[0.494px] shadow-[0px_0.062px_0.124px_0px_rgba(0,0,0,0.05)]" />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#006769] text-[0.865px] text-nowrap">
        <p className="leading-[1.236px] whitespace-pre">Try New Product</p>
      </div>
      <IconRight />
    </div>
  );
}

function ButtonPrimary1() {
  return (
    <div className="bg-white content-stretch flex items-start relative rounded-[0.494px] shadow-[0px_0.062px_0.247px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Button-Primary">
      <ButtonPrimary />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[1.236px]" data-name="plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 2">
        <g clipPath="url(#clip0_1_3066)" id="plus">
          <path d="M0.61779 0.257412V0.978167" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.185337" />
          <path d="M0.257412 0.61779H0.978167" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.185337" />
        </g>
        <defs>
          <clipPath id="clip0_1_3066">
            <rect fill="white" height="1.23558" width="1.23558" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonPrimary2() {
  return (
    <div className="bg-[#006769] content-stretch flex gap-[0.371px] items-center justify-center px-[0.988px] py-[0.371px] relative rounded-[0.494px] shadow-[0px_0.062px_0.124px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button-Primary">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[0.865px] text-nowrap text-white">
        <p className="leading-[1.236px] whitespace-pre">{` Add to Routine `}</p>
      </div>
      <Plus />
    </div>
  );
}

function ButtonPrimary3() {
  return (
    <div className="content-stretch flex items-start relative shadow-[0px_0.062px_0.247px_0px_rgba(0,0,0,0.25)] shrink-0" data-name="Button-Primary">
      <ButtonPrimary2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[0.741px] items-center justify-center relative shrink-0 w-full">
      <ButtonPrimary1 />
      <ButtonPrimary3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-[16.67%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 6">
        <g id="Group 19">
          <rect fill="var(--fill-0, #006769)" height="1.23558" id="Rectangle 54" width="24.1556" y="4.32453" />
          <path d={svgPaths.p118e0980} fill="var(--fill-0, #006769)" id="Rectangle 46" />
          <path d={svgPaths.p1de88700} fill="var(--fill-0, #006769)" id="Rectangle 46_2" />
          <path d={svgPaths.p87af200} fill="var(--fill-0, #006769)" id="Rectangle 46_3" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute bottom-[32.41%] left-[9.88px] top-[2.78%] w-[4.325px]">
      <div className="absolute inset-[-7.86%_-9.29%_-15%_-9.29%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <g filter="url(#filter0_d_12_1867)" id="Group 25">
            <g filter="url(#filter1_d_12_1867)" id="Vector">
              <path d={svgPaths.p3e3f2000} fill="var(--fill-0, #006769)" />
              <path d={svgPaths.p3e3f2000} stroke="var(--stroke-0, #006769)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.308895" />
            </g>
            <g clipPath="url(#clip0_12_1867)" id="search">
              <path d={svgPaths.p3134f980} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.308895" />
              <path d={svgPaths.p15960b80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.308895" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.12766" id="filter0_d_12_1867" width="5.12766" x="-1.49012e-08" y="0.185337">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.247116" />
              <feGaussianBlur stdDeviation="0.123558" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_12_1867" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_12_1867" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="5.12766" id="filter1_d_12_1867" width="5.12766" x="-1.49012e-08" y="-1.49012e-08">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="0.061779" />
              <feGaussianBlur stdDeviation="0.123558" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_12_1867" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_12_1867" mode="normal" result="shape" />
            </filter>
            <clipPath id="clip0_12_1867">
              <rect fill="white" height="2.47116" transform="translate(1.39007 1.26646)" width="2.47116" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IoHome() {
  return (
    <div className="absolute inset-[32.41%_78.26%_30.56%_11.51%]" data-name="IoHome">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <g id="IoHome">
          <path d={svgPaths.pfe20000} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p9b100} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function MdAccountCircle() {
  return (
    <div className="absolute inset-[32.41%_9.97%_30.56%_79.8%]" data-name="MdAccountCircle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 3">
        <g id="MdAccountCircle">
          <g id="Vector"></g>
          <path d={svgPaths.p2d81ed00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function CircleSearchMenu() {
  return (
    <div className="h-[6.672px] relative shrink-0 w-[24.156px]" data-name="circle search menu">
      <Group />
      <Group3 />
      <IoHome />
      <MdAccountCircle />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[0.741px] items-center justify-center left-0 top-[42.87px]">
      <Frame5 />
      <CircleSearchMenu />
    </div>
  );
}

function RoutineAnalysisBad() {
  return (
    <div className="bg-white h-[52.265px] overflow-x-clip overflow-y-auto relative rounded-[2.595px] shadow-[0.494px_0.556px_1.402px_0px_rgba(0,0,0,0.25)] shrink-0 w-[24.094px]" data-name="routine analysis - bad">
      <RoutineAnalysisHeader />
      <StatusBar />
      <HomeBar />
      <Frame9 />
      <RoutineAnalysisContent />
      <div className="absolute inset-0 pointer-events-none shadow-[-0.494px_0.247px_3.101px_0.247px_inset_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Island() {
  return (
    <div className="absolute h-[2.193px] left-[9.25px] overflow-clip top-[1.72px] w-[7.565px]" data-name="island">
      <div className="absolute bg-black h-[2.193px] left-1/2 rounded-[3.178px] top-0 translate-x-[-50%] w-[7.565px]" data-name="d island" />
      <div className="absolute left-[5.88px] opacity-60 rounded-[0.954px] size-[1.081px] top-[0.54px]" data-name="camera">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[0.954px] size-full" src={imgCamera} />
      </div>
    </div>
  );
}

function IPhone() {
  return (
    <div className="absolute contents left-1/2 top-[calc(50%-0.48px)] translate-x-[-50%] translate-y-[-50%]" data-name="iPhone">
      <div className="absolute h-[51.427px] left-[1.21px] rounded-[3.496px] top-[1.02px] w-[23.711px]" data-name="👈 screen" />
      <div className="absolute h-[53.302px] left-0 top-0 w-[26.158px]" data-name="🎨 change color here">
        <img alt="" className="block max-w-none size-full" height="53.302" src={imgChangeColorHere} width="26.158" />
      </div>
      <Island />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-px relative size-full">
          <RoutineAnalysisBad />
          <IPhone />
        </div>
      </div>
    </div>
  );
}