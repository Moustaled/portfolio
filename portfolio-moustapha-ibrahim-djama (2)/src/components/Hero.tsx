import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { SynoptiqueEnergieSvg } from './illustrations/SynoptiqueEnergieSvg';
import {
  EcamEpmiLogo,
  PythonLogo,
  ExcelLogo,
  SqlLogo,
  CanecoLogo,
  AutocadLogo,
  MatlabLogo,
  PowerBiLogo,
  PvsystLogo,
  DialuxLogo,
  RevitLogo,
  TiaPortalLogo,
} from './TechLogos';
import {
  ArrowDown,
  Github,
  Mail,
  MapPin,
  Calendar,
  Image as ImageIcon,
  Layers,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenCvModal?: () => void;
}

export function Hero({}: HeroProps) {
  const [activeVisualTab, setActiveVisualTab] = useState<'schematic' | 'photo'>('photo');

  return (
    <section id="accueil" className="relative pt-6 pb-14 md:pt-10 md:pb-20 border-b border-[#E5E9E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Status indicator with Official ECAM-EPMI Crest */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white px-3 py-1.5 rounded-xl border border-[#DFE3D9] shadow-2xs">
                <EcamEpmiLogo size={150} />
              </div>
              <div className="h-6 w-[1px] bg-[#DFE3D9]" aria-hidden="true" />
              <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2D6A4F] bg-[#EBF3ED] px-3 py-1.5 rounded-lg border border-[#CDE1D3]">
                <span className="w-2 h-2 rounded-full bg-[#2D6A4F] animate-pulse"></span>
                <span className="font-bold tracking-wide uppercase">
                  {PROFILE_DATA.internshipGoal}
                </span>
              </div>
            </div>

            {/* Candidate Name & Electrical Power Systems Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#143823]">
                {PROFILE_DATA.name}
              </h1>

              {/* Comprehensive Electrical Systems Scope: Production, Transport, Distribution & Data */}
              <div className="mt-2 text-base sm:text-xl font-bold text-[#2D6A4F] tracking-tight">
                {PROFILE_DATA.title} · Systèmes Électriques Globaux
              </div>
              <div className="text-xs sm:text-sm font-mono-tech text-[#4F685A] mt-1 font-semibold">
                Production d’Énergie · Transport HTB · Distribution HTA/BT · Automatismes &amp; Data
              </div>
            </div>

            {/* Editorial Catchphrase in refined serif */}
            <blockquote className="border-l-3 border-[#1A402B] pl-4 italic font-serif-title text-lg sm:text-xl text-[#2B3A33] leading-snug">
              « {PROFILE_DATA.tagline} »
            </blockquote>

            {/* School & Target Context */}
            <div className="space-y-2 text-sm sm:text-base text-[#475569] leading-relaxed">
              <p>
                <strong className="text-[#19231E] font-bold">
                  Élève-ingénieur en systèmes électriques, réseaux &amp; production d’énergie
                </strong>{' '}
                à l’<strong className="text-[#19231E] font-bold">ECAM-EPMI</strong> (Cergy-Pontoise).
                Après deux années de classes préparatoires MP (option informatique) à l'École d'Excellence et une première expérience
                en analyse de données énergétiques chez <strong className="text-[#143823]">EDD (Électricité de Djibouti)</strong>, je recherche mon stage de fin d'études de 6 mois à partir de février 2027.
              </p>
              <p className="text-xs sm:text-sm font-mono-tech text-[#4F685A]">
                Domaines visés : Bureaux d'études électrotechniques, ingénierie de production d'énergie, gestion de réseaux de transport &amp; distribution (HTB / HTA / BT), et automatismes industriels.
              </p>
            </div>

            {/* Key Availability Meta (NO PERMIS B!) */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono-tech text-[#64748B]">
              <span className="inline-flex items-center gap-1.5 text-[#334155] font-semibold">
                <Calendar className="w-3.5 h-3.5 text-[#2D6A4F]" />
                Stage PFE 6 mois · Février 2027
              </span>
              <span aria-hidden="true" className="text-[#CBD5E1]">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#334155] font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
                Val-d’Oise (95) · Mobilité France
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projets"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A402B] hover:bg-[#143823] text-white text-xs sm:text-sm font-mono-tech font-bold rounded-lg shadow-sm transition-colors"
              >
                <span>Explorer mes projets</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-[#F2F5EF] text-[#1A402B] text-xs sm:text-sm font-mono-tech font-bold border border-[#CBD5E1] rounded-lg shadow-2xs transition-colors"
              >
                <Mail className="w-4 h-4 text-[#2D6A4F]" />
                <span>Prendre contact</span>
              </a>

              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-mono-tech text-[#475569] hover:text-[#1A402B] hover:bg-[#EAEFE6] rounded-lg transition-colors border border-transparent hover:border-[#DFE3D9]"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (@Moustaled)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual with Tab switcher */}
          <div className="lg:col-span-5 space-y-3">
            {/* Visual tab toggle */}
            <div className="flex items-center justify-between px-2">
              <span className="text-[11px] font-mono-tech text-[#64748B] uppercase tracking-wider font-bold">
                Chaîne Énergétique Globale
              </span>
              <div className="flex items-center p-0.5 bg-[#EAEFE6] rounded-lg text-xs font-mono-tech">
                <button
                  onClick={() => setActiveVisualTab('schematic')}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-md transition-colors text-[11px] font-bold ${
                    activeVisualTab === 'schematic'
                      ? 'bg-white text-[#143823] shadow-2xs'
                      : 'text-[#475569] hover:text-[#143823]'
                  }`}
                >
                  <Layers className="w-3 h-3 text-[#2D6A4F]" />
                  <span>Synoptique Énergie</span>
                </button>
                <button
                  onClick={() => setActiveVisualTab('photo')}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-md transition-colors text-[11px] font-bold ${
                    activeVisualTab === 'photo'
                      ? 'bg-white text-[#143823] shadow-2xs'
                      : 'text-[#475569] hover:text-[#143823]'
                  }`}
                >
                  <ImageIcon className="w-3 h-3 text-[#2D6A4F]" />
                  <span>Poste &amp; Réseau Réel</span>
                </button>
              </div>
            </div>

            {/* Active view */}
            {activeVisualTab === 'schematic' ? (
              <div className="transition-all duration-300">
                <SynoptiqueEnergieSvg />
              </div>
            ) : (
              <div className="relative group overflow-hidden rounded-2xl border border-[#DFE3D9] shadow-md bg-white">
                <img
                  src={PROFILE_DATA.heroImage}
                  alt="Poste de transport électrique et lignes haute tension"
                  className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#143823]/90 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="font-mono-tech text-[11px] tracking-wider text-[#A7D7B5] uppercase font-bold">
                    Infrastructures de Transport &amp; Distribution
                  </div>
                  <div className="text-sm font-semibold tracking-tight mt-0.5">
                    Lignes HTB · Postes de Transformation HTA/BT · Supervision &amp; Automatismes
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 10 Technical Software Tools Bar with Authentic Logos */}
        <div className="pt-6 border-t border-[#E5E9E0]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <span className="text-xs font-mono-tech uppercase tracking-wider text-[#64748B] font-bold shrink-0">
              Outils &amp; Logiciels maîtrisés :
            </span>

            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              <div className="flex items-center gap-1.5 group cursor-default" title="Caneco BT">
                <CanecoLogo size={18} />
                <span className="text-xs font-mono-tech font-bold text-[#334155] group-hover:text-[#1A402B]">
                  Caneco BT
                </span>
              </div>

              <div className="flex items-center gap-1.5 group cursor-default" title="AutoCAD / AutoCAD Electrical">
                <AutocadLogo size={18} />
                <span className="text-xs font-mono-tech font-bold text-[#334155] group-hover:text-[#1A402B]">
                  AutoCAD
                </span>
              </div>

              <div className="flex items-center gap-1.5 group cursor-default" title="Microsoft Excel">
                <ExcelLogo size={18} />
                <span className="text-xs font-mono-tech font-bold text-[#334155] group-hover:text-[#1A402B]">
                  Excel
                </span>
              </div>

              <div className="flex items-center gap-1.5 group cursor-default" title="DIALux evo">
                <DialuxLogo size={18} />
                <span className="text-xs font-mono-tech font-bold text-[#334155] group-hover:text-[#1A402B]">
                  DIALux evo
                </span>
              </div>

              <div className="flex items-center gap-1.5 group cursor-default" title="PVsyst">
                <PvsystLogo size={18} />
                <span className="text-xs font-mono-tech font-bold text-[#334155] group-hover:text-[#1A402B]">
                  PVsyst
                </span>
              </div>

              <div className="flex items-center gap-1.5 group cursor-default" title="Power BI">
                <PowerBiLogo size={18} />
                <span className="text-xs font-mono-tech font-bold text-[#334155] group-hover:text-[#1A402B]">
                  Power BI
                </span>
              </div>

              <div className="flex items-center gap-1.5 group cursor-default" title="Python">
                <PythonLogo size={18} />
                <span className="text-xs font-mono-tech font-bold text-[#334155] group-hover:text-[#1A402B]">
                  Python
                </span>
              </div>

              <div className="flex items-center gap-1.5 group cursor-default" title="Revit MEP">
                <RevitLogo size={18} />
                <span className="text-xs font-mono-tech font-bold text-[#334155] group-hover:text-[#1A402B]">
                  Revit MEP
                </span>
              </div>

              <div className="flex items-center gap-1.5 group cursor-default" title="Siemens TIA Portal">
                <TiaPortalLogo size={18} />
                <span className="text-xs font-mono-tech font-bold text-[#334155] group-hover:text-[#1A402B]">
                  TIA Portal
                </span>
              </div>

              <div className="flex items-center gap-1.5 group cursor-default" title="MATLAB / Simulink">
                <MatlabLogo size={18} />
                <span className="text-xs font-mono-tech font-bold text-[#334155] group-hover:text-[#1A402B]">
                  MATLAB / Simulink
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
