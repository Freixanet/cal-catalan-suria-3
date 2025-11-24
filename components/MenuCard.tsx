import React, { useState } from 'react';

const MenuCard: React.FC = () => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <>
      <section className="px-4" aria-label="Menú del día">
          <div className="max-w-md mx-auto">
              <div className="reveal-element bg-white p-4 pb-6 rounded-2xl shadow-soft border border-stone-100">
                  
                  <div className="flex justify-between items-end mb-4 px-2">
                      <div>
                          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Menú del día</h2>
                          <time dateTime="2023-10-27T11:00" className="text-sm text-gray-500 font-medium">Actualizado: Hoy, 11:00 AM</time>
                      </div>
                      <div className="text-right">
                          <span className="block text-4xl font-black text-slate-900 leading-none tracking-tighter">14€</span>
                          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Todo incluido</span>
                      </div>
                  </div>

                  <div onClick={() => setIsZoomOpen(true)} className="relative group cursor-pointer overflow-hidden rounded-lg mb-6 bg-slate-100 aspect-[6/5]">
                      <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          PIZARRA DE HOY
                      </div>
                      <img src="/pizarra.jpeg" 
                          alt="Pizarra manuscrita con el menú de hoy: Fricandó, Lentejas y más" 
                          loading="lazy"
                          width={600} height={500}
                          className="w-full h-full object-cover transform transition duration-300 ease-out grayscale-[10%] group-hover:scale-105 group-hover:grayscale-0 will-change-transform" 
                      />
                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent h-12"></div>
                  </div>

                  <div className="space-y-3">
                      <button type="button" onClick={() => setIsZoomOpen(true)} className="w-full py-3.5 border border-slate-200 bg-slate-50 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition text-sm uppercase tracking-wide flex items-center justify-center gap-2 group active:bg-slate-200">
                          <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                          Ver foto ampliada
                      </button>
                      
                      <a href="https://wa.me/34000000000" target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-brand-green/10 text-green-700 font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-brand-green/20 transition border border-green-200">
                          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/></svg>
                          <span className="text-sm">Recibir menú por WhatsApp</span>
                      </a>
                  </div>
              </div>
          </div>
      </section>

      {/* Modal Lightbox */}
      {isZoomOpen && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setIsZoomOpen(false)}
        >
            <button className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md transition">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <img 
                src="/pizarra.jpeg" 
                alt="Menú ampliado"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer click en la foto
            />
        </div>
      )}
    </>
  );
};

export default MenuCard;