import { Link } from "react-router";

interface PrimaryButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "default" | "large";
}

export function PrimaryButton({
  to,
  href,
  children,
  className = "",
  onClick,
  variant = "default",
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-block bg-primary text-[#020202] px-8 py-4 rounded-[4px] font-['Crimson_Pro'] font-semibold uppercase shadow-[2px_2px_2px_0px_black,0_0_50px_rgba(255,199,113,0.35)] hover:shadow-[4px_4px_4px_0px_black,0_0_80px_rgba(255,199,113,0.55)] hover:bg-[#ffdead] transition-all duration-500";

  const sizeClasses = variant === "large" ? "text-[20px] md:text-[24px]" : "text-[18px]";

  const combinedClasses = `${baseClasses} ${sizeClasses} ${className}`.trim();

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
