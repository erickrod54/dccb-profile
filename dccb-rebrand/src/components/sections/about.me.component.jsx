import React from "react";
import dccb_about_picture from '../../assets/dccb_about_me_foto.png'

/** DCCB-rebrand - Portfolio version 3.04 - Features: 
 * 
 *    --> adding 'dccb_about_picture' picture
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
                </div>
            </div>
        </section>
    )
}

export default AboutMeDCCB;