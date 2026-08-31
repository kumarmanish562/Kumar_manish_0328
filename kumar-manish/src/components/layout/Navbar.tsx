"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  Terminal,
  ChevronRight,
  Zap,
  Circle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "HOME",
    href: "#home",
    code: "01",
  },
  {
    label: "ABOUT",
    href: "#about",
    code: "02",
  },
  {
    label: "PROJECTS",
    href: "#projects",
    code: "03",
  },
  {
    label: "SKILLS",
    href: "#skills",
    code: "04",
  },
  {
    label: "EXPERIENCE",
    href: "#experience",
    code: "05",
  },
  {
    label: "CONTACT",
    href: "#contact",
    code: "06",
  },
];

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("HOME");
  const [open, setOpen] = useState(false);

  const handleNavigation = (label: string) => {
    setActiveItem(label);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* Top Neon Line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-70" />

      <nav className="relative border-b border-white/10 bg-black/95 backdrop-blur-xl">
        {/* Cyber Grid Background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto flex h-[76px] max-w-[1500px] items-center px-4 sm:px-6 lg:px-8">

          {/* =====================================================
              LOGO
          ====================================================== */}
          <a
            href="#home"
            onClick={() => handleNavigation("HOME")}
            className="group flex min-w-fit items-center gap-3"
          >
            {/* Logo Box */}
            <div className="relative flex h-10 w-10 items-center justify-center border border-cyan-400/40 bg-cyan-400/[0.04] transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-400/10">
              <div className="absolute inset-1 border border-cyan-400/10" />

              <Terminal
                size={19}
                className="text-cyan-400 transition-transform duration-300 group-hover:scale-110"
              />

              {/* Corner Decorations */}
              <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-cyan-400" />
              <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-cyan-400" />
              <span className="absolute -bottom-px -left-px h-2 w-2 border-b border-l border-cyan-400" />
              <span className="absolute -bottom-px -right-px h-2 w-2 border-b border-r border-cyan-400" />
            </div>

            {/* Logo Text */}
            <div className="hidden sm:block">
              <div className="flex items-center gap-1">
                <span className="font-mono text-sm font-bold tracking-[0.2em] text-white">
                  MANISH
                </span>

                <span className="font-mono text-sm font-bold text-cyan-400">
                  .exe
                </span>
              </div>

              <div className="mt-0.5 flex items-center gap-1 font-mono text-[8px] tracking-[0.25em] text-white/30">
                <span>ARCADE</span>
                <span>//</span>
                <span>PORTFOLIO</span>
              </div>
            </div>
          </a>

          {/* =====================================================
              DESKTOP NAVIGATION
          ====================================================== */}
          <div className="mx-auto hidden h-full items-center lg:flex">
            <div className="flex h-full items-center gap-1">

              {navItems.map((item) => {
                const isActive = activeItem === item.label;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleNavigation(item.label)}
                    className={cn(
                      "group relative flex h-full items-center px-3 xl:px-4",
                      "font-mono text-[10px] font-bold tracking-[0.12em]",
                      "transition-colors duration-200",
                      isActive
                        ? "text-cyan-400"
                        : "text-white/45 hover:text-white"
                    )}
                  >
                    {/* Number */}
                    <span
                      className={cn(
                        "mr-1.5 text-[8px] transition-colors",
                        isActive
                          ? "text-cyan-400/70"
                          : "text-white/20 group-hover:text-cyan-400/50"
                      )}
                    >
                      {item.code}
                    </span>

                    {/* Label */}
                    <span className="relative z-10">
                      {item.label}
                    </span>

                    {/* Hover Background */}
                    <span className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2 bg-cyan-400/[0.03] transition-all duration-200 group-hover:h-8 group-hover:w-[85%]" />

                    {/* Active Line */}
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute bottom-0 left-3 right-3 h-px bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                      />
                    )}
                  </a>
                );
              })}

            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ====================================================== */}
          <div className="ml-auto flex items-center gap-3">

            {/* -------------------------------------------------
                TERMINAL HUD
            -------------------------------------------------- */}
            <div className="hidden items-center md:flex">

              <div className="group relative flex h-10 items-center border border-white/10 bg-black px-4 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]">

                {/* Top Left Corner */}
                <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-cyan-400/60" />

                {/* Bottom Right Corner */}
                <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-cyan-400/60" />

                {/* Terminal Prompt */}
                <span className="font-mono text-xs text-cyan-400">
                  &gt;_
                </span>

                {/* Terminal Label */}
                <span className="ml-2 font-mono text-[9px] font-bold tracking-[0.18em] text-white/50">
                  TERMINAL
                </span>

                {/* Separator */}
                <span className="mx-2 text-white/10">
                  //
                </span>

                {/* Status */}
                <span className="font-mono text-[9px] tracking-widest text-emerald-400">
                  READY
                </span>

                {/* Cursor */}
                <span className="ml-1 h-3 w-[5px] animate-pulse bg-cyan-400" />
              </div>

            </div>

            {/* -------------------------------------------------
                LEVEL
            -------------------------------------------------- */}
            <div className="hidden items-center gap-2 xl:flex">

              <Zap
                size={12}
                className="text-yellow-400"
              />

              <div className="font-mono text-[8px] tracking-widest text-white/30">
                LVL

                <span className="ml-1 text-yellow-400">
                  99
                </span>
              </div>

            </div>

            {/* =================================================
                MOBILE MENU
            ================================================== */}
            <Sheet
              open={open}
              onOpenChange={setOpen}
            >
              <SheetTrigger asChild>

                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-none border border-white/10 bg-white/[0.02] text-white/70 hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:text-cyan-400 lg:hidden"
                >
                  <Menu size={20} />
                </Button>

              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[320px] border-l border-cyan-400/20 bg-black p-0 text-white"
              >

                {/* =========================================
                    MOBILE HEADER
                ========================================== */}
                <div className="border-b border-white/10 p-6">

                  <div className="flex items-center gap-3">

                    <div className="flex h-10 w-10 items-center justify-center border border-cyan-400/40 bg-cyan-400/5">
                      <Terminal
                        size={18}
                        className="text-cyan-400"
                      />
                    </div>

                    <div>
                      <p className="font-mono text-sm font-bold tracking-widest">
                        MANISH
                        <span className="text-cyan-400">
                          .exe
                        </span>
                      </p>

                      <p className="mt-1 font-mono text-[8px] tracking-widest text-white/30">
                        NAVIGATION SYSTEM
                      </p>
                    </div>

                  </div>

                </div>

                {/* =========================================
                    MOBILE TERMINAL STATUS
                ========================================== */}
                <div className="mx-6 mt-6 border border-white/10 bg-white/[0.02] px-4 py-3">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-2">

                      <span className="font-mono text-xs text-cyan-400">
                        &gt;_
                      </span>

                      <span className="font-mono text-[9px] tracking-widest text-white/40">
                        TERMINAL
                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <Circle
                        size={7}
                        fill="currentColor"
                        className="text-emerald-400"
                      />

                      <span className="font-mono text-[8px] tracking-widest text-emerald-400">
                        READY
                      </span>

                    </div>

                  </div>

                </div>

                {/* =========================================
                    MOBILE NAVIGATION
                ========================================== */}
                <div className="mt-8 px-6">

                  <p className="mb-3 font-mono text-[8px] tracking-[0.25em] text-white/20">
                    // SELECT DESTINATION
                  </p>

                  <div className="space-y-1">

                    {navItems.map((item) => {

                      const isActive =
                        activeItem === item.label;

                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() =>
                            handleNavigation(item.label)
                          }
                          className={cn(
                            "group flex items-center justify-between border px-4 py-4",
                            "font-mono text-[10px] font-bold tracking-[0.15em]",
                            "transition-all duration-200",
                            isActive
                              ? "border-cyan-400/30 bg-cyan-400/5 text-cyan-400"
                              : "border-transparent text-white/40 hover:border-white/10 hover:bg-white/[0.02] hover:text-white"
                          )}
                        >

                          <div className="flex items-center gap-4">

                            <span className="text-[8px] text-white/20">
                              {item.code}
                            </span>

                            <span>
                              {item.label}
                            </span>

                          </div>

                          <ChevronRight
                            size={14}
                            className={cn(
                              "transition-transform",
                              isActive
                                ? "text-cyan-400"
                                : "text-white/20 group-hover:translate-x-1"
                            )}
                          />

                        </a>
                      );

                    })}

                  </div>

                </div>

                {/* =========================================
                    MOBILE FOOTER
                ========================================== */}
                <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 p-6">

                  <div className="flex items-center justify-between font-mono text-[8px] tracking-widest">

                    <span className="text-white/20">
                      BUILD v2.0.26
                    </span>

                    <span className="text-cyan-400/50">
                      READY_
                    </span>

                  </div>

                </div>

              </SheetContent>
            </Sheet>

          </div>
        </div>

        {/* =====================================================
            ANIMATED HUD SCANNER
        ====================================================== */}
        <div className="absolute bottom-0 left-0 h-px w-full overflow-hidden">

          <motion.div
            className="h-full w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            animate={{
              x: ["-100%", "1000%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

        </div>

      </nav>
    </header>
  );
}