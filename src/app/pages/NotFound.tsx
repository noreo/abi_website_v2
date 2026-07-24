import { SEO } from "../components/SEO";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton } from "../components/SecondaryButton";
import { FadeInOnScroll } from "../components/FadeInOnScroll";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page non trouvée - Erreur 404"
        description="La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil ou découvrez nos services de thérapie."
        path="/404"
      />
      
      <section className="bg-background min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-[800px] mx-auto text-center">
          <FadeInOnScroll>
            {/* 404 Number - Decorative */}
            <div className="mb-8">
              <span className="text-[120px] md:text-[180px] leading-none text-primary opacity-20 font-bold">
                404
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[44px] leading-[48px] md:text-[54px] md:leading-[58px] lg:text-[64px] lg:leading-[68px] text-primary font-normal mb-6">
              Oups… cette page n'existe pas
            </h1>

            {/* Paragraph */}
            <p className="text-[21px] md:text-[24px] text-foreground leading-relaxed mb-12 max-w-[600px] mx-auto">
              Elle a peut-être changé de chemin, mais vous êtes toujours au bon endroit.
            </p>

            {/* Subheading */}
            <h2 className="text-[32px] md:text-[40px] leading-[40px] md:leading-[48px] text-primary font-normal mb-8">
              Que souhaitez-vous faire ?
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PrimaryButton to="/">
                Retourner à l'accueil
              </PrimaryButton>
              
              <SecondaryButton to="/therapie">
                Découvrir les accompagnements
              </SecondaryButton>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
