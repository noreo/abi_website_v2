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
    "inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold text-[18px] hover:bg-primary/10 transition-colors";

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
