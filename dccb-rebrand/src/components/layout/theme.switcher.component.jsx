// src/components/layout/theme.switcher.component.jsx
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/theme.context";

/** DCCB-rebrand - Portfolio version 1.05 - Features: 
 * 
 *      --> Building 'ThemeSwitcher'.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const switchVariants = cva(
    // Añadimos 'relative' y 'overflow-hidden' para contener la animación
    "relative inline-flex items-center justify-center cursor-pointer transition-all duration-500 overflow-hidden",
    {
        variants: {
            size: {
                sm: "text-[10px] w-[50px] h-[24px]",
                md: "text-[14px] w-[65px] h-[32px]", // Tamaño ideal para el header
                lg: "text-[18px] w-[90px] h-[45px]",
            },
        },
        defaultVariants: {
            size: 'md'
        },
    }
);

const ThemeSwitcher = ({ size = "md", className, ...props }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    // Es vital que el label tenga el tamaño definido por el CVA
    <label className={cn(switchVariants({ size }), className)}>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={theme === "dark"}
        onChange={toggleTheme}
        {...props}
      />

      {/* Fondo y Luna/Sol */}
      <span
        className="
        absolute inset-0 rounded-[30px] bg-[#5494de]
        transition-all duration-500
        peer-checked:bg-[#20262c]
        before:content-['']
        before:absolute
        before:h-[1.4em] before:w-[1.4em]
        before:left-[10%] before:bottom-[15%]
        before:rounded-full
        before:bg-[#efdf2b]
        before:transition-all before:duration-500
        before:shadow-[0_0_10px_0_#efdf2b]
        peer-checked:before:translate-x-[160%]
        peer-checked:before:bg-[#20262c]
        peer-checked:before:shadow-[inset_8px_-4px_0_0_#ececd9]
        "
      />

      {/* Nubes / Estrellas */}
      <span
        className="
        absolute h-[2px] w-[2px] rounded-full
        left-[60%] top-[30%]
        bg-white
        transition-all duration-500
        shadow-[10px_10px_0_white,-5px_15px_0_white,15px_5px_0_white]
        peer-checked:left-[20%]
        peer-checked:w-[2px] peer-checked:h-[2px]
        peer-checked:bg-[#e5f041e6]
        peer-checked:shadow-[-7px_10px_0_#e5f041e6,8px_15px_0_#e5f041e6,-17px_1px_0_#e5f041e6]
        "
      />
    </label>
  );
};

export default ThemeSwitcher;
