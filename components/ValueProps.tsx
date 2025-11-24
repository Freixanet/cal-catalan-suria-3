import React from 'react';

const ValueProps: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white mt-12 border-t border-slate-100 relative overflow-hidden" style={{ contentVisibility: 'auto' }}>
        <div className="absolute inset-0 bg-texture"></div> 
        <div className="max-w-md mx-auto text-center relative z-10">
            
            <div className="reveal-element">
                <h2 className="text-2xl font-bold text-slate-900 mb-2 leading-tight">
                    ¿Solo tienes 60 minutos?
                </h2>
                <p className="text-slate-500 mb-10">Cronometrados. Te sobran 10 para el café.</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="reveal-element bg-stone-50 p-5 rounded-2xl border border-stone-100" style={{ transitionDelay: '50ms' }}>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-3 text-brand-terra">
                        <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm">Servicio Ágil</h3>
                    <p className="text-xs text-slate-500 mt-1">Sin esperas tontas</p>
                </div>
                <div className="reveal-element bg-stone-50 p-5 rounded-2xl border border-stone-100" style={{ transitionDelay: '100ms' }}>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mx-auto mb-3 text-brand-terra">
                        <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm">A tiempo</h3>
                    <p className="text-xs text-slate-500 mt-1">Tu jefe feliz</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ValueProps;