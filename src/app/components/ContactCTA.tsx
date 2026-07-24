import svgPaths from "../../imports/svg-ks1ah5fqjw";
import { Link } from "react-router";

function ContactBackground() {
  return (
    <div>
      {/* First SVG path - p16288900 */}
      <div className="absolute top-1/2 left-[-148px] -translate-y-1/2 w-[2154px] h-[583px] hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 2156 585"
          fill="none"
          aria-hidden="true"
        >
          <g opacity="0.5">
            <path
              d={svgPaths.p16288900}
              stroke="#F0B38F"
              strokeWidth="4"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ContactBackground2() {
  return (
    <div>
      {/* Third SVG path - p3bfab080 */}
      <div className="absolute top-1/2 right-[24px] -translate-y-1/2 w-[2154px] h-[583px] hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 2156 585"
          fill="none"
          aria-hidden="true"
        >
          <g opacity="1">
            <path
              d={svgPaths.p3bfab080}
              stroke="#0A648E"
              strokeWidth="4"
            />
          </g>
        </svg>
      </div>

      {/* Fourth SVG path - pe1d6c00 */}
      <div className="absolute top-1/2 right-[24px] -translate-y-1/2 w-[2154px] h-[583px] hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 2156 585"
          fill="none"
          aria-hidden="true"
        >
          <g opacity="1">
            <path d={svgPaths.pe1d6c00} fill="#0A648E" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ContactCTA() {
  return (
    <section className="relative bg-card py-24 overflow-hidden">
      <ContactBackground />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center">
        <div className="space-y-8 max-w-[800px]">
          <h2 className="text-[32px] md:text-[44px] text-foreground font-semibold">
            Information ou rendez-vous ?
          </h2>
          <p className="text-[18px] md:text-[21px] text-foreground leading-relaxed">
            Pour un rendez-vous, je vous offre un appel de 15 minutes pour faire connaissance.
            <br />
            Nous pouvons aussi échanger par courriel.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-primary text-primary-foreground text-[20px] md:text-[22px] font-semibold py-4 px-12 rounded-full hover:opacity-90 transition-opacity"
            >
              Me joindre
            </Link>
          </div>
        </div>
      </div>

      <ContactBackground2 />
    </section>
  );
}