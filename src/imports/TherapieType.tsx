import svgPaths from "./svg-cqs1smxddp";
import imgVector from "figma:asset/ae67e2e8f9471e211ac899db67c1693efc98bed7.png";

export default function TherapieType({
  className,
  title = "Consultation en ligne",
  description = "Les consultations se font via une plateforme sécurisée (Microsoft Teams), simple à utiliser (juste cliquer sur un lien dans une invitation courriel), vous permettant de consulter depuis le confort de votre foyer.",
  image = imgVector,
  imageAlt = "Image représentant la consultation en ligne",
}: {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <div
      className={
        className ||
        "bg-card w-full content-stretch flex flex-col md:flex-row gap-[24px] md:gap-[32px] items-center md:items-start justify-center p-[24px] md:p-[32px] relative rounded-[16px] max-w-[950px]"
      }
      data-name="therapie type"
    >
      <div
        className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0"
        data-name="img"
      >
        <div
          className="col-1 ml-[42.5px] mt-[29px] relative row-1 w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
          data-name="Vector"
        >
          <img
            alt={imageAlt}
            className="absolute block max-w-none size-full rounded-full"
            height="200"
            src={image}
            width="200"
          />
        </div>
        <div className="col-1 flex items-center justify-center ml-0 mt-0 relative row-1 w-[124px] h-[124px] md:w-[165px] md:h-[165px]">
          <div className="-scale-y-100 flex-none rotate-180">
            <div
              className="relative w-[124px] h-[124px] md:w-[165px] md:h-[165px]"
              data-name="moon"
            >
              <svg
                className="absolute block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 165 165"
                aria-hidden="true"
              >
                <g id="moon">
                  <g id="Vector">
                    <path
                      d={svgPaths.pee4a100}
                      fill="var(--fill-0, #FFC771)"
                    />
                    <path
                      d={svgPaths.p2b4b9b00}
                      fill="var(--fill-0, #FFC771)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[16px] items-start max-w-full md:max-w-[600px] relative shrink-0 w-full md:w-[600px]">
        <h2
          className="leading-[36px] md:leading-[48px] relative shrink-0 text-primary text-[32px] md:text-[44px] w-full font-medium"
        >
          {title}
        </h2>
        <div className="flex flex-col font-normal justify-center leading-[0] w-full relative shrink-0 text-foreground text-[18px] md:text-[21px]">
          <p className="leading-[28px] md:leading-[32px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}