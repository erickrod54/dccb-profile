import React from 'react';
import { cn } from '@/lib/utils';

/** DCCB-rebrand - Portfolio version 1.08 - Features: 
 * 
 *      --> Building Hero section Technical description.
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
            
        </section>
    )
}

export default Hero;