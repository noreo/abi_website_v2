import svgPaths from "./svg-y2fjp6gggy";
import imgTherapieType from "figma:asset/190a22aed929c33152d4a65ca5e0c4ad3f591b66.png";

export default function TherapieType() {
  return (
    <div className="bg-card content-stretch flex gap-[32px] items-start justify-center p-[32px] relative rounded-[16px] size-full" data-name="therapie type">
      <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="img">
        <div className="col-1 ml-[42.5px] mt-[29px] relative row-1 size-[200px]" data-name="Vector">
          <img alt="" className="absolute block max-w-none size-full" height="200" src={imgTherapieType} width="200" />
        </div>
        <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 size-[165px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div className="relative size-[165px]" data-name="moon">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 165 165">
                <g id="moon">
                  <g id="Vector">
                    <path d={svgPaths.pee4a100} fill="var(--fill-0, #7A0081)" />
                    <path d={svgPaths.p2b4b9b00} fill="var(--fill-0, #7A0081)" />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] h-[192px] items-start max-w-[600px] relative shrink-0 w-[600px]">
        <p className="font-semibold leading-[48px] relative shrink-0 text-primary text-[44px] w-[582px]" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
          Thérapie en marchant
        </p>
        <div className="flex flex-col font-normal justify-center leading-[0] min-w-full relative shrink-0 text-foreground text-[21px] w-[min-content]">
          <p className="leading-[32px]">La thérapie en marchant (walking thérapie), offre une méthode unique pour améliorer votre bien-être. En combinant les effets bénéfiques de la parole et du mouvement, cette approche permet de se rencontrer, de s’exprimer et d’avancer, tant sur le plan physique que psychologique.</p>
        </div>
      </div>
      <div className="absolute h-[271.026px] left-[-84px] top-[12px] w-[1402px]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1402 271.026">
          <g id="Group 263">
            <path d={svgPaths.p52cbb80} fill="var(--fill-0, #7A0081)" id="Vector" />
            <path d={svgPaths.p3b8af100} fill="var(--fill-0, #F0B38F)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}