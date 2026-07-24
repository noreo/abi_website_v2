import { ContactSection } from "../components/ContactSection";
import { SEO } from "../components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Me joindre ou prendre Rendez-vous en thérapie individuelle"
        description="Contactez Abigaïl Leconte pour prendre rendez-vous. Thérapie individuelle à Montréal et en ligne. Téléphone: 514 660-1583."
        path="/contact"
      />
      <section className="bg-background py-16 px-4 text-center">
        <h1 className="text-[42px] md:text-[54px] leading-tight text-primary font-normal mb-6">
          Me joindre <br />
          ou prendre Rendez&#8209;vous
        </h1>
        <p className="text-[21px] text-foreground max-w-2xl mx-auto leading-relaxed">
          N'hésitez pas à me contacter pour toutes questions ou
          pour fixer un premier rendez-vous.
        </p>
      </section>

      <ContactSection />
    </>
  );
}