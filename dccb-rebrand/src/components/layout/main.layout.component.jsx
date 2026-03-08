import React from "react";
import { cva } from "class-variance-authority";
import { ThemeSwitcher } from "./index.layout.components";

/** DCCB-rebrand - Portfolio version 3.11 - Features: 
 * 
 *      --> fix(layout): replace w-full with inset-x-0 in Header to prevent overflow under scrollbar
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const layoutVariants = cva(
  "min-h-screen w-full transition-colors duration-300 ease-in-out flex flex-col",
  {
    variants: {
      intent: {
        primary: [
          "bg-[#FDFDFD] text-slate-900",
          "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]",
          "dark:bg-[#121212] dark:text-slate-100",
          "dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:[background-size:32px_32px]",
        ],
      },
    },
    defaultVariants: {
      intent: "primary",
    },
  }
);

const MainLayout = ({ children }) => {
  return (
    <div className={layoutVariants()}>

      {/* HEADER: Cambiamos 'w-full' por 'inset-x-0' para respetar el scrollbar */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-arch-gray/10 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md dark:border-white/10">

        {/* Le damos una altura fija (h-16) y un padding lateral consistente */}
        <div className="max-w-[1440px] mx-auto flex items-center justify-between h-16 px-6 sm:px-10 lg:px-16">

          {/* LOGO */}
          <div className="font-mono text-xs md:text-sm font-bold tracking-tighter uppercase shrink-0">
            DCCB / ARCH_STUDIO
          </div>

          {/* THEME SWITCH: Con área segura */}
          <div className="flex items-center justify-end shrink-0">
            <ThemeSwitcher size="md" />
          </div>

        </div>

      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto pt-32 pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-[1440px] mx-auto border-t border-arch-gray/5 py-10 px-6 text-center text-[10px] font-mono opacity-50 uppercase tracking-widest">
        © 2026 DCCB ARCHITECTURE SUPPORT — DRAFTING & URBAN PLANNING
      </footer>

    </div>
  );
};

export default MainLayout;