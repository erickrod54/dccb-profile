// src/components/layout/main.layout.component.jsx
import React from "react";
import { cva } from "class-variance-authority";
import ThemeSwitcher from "./theme.switcher.component"; 

/** DCCB-rebrand - Portfolio version 1.05 - Features: 
 * 
 *      --> Building 'MainLayout'.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const layoutVariants = cva(
    "min-h-screen w-full transition-colors duration-300 ease-in-out",
    {
        variants: {
            intent: {
                primary: [
                    "bg-[#FDFDFD] text-slate-900",
                    "bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]",
                    "dark:bg-[#121212] dark:text-slate-100", // Corregido text-
                    "dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:[background-size:32px_32px]"
                ],
            },
        },
        defaultVariants: { // <--- FUERA de variants
            intent: 'primary'
        }
    }
);

const MainLayout = ({ children }) => {
    return (
        <div className={layoutVariants()}>
            <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-arch-gray/10 bg-white/80 dark:bg-[#121212]/80 p-4 backdrop-blur-md dark:border-white/10">
    <div className="font-mono text-sm font-bold tracking-tighter uppercase pl-2">
        DCCB / ARCH_STUDIO
    </div>
    
    {/* Contenedor del Switcher con margen derecho (pr-6 o pr-10) */}
    <div className="flex items-center pr-20"> 
        <ThemeSwitcher size="md" />
    </div>
</header>

            
            <main className="container mx-auto pt-24 px-6">
                {children}
            </main>

            <footer className="mt-20 border-t border-arch-gray/5 p-8 text-center text-xs font-mono opacity-50 uppercase">
                © 2026 DCCB ARCHITECTURE SUPPORT - DRAFTING & URBAN PLANNING
            </footer>
        </div>
    );
};

export default MainLayout;
