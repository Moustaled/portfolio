import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookMarked, Award } from 'lucide-react';
import { EcamEpmiLogo, EcoleExcellenceLogo } from './TechLogos';

export function EducationSection() {
  return (
    <section id="parcours" className="py-16 md:py-24 border-b border-[#E5E9E0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2D6A4F] uppercase tracking-wider font-bold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Formation Académique</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#143823]">
            Parcours &amp; Cursus
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
            Un socle scientifique de haut niveau issu des classes préparatoires MP, prolongé par la formation d'ingénieur en génie électrique, réseaux de transport, distribution et systèmes énergétiques à l’ECAM-EPMI.
          </p>
        </div>

        {/* 2 Educational Institution Cards with Spacious, Uncompressed Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {EDUCATION_DATA.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#DFE3D9] p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#1A402B] hover:shadow-md transition-all"
            >
              <div className="space-y-6">
                {/* Official Logo Banner - Generous space, pristine layout, completely uncompressed */}
                <div className="bg-[#FAF9F5] rounded-xl border border-[#DFE3D9] p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                    {idx === 0 ? (
                      <EcamEpmiLogo size={230} />
                    ) : (
                      <EcoleExcellenceLogo size={250} />
                    )}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#1A402B] bg-white px-3 py-1.5 rounded-lg border border-[#CBD5E1] font-bold shadow-2xs shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & Institution Details */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#143823]">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-semibold text-[#1F2937] mt-1 flex items-center gap-2">
                    <span className="font-bold">{edu.school}</span>
                    <span className="text-[#94A3B8]">·</span>
                    <span className="text-xs font-mono-tech text-[#64748B] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#2D6A4F]" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.specialization && (
                    <div className="mt-2 text-xs sm:text-sm font-mono-tech text-[#2D6A4F] bg-[#EBF3ED] px-3 py-1.5 rounded-md border border-[#CDE1D3] font-bold inline-block">
                      {edu.specialization}
                    </div>
                  )}
                </div>

                {/* In-depth Coursework */}
                <div className="pt-2 border-t border-[#F0F2EB]">
                  <div className="flex items-center gap-1.5 text-xs font-mono-tech text-[#1A402B] font-bold mb-2.5">
                    <BookMarked className="w-3.5 h-3.5 text-[#2D6A4F]" />
                    <span>Enseignements &amp; Domaines approfondis :</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.courses.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-mono-tech px-2.5 py-1 bg-[#FAF9F5] text-[#334155] border border-[#DFE3D9] rounded-md font-medium"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Badge */}
              <div className="mt-6 pt-4 border-t border-[#F0F2EB] flex items-center justify-between text-xs font-mono-tech text-[#2D6A4F] font-bold">
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  {idx === 0
                    ? 'Stage de fin d’études de 6 mois recherché (Fév. 2027)'
                    : 'CPGE Filière d’Excellence scientifique'}
                </span>
                <span className="text-[#64748B] text-[11px] font-normal">
                  {idx === 0 ? 'Cycle Ingénieur' : 'Classe Préparatoire'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
