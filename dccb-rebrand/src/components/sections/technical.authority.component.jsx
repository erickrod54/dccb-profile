import React from 'react';
import { ShieldCheck, HardHat, Ruler, Globe } from 'lucide-react';

/** DCCB-rebrand - Portfolio version 2.19 - Features: 
 * 
 *      --> Adding TechnicalAuthority second left side.
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
                </div>
            </div>
        </section>
    )
}

export default TechnicalAuthority;