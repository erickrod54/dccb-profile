import React from 'react';
import { cn } from '@/lib/utils';

/** DCCB-rebrand - Portfolio version 1.11 - Features: 
 * 
 *      --> Adding corner decor.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const Hero = () => {
    return (
        <section className='relative flex min-h-[60vh] flex-col justify-center py-12 md:py-20'>
            {/**Etiqueta tecnica */} 
            <div className='mb-4 inline-flex items-center gap-2'>
                <span className='h-px w-8 bg-brand-blue dark:bg-cyan-400'></span>
                <span className='font-mono text-xs font-medium tracking-[0.2em]'>
                    Est. 2026 / Portfolio v1.01
                </span>
            </div>

            {/**titulo principal */}
            <h1 className='max-w-4xl font-sans text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl dark:text-white'>
                Precision Drafting & <br /> <span className='text-brand-blue dark:text-cyan-400'>Urban Planning</span>
            </h1>

            {/**Technical Description */}
            <p className='mt-8 max-w-2xl font-mono text-sm leading-relaxed text-slate-600 dark:text-slate-400'>
                Especializada en soporte arquitectonico, dibujo tecnico detallado y planificacion urbana. Transformando conceptos 
                complejos en planos ejecutables con precision milimetrica.
            </p>

            {/** CTAs / Botones tecnicos */}
            <div className='mt-10 flex flex-wrap gap-4'>
                <button className='group relative overflow-hidden rounded-sm bg-slate-900 px-6 py-3 font-mono text-sm font-bold text-white transition-all hover:bg-brand-blue dark:bg-white dark:text-slate-900 dark:hover:bg-cyan-400'>
                    VIEW_PROJECTS
                    <span className='ml-2 inline-block transition-transform group-hover:translate-x-1'>➡️</span>
                </button>
                <button className='rounded-sm border border-slate-200 px-6 py-3 font-mono text-xs font-bold text-slate-600 transition-colors hover:bg-slate-50 dark:border-white/10 dark:text-slate-400 dark:hover:bg-white/5'>
                    DOWNLOAD_CV.PDF
                </button>
            </div>

             {/* Coordenadas estéticas (Decoración de esquina) */}
            <div className="absolute right-0 bottom-0 hidden font-mono text-[10px] opacity-20 md:block dark:text-white">
                <p>LAT: 27.2730° N</p>
                <p>LONG: 80.3582° W</p>
            </div>

        </section>
    )
}

export default Hero;