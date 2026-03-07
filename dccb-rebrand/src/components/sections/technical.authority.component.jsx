import React from 'react';
import { ShieldCheck, HardHat, Ruler, Globe } from 'lucide-react';

/** DCCB-rebrand - Portfolio version 3.01 - Features: 
 * 
 *      --> Adding TechnicalAuthority second right side.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const TechnicalAuthority = () => {

    return (
        <section className='py-20 border-t border-arch-gray/10 dark:border-white/5'>
            <div className='flex items-center gap-4 mb-16'>
                <h2 className='font-mono text-xl font-bold tracking-tighter uppercase dark:text-white'>
                    03 // CAREER_AUTHORITY
                </h2>
                <div className='h-[1px] flex-1 bg-arch-gray/10 dark:bg-white/5'></div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-start'>
                {/**Lado izquierdo: El numero de Oro */}
                <div className='space-y-6'>
                    <div className='inline-block bg-brand-blue/10 dark:bg-cyan-400/10 px-4 py-2 rounded-sm'>
                        <span className='font-mono text-4xl font-black text-brand-blue dark:text-cyan-400'>500+</span>
                        <p className='font-mono text-[10px] tracking-widest uppercase mt-1 dark:text-slate-400'>Proyectos Ejecutados</p>
                    </div>
                    <h3 className='text-3xl font-bold dark:text-white leading-tight'>
                        25 años de precision <br />
                        <span className='text-slate-400'>en arquitectura técnica.</span>
                    </h3>
                    <p className='text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md'>
                        Desde la coordinación de equipos multidisciplinarios en Venezuela hasta el soporte 
                        remoto de vanguardia. Mi enfoque combina la experiencia de campo con las 
                        herramientas digitales más avanzadas.
                    </p>
                </div>

                {/**Lado Derecho: Los pilares (no solo son servicios, es lo que ella sabe) */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                    <div className='space-y-2'>
                        <ShieldCheck className='w-5 h-5 text-brand-blue dark:text-cyan-400' />
                        <h4 className='font-bold text-xs uppercase dark:text-white'>Normativa y Estándares</h4>
                        <p className='text-[11px] text-slate-500 dark:text-slate-400'>Dominio de sistemas constructivos en concreto armado, mampostería y normativas urbanas.</p>
                    </div>
                    <div className='space-y-2'>
                        <Globe className='w-5 h-5 text-brand-blue dark:text-cyan-400' />
                        <h4 className='font-bold text-xs uppercase dark:text-white'>Alcance Internacional</h4>
                        <p className='text-[11px] text-slate-500 dark:text-slate-400'>Dominio experto de estándares métricos y de EE. UU. (pies/pulgadas) para proyectos en toda la región.</p>
                    </div>
                    <div className="space-y-2">
                        <Ruler className="w-5 h-5 text-brand-blue dark:text-cyan-400" />
                        <h4 className="font-bold text-xs uppercase dark:text-white">Detallado Constructivo</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Especialista en planos de detalle, secciones técnicas y legibilidad de obra.</p>
                    </div>
                    <div className="space-y-2">
                        <HardHat className="w-5 h-5 text-brand-blue dark:text-cyan-400" />
                        <h4 className="font-bold text-xs uppercase dark:text-white">Coordinación Senior</h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">Capacidad probada para integrar ingeniería civil, eléctrica y mecánica en planos maestros.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechnicalAuthority;