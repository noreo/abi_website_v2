import svgPaths from "../../imports/svg-ks1ah5fqjw";
import { useState, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../config/emailConfig";
import ReCAPTCHA from "react-google-recaptcha";

// Development fallback key (for preview/testing only - regenerate for production!)
const DEV_RECAPTCHA_KEY =
  "6LdCQIIsAAAAAEoHBG4kGuvgXs-HC7au9r53OsBT";

// Utilise la variable d'environnement en priorité, sinon fallback vers la clé hardcodée
const RECAPTCHA_SITE_KEY = 
  import.meta.env.VITE_RECAPTCHA_SITE_KEY || 
  "6LfPSoksAAAAAGGHdk47r8ciORImPt6PgYUIsWXo";

// Debug logs (seulement en développement)
if (import.meta.env.DEV) {
  console.log("🔑 Clé reCAPTCHA utilisée:", RECAPTCHA_SITE_KEY);
  console.log("📦 Variable d'env:", import.meta.env.VITE_RECAPTCHA_SITE_KEY);
  if (!import.meta.env.VITE_RECAPTCHA_SITE_KEY) {
    console.warn("⚠️ VITE_RECAPTCHA_SITE_KEY non définie, utilisation du fallback hardcodé");
  }
}

function ContactBackground() {
  return (
    <div>
      {/* First SVG path - p16288900 */}
      <div className="absolute top-1/2 left-[-148px] -translate-y-1/2 w-[2154px] h-[583px] hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 2156 585"
          fill="none"
          aria-hidden="true"
        >
          <g>
            <path
              d={svgPaths.p16288900}
              stroke="#F0B38F"
              strokeWidth="4"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
function ContactBackground2() {
  return (
    <div>
      {/* Third SVG path - p3bfab080 */}
      <div className="absolute top-1/2 right-[24px] -translate-y-1/2 w-[2154px] h-[583px] hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 2156 585"
          fill="none"
          aria-hidden="true"
        >
          <g>
            <path
              d={svgPaths.p3bfab080}
              stroke="#0A648E"
              strokeWidth="4"
            />
          </g>
        </svg>
      </div>

      {/* Fourth SVG path - pe1d6c00 */}
      <div className="absolute top-1/2 right-[24px] -translate-y-1/2 w-[2154px] h-[583px] hidden md:block">
        <svg
          className="w-full h-full"
          viewBox="0 0 2156 585"
          fill="none"
          aria-hidden="true"
        >
          <g opacity="1">
            <path d={svgPaths.pe1d6c00} fill="#0A648E" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrors({ name: "", email: "", message: "" });
    setSuccess("");

    // Validate fields
    const newErrors = { name: "", email: "", message: "" };
    let hasErrors = false;

    if (!name.trim()) {
      newErrors.name = "Le nom est requis";
      hasErrors = true;
    }

    if (!email.trim()) {
      newErrors.email = "Le courriel est requis";
      hasErrors = true;
    } else if (!validateEmail(email)) {
      newErrors.email = "Le format du courriel est invalide";
      hasErrors = true;
    }

    if (!message.trim()) {
      newErrors.message = "Le message est requis";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setErrors({
        name: "",
        email: "",
        message: "Veuillez vérifier le CAPTCHA.",
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      name,
      email,
      phone,
      message,
      "g-recaptcha-response": recaptchaValue, // Ajoute le token reCAPTCHA
    };

    emailjs
      .send(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        templateParams,
        emailConfig.USER_ID,
      )
      .then(
        (response) => {
          setSuccess(
            "Message envoyé! Je vous répondrais sous peu.",
          );
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
          recaptchaRef.current?.reset();
          setIsSubmitting(false);
        },
        (error) => {
          setErrors({
            name: "",
            email: "",
            message:
              "Une erreur s'est produite. Merci de réessayer.",
          });
          console.error("Failed to send email:", error);
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section className="relative bg-card py-16 overflow-hidden">
      <ContactBackground />

      <div className="relative z-10 max-w-[1320px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8 items-start justify-center">
        {/* Form Side */}
        <div className="flex-1 w-full max-w-[671px] space-y-10">
          <div className="space-y-6">
            <h2 className="text-[28px] text-white font-semibold">
              Information ou rendez-vous ?
            </h2>
            <p className="text-[18px] text-white">
              Pour un rendez-vous, je vous offre un appel de 15
              minutes pour faire connaissance. <br />
              Nous pouvons aussi échanger par courriel.
            </p>
            <div className="grid grid-cols-1">
              <input
                type="text"
                placeholder="Nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background rounded-[4px] px-8 py-5 text-[22px] text-foreground ring-1 placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Courriel"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-background rounded-[4px] px-8 py-5 text-[22px] text-foreground ring-1  placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel"
                placeholder="Téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-background rounded-[4px] px-8 py-5 text-[22px] text-foreground ring-1  placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <textarea
              className="w-full bg-background rounded-[4px] h-[300px] px-8 py-5 text-[22px] text-foreground ring-1 placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Votre message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {/* Error and Success Messages */}
            {errors.name && (
              <div className="bg-red-500/20 border-2 border-red-500 rounded-2xl px-6 py-4 text-white text-[18px]">
                {errors.name}
              </div>
            )}
            {errors.email && (
              <div className="bg-red-500/20 border-2 border-red-500 rounded-2xl px-6 py-4 text-white text-[18px]">
                {errors.email}
              </div>
            )}
            {errors.message && (
              <div className="bg-red-500/20 border-2 border-red-500 rounded-2xl px-6 py-4 text-white text-[18px]">
                {errors.message}
              </div>
            )}
            {success && (
              <div className="bg-green-500/20 border-2 border-green-500 rounded-2xl px-6 py-4 text-white text-[18px]">
                {success}
              </div>
            )}
            reCAPTCHA
            <div className="flex justify-start">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                theme="light"
              />
            </div>
            <button
              className="inline-block bg-primary text-[#020202] px-8 py-4 rounded-[4px] font-['Crimson_Pro'] font-semibold text-[18px] uppercase shadow-[2px_2px_2px_0px_black,0_0_50px_rgba(255,199,113,0.35)] hover:shadow-[4px_4px_4px_0px_black,0_0_80px_rgba(255,199,113,0.55)] hover:bg-[#ffdead] transition-all duration-500 cursor-pointer"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
            {/* <div className="bg-card/10 rounded-2xl p-8 backdrop-blur-sm">
              <h4 className="text-[28px] text-white font-semibold mb-4">
                Téléphone
              </h4>
              <p className="text-[21px] text-white">
                514 660-1583
              </p>
            </div> */}

            <div className="bg-card/10 rounded-2xl p-8 w-full">
              <h4 className="text-[28px] text-white font-semibold mb-4">
                Emplacement
              </h4>
              <p className="text-[21px] text-white">
                Montréal, Québec
                <br />
                France (En ligne)
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactBackground2 />
    </section>
  );
}