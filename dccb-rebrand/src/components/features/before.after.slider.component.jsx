import React, { useState } from 'react';

/** DCCB-rebrand - Portfolio version 2.09 - Features: 
 * 
 *      --> Adding 'Etiquetas Flotantes' second part.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const BeforeAfterSlider = ({ before, after, title }) => {
    const [sliderPos, setSliderPos] = useState(50);

    const handleMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        setSliderPos(Math.max(0, Math.min(100, x)));
    };

    return (
        <div
            className='relative w-full aspect-video overflow-hidden rounded-sm border border-arch-gray/10 group select-none cursor-ew-resize'
            onMouseMove={handleMove}
            onTouchMove={(e) => handleMove(e.touches[0])}>
            
            {/**Imagen After (Render IA) */}
            <img src={after} alt="Render IA" className='absolute inset-0 w-full h-full object-cover' />
            
            {/**Imagen Before ( Autocad ) con Clip Path */}
            <div
                className='absolute inset-0 w-full h-full border-r-2 border-cyan-400 z-10'
                style={{clipPath:`inset(0 ${100 - sliderPos} % 0 0)` }}
            >
                <img src={before} alt='Autocad Plan' className='w-full h-full object-cover grayscale opacity-80'/>
            </div>

            {/**Etiquetas Flotantes */}
            <div className='absolute bottom-4 left-4 z-20 pointer-events-none'>
                <span className='bg-slate-900/80 text-white text-[10px] font-mono px-2 py-1 backdrop-blur-sm uppercase'>
                    {sliderPos > 10 ? "CAD_DRAFT" : " " }
                </span>
            </div>
            <div className='absolute bottom-4 right-4 z-20 pointer-events-none'>
                <span className='bg-cyan-400/80 text-slate-900 text-[10px] font-mono px-2 py-1 backdrop-blur-sm uppercase font-bold'>
                    {sliderPos < 90 ? "AI_VISUALIZATION" : ""}
                </span>
            </div>
        </div>
    )
}

export default BeforeAfterSlider;