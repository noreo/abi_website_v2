import { Link, NavLink } from "react-router";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Logo } from "./Logo";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTherapieExpanded, setIsTherapieExpanded] =
    useState(false);

  const navItems = [
    { name: "Accueil", path: "/" },
    {
      name: "Thérapie",
      path: "/therapie",
      subItems: [
        { name: "Deuil", path: "/therapie/deuil" },
        {
          name: "Relation conflictuelle",
          path: "/therapie/relation-conflictuelle",
        },
        {
          name: "Neurodiversité",
          path: "/therapie/neurodiversite",
        },
      ],
    },
    { name: "Approche", path: "/approche" },
    { name: "À propos", path: "/a-propos" },
    { name: "Me joindre", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-sm shadow-[0px_8px_16px_0px_rgba(0,0,0,0.3)]">
      <div className="max-w-[1320px] mx-auto px-4 md:px-8 h-[90px] flex items-center justify-between">
        <Link to="/" className="shrink-0" aria-label="Home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `text-[18px] font-medium transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-primary hover:text-foreground"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="border border-primary text-primary px-6 py-3 rounded-[4px] font-medium text-[14px] uppercase font-['Crimson_Pro'] hover:bg-primary hover:text-[#020202] hover:shadow-[4px_4px_4px_0px_black,0_0_80px_rgba(255,199,113,0.55)] transition-all duration-500"
          >
            Rendez-vous
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[90px] left-0 w-full bg-background shadow-lg pt-4 pb-6 flex flex-col items-center border-t border-border">
          {navItems.map((item) => (
            <div key={item.name} className="w-full">
              {item.subItems ? (
                <div className="w-full">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `p-4 pt-5  text-center text-[18px] font-medium block ${
                        isActive
                          ? "text-foreground"
                          : "text-primary"
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                  <div className="w-full bg-dark py-2">
                    {item.subItems.map((subItem) => (
                      <NavLink
                        key={subItem.name}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `block py-3 px-8 text-center text-[16px] font-medium ${
                            isActive
                              ? "text-foreground"
                              : "text-primary"
                          }`
                        }
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `p-4 py-5 w-full text-center text-[18px] font-medium block ${
                      isActive
                        ? "text-foreground"
                        : "text-primary"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="border border-primary text-primary px-6 py-3 rounded-[4px] font-medium text-[14px] uppercase font-['Crimson_Pro'] hover:bg-primary hover:text-[#020202] hover:shadow-[4px_4px_4px_0px_black,0_0_80px_rgba(255,199,113,0.55)] transition-all duration-200 mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Rendez-vous
          </Link>
        </div>
      )}
    </header>
  );
}