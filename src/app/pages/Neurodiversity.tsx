import { SEO } from "../components/SEO";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { ContactCTA } from "../components/ContactCTA";
import DetailsSectionWithImage from "../components/DetailsSectionWithImage";
import TherapyInfoCard from "../components/TherapyInfoCard";
import imgNeurodivergent from "figma:asset/d651e6ee05d29cbc9bd200ce9c2ea93127c60196.png";

export default function Neurodiversity() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Accompagnement en neurodiversité et neurodivergence"
        description="Vous sentez un décalage avec les attentes du monde autour de vous? Accompagnement pour mieux comprendre votre fonctionnement neurodivergent, gérer la surcharge et retrouver un équilibre."
        path="/therapie/neurodiversite"
        keywords={[
          "neurodiversité Québec",
          "neurodivergence Montréal",
          "accompagnement neurodivergent",
          "surcharge sensorielle",
          "autisme adulte",
          "TDAH thérapie",
          "hypersensibilité",
        ]}
      />

      {/* Hero Section */}
      <section className="bg-background py-24">
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
          <FadeInOnScroll>
            <h1 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-primary font-normal text-center mb-8">
              Accompagnement en neurodiversité et
              neurodivergence
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <p className="text-[21px] text-foreground text-center max-w-[900px] mx-auto leading-[32px]">
              Vous sentez un décalage avec les attentes du monde
              autour de vous?
              <br />
              Certaines personnes ressentent plus intensément
              les stimulations, les émotions ou les exigences
              sociales. Cet accompagnement offre un espace pour
              mieux comprendre votre fonctionnement, gérer la
              surcharge et retrouver un équilibre plus
              respectueux de vous-même.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Vous vous reconnaissez dans la neurodivergence? */}
      <section className="relative ">
        <DetailsSectionWithImage
          heading="Vous vous reconnaissez dans la neurodivergence?"
          subheading="Vous pourriez ressentir :"
          listItems={[
            "Une surcharge sensorielle ou émotionnelle fréquente",
            "Une fatigue importante liée aux interactions sociales",
            "La sensation de devoir constamment vous adapter aux attentes des autres",
            "Des difficultés d'organisation ou de concentration",
            "Le sentiment de fonctionner différemment de votre entourage",
          ]}
          closingStatement="Ces expériences peuvent être liées à la neurodiversité, qui regroupe différentes façons de penser, de percevoir et de vivre le monde."
          image={imgNeurodivergent}
          imageAlt="Illustration représentant la neurodiversité"
        />
      </section>

      {/* Un accompagnement pour mieux comprendre votre fonctionnement */}
      <section className="relative ">
        <DetailsSectionWithImage
          heading="Un accompagnement pour mieux comprendre votre fonctionnement"
          subheading="L'objectif n'est pas de vous « normaliser », mais de vous aider à :"
          listItems={[
            "mieux comprendre votre fonctionnement neurodivergent",
            "identifier les sources de surcharge ou de stress",
            "développer des stratégies adaptées à votre réalité",
            "mieux respecter vos besoins et vos limites",
            "construire un quotidien plus équilibré",
          ]}
          closingStatement="Cet accompagnement se fait dans une approche respectueuse et inclusive."
          imageAlt="Personne recevant un accompagnement respectueux"
        />
      </section>

      {/* Thérapie individuelle */}
      <section className="bg-white content-stretch flex flex-col items-center pb-[96px] pt-[24px] px-4 md:px-8 relative w-full">
        <div className="w-full max-w-[1320px] mx-auto">
          <FadeInOnScroll>
            <h2 className="text-[38px] leading-[42px] sm:text-[44px] sm:leading-[48px] text-primary font-normal mb-8">
              Thérapie individuelle
            </h2>
          </FadeInOnScroll>
          <FadeInOnScroll delay={50}>
            <p className="text-[21px] text-foreground leading-[32px] mb-12 max-w-[900px]">
              La thérapie offre un espace sécuritaire pour
              explorer votre expérience.
            </p>
          </FadeInOnScroll>

          <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-stretch relative shrink-0 w-full">
            <FadeInOnScroll delay={200}>
              <TherapyInfoCard
                title="Mettre des mots sur votre vécu"
                description="Comprendre vos expériences, vos forces et vos défis."
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <TherapyInfoCard
                title="Apprendre à gérer la surcharge"
                description="Identifier les situations qui créent une fatigue cognitive ou sensorielle."
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={400}>
              <TherapyInfoCard
                title="Développer des stratégies adaptées"
                description="Créer des outils concrets pour mieux naviguer dans le quotidien."
              />
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Coaching et outils pratiques */}
      <section className="relative ">
        <DetailsSectionWithImage
          heading="Coaching et outils pratiques"
          subheading="En complément de la thérapie, le coaching peut inclure :"
          listItems={[
            "des stratégies pour gérer la surcharge sensorielle",
            "des outils pour mieux structurer le quotidien",
            "des techniques pour réduire la fatigue sociale",
            "des méthodes pour mieux respecter votre rythme",
          ]}
          closingStatement="L'objectif est de développer des solutions réalistes et adaptées à votre fonctionnement."
          imageAlt="Outils pratiques pour la neurodivergence"
        />
      </section>

      {/* Pour qui? */}
      <section className="bg-white py-24">
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
          <FadeInOnScroll>
            <div className="bg-[rgba(10,100,142,0.1)] rounded-[16px] border-2 border-[#edefeb] p-6 md:p-10">
              <div className="max-w-[900px] mx-auto">
                <h2 className="text-[32px] text-primary font-normal mb-6">
                  Pour qui?
                </h2>
                <p className="text-foreground text-[18px] md:text-[21px] leading-[32px] mb-4">
                  Cet accompagnement peut être pertinent si vous
                  :
                </p>
                <ul className="text-foreground text-[18px] md:text-[21px] leading-[32px] space-y-2">
                  <li className="list-disc ml-6">
                    vous identifiez comme neurodivergent·e
                  </li>
                  <li className="list-disc ml-6">
                    vous vous questionnez sur votre
                    fonctionnement
                  </li>
                  <li className="list-disc ml-6">
                    vivez une surcharge sensorielle ou
                    émotionnelle
                  </li>
                  <li className="list-disc ml-6">
                    avez l'impression de devoir constamment «
                    masquer » votre fonctionnement
                  </li>
                  <li className="list-disc ml-6">
                    cherchez des outils pour mieux vous
                    comprendre et vous organiser
                  </li>
                </ul>
                <p className="text-foreground text-[18px] md:text-[21px] leading-[32px] mt-6 font-bold">
                  Les séances sont offertes en ligne ou en
                  présentiel (marche) à Montréal, Québec.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <ContactCTA />
    </div>
  );
}