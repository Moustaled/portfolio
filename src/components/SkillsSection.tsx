import React from 'react';
import { SKILL_GROUPS, TECHNICAL_SOFTWARE } from '../data/portfolioData';
import { Zap, SunMedium, Database, Wrench } from 'lucide-react';
import {
  CanecoLogo,
  AutocadLogo,
  ExcelLogo,
  DialuxLogo,
  PvsystLogo,
  PowerBiLogo,
  PythonLogo,
  RevitLogo,
  TiaPortalLogo,
  MatlabLogo,
  SqlLogo,
  JupyterLogo,
} from './TechLogos';

export function SkillsSection() {
  const getCategoryIcon = (category: string) => {
    if (category.includes('électrique') || category.includes('Électrique')) {
      return <Zap className="w-4 h-4 text-[#2D6A4F]" />;
    }
    if (category.includes('Énergie') || category.includes('Production')) {
      return <SunMedium className="w-4 h-4 text-[#2D6A4F]" />;
    }
    return <Database className="w-4 h-4 text-[#2D6A4F]" />;
  };

  const getSoftwareLogo = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('caneco')) return <CanecoLogo size={32} />;
    if (lower.includes('autocad')) return <AutocadLogo size={32} />;
    if (lower.includes('excel')) return <ExcelLogo size={32} />;
    if (lower.includes('dialux')) return <DialuxLogo size={32} />;
    if (lower.includes('pvsyst')) return <PvsystLogo size={32} />;
    if (lower.includes('power bi')) return <PowerBiLogo size={32} />;
    if (lower.includes('python')) return <PythonLogo size={32} />;
    if (lower.includes('revit')) return <RevitLogo size={32} />;
    if (lower.includes('tia portal') || lower.includes('siemens')) return <TiaPortalLogo size={32} />;
    if (lower.includes('matlab') || lower.includes('simulink')) return <MatlabLogo size={32} />;
    if (lower.includes('sql')) return <SqlLogo size={32} />;
    if (lower.includes('jupyter')) return <JupyterLogo size={32} />;
    return <Wrench className="w-8 h-8 text-[#2D6A4F]" />;
  };

  return (
    <section id="competences" className="py-16 md:py-24 border-b border-[#E5E9E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2D6A4F] uppercase tracking-wider font-semibold">
            <Wrench className="w-3.5 h-3.5" />
            <span>Savoir-Faire &amp; Connaissances</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#143823]">
            Compétences Techniques &amp; Logiciels
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
            Trois domaines d'expertise complémentaires issus de la formation d'ingénieur à l’ECAM-EPMI, des projets appliqués et de la mission en entreprise chez EDD.
          </p>
        </div>

        {/* The 3 Core Groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#DFE3D9] p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#2D6A4F] hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#F0F2EB]">
                  <div className="flex items-center gap-2.5">
                    {getCategoryIcon(group.category)}
                    <h3 className="text-lg font-bold text-[#143823]">{group.category}</h3>
                  </div>
                  {idx === 0 && (
                    <div className="flex items-center gap-1.5">
                      <CanecoLogo size={16} />
                      <AutocadLogo size={16} />
                    </div>
                  )}
                  {idx === 1 && (
                    <div className="flex items-center gap-1.5">
                      <PvsystLogo size={16} />
                      <DialuxLogo size={16} />
                    </div>
                  )}
                  {idx === 2 && (
                    <div className="flex items-center gap-1.5">
                      <PowerBiLogo size={16} />
                      <PythonLogo size={16} />
                    </div>
                  )}
                </div>

                <p className="text-xs text-[#64748B] mb-5 font-mono-tech">
                  {group.summary}
                </p>

                <ul className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="text-sm text-[#334155] flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F] mt-2 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-[#19231E] block">{skill.name}</span>
                        <span className="text-xs text-[#64748B] block mt-0.5">{skill.detail}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0F2EB] text-[11px] font-mono-tech text-[#2D6A4F] font-semibold">
                Maîtrise théorique &amp; Pratique sur projets réels
              </div>
            </div>
          ))}
        </div>

        {/* 10 Technical Software Matrix with Real Logos */}
        <div className="bg-[#FAF9F5] rounded-2xl border border-[#DFE3D9] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E5E9E0]">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#143823]">
                10 Logiciels &amp; Environnements d’Ingénierie
              </h3>
              <p className="text-xs text-[#64748B] font-mono-tech mt-0.5">
                Outils réellement pratiqués en bureau d’études, modélisation et calculs normatifs
              </p>
            </div>
            <span className="text-xs font-mono-tech text-[#2D6A4F] font-bold bg-[#EBF3ED] px-3 py-1 rounded-full border border-[#CDE1D3]">
              10 outils spécialisés avec logos
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {TECHNICAL_SOFTWARE.map((sw, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-xl border border-[#DFE3D9] text-center hover:border-[#2D6A4F] hover:shadow-xs transition-all flex flex-col items-center justify-between group"
              >
                <div className="p-2.5 bg-[#FAF9F5] rounded-xl mb-2.5 group-hover:scale-105 transition-transform border border-[#F0F2EB] shadow-2xs">
                  {getSoftwareLogo(sw.name)}
                </div>
                <div className="text-xs font-mono-tech font-bold text-[#143823] truncate w-full">
                  {sw.name}
                </div>
                <div className="text-[10.5px] font-mono-tech text-[#2D6A4F] mt-1 font-semibold">
                  {sw.category}
                </div>
                <div className="text-[10px] text-[#64748B] mt-1 leading-snug line-clamp-2">
                  {sw.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
