import React from 'react';

const ParkingMap: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white group/map" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-md mx-auto reveal-element">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center transition-opacity duration-300 group-hover/map:opacity-90">Cómo aparcar a la primera</h2>
            
            <div className="relative pl-4 transition-all duration-300 ease-out group-hover/map:border-brand-terra">
                
                {/* Step 1 */}
                <div className="flex gap-4 relative z-10 transition-opacity duration-300 group-hover/map:opacity-90">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10">
                            <span className="font-bold text-lg">P</span>
                        </div>
                        <div className="h-16 w-0.5 border-l-2 border-dashed border-slate-300 my-1" aria-hidden="true"></div>
                    </div>
                    <div className="pt-1">
                        <h3 className="font-bold text-slate-900 text-lg">Aparca en "La Riera"</h3>
                        <p className="text-sm text-slate-500">Zona amplia y gratuita.</p>
                        <span className="inline-block mt-1 text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded font-bold uppercase">Parking Fácil</span>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-4 relative z-10 -mt-2 transition-opacity duration-300 group-hover/map:opacity-90">
                    <div className="flex flex-col items-center w-12">
                        <div className="bg-white p-1 rounded-full border border-slate-200 shadow-sm z-20">
                            <svg className="w-4 h-4 text-slate-400" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <div className="h-12 w-0.5 border-l-2 border-dashed border-slate-300 my-1" aria-hidden="true"></div>
                    </div>
                    <div className="pt-1">
                        <p className="text-sm text-slate-400 italic">Paseo de 3 min para despejar la mente.</p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-4 relative z-10 -mt-2">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-brand-terra text-white rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 transform transition-transform duration-300 ease-snap-lock group-hover/map:scale-110">
                            <svg className="w-6 h-6" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        </div>
                    </div>
                    <div className="pt-2">
                        <h3 className="font-bold text-brand-terra text-lg">Tu mesa lista</h3>
                        <p className="text-sm text-slate-500">Sin vueltas. Sin estrés.</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 bg-red-50 border border-red-100 p-4 rounded-lg flex gap-3 items-start transition-opacity duration-300 group-hover/map:opacity-90">
                <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                <div>
                    <p className="text-xs text-red-800 font-semibold leading-relaxed">
                        <span className="font-bold">Consejo de amigo:</span> No intentes aparcar en la puerta. Suele estar lleno y perderás tiempo.
                    </p>
                </div>
            </div>

            <div className="mt-8 text-center transition-opacity duration-300 group-hover/map:opacity-90">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-600 font-bold border-b-2 border-slate-200 hover:text-brand-terra hover:border-brand-terra transition pb-1">
                    <span aria-hidden="true">📍</span> Abrir GPS hacia Parking La Riera
                </a>
            </div>
        </div>
    </section>
  );
};

export default ParkingMap;