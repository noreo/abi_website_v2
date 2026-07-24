import { SEO } from "../components/SEO";
import { FadeInOnScroll } from "../components/FadeInOnScroll";
import { Accordion } from "../components/ui/Accordion";
import { ContactCTA } from "../components/ContactCTA";

const faqItems = [
  {
    question:
      "Quels sont les types de thérapie que vous proposez ?",
    answer:
      "Je me spécialise dans l'accompagnement du deuil, la gestion des relations conflictuelles (travail, couple, famille), et le soutien aux personnes neuroatypiques. Je propose une thérapie en relation d'aide personnalisée pour les adultes qui vivent des difficultés dans leurs relations. Chaque accompagnement est adapté à vos besoins spécifiques.",
  },
  {
    question: "Comment se déroule le premier contact ?",
    answer:
      "Je vous offre un appel de 15 minutes pour faire connaissance et vous parler de mon approche plus en détails. Vous pouvez exprimer librement ce qui vous amène en thérapie. ",
  },
  {
    question: "Proposez-vous des séances en ligne ?",
    answer:
      "Oui, je propose des séances en ligne via Teams, en plus des séances en marchant à Montréal. Les séances en ligne sont tout aussi efficaces et permettent une plus grande flexibilité, particulièrement si vous avez des contraintes de déplacement ou d'horaires. Vous pouvez choisir le format qui vous convient le mieux.",
  },
  {
    question: "Proposez-vous des séances en présentiel ?",
    answer:
      "Oui, il s'agit d'une formule unique de thérapie en marchant dans un parc de Montréal, ce qui favorise l’ouverture et le bien-être. Nous déciderons ensemble du parc, comme Frédéric-Back, Jarry, Maisonneuve ou Mont-Royal.",
  },
  {
    question:
      "Quelle est la durée d'une séance et d'un accompagnement ?",
    answer:
      "Une séance dure 60 minutes. Certaines personnes trouvent un bénéfice en quelques séances, tandis que d'autres préfèrent un suivi sur plusieurs mois. Nous ferons régulièrement le point ensemble pour ajuster la fréquence selon vous.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Le tarif d'une séance individuelle est de 100 $ pour 60 minutes, avec reçu d'assurance. Le paiement se fait par virement Interac.",
  },
  {
    question:
      "Les séances sont-elles remboursées par les assurances ?",
    answer:
      "Plusieurs assurances peuvent rembourser les consultations, qui rentrent dans la catégorie Naturopathie. Je vous invite à vérifier auprès de votre assureur si vous bénéficiez de cette couverture.",
  },
  {
    question: "Qu'est-ce qui différencie votre approche ?",
    answer:
      "Mon approche est centrée sur la personne, chaleureuse et sans jugement. Je m'adapte à votre rythme et à vos besoins spécifiques. J'utilise des méthodes humanistes et intégratives, en m'appuyant notamment sur l'écoute active, la validation émotionnelle et des outils concrets pour vous aider à avancer. Mon objectif est de créer un espace sécurisant où vous pouvez explorer vos émotions et trouver vos propres solutions.",
  },
  {
    question: "Comment gérez-vous la confidentialité ?",
    answer:
      "La confidentialité est au cœur de ma pratique professionnelle. Tout ce qui est partagé durant nos séances reste strictement confidentiel, sauf dans les situations où la loi m'oblige à divulguer certaines informations (risque imminent pour vous ou autrui). Vos données personnelles sont sécurisées et ne sont jamais partagées avec des tiers sans votre consentement explicite.",
  },
  {
    question: "Comment puis-je prendre rendez-vous ?",
    answer:
      "Vous pouvez prendre rendez-vous en me contactant via le formulaire de contact sur mon site web, par courriel, ou par téléphone. Je vous répondrai dans les 24 à 48 heures pour convenir ensemble d'un créneau qui vous convient. N'hésitez pas à préciser si vous préférez une séance en présentiel ou en ligne.",
  },
  {
    question:
      "Que faire si je dois annuler ou reporter une séance ?",
    answer:
      "Je comprends que des imprévus peuvent survenir. Si vous devez annuler ou reporter une séance, merci de me prévenir au moins 24 heures à l'avance. Cela me permet de proposer le créneau à une autre personne. Les annulations tardives (moins de 24 heures) ou les absences non justifiées peuvent être facturées. Nous pourrons toujours convenir ensemble d'une nouvelle date qui vous convient.",
  },
];

export default function FAQ() {
  return (
    <>
      <SEO
        title="Questions Fréquentes sur la thérapie"
        description="Trouvez des réponses aux questions fréquentes sur mes services de thérapie à Montréal : types de thérapie, tarifs, et séances en ligne ou présentiel."
        keywords={[
          "FAQ thérapie Montréal",
          "questions thérapie",
          "tarifs thérapie",
          "séances en ligne",
          "séances en présentiel",
          "confidentialité thérapie",
          "rendez-vous thérapeute",
        ]}
        path="/faq"
      />

      {/* Hero Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-[1320px] mx-auto px-4 md:px-8">
          <FadeInOnScroll>
            <h1 className="text-[44px] leading-[48px] md:text-[54px] md:leading-[58px] lg:text-[64px] lg:leading-[68px] text-primary font-normal text-center mb-6">
              Questions Fréquentes
            </h1>
          </FadeInOnScroll>
          <FadeInOnScroll delay={100}>
            <p className="text-[18px] md:text-[21px] text-foreground text-center max-w-[900px] mx-auto leading-relaxed">
              Vous trouverez ici les réponses aux questions les
              plus fréquemment posées concernant mes services de
              thérapie en relation d'aide. Si vous ne trouvez
              pas la réponse à votre question, n'hésitez pas à
              me contacter directement.
            </p>
          </FadeInOnScroll>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8">
          <FadeInOnScroll delay={200}>
            <Accordion items={faqItems} allowMultiple={false} />
          </FadeInOnScroll>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </>
  );
}