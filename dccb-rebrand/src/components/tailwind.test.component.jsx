import React from 'react';

/** DCCB-rebrand - Portfolio version 1.03 - TailwindTest - 
 * Features: 
 * 
 *      --> Building 'TailwindTest'.
 * 
 * Note: 'TailwindTest' is to test tailwind
 */

const TailwindTest = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-6">
      <div className="max-w-md rounded-2xl bg-white p-8 shadow-xl transition-all hover:scale-105">
        <h1 className="text-3xl font-bold text-sky-600">
          Tailwind is Working! 🚀
        </h1>
        <p className="mt-4 text-slate-600">
          If you see a centered card with a blue heading and a soft shadow, 
          your Vite + Tailwind setup is officially golden.
        </p>
        <div className="mt-6 flex gap-2">
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
            #vite
          </span>
          <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
            #tailwind
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
            #success
          </span>
        </div>
        <button className="mt-8 w-full rounded-lg bg-sky-500 py-3 font-bold text-white hover:bg-sky-600 active:bg-sky-700">
          Click Me (Hover Test)
        </button>
      </div>
    </div>
  );
};

export default TailwindTest;
