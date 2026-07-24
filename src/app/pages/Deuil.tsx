import { SEO } from "../components/SEO";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { ContactCTA } from "../components/ContactCTA";
import DetailsSectionWithImage from "../components/DetailsSectionWithImage";
import TherapyInfoCard from "../components/TherapyInfoCard";
import imgDeuil from "figma:asset/19f3d0dcbfc42ee8fca3d53bb0667efa7497345a.png";

export default function Deuil() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Thérapie et accompagnement du deuil au Québec"
        description="Vous vivez un deuil et vous ne vous sentez pas compris·e par vos proches? Un espace sécuritaire et bienveillant pour déposer vos émotions et retrouver progressivement un équilibre."
        path="/therapie/deuil"
        keywords={[
          "thérapie deuil Québec",
          "accompagnement deuil Montréal",
          "thérapie perte",
          "soutien deuil",
          "deuil difficile",
          "thérapeute deuil",
        ]}
      />

      {/* Hero Section */}
      <section className="bg-background py-24">
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
          <FadeInOnScroll>
            <h1 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-primary font-normal text-center mb-8">
              Thérapie et accompagnement du deuil
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <p className="text-[21px] text-foreground text-center max-w-[900px] mx-auto leading-[32px]">
              Vous vivez un deuil et vous ne vous sentez pas
              compris·e par vos proches?
              <br />
              La perte d'un être cher, d'une relation ou d'un
              repère de vie peut bouleverser profondément. Cet
              accompagnement vous offre un espace sécuritaire et
              bienveillant pour déposer vos émotions et
              retrouver progressivement un équilibre.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Vous traversez un deuil difficile? */}
      <section className="relative ">
        <DetailsSectionWithImage
          heading="Vous traversez un deuil difficile?"
          subheading="Vous pouvez vous reconnaître si vous ressentez :"
          listItems={[
            "Un sentiment d'isolement",
            "L'impression que votre entourage ne comprend pas votre douleur",
            "Une grande fatigue émotionnelle",
            "De la culpabilité ou de la confusion",
            "De la difficulté à avancer malgré le temps qui passe",
          ]}
          closingStatement="Chaque deuil est unique. Il n'y a pas de bonne ou de mauvaise façon de le vivre."
          imageAlt="Personne recevant du soutien lors d'un deuil"
        />
      </section>

      {/* Thérapie individuelle */}
      <section className="bg-white content-stretch flex flex-col items-center py-[24px] px-4 md:px-8 relative w-full">
        <div className="w-full max-w-[1320px] mx-auto">
          <FadeInOnScroll>
            <h2 className="text-[38px] leading-[42px] sm:text-[44px] sm:leading-[48px] text-primary font-normal mb-8">
              Thérapie personnalisée
            </h2>
          </FadeInOnScroll>

          <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-stretch relative shrink-0 w-full">
            <FadeInOnScroll delay={200}>
              <TherapyInfoCard
                title="Exprimer librement vos émotions"
                description="Toutes vos émotions sont accueillies, sans jugement."
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <TherapyInfoCard
                title="Comprendre le processus du deuil"
                description="Identifier ce que vous traversez permet de réduire l'auto-critique et de normaliser votre expérience."
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={400}>
              <TherapyInfoCard
                title="Retrouver des repères"
                description="Rebâtir progressivement une stabilité émotionnelle et personnelle."
              />
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Un accompagnement humain et personnalisé */}

      <section className="relative ">
        <DetailsSectionWithImage
          heading=" Un accompagnement humain et personnalisé"
          subheading="L'accompagnement en deuil permet de :"
          listItems={[
            "Mettre des mots sur vos émotions",
            "L'impression que votre entourage ne comprend pas votre douleur",
            "Comprendre les réactions liées au processus de deuil",
            "Retrouver des repères dans votre quotidien",
            "Reconstruire du sens à votre rythme",
          ]}
          closingStatement="Les séances sont adaptées à votre réalité et à votre rythme."
          image={imgDeuil}
          imageAlt="Personne recevant du soutien lors d'un deuil"
        />
      </section>

      {/* Deuil d'un animal de compagnie */}
      <section className="bg-white py-16">
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
          <FadeInOnScroll>
            <div className="bg-[rgba(240,179,143,0.25)] rounded-[16px] border-2 border-[#edefeb] p-6 md:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-[38px] leading-[42px] sm:text-[44px] sm:leading-[48px] text-primary font-normal mb-4">
                    Deuil d'un animal de compagnie
                  </h2>
                </div>
                <div>
                  <p className="text-foreground text-[18px] md:text-[21px] leading-[32px]">
                    Votre animal de compagnie occupait une
                    grande place de choix dans votre cœur. Il
                    est normal donc de normal vivre un deuil, le
                    reconnaitre permettre de mieux le vivre,
                    comme tout autre deuil.
                  </p>
                </div>
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