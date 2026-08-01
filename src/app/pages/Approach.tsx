import imgMbr2 from "figma:asset/917fcdb5584aaefff7c66ea9c015ab9c9a3fd8a8.png";
import imgPhoto1 from "figma:asset/cd8d9a0123bad01a546e423a6e32d342810876da.png";
import imgPhoto2 from "figma:asset/9cc07ee477be743a0e9303d89c5405cf078101ca.png";
import imgPhoto3 from "figma:asset/c439956cc8a8c9c1c22337515568be384a7f0bf7.png";
import { ContactCTA } from "../components/ContactCTA";
import { SEO } from "../components/SEO";

export default function Approach() {
  const cards = [
    {
      title: "Thérapie humaniste",
      image: imgPhoto1,
      text: [
        "La thérapie humaniste met en avant la capacité de chacun à s'autoréguler et à trouver ses propres ressources intérieures.",
        "Elle permet d'explorer librement son monde intérieur pour mieux se comprendre et trouver des solutions à ses problèmes.",
      ],
    },
    {
      title: "Accompagnement",
      image: imgPhoto2,
      text: [
        "Je crois que chaque personne est unique et possède en elle les clés de son propre bien-être.",
        "J'ai pour but de vous accompagner dans votre cheminement personnel pour vous aider à trouver votre propre voie vers l'épanouissement et la libération.",
      ],
    },
    {
      title: "Service de thérapie",
      image: imgPhoto3,
      text: [
        "Je propose des séances de thérapie individuelle en ligne ou en marchant dans un parc de Montréal :",
        "60 minutes, pour 100$ avec reçus pour les assurances.",
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Mon approche de thérapie : la relation d'aide et humaniste"
        description="Une approche relationnelle, professionnelle, de nature affective. Thérapie humaniste centrée sur l'écoute, la bienveillance et le développement personnel."
        path="/approche"
      />
      <section className="bg-background py-20 px-4 text-center">
        <h1 className="leading-[68px] text-[64px] text-primary mb-6">
          Mon approche de thérapie
        </h1>
        <p className="text-[21px] text-foreground max-w-3xl mx-auto leading-relaxed">
          En tant que Thérapeute en relation d'aide, je vous
          offre un espace où l’on peut enfin déposer ce qui est
          là, sans jugement, en vous accueillant avec humanité.
        </p>
      </section>

      <section className="max-w-[1320px] mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-dark rounded-[16px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-[300px] overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 object-cover min-w-full min-h-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-[32px] leading-[34px] text-primary font-normal">
                  {card.title}
                </h3>
                <div className="text-[18px] text-foreground space-y-4 leading-relaxed">
                  {card.text.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-24 max-w-4xl mx-auto bg-dark p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm">
          <h2 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] text-primary font-normal text-center mb-6">
            Origine de l'approche
          </h2>
          <p className="text-[21px] text-foreground leading-relaxed mb-6">
            Créée par Colette Portelance, « l'approche non
            directive créatrice ® est une approche
            relationnelle, professionnelle, de nature affective.
            Elle favorise le développement de l'amour de soi, du
            respect de soi et de la confiance en soi. Elle
            favorise également l'épanouissement de la
            créativité, le cheminement vers l'autonomie et la
            liberté d'être, dans le respect du fonctionnement
            global de l'être humain et du rythme de progression
            des étapes de son évolution, de sa croissance et de
            son autocréation. »
          </p>
          <p className="text-[16px] text-gray-500 italic text-center">
            Extrait du site web du Centre de Relation d'Aide de
            Montréal
          </p>
        </div>
      </section>
        <section className=" bg-dark max-w-[1320px] mx-auto py-16 px-24 overflow-hidden my-24">
          <div className="relative z-10 mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 items-start ">
            {/* Text Side */}
            <div className="flex-1 text-white space-y-8">
              <h2 className="text-[44px] leading-[48px] sm:text-[54px] sm:leading-[58px] font-semibold">
                Un espace sécuritaire
              </h2>
              <div className="text-[21px] leading-[32px] space-y-4 text-white/90">
                <p>
                  Je vous offre la possibilité de vous nommer en
                  toute sécurité dans un espace d'acceptation de
                  qui vous êtes, en respectant votre rythme,
                  afin de vous aider à prendre conscience de
                  vous-mêmes, de vos limites, de vos ressources,
                  de vos besoins.
                </p>
                <p>
                  C'est dans la relation entre le thérapeute et
                  l'aidé. La personne pourra se découvrir,
                  prendre conscience de ses fonctionnements.
                  Elle trouvera ses réponses et pourra ainsi
                  faire des choix plus satisfaisants et alignés
                  avec sa nature, pour créer sa vie.
                </p>
              </div>
            </div>
          </div>
        </section>
      <ContactCTA />
    </>
  );
}