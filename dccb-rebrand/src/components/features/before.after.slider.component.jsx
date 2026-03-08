import React, { useState, useRef, useCallback } from 'react';

/** DCCB-rebrand - Portfolio version 3.11 - Features: 
 * 
 *      --> Implementing 'handleTouchMove' for mobile.
 * 
 * Note: 'TailwindTest' is a component to test 
 * tailwind 
 */

const BeforeAfterSlider = ({ before, after, title }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef(null);

  // Función unificada para calcular la posición (funciona para ratón y toque)
  const calculatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, x)));
  }, []);

  // --- Manejadores de eventos de RATÓN (Escritorio) ---
  const handleMouseMove = (e) => {
    calculatePosition(e.clientX);
  };

  // --- Manejadores de eventos TÁCTILES (iPad/iPhone) ---
  const handleTouchMove = (e) => {
    calculatePosition(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      // 'touch-none' es vital para el iPad
      className="relative w-full aspect-video overflow-hidden rounded-sm border border-arch-gray/10 group select-none cursor-ew-resize touch-none"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchMove} 
    >
      
      {/* Imagen AFTER (Render IA) */}
      <img src={after} alt="Render IA" className="absolute inset-0 w-full h-full object-cover" />

      {/* Imagen BEFORE (AutoCAD) con Clip Path */}
      <div 
        className="absolute inset-0 w-full h-full border-r-2 border-cyan-400 z-10"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={before} alt="AutoCAD Plan" className="w-full h-full object-cover grayscale opacity-80" />
      </div>

      {/* --- ETIQUETAS DINÁMICAS (Recuperadas) --- */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
        <span className="bg-slate-900/80 text-white text-[10px] font-mono px-2 py-1 backdrop-blur-sm uppercase">
          {sliderPos > 10 ? "CAD_DRAFT" : ""}
        </span>
      </div>
      <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
        <span className="bg-cyan-400/80 text-slate-900 text-[10px] font-mono px-2 py-1 backdrop-blur-sm uppercase font-bold">
          {sliderPos < 90 ? "AI_VISUALIZATION" : ""}
        </span>
      </div>

      {/* --- LÍNEA DEL SLIDER Y DISCO (Recuperados) --- */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-cyan-400 z-30 pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        {/* El "tirador" central con las dos líneas de diseño */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-1">
             <div className="w-1 h-3 bg-slate-900 rounded-full"></div>
             <div className="w-1 h-3 bg-slate-900 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;

