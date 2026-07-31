import { SEO } from "../components/SEO";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { ContactCTA } from "../components/ContactCTA";
import DetailsSectionWithImage from "../components/DetailsSectionWithImage";
import TherapyInfoCard from "../components/TherapyInfoCard";
import imgRelation from "figma:asset/009574079d5c9594bbd905966cdffb4245ff83ca.png";

export default function RelationConflictuelle() {
  return (
    <div className="flex flex-col">
      <SEO
        title="Accompagnement pour relations conflictuelles"
        description="Vous vivez une relation difficile en couple, au travail ou en amitié? Un accompagnement pour mieux comprendre la dynamique relationnelle et retrouver une communication plus apaisée."
        path="/therapie/relation-conflictuelle"
        keywords={[
          "thérapie relations conflictuelles",
          "accompagnement couple Montréal",
          "thérapie communication",
          "conflits relationnels",
          "difficultés relationnelles",
          "thérapeute couple",
        ]}
      />

      {/* Hero Section */}
      <section className="bg-background py-16">
        <div className="w-full max-w-[1320px] mx-auto px-4 md:px-8">
          <FadeInOnScroll>
            <h1 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-primary font-normal text-center mb-8">
              Accompagnement pour relations conflictuelles
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <p className="text-[21px] text-foreground text-center max-w-[900px] mx-auto leading-[32px]">
              Vous vivez une relation difficile en couple, au
              travail ou en amitié?
              <br />
              Les tensions, les malentendus et les conflits
              répétés peuvent devenir épuisants et créer un
              sentiment d'incompréhension ou d'impuissance. Cet
              accompagnement vous aide à mieux comprendre ce qui
              se joue dans la relation et à retrouver une
              communication plus apaisée.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Vous vivez une relation difficile? */}
      <section className="relative ">
        <DetailsSectionWithImage
          heading="Vous vivez une relation difficile?"
          subheading="Vous pourriez reconnaître certaines situations :"
          listItems={[
            "Des disputes fréquentes ou des tensions persistantes",
            "Des conversations qui se transforment rapidement en conflits",
            "La difficulté à exprimer vos besoins sans créer de réaction négative",
            "L'impression de ne pas être entendu·e ou respecté·e",
            "Une communication qui tourne en rond sans solution",
          ]}
          closingStatement="Ces situations peuvent générer du stress, de la frustration et parfois un sentiment d'isolement."
          imageAlt="Personne recevant du soutien pour relation conflictuelle"
        />
      </section>

      {/* Un accompagnement pour mieux comprendre la dynamique relationnelle */}
      <section className="bg-background  content-stretch flex flex-col items-center pb-[96px] pt-[24px] px-4 md:px-8 relative w-full">
        <div className="w-full max-w-[1320px] mx-auto">
          <FadeInOnScroll>
            <h2 className="text-[38px] leading-[42px] sm:text-[44px] sm:leading-[48px] text-primary font-normal mb-4">
              Un accompagnement pour mieux comprendre la
              dynamique relationnelle
            </h2>
            <h3 className="text-[32px] leading-[34px] text-primary mb-8">
              Cet accompagnement vise à vous aider à :
            </h3>
          </FadeInOnScroll>

          <ul className="list-disc mb-[8px]">
            <FadeInOnScroll delay={100}>
              <li className="text-[21px] text-foreground">
                mieux comprendre ce qui se joue dans la relation
              </li>
            </FadeInOnScroll>
            <FadeInOnScroll delay={150}>
              <li className="text-[21px] text-foreground leading-relaxed">
                identifier les déclencheurs de conflits
              </li>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <li className="text-[21px] text-foreground leading-relaxed">
                exprimer vos besoins avec plus de clarté
              </li>
            </FadeInOnScroll>
            <FadeInOnScroll delay={250}>
              <li className="text-[21px] text-foreground leading-relaxed">
                développer une communication plus calme et
                constructive
              </li>
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <li className="text-[21px] text-foreground leading-relaxed">
                retrouver des relations plus équilibrées
              </li>
            </FadeInOnScroll>
          </ul>

          <FadeInOnScroll delay={350}>
            <p className="font-bold leading-[32px] text-[21px]">
              Le travail se fait à votre rythme, dans un espace
              sécuritaire et sans jugement.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Thérapie individuelle */}
      <section className="content-stretch flex flex-col items-center pb-[96px] pt-[96px] px-4 md:px-8 relative w-full">
        <div className="w-full max-w-[1320px] mx-auto">
          <FadeInOnScroll>
            <h2 className="text-[38px] leading-[42px] sm:text-[44px] sm:leading-[48px] text-primary font-normal mb-4">
              Thérapie individuelle
            </h2>
            <p className="text-[21px] text-foreground mb-8 leading-[32px]">
              La thérapie permet d'explorer en profondeur votre
              vécu relationnel.
            </p>
          </FadeInOnScroll>

          <div className="content-stretch flex flex-col lg:flex-row gap-[32px] items-stretch relative shrink-0 w-full">
            <FadeInOnScroll delay={200}>
              <TherapyInfoCard
                title="Comprendre les schémas relationnels"
                description="Identifier les dynamiques qui se répètent dans vos relations."
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={300}>
              <TherapyInfoCard
                title="Clarifier vos besoins"
                description="Apprendre à reconnaître et exprimer ce qui est important pour vous."
              />
            </FadeInOnScroll>
            <FadeInOnScroll delay={400}>
              <TherapyInfoCard
                title="Renforcer votre positionnement"
                description="Développer des limites saines et une communication plus affirmée."
              />
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Coaching en communication */}
      <section className="bg-dark content-stretch flex flex-col items-center pb-[96px] pt-[24px] px-4 md:px-8 relative w-full">
        <div className="w-full max-w-[1320px] mx-auto">
          <FadeInOnScroll>
            <h2 className="text-[38px] leading-[42px] sm:text-[44px] sm:leading-[48px] text-primary font-normal mb-4">
              Coaching en communication
            </h2>
            <p className="text-[21px] text-foreground mb-8 leading-[32px]">
              En complément, le coaching propose des outils
              pratiques pour améliorer la communication.
              <br />
              Cela peut inclure :
            </p>
          </FadeInOnScroll>

          <ul className="list-disc mb-[8px]">
            <FadeInOnScroll delay={100}>
              <li className="text-[21px] text-foreground leading-relaxed">
                des techniques de communication plus apaisée
              </li>
            </FadeInOnScroll>
            <FadeInOnScroll delay={150}>
              <li className="text-[21px] text-foreground leading-relaxed">
                des stratégies pour désamorcer les conflits
              </li>
            </FadeInOnScroll>
            <FadeInOnScroll delay={200}>
              <li className="text-[21px] text-foreground leading-relaxed">
                des outils pour exprimer vos besoins clairement
              </li>
            </FadeInOnScroll>
            <FadeInOnScroll delay={250}>
              <li className="text-[21px] text-foreground leading-relaxed">
                des exercices pour améliorer l'écoute et la
                compréhension mutuelle
              </li>
            </FadeInOnScroll>
          </ul>

          <FadeInOnScroll delay={300}>
            <p className="font-bold leading-[32px] text-[21px]">
              <strong>Objectif :</strong> favoriser des échanges
              plus respectueux et constructifs.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Dans quels types de relations? */}
      <section className="relative ">
        <DetailsSectionWithImage
          heading="Dans quels types de relations?"
          subheading="Cet accompagnement peut concerner :"
          listItems={[
            "Les relations de couple",
            "Les relations familiales",
            "Les relations professionnelles",
            "Les relations d'amitié",
            "Toute relation importante qui génère des tensions ou des conflits",
          ]}
          closingStatement="Les séances peuvent vous aider à mieux comprendre votre rôle dans la dynamique relationnelle et à retrouver un équilibre."
          image={imgRelation}
          imageAlt="Accompagnement pour relations difficiles"
        />
      </section>

      {/* Contact Section */}
      <ContactCTA />
    </div>
  );
}