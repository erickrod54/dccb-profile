import React from "react";
import dccb_about_picture from '../../assets/dccb_about_me_foto.png'

/** DCCB-rebrand - Portfolio version 3.05 - Features: 
 * 
 *    --> adding 'dccb_about_picture' picture mark and decor
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const AboutMeDCCB = () => {

    return (
        <section className="py-24 border-t border-arch-gray/10 dark:border-white/5">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="font-mono text-xl font-bold tracking-tighter uppercase dark:text-white">
                    04 // THE_ARCHITECT
                </h2>
                <div className="h-[1px] flex-1 bg-arch-gray/10 dark:bg-white/5"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/**LADO IZQUIERDO: Imagen con Estetica Tecnica (4 columnas) */}
                <div className="lg:col-span-5 relative group">
                    <div className="relative z-10 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 border border-slate-200 dark:border-white/10">
                        {/* Aquí irá la foto de ella. Por ahora un placeholder con el aspect ratio de retrato */}
                        <img 
                            src={dccb_about_picture} 
                            alt="Architect Portrait" 
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Elementos Decorativos de Plano */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full border-b border-r border-brand-blue/30 dark:border-cyan-400/30 z-0"></div>

                    {/* Coordenadas de San Cristóbal como detalle de origen */}
                    <div className="absolute -top-10 left-0 flex flex-col">
                        <span className="font-mono text-[9px] text-slate-400 tracking-[0.2em]">ORIGIN_POINT:</span>
                        <span className="font-mono text-[10px] text-brand-blue dark:text-cyan-400 font-bold">
                        7.7667° N, 72.2250° W // SC_VNZ
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeDCCB;