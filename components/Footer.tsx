import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-500 py-12 px-6 text-center text-sm border-t border-slate-800" style={{ contentVisibility: 'auto' }}>
        <div className="max-w-md mx-auto">
            <h4 className="text-slate-300 font-bold text-lg mb-2">Cal Catalán</h4>
            <p className="mb-6">Cocina honesta para gente trabajadora.</p>
            <div className="w-12 h-px bg-slate-700 mx-auto mb-6" aria-hidden="true"></div>
            <address className="not-italic mb-2">Carrer Principal, Súria, Barcelona</address>
            <p className="mt-2 text-xs">© 2024 Cal Catalán.</p>
        </div>
    </footer>
  );
};

export default Footer;