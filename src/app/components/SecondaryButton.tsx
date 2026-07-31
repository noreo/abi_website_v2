import { Link } from "react-router";

interface SecondaryButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function SecondaryButton({
  to,
  href,
  children,
  className = "",
  onClick,
}: SecondaryButtonProps) {
  const baseClasses =
    "inline-block border-2 border-primary text-primary px-6 py-3 rounded-[4px] font-medium text-[18px] uppercase font-['Crimson_Pro'] hover:bg-primary hover:text-[#020202] hover:shadow-[4px_4px_4px_0px_black,0_0_80px_rgba(255,199,113,0.55)] transition-all duration-500";

  const combinedClasses = `${baseClasses} ${className}`.trim();

  // Internal link (React Router)
  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  // Button
  return (
    <button type="button" className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
