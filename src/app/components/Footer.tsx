import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-card py-8 border-t border-border">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-foreground text-[16px]">
        <p>© {new Date().getFullYear()} Abigaïl Leconte</p>
        <div className="flex gap-6">
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