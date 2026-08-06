import { Link } from "react-router";
import svgPaths from "../../imports/svg-ks1ah5fqjw";
import imgHero from "figma:asset/f3ed7490cd82a6da969e31a77e729630ee792ffb.png";
import imgMbr2 from "figma:asset/917fcdb5584aaefff7c66ea9c015ab9c9a3fd8a8.png";
import imgCard1 from "figma:asset/cd8d9a0123bad01a546e423a6e32d342810876da.png";
import imgCard2 from "figma:asset/9cc07ee477be743a0e9303d89c5405cf078101ca.png";
import imgCard3 from "figma:asset/c439956cc8a8c9c1c22337515568be384a7f0bf7.png";
import imgCardRelation from "figma:asset/948278c8b32f68b8b3116c0978a2893f4d91d1ab.png";
import imgRelation from "figma:asset/009574079d5c9594bbd905966cdffb4245ff83ca.png";
import imgNeurodivergent from "figma:asset/d651e6ee05d29cbc9bd200ce9c2ea93127c60196.png";
import { ContactSection } from "../components/ContactSection";
import { SEO } from "../components/SEO";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { HelpCard } from "../components/HelpCard";
import { SecondaryButton } from "../components/SecondaryButton";
import { Tarif } from "../components/Tarif";
import { OptimizedImage } from "../components/OptimizedImage";
import TherapieType from "../../imports/TherapieType";
import imgWalking from "figma:asset/eafaf8f15fceebdb4a4becf6c58e07f0100f4b2a.png";
import imgBgGlow from "../../assets/bg-glow.png";
import { Instagram } from "lucide-react";
import { SocialLink } from "../components/SocialLink";



// Hero Section
function Hero() {
  return (
    <section className="bg-background flex items-center justify-center relative px-4 md:px-20 py-8 md:py-24 lg:py-[140px]">
      <div className="max-w-[1320px] w-full h-auto lg:h-[500px] relative">
        {/* Background Glow Image */}
        <div className="absolute opacity-50 md:opacity-100 right-[-250px] md:right-[-350px] top-1/2 -translate-y-1/2 w-[800px] lg:w-[1000px] aspect-square pointer-events-none ">
          <img
            src={imgBgGlow}
            alt="Illustration d'une porte avec halo lumineux en arrière-plan"
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col gap-6 items-start max-w-[901px]">
          {/* Eyebrow */}
          <div className="flex flex-col gap-2 w-full">
            <p className="font-['Crimson_Pro'] font-extralight text-[24px] md:text-[32px] leading-[1.2] uppercase text-foreground">
              Accompagnement thérapeutique<br />
              &amp; intelligence émotionnelle
            </p>
            
            {/* Main Headline */}
            <h1 className="font-['Crimson_Pro'] font-normal text-[48px] md:text-[72px] lg:text-[94px] leading-[1.1] tracking-[-0.01em] text-primary drop-shadow-[0_0_24px_rgba(1,4,6,1)]">
              Retrouve l'éclat de ton véritable moi.
            </h1>
          </div>

          {/* Paragraph */}
          <p className="font-['Manrope'] font-normal text-[20px] md:text-[24px] leading-[1.6] text-foreground max-w-[636px]">
            Quand tu t'adaptes tellement aux autres… Tu ne sais plus vraiment qui tu es. Te retrouver, commence ici.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="bg-primary text-[#020202] px-8 py-4 rounded-[4px] font-['Crimson_Pro'] font-semibold text-[20px] md:text-[24px] uppercase shadow-[2px_2px_2px_0px_black,0_0_50px_rgba(255,199,113,0.35)] hover:shadow-[4px_4px_4px_0px_black,0_0_80px_rgba(255,199,113,0.55)] hover:bg-[#ffdead] transition-all duration-500"
          >
            Prendre Rendez-vous
          </Link>
        </div>
      </div>
    </section>
  );
}

// Aide & accompagnement Section
function HelpSupport() {
  return (
    <section className="py-16">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeInOnScroll>
          <h2 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-primary font-normal text-center mb-12">
            Une thérapie personnalisée
          </h2>
        </FadeInOnScroll>
        <FadeInOnScroll delay={100}>
          <p className="text-[21px] text-foreground text-center max-w-[1028px] mx-auto mb-12 leading-[32px]">
            Chaque période difficile mérite une écoute attentive
            et un soutien adapté.
            <br />
            Je propose une thérapie personnalisée pour vous
            aider à retrouver équilibre et clarté.
            <br />
            Voici quelques-unes des accompagnements possibles :
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch p-4 -m-4">
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
      </div>
    </section>
  );
}

