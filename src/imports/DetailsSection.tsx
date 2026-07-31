import svgPaths from "./svg-oxzbb3e3mb";
import imgDetailsSection from "figma:asset/ef9511533d9fc19f955be39091f5123be089c409.png";
import imgDetailsSection1 from "figma:asset/6e512aa86f2c1a091d17728c0815f5b8e654a625.png";

export default function DetailsSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="details section">
      <div className="bg-dark content-stretch flex flex-col gap-[32px] h-[596.75px] items-start pt-[96px] px-[81.5px] relative shrink-0 w-[1419px]" data-name="Section">
        <div className="content-stretch flex gap-[80px] items-start justify-center overflow-clip relative rounded-[16px] shrink-0 w-full" data-name="card">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px min-w-px relative">
            <p className="font-semibold leading-[48px] relative shrink-0 text-primary text-[44px] w-[582px]" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
              Vous traversez un deuil difficile?
            </p>
            <div className="flex flex-col font-semibold justify-center leading-[0] min-w-full relative shrink-0 text-primary text-[34px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
              <p className="leading-[43.2px]">Vous pouvez vous reconnaître si vous ressentez :</p>
            </div>
            <div className="flex flex-col font-normal justify-center leading-[0] min-w-full relative shrink-0 text-foreground text-[0px] w-[min-content]">
              <ul className="list-disc mb-[8px] whitespace-pre-wrap">
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[32px] text-[21px]">{`Un sentiment d'isolement`}</span>
                </li>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[32px] text-[21px]">{`L'impression que votre entourage ne comprend pas votre douleur`}</span>
                </li>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[32px] text-[21px]">Une grande fatigue émotionnelle</span>
                </li>
                <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[32px] text-[21px]">De la culpabilité ou de la confusion</span>
                </li>
                <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
                  <span className="leading-[32px] text-[21px]">De la difficulté à avancer malgré le temps qui passe</span>
                </li>
              </ul>
              <p className="font-bold leading-[32px] text-[21px]">{`Chaque deuil est unique. Il n'y a pas de bonne ou de mauvaise façon de le vivre.`}</p>
            </div>
          </div>
          <div className="overflow-clip relative rounded-[800px] shrink-0 size-[400px]" data-name="mbr-2.jpg">
            <div className="absolute h-[406px] left-[-22.27px] top-[-6.23px] w-[575px]" data-name="pexels-wildlittlethingsphoto-708440">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[211.57%] left-[-0.01%] max-w-none top-[-111.59%] w-[151.36%]" src={imgDetailsSection} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute contents left-[903px] top-[69px]" data-name="moon">
          <div className="absolute flex h-[321.253px] items-center justify-center left-[903px] top-[69px] w-[320.486px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "327" } as React.CSSProperties}>
            <div className="-rotate-90 -scale-y-100 flex-none">
              <div className="h-[320.486px] relative w-[321.253px]" data-name="Vector">
                <div className="absolute inset-[-0.62%]">
                  <img alt="" className="block max-w-none size-full" height="324.486" src={imgDetailsSection1} width="325.253" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex h-[321.253px] items-center justify-center left-[903.76px] top-[69px] w-[159.866px]">
            <div className="-scale-y-100 flex-none">
              <div className="h-[321.253px] relative w-[159.866px]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 159.866 321.253">
                  <path d={svgPaths.p31b94400} fill="var(--fill-0, #B43911)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[663.621px] left-[-69px] top-[-319px] w-[1419px]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1419 663.621">
            <g>
              <g />
              <path d={svgPaths.p318e5b00} fill="var(--fill-0, #7A0081)" />
              <path d={svgPaths.p3f35c980} fill="var(--fill-0, #F0B38F)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}