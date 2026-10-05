import React from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E5E9E0] bg-[#FAF9F5] py-12 text-[#475569] text-xs font-mono-tech">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-[#EAEFE6]">
          <div>
            <div className="font-bold text-sm text-[#143823] tracking-tight">
              {PROFILE_DATA.name}
            </div>
            <div className="text-[#64748B] mt-0.5">
              Élève-ingénieur en génie électrique, énergie & automatisation — ECAM-EPMI
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#143823] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#143823] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.email}`}
              className="text-[#64748B] hover:text-[#143823] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#1A402B] hover:text-[#2D6A4F] ml-2 pl-3 border-l border-[#DFE3D9]"
              aria-label="Retour haut de page"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Haut</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-[#64748B]">
          <p>
            Portfolio d’ingénierie · Stage de fin d’études de 6 mois (Février 2027).
          </p>
          <p>
            Conçu dans une démarche sobre, honnête et axée sur les preuves techniques.
          </p>
        </div>
      </div>
    </footer>
  );
}
