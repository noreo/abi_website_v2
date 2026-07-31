import { ContactSection } from "../components/ContactSection";
import { SEO } from "../components/SEO";
import { FadeInOnScroll } from "../components/FadeInOnScroll";

export default function Legal() {
  return (
    <section className="py-24 bg-dark">
      <SEO
        title="Respect des lois et confidentialité pour la thérapie de relation d'aide"
        description="Notre engagement envers la protection de vos renseignements personnels. Conformité avec la Loi 25 et les normes professionnelles en thérapie."
        path="/legal"
      />
      <div className="max-w-[1320px] mx-auto px-4 md:px-8">
        <FadeInOnScroll>
          <h1 className="text-[44px] leading-[48px] md:text-[54px] md:leading-[58px] text-primary font-normal text-center mb-16">
            Respect des lois
          </h1>
        </FadeInOnScroll>

        <div className="space-y-8 max-w-4xl mx-auto">
          <FadeInOnScroll delay={100}>
            <div className="bg-background/50 rounded-[16px] p-10 border border-gray-100">
              <h3 className="text-[32px] leading-[34px] text-primary font-normal mb-6">
                Respect de la Loi 25 - Politique de
                confidentialité
              </h3>
              <p className="text-[18px] text-foreground leading-relaxed">
                Chez Abigaïl Leconte, nous accordons une
                importance capitale à la protection des
                renseignements personnels et de la vie privée de
                ses clients et des utilisateurs de son site
                Internet. Pour cette raison, nous nous engageons
                à respecter la Loi sur la protection des
                renseignements personnels dans le secteur privé
                ainsi que la confidentialité des renseignements
                que nous collectons.
              </p>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={200}>
            <div className="bg-background/50 rounded-[16px] p-10 border border-gray-100">
              <h3 className="text-[32px] leading-[34px] text-primary font-normal mb-6">
                Psychothérapie et thérapie
              </h3>
              <p className="text-[18px] text-foreground leading-relaxed">
                Je ne pratique pas la psychothérapie car c'est
                une approche réservée aux psychologues. Je
                pratique la thérapie humaniste et la relation
                d'aide. Je vous accompagne simplement dans votre
                chemin de développement personnel.
              </p>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}