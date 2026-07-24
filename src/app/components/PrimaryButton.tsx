import { Link } from "react-router";

interface PrimaryButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function PrimaryButton({
  to,
  href,
  children,
  className = "",
  onClick,
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-[18px] hover:opacity-90 transition-opacity";

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
