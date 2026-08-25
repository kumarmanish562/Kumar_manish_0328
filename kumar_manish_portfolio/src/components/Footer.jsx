import {
  ArrowUp,
  Mail,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="container-custom flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Brand */}
        <div>
          <p className="font-bold text-white">
            Manish Kumar
          </p>

          <p className="mt-1 text-sm text-zinc-500">
            Software Developer
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-2">
          {/* GitHub */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-zinc-500 transition-all duration-300 hover:bg-white hover:text-black"
          >
            GH
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-zinc-500 transition-all duration-300 hover:bg-white hover:text-black"
          >
            in
          </a>

          {/* Email */}
          <a
            href="mailto:your-email@example.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-all duration-300 hover:bg-white hover:text-black"
          >
            <Mail size={16} />
          </a>

          {/* Back To Top */}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-zinc-400 transition-all duration-300 hover:bg-white hover:text-black"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-custom border-t border-white/5 py-5">
        <p className="text-center text-xs text-zinc-600">
          © 2026 Manish Kumar. Built with React,
          Tailwind CSS and Framer Motion.
        </p>
      </div>
    </footer>
  );
}

export default Footer;