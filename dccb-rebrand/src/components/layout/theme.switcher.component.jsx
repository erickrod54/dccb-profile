import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/theme.context";


/** DCCB-rebrand - Portfolio version 3.11 - Features: 
 * 
 *      --> fix(theme): switch to percentage-based positioning and remove scale transform for responsive consistency
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const switchVariants = cva(
  // Añadimos 'rounded-full' y regresamos 'overflow-hidden'
  "relative inline-flex items-center cursor-pointer transition-all duration-500 overflow-hidden shrink-0 origin-center rounded-full",
  {
    variants: {
      size: {
        sm: "w-[45px] h-[22px]",
        md: "w-[60px] h-[28px]", // Este es el estándar que usaremos
        lg: "w-[80px] h-[36px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

const ThemeSwitcher = ({ size = "md", className, ...props }) => {
  const { theme, toggleTheme } = useTheme();

  return (
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
        absolute inset-0 bg-[#5494de]
        transition-colors duration-500
        peer-checked:bg-[#20262c]

        before:content-['']
        before:absolute
        before:h-[70%] before:aspect-square
        before:left-[8%] before:top-[15%]
        before:rounded-full
        before:bg-[#efdf2b]
        before:transition-all before:duration-500
        before:shadow-[0_0_8px_0_#efdf2b]

        peer-checked:before:translate-x-[160%]
        peer-checked:before:bg-[#20262c]
        peer-checked:before:shadow-[inset_6px_-3px_0_0_#ececd9]
        "
      />

      {/* Nubes / Estrellas */}
      <span
        className="
        absolute h-[2px] w-[2px] rounded-full
        left-[65%] top-[35%]
        bg-white/80
        transition-all duration-500

        shadow-[8px_6px_0_white,-4px_10px_0_white,10px_2px_0_white]

        peer-checked:left-[25%]
        peer-checked:bg-[#e5f041e6]

        peer-checked:shadow-[-5px_8px_0_#e5f041e6,6px_12px_0_#e5f041e6,-12px_1px_0_#e5f041e6]
        "
      />
    </label>
  );
};

export default ThemeSwitcher;