// Approach List (Accompagnement)
function ApproachSummary() {
  return (
    <section className="py-16 bg-background" id="Accompagnement">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8 text-center space-y-16">
        <FadeInOnScroll>
          <h2 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-primary font-normal text-center mb-12">
            Un accompagnement bienveillant
          </h2>

          <p className="text-[21px] text-foreground max-w-4xl mx-auto">
            Je vous accompagne avec empathie et bienveillance,{" "}
            <br />
            dans le respect de votre rythme, sans jugement.
            <br />
            Je peux vous aider notamment si vous&nbsp;:
          </p>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-left">
          {/* Item 1 */}
          <FadeInOnScroll delay={100}>
            <div className="flex gap-6 items-start">
              <div className="w-[40px] h-[40px] shrink-0 text-primary">
                <svg
                  viewBox="14 12 40 40"
                  className="w-full h-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M33.2707 43.5479L47.7967 18.5309L18.7446 18.5309L33.2707 43.5479ZM32.4059 46.0416C32.7913 46.7054 33.75 46.7054 34.1354 46.0416L50.3984 18.0331C50.7855 17.3664 50.3046 16.5309 49.5337 16.5309L17.0076 16.5309C16.2368 16.5309 15.7558 17.3664 16.1429 18.0331L32.4059 46.0416Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-[18px] text-foreground leading-relaxed">
                <strong>
                  Traversez des moments difficiles :{" "}
                </strong>
                deuil, pertes, séparation, conflit familial,
                maladie ou un changement important dans votre
                vie
              </p>
            </div>
          </FadeInOnScroll>

          {/* Item 2 */}
          <FadeInOnScroll delay={200}>
            <div className="flex gap-6 items-start">
              <div className="w-[40px] h-[40px] shrink-0 text-primary">
                <svg
                  viewBox="15 12 42 42"
                  className="w-full h-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M35.2715 27.0309C35.2715 31.7253 31.4659 35.5309 26.7715 35.5309C22.0771 35.5309 18.2715 31.7253 18.2715 27.0309C18.2715 22.3365 22.0771 18.5309 26.7715 18.5309C31.4659 18.5309 35.2715 22.3365 35.2715 27.0309ZM36.2715 22.5529C34.5908 18.9936 30.9688 16.5309 26.7715 16.5309C20.9725 16.5309 16.2715 21.2319 16.2715 27.0309C16.2715 32.8299 20.9725 37.5309 26.7715 37.5309C30.9688 37.5309 34.5908 35.0681 36.2715 31.5088C37.9522 35.0681 41.5742 37.5309 45.7715 37.5309C51.5705 37.5309 56.2715 32.8299 56.2715 27.0309C56.2715 21.2319 51.5705 16.5309 45.7715 16.5309C41.5742 16.5309 37.9522 18.9936 36.2715 22.5529ZM37.2715 27.0309C37.2715 31.7253 41.0771 35.5309 45.7715 35.5309C50.4659 35.5309 54.2715 31.7253 54.2715 27.0309C54.2715 22.3365 50.4659 18.5309 45.7715 18.5309C41.0771 18.5309 37.2715 22.3365 37.2715 27.0309Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-[18px] text-foreground leading-relaxed">
                <strong>
                  Vivez des difficultés relationnelles{" "}
                </strong>
                au travail, en couple, en famille, avec vos
                ami·e·s et souhaitez mieux communiquer et mieux
                vous affirmer.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Item 3 */}
          <FadeInOnScroll delay={300}>
            <div className="flex gap-6 items-start">
              <div className="w-[40px] h-[40px] shrink-0 text-primary">
                <svg
                  viewBox="14 12 40 40"
                  className="w-full h-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <g filter="url(#filter0_d_161_172)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M34.2708 20.294L30.9043 29.3919C30.6004 30.213 29.953 30.8605 29.1318 31.1643L20.0339 34.5309L29.1318 37.8974C29.953 38.2013 30.6004 38.8487 30.9043 39.6699L34.2708 48.7678L37.6373 39.6699C37.9412 38.8487 38.5886 38.2013 39.4098 37.8974L48.5077 34.5309L39.4098 31.1643C38.5886 30.8605 37.9412 30.213 37.6373 29.3919L34.2708 20.294ZM35.2087 17.0654C34.8865 16.1948 33.6551 16.1948 33.3329 17.0654L29.0286 28.6978C28.9273 28.9715 28.7115 29.1873 28.4377 29.2886L16.8053 33.593C15.9347 33.9152 15.9347 35.1466 16.8053 35.4687L28.4377 39.7731C28.7115 39.8744 28.9273 40.0902 29.0286 40.3639L33.333 51.9964C33.6551 52.867 34.8865 52.867 35.2087 51.9964L39.513 40.3639C39.6143 40.0902 39.8301 39.8744 40.1039 39.7731L51.7363 35.4687C52.6069 35.1466 52.6069 33.9152 51.7363 33.593L40.1039 29.2886C39.8301 29.1873 39.6143 28.9715 39.513 28.6978L35.2087 17.0654Z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
              </div>
              <p className="text-[18px] text-foreground leading-relaxed">
                <strong>
                  Avez de la difficulté à vous faire
                  respecter{" "}
                </strong>
                et désirez apprendre une communication plus
                authentique, en tenant compte des autres.
              </p>
            </div>
          </FadeInOnScroll>

          {/* Item 4 */}
          <FadeInOnScroll delay={400}>
            <div className="flex gap-6 items-start">
              <div className="w-[40px] h-[40px] shrink-0 text-primary">
                <svg
                  viewBox="14 12 40 40"
                  className="w-full h-full"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.7715 44.5309C38.9512 44.5309 44.7715 38.7106 44.7715 31.5309C44.7715 24.3512 38.9512 18.5309 31.7715 18.5309C24.5918 18.5309 18.7715 24.3512 18.7715 31.5309C18.7715 38.7106 24.5918 44.5309 31.7715 44.5309ZM31.7715 46.5309C40.0558 46.5309 46.7715 39.8152 46.7715 31.5309C46.7715 23.2466 40.0558 16.5309 31.7715 16.5309C23.4872 16.5309 16.7715 23.2466 16.7715 31.5309C16.7715 39.8152 23.4872 46.5309 31.7715 46.5309Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <p className="text-[18px] text-foreground leading-relaxed">
                <strong>Souhaitez vous épanouir</strong>,
                mieux vous connaître, améliorer votre estime et
                votre confiance en vous, cultiver l’amour de
                soi, accepter vos limites, prendre soin de vos
                besoins et assumer qui vous êtes.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}

function TherapieTypes() {
  return (
  <section className="w-full flex flex-col justify-center items-center space-y-8 pb-16">
        <TherapieType
          title="Thérapie en marchant ou en ligne"
          description="La thérapie en marchant (walk and talk therapy) combine les effets bénéfiques de la parole et du mouvement. Vous pouvez aussi consulter en ligne depuis le confort de votre foyer."
          image={imgWalking}
          imageAlt="Personnes marchant dans la nature, illustrant la thérapie en marchant"
        />
    <div className="text-center w-full">
          <SecondaryButton to="/therapie">
            Découvrir la thérapie
          </SecondaryButton>
        </div>
     
      </section>
    )
}

// Testimonials (Témoignages)
function TestimonialsPreview() {
  const quotes = [
    {
      text: "J'ai beaucoup apprécié mes séances et l'attitude de ma thérapeute face à ma vulnérabilité. Son écoute et sa bienveillance ont été d'un grand réconfort. Tout en m'aidant à voir les choses avec un nouveau regard.",
    },
    {
      text: "Je pense être tombé exactement sur la personne adéquate pour faire ce bout de chemin introspectif. J'ai beaucoup apprécié son écoute et sa bienveillance.",
    },
    {
      text: "J'ai vraiment aimé l'approche d'Abigaïl. Sa douceur, son écoute active et sa façon d'être touchée par mes témoignages m'auront permis de développer ces qualités envers moi-même. Je me sens beaucoup plus à l'écoute de mon ressenti et j'accepte mieux ce que je vis.",
    },
  ];

  return (
    <section
      className="py-16 bg-dark"
      id="sec_Temoignages"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeInOnScroll>
          <h2 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-primary font-normal text-center mb-6">
            Témoignages
          </h2>
          <div className="flex justify-center gap-2 mb-16">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            ))}
          </div>
        </FadeInOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quotes.map((quote, i) => (
            <FadeInOnScroll key={i} delay={i * 100}>
              <div className="bg-background rounded-[16px] p-8 h-full border border-border">
                <div className="flex flex-row w-full h-full">
                  <div className="text-[3rem] text-primary leading-none shrink-0">
                    «
                  </div>
                  <div className="p-2 grow">
                    <p className="text-[18px] text-foreground leading-relaxed">
                      {quote.text}
                    </p>
                  </div>
                  <div className="text-[3rem] text-primary leading-none shrink-0 self-end">
                    »
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section (À propos)
function AboutPreview() {
  return (
    <section className="py-16 relative bg-dark" id="Apropos">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeInOnScroll>
          <div className="bg-background rounded-[16px] p-8 md:p-12 shadow-sm border border-border relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-primary font-normal text-center mb-12">
                  À propos de moi
                </h2>
                <p className="text-[18px] text-foreground leading-relaxed">
                  Je suis une thérapeute qui propose un service
                  de thérapie individuelle, pour adulte, mon
                  approche vous aide à explorer vos émotions
                  sans jugement ni interprétation.
                </p>
                <p className="text-[18px] text-foreground leading-relaxed">
                  Je vous accompagne dans votre chemin de mieux
                  être et de développement personnel. J'ai été
                  formée au Centre de Relation d'Aide de
                  Montréal (CRAM).
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <SecondaryButton className="inline-block" to="/a-propos">
                    À propos
                  </SecondaryButton>
                    
                <span className="h-6 w-px bg-border" aria-hidden="true"></span>
                <SocialLink
            href="https://www.instagram.com/abigailtherapeute/"
            icon={Instagram}
            label="Instagram" 
          />
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-end">
                <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden">
                  <img
                    src={imgHero}
                    alt="Abigaïl Leconte"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

// Contact Info Section
function ContactInfo() {
  return (
    <section className="py-16 bg-dark" id="contacts01-9">
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="flex flex-row justify-center items-center text-center">
          <FadeInOnScroll delay={100}>
            <div className="bg-background p-8 rounded-2xl shadow-sm h-full border border-border">
              <h3 className="text-[32px] leading-[34px] font-bold mb-3 text-foreground">
                Thérapie en ligne ou en marchant
              </h3>
              <p className="text-[18px] text-foreground mb-3">
                Montréal, Québec
              </p>
              <p className="text-[18px] text-foreground">
                En ligne - Québec & France
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
function ContactInfoTEMP() {
  return (
    <section
      className="py-16 bg-dark"
      id="contact-info-temp"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <FadeInOnScroll delay={0}>
            <div className="bg-background p-8 rounded-2xl shadow-sm h-full border border-border">
              <h6 className="text-[24px] font-bold mb-3 text-foreground">
                Contact
              </h6>
              <p className="text-[18px] text-primary font-medium">
                <a
                  href={`tel:+1${atob("NTE0IDY2MC0xNTgz").replace(/\s|-/g, "")}`}
                >
                  {atob("NTE0IDY2MC0xNTgz")}
                </a>
              </p>
              <p className="text-[18px] text-primary font-medium mt-2">
                <a
                  href={`mailto:${atob("YWJpZ2FpbGxlY29udGVAaG90bWFpbC5mcg==")}`}
                >
                  {atob("YWJpZ2FpbGxlY29udGVAaG90bWFpbC5mcg==")}
                </a>
              </p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <div className="bg-background p-8 rounded-2xl shadow-sm h-full border border-border">
              <h6 className="text-[24px] font-bold mb-3 text-foreground">
                Emplacement
              </h6>
              <p className="text-[18px] text-foreground">
                Montréal, Québec
                <br />
                En ligne - Québec & France
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Thérapeute à Montréal : deuil, relation et neurodiversité"
        description="Accompagnement bienveillant à Montréal et en ligne. Thérapie individuelle en relation d'aide pour les difficultés relationnelles, deuil et neurodiversité."
        path="/"
        keywords={[
          "thérapeute Montréal",
          "thérapie en ligne",
          "relation d'aide Montréal",
          "thérapie humaniste",
          "accompagnement bienveillant",
          "thérapie deuil",
          "difficultés relationnelles",
          "Abigaïl Leconte",
        ]}
      />
      <Hero />
      <HelpSupport />
      <ApproachSummary />
      <TherapieTypes />
      <TestimonialsPreview />
      <Tarif />
      <AboutPreview />
      <ContactInfo />
    </>
  );
}