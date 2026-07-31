import { ContactSection } from "../components/ContactSection";
import { SEO } from "../components/SEO";

const quotes = [
  {
    text: "J'ai beaucoup apprécié mes séances et l'attitude de ma thérapeute face à ma vulnérabilité. Son écoute et sa bienveillance ont été d'un grand réconfort. Tout en m'aidant à voir les choses avec un nouveau regard.",
    author: ""
  },
  {
    text: "Je pense être tombé exactement sur la personne adéquate pour faire ce bout de chemin introspectif. J'ai beaucoup apprécié son écoute et sa bienveillance.",
    author: ""
  },
  {
    text: "J'ai vraiment aimé l'approche d'Abigaïl. Sa douceur, son écoute active et sa façon d'être touchée par mes témoignages m'auront permis de développer ces qualités envers moi-même. Je me sens beaucoup plus à l'écoute de mon ressenti et j'accepte mieux ce que je vis.",
    author: ""
  }
];

export default function Testimonials() {
  return (
    <>
      <SEO
        title="Témoignages"
        description="Découvrez les témoignages de personnes qui ont bénéficié d'un accompagnement thérapeutique bienveillant avec Abigaïl Leconte."
        path="/temoignages"
      />
      <section className="bg-background py-20 px-4 text-center">
         <h1 className="text-[42px] md:text-[54px] text-primary font-normal mb-6">
           Témoignages
         </h1>
      </section>

      <section className="max-w-[1320px] mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((quote, index) => (
            <div key={index} className="bg-dark rounded-[16px] shadow-sm border border-gray-100 p-8 flex flex-col gap-6 relative group hover:shadow-md transition-shadow">
              <span className="text-[54px] text-primary leading-none absolute top-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity">"</span>
              <p className="text-[18px] text-foreground leading-relaxed relative z-10 pt-6">
                {quote.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto bg-background rounded-[32px] p-12 text-center space-y-6">
            <h3 className="text-[32px] leading-[34px] text-foreground italic font-semibold">
               « Être authentique, c'est être entièrement soi-même et agir dans le respect de sa vérité profonde, c'est-à-dire de son ressenti, de ses besoins, de ses désirs, de ses valeurs, de ses goûts et de ses priorités. »
            </h3>
            <p className="text-[21px] text-foreground font-medium">— Colette Portelance</p>
        </div>
      </section>

      <ContactSection />
    </>
  );
}