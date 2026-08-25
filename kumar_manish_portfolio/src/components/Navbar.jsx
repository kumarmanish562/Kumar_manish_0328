import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  Download,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useScrollProgress } from "@/hooks/useScrollProgress";

const navItems = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = () => {
    window.dispatchEvent(new Event("close-mobile-menu"));
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex h-20 items-center justify-between">
          <a
            href="#home"
            className="group flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white font-black text-black transition-transform duration-300 group-hover:rotate-3">
              MK
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-bold text-white">
                Manish Kumar
              </p>
              <p className="text-xs text-zinc-500">
                Software Developer
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button
              asChild
              className="rounded-full bg-white px-5 text-black hover:bg-zinc-200"
            >
              <a href="/resume.pdf" download>
                <Download size={16} />
                Resume
              </a>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/10 bg-white/5"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[300px] border-white/10 bg-[#080808]"
              >
                <div className="mt-10 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className="rounded-xl px-4 py-3 text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}

                  <Button
                    asChild
                    className="mt-4 rounded-xl bg-white text-black hover:bg-zinc-200"
                  >
                    <a href="/resume.pdf" download>
                      <Download size={16} />
                      Download Resume
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400"
          style={{
            width: `${progress}%`,
          }}
        />
      </motion.header>
    </>
  );
}

export default Navbar;