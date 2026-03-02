
import React from "react";
import { Ruler, Map, Layers, ClipboardCheck, Zap, Icon } from 'lucide-react'
import { cn } from "@/lib/utils";

/** DCCB-rebrand - Portfolio version 2.07 - Features: 
 * 
 *      --> Fixing services table data to show urban plannings.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const services = [
  {
    title: "ARCHITECTURAL_DRAFTING",
    desc: "Planos constructivos detallados, secciones y detalles técnicos bajo estándares internacionales.",
    icon: <Ruler className="w-5 h-5" />,
    code: "SEC_01",
    featured: false
  },
  {
    title: "URBAN_PLANNING",
    desc: "Análisis de sitio, esquemas de zonificación y planificación de desarrollo urbano sostenible.",
    icon: <Map className="w-5 h-5" />,
    code: "SEC_02",
    featured: false
  },
  {
    title: "BIM_SUPPORT",
    desc: "Modelado de información de construcción y coordinación de disciplinas en entornos 3D.",
    icon: <Layers className="w-5 h-5" />,
    code: "SEC_03",
    featured: false
  },
  {
    title: "TECHNICAL_CONSULTING",
    desc: "Soporte especializado para firmas de arquitectura en la gestión de documentación técnica.",
    icon: <ClipboardCheck className="w-5 h-5" />,
    code: "SEC_04",
    featured: false
  },
  {
    title: "AI_POWERED_VISUALIZATION",
    desc: "Renderizado de última generación. Transformamos planos técnicos en visualizaciones realistas mediante IA para presentaciones de alto impacto.",
    icon: <Zap className="w-5 h-5" />,
    code: "SEC_05",
    featured: true // <--- Esta propiedad controla el resaltado
  }
];

const Services = () => {
  return (
    <section className="py-20 border-t border-arch-gray/10 dark:border-white/5">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="font-mono text-xl font-bold tracking-tighter uppercase dark:text-white">
          01 // SERVICES_PROVIDED
        </h2>
        <div className="h-[1px] flex-1 bg-arch-gray/10 dark:bg-white/5"></div>
      </div>

      {/* Grid Ajustado: 4 columnas en desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-arch-gray/10 dark:bg-white/5 border border-arch-gray/10 dark:border-white/5">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={cn(
              "relative bg-white dark:bg-[#121212] p-8 group transition-all duration-500",
              // Si es destacado, ocupa 2 columnas en desktop y tiene un borde especial
              service.featured 
                ? "lg:col-span-2 border-2 border-brand-blue/50 dark:border-cyan-400/50 bg-blue-50/30 dark:bg-cyan-950/10" 
                : "hover:bg-slate-50 dark:hover:bg-white/[0.02]"
            )}
          >
            {/* Badge de 'NEW' o 'AI' solo para el destacado */}
            {service.featured && (
              <span className="absolute top-4 right-4 bg-brand-blue dark:bg-cyan-400 text-[9px] font-bold text-white dark:text-slate-900 px-2 py-1 rounded-sm tracking-widest animate-pulse">
                NEW_TECH
              </span>
            )}

            <div className={cn(
              "mb-6 transition-transform duration-300 group-hover:scale-110",
              service.featured ? "text-brand-blue dark:text-cyan-400" : "text-slate-400 dark:text-slate-500"
            )}>
              {service.icon}
            </div>

            <span className="font-mono text-[10px] text-slate-400 block mb-2">
              ID_{service.code}
            </span>

            <h3 className={cn(
              "font-bold text-sm tracking-tight mb-3 uppercase",
              service.featured ? "text-brand-blue dark:text-cyan-400" : "dark:text-white"
            )}>
              {service.title}
            </h3>

            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400 font-sans">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;