import imgPhoto from "figma:asset/f3ed7490cd82a6da969e31a77e729630ee792ffb.png";
import svgPaths from "../../imports/svg-ks1ah5fqjw";
import { ContactSection } from "../components/ContactSection";
import { SEO } from "../components/SEO";

export default function About() {
  return (
    <>
      <SEO
        title="À propos de moi, Abigaïl Leconte, Thérapeute"
        description="Je suis Abigaïl Leconte, thérapeute formée au Centre de Relation d'Aide de Montréal. Je propose un accompagnement bienveillant en thérapie individuelle."
        path="/a-propos"
      />
      <section className="bg-background py-20 px-4 text-center">
        <h1 className="leading-[68px] text-[64px] text-primary mb-6">
          À propos de moi
        </h1>
      </section>

      <section className="max-w-[1320px] mx-auto px-4 py-16 flex flex-col md:flex-row gap-16 items-start">
        {/* Text Side - col-md-8 equivalent */}
        <div className="w-full md:w-2/3">
          <p className="text-[18px] text-foreground leading-relaxed mb-4">
            Je m’appelle Abigail. Je suis thérapeute en relation
            d’aide, spécialisée dans l’accompagnement des{" "}
            <strong>
              personnes hypersensibles, suradaptées, épuisées
              d’avoir trop porté{" "}
            </strong>{" "}
            et qui souhaitent enfin revenir à elles-mêmes.
          </p>
          <p className="text-[18px] text-foreground leading-relaxed mb-4">
            Mon approche est douce, profonde et structurante.
            Elle s’appuie sur la compréhension fine des
            dynamiques relationnelles, la régulation
            émotionnelle, le travail somatique, et la capacité à
            mettre des mots clairs sur ce qui est vécu
            intérieurement.
          </p>
          <p className="text-[18px] text-foreground leading-relaxed">
            J’accompagne celles et ceux qui :
          </p>
          <ul className="text-[18px] text-foreground leading-relaxed mb-4">
            <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
              ressentent tout trop fort
            </li>
            <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
              se perdent dans les besoins des autres
            </li>
            <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
              portent la charge mentale, émotionnelle ou
              familiale
            </li>
            <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
              vivent des transitions identitaires ou
              relationnelles
            </li>
            <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
              cherchent à retrouver leur espace intérieur
            </li>
            <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
              veulent se choisir sans culpabilité
            </li>
            <li className="list-disc ms-[31.5px] whitespace-pre-wrap">
              aspirent à une vie plus douce, plus vraie, plus
              alignée
            </li>
          </ul>
          <p className="text-[18px] text-foreground leading-relaxed mb-4">
            Mon rôle n’est pas de “corriger” qui vous êtes. Mon
            rôle est de vous aider à{" "}
            <strong>vous retrouver</strong>, à comprendre vos
            mécanismes, à apaiser votre système nerveux, et à
            reconstruire une vie qui vous ressemble.
          </p>
          <p className="text-[18px] text-foreground leading-relaxed mb-4">
            Je crois profondément que la sensibilité est une
            force. Qu’elle peut devenir un guide. Qu’elle peut
            mener à une vie plus riche, plus consciente, plus
            libre.
          </p>
          <p className="text-[18px] text-foreground leading-relaxed mb-4">
            Si vous êtes prêt.e à vous recentrer, à vous
            apaiser, à vous choisir, je suis là pour vous
            accompagner.
          </p>
          <h2 className="text-[32px] text-primary font-normal mb-4 mt-8">
            Mon histoire
          </h2>
          <p className="text-[18px] text-foreground leading-relaxed mb-4">
            J'ai toujours souhaité devenir thérapeute mais la
            vie en avait décidé autrement. Je me suis cherchée
            longtemps professionnellement mais l'amour de
            l'humain et d'apporter mon soutien à toujours était
            présent.
          </p>
          <p className="text-[18px] text-foreground leading-relaxed mb-4">
            Suite à la naissance de mes deux enfants, j'ai
            décidé de me donner une chance en tant qu'aidante.
            J'ai commencé un baccalauréat en psychologie mais
            lorsque j'ai découvert le CRAM j'ai trouvé ce qu'il
            me manqué : apprendre à me connaître dans l'ici et
            maintenant, en relation à moi et aux autres.
          </p>
          <p className="text-[18px] text-foreground leading-relaxed mb-0">
            Mes relations interpersonnelles se sont améliorées
            et j'ai pu goûter à l'amour de moi. Mes qualités
            humaines, d'acceptation et de non-jugement, sont
            devenues des forces que j'espère apporter en tant
            que thérapeute, pour vous aider à vous créer.
          </p>
        </div>

        {/* Image Side - col-md-4 equivalent */}
        <div className="w-full md:w-1/3">
          <div className="relative inline-block">
            {/* Photo */}
            <div className="relative z-[2] w-[19rem] h-[19rem] rounded-full overflow-hidden">
              <img
                src={imgPhoto}
                alt="Abigaïl Leconte"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Circle One - bottom left decorative */}
            <svg
              className="absolute bottom-[0.5rem] left-[0.5rem] z-[1] w-[80px] h-[80px]"
              viewBox="0 0 79 79"
              fill="none"
              aria-hidden="true"
            >
              <path d={svgPaths.p1bb3cd80} fill="#FFC771;" />
            </svg>

            {/* Circle Two - bottom right decorative */}
            <svg
              className="absolute bottom-[2.5rem] left-[14rem] z-[3] w-[80px] h-[80px]"
              viewBox="0 0 79 79"
              fill="none"
              aria-hidden="true"
            >
              <path d={svgPaths.p1bb3cd80} fill="#F0B38F" />
            </svg>

            {/* Half Circle - decorative */}
            <svg
              className="absolute bottom-[1.5rem] left-[12rem] z-[1] w-[150px] h-[300px]"
              viewBox="0 0 157 310"
              fill="none"
              aria-hidden="true"
            >
              <path
                d={svgPaths.p5706a00}
                stroke="#F0B38F"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}