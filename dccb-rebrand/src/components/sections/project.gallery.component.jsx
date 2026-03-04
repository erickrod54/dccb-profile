import React from 'react';
import BeforeAfterSlider from '../features/before.after.slider.component';
import { projects } from '@/data/projects.data';

/** DCCB-rebrand - Portfolio version 2.11 - Features: 
 * 
 *      --> Building 'ProjectGallery' full.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */


const ProjectGallery = () => {

    return (
        <section className='py-20 border-t border-arch-gray/10 dark:border-white/5'>
            <div className='flex items-center gap-4 mb-12'>
                <h2 className='font-mono text-xl font-bold tracking-tighter uppercase dark:text-white'>
                    02 // PROJECT_SHOWCASE
                </h2>
                <div className='h-[1px] flex-1 bg-arch-gray/10 dark:bg-white/5'></div>
            </div>
        </section>
    )
}

export default ProjectGallery;