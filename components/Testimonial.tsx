import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-brand-terra/5 border-y border-brand-terra/10" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-md mx-auto reveal-element">
            <figure className="flex items-start gap-4">
                <span className="text-6xl text-brand-terra/20 font-serif leading-none" aria-hidden="true">“</span>
                <blockquote className="m-0">
                    <p className="text-lg font-medium text-slate-800 leading-relaxed italic">
                        Soy transportista y paro siempre aquí. Lentejas espectaculares y en 45 min estaba fuera.
                    </p>
                    <figcaption className="mt-4 flex items-center gap-3">
                        <div className="h-px bg-brand-terra/30 w-8" aria-hidden="true"></div>
                        <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Marc R.</span>
                        <span className="text-xs text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-100">Local Guide</span>
                    </figcaption>
                </blockquote>
            </figure>
        </div>
    </section>
  );
};

export default Testimonial;