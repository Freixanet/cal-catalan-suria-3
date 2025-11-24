import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[85vh] flex flex-col justify-end pb-16 px-6 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
            <img 
                 src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop" 
                 alt="Plato de cuchara caliente servido en mesa de madera" 
                 width="2070" 
                 height="1380"
                 className="w-full h-full object-cover object-center animate-fade-in opacity-0"
                 style={{ backgroundColor: '#1a202c' }}
                 // @ts-ignore - fetchpriority is valid in modern browsers but TS might complain
                 fetchpriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/30"></div>
        </div>
        
        <div className="relative z-10 max-w-md mx-auto w-full">
            <div className="inline-flex items-center gap-2 bg-brand-terra/20 backdrop-blur-sm border border-brand-terra/50 rounded-full px-3 py-1 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-terra opacity-75 animate-ping"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-terra"></span>
                </span>
                <span className="text-brand-terra text-xs font-bold uppercase tracking-widest text-white">Cocina abierta</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.1] text-white mb-4 tracking-tight drop-shadow-sm">
                Tira ese tupper triste a la basura.
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 font-medium leading-relaxed max-w-sm">
                <span className="text-brand-terra font-bold">Come caliente</span>, casero y vuelve al trabajo con las pilas cargadas.
            </p>

            <div className="flex flex-col gap-3">
                <a href="#reserva" className="relative w-full bg-brand-terra hover:bg-brand-terraDark text-white text-lg font-bold py-4 rounded-xl transition-colors text-center flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20 active:scale-[0.98] transform transition-transform">
                    <span aria-hidden="true">🔥</span> Asegura mi mesa ya
                </a>
                <p className="text-center text-gray-400 text-sm">Reserva en 1 click • Sin registros</p>
            </div>
        </div>
    </header>
  );
};

export default Hero;