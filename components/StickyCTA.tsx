import React from 'react';

interface StickyCTAProps {
  isVisible: boolean;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ isVisible }) => {
  return (
    <div 
        id="reserva" 
        className={`fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 p-4 z-50 shadow-floating transition-transform duration-300 cubic-bezier(0.25, 0.46, 0.45, 0.94) ${isVisible ? 'translate-y-0' : 'translate-y-[110%]'}`}
        style={{ willChange: 'transform' }}
    >
        <div className="max-w-md mx-auto">
            <a href="tel:+34938000000" className="gpu-layer w-full h-14 bg-brand-terra hover:bg-brand-terraDark text-white font-extrabold text-lg rounded-xl uppercase tracking-wide shadow-lg shadow-orange-500/30 active:scale-[0.98] transition-all flex items-center justify-center gap-3 relative overflow-hidden">
                <span className="animate-ring absolute inset-0 m-auto w-10 h-10"></span>
                
                <svg className="w-6 h-6 relative z-10" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                <span className="relative z-10">Llamar y Reservar</span>
            </a>
            <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">Horario de llamadas: 10:00 - 13:30</p>
        </div>
    </div>
  );
};

export default StickyCTA;