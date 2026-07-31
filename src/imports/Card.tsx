import svgPaths from "./svg-smch3qzwoc";
import imgVector from "figma:asset/599548c9cbebc9d6e0bb8ffbbffd8cbf59da8721.png";

export default function Card({ className }: { className?: string }) {
  return (
    <div className={className || "bg-dark content-stretch flex gap-[20px] items-start p-[48px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.1)] w-[586.667px]"} data-name="card">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
        <div className="absolute left-[-16px] size-[57px] top-[53px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
            <path d={svgPaths.pf039300} fill="var(--fill-0, #F0B38F)" />
          </svg>
        </div>
        <div className="relative shrink-0 size-[110px]" data-name="Vector">
          <img alt="" className="absolute block max-w-none size-full" height="110" src={imgVector} width="110" />
        </div>
        <div className="absolute left-[71px] size-[39px] top-[-10px]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
            <path d={svgPaths.p220a8800} fill="var(--fill-0, #7A0081)" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
        <p className="font-semibold leading-[48px] min-w-full relative shrink-0 text-primary text-[32px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 12, 'wdth' 100" }}>
          Deuil
        </p>
        <p className="font-normal leading-[32px] min-w-full relative shrink-0 text-foreground text-[21px] w-[min-content] whitespace-pre-wrap">Vous traversez une perte et vous ne vous sentez pas compris·e ? Je vous offre un espace bienveillant pour déposer vos émotions,et retrouver un équilibre, à votre rythme.</p>
        <div className="relative shrink-0 size-[48px]" data-name="formkit:arrowright">
          <div className="absolute bottom-1/4 left-[18.75%] right-[12.44%] top-[24.88%]\" data-name=\"Vector\">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.03 24.0601">
              <g>
                <path d={svgPaths.p16792980} fill="var(--fill-0, #0A648E)" />
                <path d={svgPaths.p38e58700} fill="var(--fill-0, #0A648E)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}