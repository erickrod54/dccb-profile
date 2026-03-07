import React from "react";

/** DCCB-rebrand - Portfolio version 3.03 - Features: 
 * 
 *    --> Building AboutMeDCCB
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
        </section>
    )
}

export default AboutMeDCCB;