// src/components/layout/main.layout.component.jsx
import React from "react";
import { cva } from "class-variance-authority";
import { ThemeSwitcher } from "./index.layout.components"; 

/** DCCB-rebrand - Portfolio version 3.09 - Features: 
 * 
 *      --> Changing Header refactor and Conatiner for big screens.
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
                    "dark:bg-[#121212] dark:text-slate-100",
                    "dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:[background-size:32px_32px]"
                ],
            },
        },
        defaultVariants: {
            intent: 'primary'
        }
    }
);

const MainLayout = ({ children }) => {
    return (
        <div className={layoutVariants()}>
            {/* HEADER: Ajustado para que el contenido no se pegue a los bordes en 80" */}
            <header className="fixed top-0 z-50 w-full border-b border-arch-gray/10 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-md dark:border-white/10">
                <div className="max-w-[1800px] mx-auto flex items-center justify-between p-4 px-6 lg:px-12">
                    <div className="font-mono text-sm font-bold tracking-tighter uppercase">
                        DCCB / ARCH_STUDIO
                    </div>
                    
                    <div className="flex items-center"> 
                        <ThemeSwitcher size="md" />
                    </div>
                </div>
            </header>
            
            {/* MAIN: El contenedor 'container' de Tailwind por defecto es bueno, 
                pero le daremos un max-width mayor para pantallas PRO */}
            <main className="max-w-[1800px] mx-auto pt-32 px-6 sm:px-12 lg:px-20 min-h-[calc(100vh-100px)]">
                {children}
            </main>

            {/* FOOTER: También alineado al centro */}
            <footer className="max-w-[1800px] mx-auto mt-20 border-t border-arch-gray/5 p-12 text-center text-xs font-mono opacity-50 uppercase tracking-[0.2em]">
                © 2026 DCCB ARCHITECTURE SUPPORT — DRAFTING & URBAN PLANNING
            </footer>
        </div>
    );
};

export default MainLayout;