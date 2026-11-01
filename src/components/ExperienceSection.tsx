import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { EddLogo, PythonLogo, ExcelLogo, SqlLogo, MatlabLogo } from './TechLogos';

export function ExperienceSection() {
  const exp = EXPERIENCE_DATA;

  return (
    <section id="experience" className="py-16 md:py-24 border-b border-[#E5E9E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2D6A4F] uppercase tracking-wider font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Expérience Professionnelle</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#143823]">
            Mission en Entreprise
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
            Première expérience concrète au confluent de l’ingénierie des énergies renouvelables et du traitement automatisé de données.
          </p>
        </div>

        {/* Experience Box with Engineering Logbook layout & Official EDD Logo */}
        <div className="bg-white rounded-2xl border border-[#DFE3D9] p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#EAEFE6] gap-4">
            <div className="flex items-center gap-4">
              <EddLogo size={48} />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-tech font-bold text-base text-[#143823]">
                    {exp.company}
                  </span>
                  <span className="text-xs font-mono-tech text-[#64748B]">· {exp.location}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#143823] mt-0.5">
                  {exp.role}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#4F685A] bg-[#F7F9F6] px-3.5 py-2 rounded-lg border border-[#E2E6DD] self-start sm:self-auto">
              <Calendar className="w-4 h-4 text-[#2D6A4F]" />
              <span className="font-semibold">{exp.period}</span>
            </div>
          </div>

          {/* Context Intro */}
          <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
            {exp.description}
          </p>

          {/* Key Tasks */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-[#1A402B] font-semibold">
              Réalisations & Missions confiées :
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {exp.tasks.map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 bg-[#FAF9F5] rounded-xl border border-[#E5E9E0] text-sm text-[#334155]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Environment with Authentic Logos */}
          <div className="pt-2 border-t border-[#EAEFE6] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono-tech">
            <div className="flex items-center gap-2 text-[#64748B]">
              <Terminal className="w-4 h-4 text-[#2D6A4F]" />
              <span className="font-semibold text-[#1A402B]">Environnement technique réel :</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#EBF3ED] text-[#1A402B] border border-[#CDE1D3] rounded-md font-semibold">
                <PythonLogo size={14} />
                <span>Python</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#EBF3ED] text-[#1A402B] border border-[#CDE1D3] rounded-md font-semibold">
                <SqlLogo size={14} />
                <span>SQL</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#EBF3ED] text-[#1A402B] border border-[#CDE1D3] rounded-md font-semibold">
                <ExcelLogo size={14} />
                <span>Excel</span>
              </div>
              <span className="px-2.5 py-1 bg-[#FAF9F5] text-[#334155] border border-[#E2E6DD] rounded-md font-medium">
                pandas / NumPy
              </span>
              <span className="px-2.5 py-1 bg-[#FAF9F5] text-[#334155] border border-[#E2E6DD] rounded-md font-medium">
                Matplotlib
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
