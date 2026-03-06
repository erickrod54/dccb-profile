import React from 'react';
import { ShieldCheck, HardHat, Ruler, Globe } from 'lucide-react';

/** DCCB-rebrand - Portfolio version 2.17 - Features: 
 * 
 *      --> Adding TechnicalAuthority title.
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
        </section>
    )
}

export default TechnicalAuthority;