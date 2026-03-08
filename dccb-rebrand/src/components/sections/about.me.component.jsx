import React from "react";
import dccb_about_picture from '../../assets/dccb_about_me_foto.png'

/** DCCB-rebrand - Portfolio version 3.08 - Features: 
 * 
 *    --> adding Technical firm
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

                {/**Lado Derecho: Narrativa ( 7 columnas con offset) */}
                <div className="lg:col-span-6 lg:col-start-7 space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-3xl font-bold dark:text-white leading-tight tracking-tight">
                            De la gestión de obra al <br />
                            <span className="text-brand-blue dark:text-cyan-400 italic font-serif">diseño del futuro</span>
                        </h3>
                        <div className="w-12 h-1 bg-brand-blue dark:bg-cyan-400"></div>
                    </div>

                <div className="space-y-6 text-slate-600 dark:text-slate-400 font-sans leading-relaxed">
                        <p>
                        Con más de 25 años de trayectoria, mi carrera comenzó en <strong>San Cristóbal, Venezuela</strong>, 
                        liderando firmas multidisciplinarias y coordinando la ejecución de más de 500 proyectos 
                        urbanísticos y residenciales. Mi pasión siempre ha sido la precisión técnica: esa línea 
                        perfecta que permite que una idea se convierta en una estructura sólida.
                        </p>
                        <p>
                        Tras décadas de dirigir equipos de ingeniería y arquitectura, hoy evoluciono mi práctica 
                        hacia el ecosistema digital global. Desde los Estados Unidos, fusiono la disciplina del 
                        <strong> CAD tradicional</strong> con el potencial disruptivo de la <strong>Inteligencia Artificial</strong>, 
                        ofreciendo a firmas internacionales un soporte técnico que no solo entiende el dibujo, 
                        sino que comprende la lógica constructiva detrás de cada plano.
                        </p>
                        <p className="font-medium text-slate-800 dark:text-slate-200">
                        Mi misión es simple: aportar mi experiencia senior para que sus proyectos alcancen la 
                        máxima claridad técnica y un impacto visual fotorrealista.
                        </p>
                    </div>

                    {/* Firma Técnica */}
                    <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                        <span className="font-mono text-xs tracking-widest text-slate-400 uppercase">Principal Architect & Founder</span>
                        <p className="font-serif text-2xl dark:text-white mt-1">DCCB</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMeDCCB;