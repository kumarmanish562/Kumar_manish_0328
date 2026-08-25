import {
  Mail,
} from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/",
    label: "GH",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    label: "in",
  },
  {
    name: "Email",
    href: "mailto:your-email@example.com",
    label: "✉",
  },
];

function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target={
            social.name === "Email"
              ? undefined
              : "_blank"
          }
          rel={
            social.name === "Email"
              ? undefined
              : "noreferrer"
          }
          aria-label={social.name}
          className="glass flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
        >
          {social.label}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;