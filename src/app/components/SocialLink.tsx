import { type LucideIcon } from "lucide-react";

interface SocialLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

export function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity"
    >
      <Icon className="size-5" />
      <span className="font-crimson font-medium uppercase">{label}</span>
    </a>
  );
}
