import svgPaths from "../../imports/svg-ks1ah5fqjw";
import { Link } from "react-router";
import { Instagram } from "lucide-react";
import { SocialLink } from "./SocialLink";

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
              stroke="#FFC771;"
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
            <path d={svgPaths.pe1d6c00} fill="#FFC771;" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ContactCTA() {
  return (
    <section className="relative bg-dark py-24 overflow-hidden">
      <ContactBackground />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 md:px-8 flex flex-col items-center justify-center text-center">
        <div className="space-y-8 max-w-[800px]">
          <h2 className="text-[32px] md:text-[44px] text-foreground font-semibold">
            Information ou rendez-vous ?
          </h2>
          <p className="text-[18px] md:text-[21px] text-foreground leading-relaxed">
            Pour un rendez-vous, je vous offre un appel de 15 minutes pour faire connaissance.
            <br />
            Nous pouvons aussi échanger par courriel ou sur Instagram.
          </p>
            
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-block bg-primary text-[#020202] px-8 py-4 rounded-[4px] font-['Crimson_Pro'] font-semibold text-[18px] uppercase shadow-[2px_2px_2px_0px_black,0_0_50px_rgba(255,199,113,0.35)] hover:shadow-[4px_4px_4px_0px_black,0_0_80px_rgba(255,199,113,0.55)] hover:bg-[#ffdead] transition-all duration-500"
            >
              Me joindre
            </Link>
            <div className="mx-auto w-full py-8">
              <div className="inline-block">
            <SocialLink
            href="https://www.instagram.com/abigailtherapeute/"
            icon={Instagram}
            label="Instagram"
          />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactBackground2 />
    </section>
  );
}