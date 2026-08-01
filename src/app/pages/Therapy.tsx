import { Link } from "react-router";
import svgPaths from "../../imports/svg-ks1ah5fqjw";
import svgPathsMoon from "../../imports/svg-azv94sv8r2";
import svgPathsWalking from "../../imports/svg-y2fjp6gggy";
import { ContactSection } from "../components/ContactSection";
import { SEO } from "../components/SEO";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { HelpCard } from "../components/HelpCard";
import imgRelation from "figma:asset/009574079d5c9594bbd905966cdffb4245ff83ca.png";
import imgNeurodivergent from "figma:asset/d651e6ee05d29cbc9bd200ce9c2ea93127c60196.png";
import imgWalking from "figma:asset/eafaf8f15fceebdb4a4becf6c58e07f0100f4b2a.png";
import { Tarif } from "../components/Tarif";
import TherapieType from "../../imports/TherapieType";

// Therapy/Services page component
export default function Therapy() {
  return (
    <>
      <SEO
        title="Thérapie individuelle : deuil, relation conflictuelle et neurodiversité"
        description="Thérapie en ligne ou en marchant. Découvrez le déroulement des séances et les types d'accompagnement (difficultés relationnelles, deuil et neurodiversité)."
        path="/therapie"
        keywords={[
          "thérapeute Montréal",
          "relation d'aide Montréal",
          "thérapie humaniste",
          "accompagnement deuil",
          "thérapie deuil",
          "difficultés relationnelles",
          "Abigaïl Leconte",
        ]}
      />
      <section className="bg-background py-16 px-4 text-center">
        <h1 className="leading-[68px] text-[64px] text-primary mb-6">
          Thérapie individuelle
        </h1>
      </section>

      <section className="w-full bg-dark space-y-8 px-[16px] py-[56px]">
        <h2 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-primary mb-12 text-center font-normal">
          Accompagnement personnalisé
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <FadeInOnScroll
            delay={200}
            className="flex w-full justify-center"
          >
            <HelpCard
              title="Deuil"
              description="Vous traversez une perte et vous ne vous sentez pas compris·e&nbsp;? Je vous offre un espace bienveillant pour déposer vos émotions,et retrouver un équilibre, à votre rythme."
              linkTo="/therapie/deuil"
              className="h-full w-full"
            />
          </FadeInOnScroll>

          <FadeInOnScroll
            delay={300}
            className="flex w-full justify-center"
          >
            <HelpCard
              title="Relation conflictuelle"
              description="Vous vivez une relation difficile en couple, au travail ou en amitié&nbsp;? Je vous accompagne pour mieux exprimer vos besoins avec clarté et apaiser la communication."
              linkTo="/therapie/relation-conflictuelle"
              className="h-full w-full"
              image={imgRelation}
            />
          </FadeInOnScroll>

          <FadeInOnScroll
            delay={400}
            className="flex w-full justify-center"
          >
            <HelpCard
              title="Neurodiversité / Neurodivergence"
              description="Vous sentez un décalage avec les attentes du monde&nbsp;? Je peux vous aider à gérer cette surcharge et vous retrouvez. "
              linkTo="/therapie/neurodiversite"
              className="h-full w-full"
              image={imgNeurodivergent}
            />
          </FadeInOnScroll>
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-[16px] pt-16 pb-[0px]">
        {/* Additional Content: Session Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1100px] mx-auto mx-[50px] mt-[0px] mb-[96px]">
          {/* Text Content */}
          <div className="content-stretch flex flex-col items-start relative shrink-0">
            <h2 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-primary font-normal mb-12">
              Déroulement d'une séance
            </h2>
            <div className="content-stretch flex flex-col font-normal gap-[12px] items-start relative shrink-0 text-foreground text-[21px]">
              <div className="flex flex-col justify-center leading-[32px] relative shrink-0 w-full max-w-[508px] whitespace-pre-wrap">
                <p className="mb-[8px]">
                  Chaque séance est un espace privilégié où vous
                  pouvez déposer ce qui est présent pour
                  vous.{" "}
                </p>
                <p>
                  En tant que thérapeute en relation d'aide, je
                  vous accompagne pour explorer votre vécu, vos
                  émotions et vos besoins, dans le respect de
                  votre rythme.
                </p>
              </div>
              <div className="flex flex-col justify-center leading-[0] relative shrink-0 whitespace-nowrap">
                <ul>
                  <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
                    <span className="leading-[32px]">
                      Accueil et écoute bienveillante
                    </span>
                  </li>
                  <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
                    <span className="leading-[32px]">
                      Exploration de votre situation actuelle
                    </span>
                  </li>
                  <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
                    <span className="leading-[32px]">
                      Identification des pistes de solutions
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Moon Graphic */}
          <div className="relative shrink-0 w-[full] h-[280px] w-[214.66px]  md:h-[480.928px] md:w-[368.001px] mx-auto">
            <div className="absolute inset-[-0.42%_-0.54%]">
              <svg
                className="block size-full overflow-visible"
                fill="none"
                viewBox="0 0 244.464 484.928"
                aria-hidden="true"
              >
                <g>
                  <path
                    d={svgPathsMoon.p11051d80}
                    stroke="var(--stroke-0, #F0B38F)"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                  />
                  <g>
                    <path
                      d={svgPathsMoon.p2d71a470}
                      stroke="var(--stroke-0, #FFC771;)"
                      strokeMiterlimit="10"
                      strokeWidth="4"
                    />
                    <path
                      d={svgPathsMoon.p184fe080}
                      fill="var(--fill-0, #FFC771;)"
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Types Section */}
      <section className="w-full bg-background flex justify-center items-center flex-col space-y-8 px-[0px] py-[16px]">
        <TherapieType />

        <TherapieType
          title="Thérapie en marchant"
          description="La thérapie en marchant (walk and talk therapy), offre une méthode unique pour améliorer votre bien-être. En combinant les effets bénéfiques de la parole et du mouvement, cette approche permet de se rencontrer, de s'exprimer et d'avancer, tant sur le plan physique que psychologique. Les parcs de Montréal, comme le parc Frédéric-Back, Jarry, Maisonneuve ou Mont-Royal, sont parfaits pour cela."
          image={imgWalking}
          imageAlt="Personnes marchant dans la nature, illustrant la thérapie en marchant"
        />
      </section>

      <Tarif />

      <ContactSection />
    </>
  );
}