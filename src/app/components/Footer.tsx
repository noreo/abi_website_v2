import { Link } from "react-router";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark py-8 border-t border-border">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-foreground text-[16px]">
        <p>© {new Date().getFullYear()} Abigaïl Leconte</p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/abigailtherapeute/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
          >
            <Instagram className="size-5" />
            <span className="font-crimson font-medium uppercase">Instagram</span>
          </a>
          <span className="h-6 w-px bg-border" aria-hidden="true" />
          <Link
            to="/faq"
            className="hover:text-primary transition-colors"
          >
            FAQ
          </Link>
          <Link
            to="/legal"
            className="hover:text-primary transition-colors"
          >
            Respect des lois
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary transition-colors"
          >
            Me joindre
          </Link>
        </div>
      </div>
    </footer>
  );
}