import { Link } from "react-router";
import { FadeInOnScroll } from "./FadeInOnScroll";

export function Tarif() {
  return (
      <FadeInOnScroll>
    <section
      className="bg-card relative overflow-visible px-[0px] py-16"
      id="Tarif"
    >
        <div className="max-w-[1320px] mx-auto px-4 md:px-8 text-center overflow-visible">
          <div className="w-full bg-card rounded-[16px] p-6 md:p-9 lg:p-16 relative border border-[#330036] shadow-sm overflow-visible">
            {/* Floating Triangle SVG */}
            <svg
              className=" absolute left-[-18.64rem] md:left-[-4.64rem] bottom-[-3rem] overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              width="203"
              height="203"
              viewBox="0 0 203 203"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M357.676 3.20883C360.342 1.6722 363.672 3.59477 363.674 6.67159L363.947 414.193C363.949 417.273 360.614 419.2 357.947 417.66L4.61355 213.663C1.94585 212.123 1.94715 208.272 4.61588 206.733L357.676 3.20883Z"
                stroke="#F0B38F"
                strokeWidth="4"
                strokeMiterlimit="10"
              />
            </svg>

      

            {/* Floating Half Circle SVG */}
            <svg
              className="absolute right-[-8rem] md:right-[0.01rem] top-[-3rem] md:top-[-2rem] overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              width="164"
              height="165"
              viewBox="0 0 164 165"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2.66992 2.495V483.423C135.471 483.423 243.134 375.76 243.134 242.959C243.134 211.381 236.914 180.112 224.83 150.937C212.745 121.763 195.033 95.2544 172.704 72.9252C150.374 50.5961 123.866 32.8837 94.6915 20.7992C65.5171 8.71478 34.2481 2.495 2.66992 2.495Z"
                stroke="#F0B38F"
                strokeWidth="4"
                strokeMiterlimit="10"
                strokeLinejoin="round"
              />
            </svg>

            <h2 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-white font-semibold mb-6">
              Reçus <br />
              pour les assurances
            </h2>
            <p className="text-[24px] text-white mb-2">
              Thérapie individuelle
            </p>
            <p className="text-[24px] text-white font-bold mb-8">
              60 min - 100 $
            </p>

            <Link
              to="/contact"
              className="inline-block bg-primary text-[#020202] px-8 py-4 rounded-[4px] font-['Crimson_Pro'] font-semibold text-[18px] uppercase shadow-[2px_2px_2px_0px_black,0_0_50px_rgba(255,199,113,0.35)] hover:shadow-[4px_4px_4px_0px_black,0_0_80px_rgba(255,199,113,0.55)] hover:bg-[#ffdead] transition-background duration-500"
            >
              Rendez-vous
            </Link>
          </div>
        </div>
    </section>
      </FadeInOnScroll>
  );
}