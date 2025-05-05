import { type FooterSection as FooterSectionType } from "./config";
import Link from "next/link";

interface FooterSectionProps {
  section: FooterSectionType;
  className?: string;
}

export function FooterSection({ section, className = "" }: FooterSectionProps) {
  return (
    <div className={`flex flex-col gap-2 md:gap-4 ${className}`}>
      <h3 className="pt-1 text-sm font-semibold">{section.title}</h3>
      {section.items.map((item) => (
        <Link
          key={item.href}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          href={item.href}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
} 