
import React from "react";
import { Ruler, Map, Layers, ClipboardCheck, Zap, Icon } from 'lucide-react'
import { cn } from "@/lib/utils";

/** DCCB-rebrand - Portfolio version 2.00 - Features: 
 * 
 *      --> Adding services table featured highlight.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const services = [
    {
        title: "ARQUITECTURAL_DRAFTING",
        desc: 'Planos constructivos detallados, secciones y detalles tecnicos bajo estandares internacionales',
        Icon: <Ruler className="w-5 h-5" />,
        code: 'SEC_01',
        featured:false
    },
    {
        title: "URBAN PLANING",
        des: 'Analisis del sitio, esquemas de zonificacion y planificacion de desarrollo urbano sostenible',
        icon: <Map className="w-5 h-5" />,
        code: 'SEC_02',
        featured: false
    },
    {
        title: 'BIM_SUPPORT',
        desc: 'Modelado de informacion de construccion y coordinacion de disciplinas en 3D',
        icon: <Layers className="w-5 h-5" />,
        code: 'SEC_03',
        featured: false
    },
    {
        title: 'TECHNICAL_CONSULTING',
        desc: 'Soporte especializado para firmas de arquitectura en la gestion de documentacion tecnica',
        icon: <ClipboardCheck className="w-5 h-5" />,
        code: 'SEC_04',
        featured:false
    },
    {
        title: 'AI_POWERED_VISUALIZATION',
        desc: 'Renderizado de ultima generacion. Transformamos planos tecnicos en visualizaciones realistas mediante IA para presentaciones de alto impacto',
        icon: <Zap className="w-5 h-5" />,
        code: 'SEC_05',
        featured:true
    }
]

const Services = () => {

    return (
        <section className="py-20 border-t border-arch-gray/10 dark:border-white/5">
            {/**Encabezado de seccion tipo tabla de dibujo */}
            <div className="flex items-center gap-4 mb-12">
                <h2 className="font-mono text-xl font-bold tracking-tighter uppercase dark:text-white">
                    01 // SERVICES PROVIDED 
                </h2>
                <div className="h-[1px] flex-1 bg-arch-gray/10 dark:bg-white/5"></div>
            </div>

            {/**Grid ajustado 4 columnas en desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-arch-gray/10 dark:bg-white/5 border border-arch-gray/10 dark:border-white/5">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={cn(
                            "relative bg-white dark:bg-[#121212] p-8 group transition-all duration-500",
                            service.featured ? "lg:col-span-2 border-2 borrder-brand-ble/50 dark:border-cyan-400/50" : "hover:bg-slate-50 dark:hover:b-white/[0.02]"
                        )}
                    ></div>
                ))}
            </div>
        </section>
    )
}

export default Services;
