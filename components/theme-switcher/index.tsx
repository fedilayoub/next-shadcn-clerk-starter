"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu border border-zinc-300 bg-zinc-50 dark:bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] backdrop-blur rounded-full md:inline-flex hover:bg-black/10 dark:hover:bg-white/10 transition-colors duration-300"
      size="lg"
    >
      <Image
        src="/images/light_on.svg"
        alt="Light on"
        width={15}
        height={15}
        className="block dark:hidden min-w-4 min-h-5"
      />
      <Image
        src="/images/light_off.svg"
        alt="Light off"
        width={15}
        height={15}
        className="hidden dark:block min-w-4 min-h-5"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
