import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Layers, FileCode, CheckCircle2 } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenDetails: (project: Project) => void;
}

export function ProjectsSection({ onOpenDetails }: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'elec' | 'energy'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'elec') return p.category === 'Génie électrique';
    if (selectedFilter === 'energy') return p.category.includes('Production') || p.category.includes('Performance') || p.category.includes('Énergie');
    return true;
  });

  return (
    <section id="projets" className="py-16 md:py-24 border-b border-[#E5E9E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2D6A4F] uppercase tracking-wider font-bold">
              <Layers className="w-3.5 h-3.5" />
              <span>Travaux &amp; Études d’Ingénierie</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#143823]">
              Projets Principaux
            </h2>
            <p className="text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
              Quatre études techniques complètes alliant calculs normatifs BT, dimensionnement de canalisations, modélisation de production d'énergie et audit méthodique des consommations.
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-[#EAEFE6] rounded-xl text-xs font-mono-tech self-start md:self-auto shadow-2xs">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-bold ${
                selectedFilter === 'all'
                  ? 'bg-white text-[#143823] shadow-xs'
                  : 'text-[#475569] hover:text-[#143823]'
              }`}
            >
              Tous les projets (4)
            </button>
            <button
              onClick={() => setSelectedFilter('elec')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-bold ${
                selectedFilter === 'elec'
                  ? 'bg-white text-[#143823] shadow-xs'
                  : 'text-[#475569] hover:text-[#143823]'
              }`}
            >
              Génie électrique &amp; Réseaux (2)
            </button>
            <button
              onClick={() => setSelectedFilter('energy')}
              className={`px-3 py-1.5 rounded-lg transition-colors font-bold ${
                selectedFilter === 'energy'
                  ? 'bg-white text-[#143823] shadow-xs'
                  : 'text-[#475569] hover:text-[#143823]'
              }`}
            >
              Production &amp; Systèmes énergétiques (2)
            </button>
          </div>
        </div>

        {/* 2x2 Grid for the 4 featured projects matching Image 8 layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>

        {/* Note on Authenticity & Source Code */}
        <div className="bg-[#FAF9F5] border border-[#DFE3D9] rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-tech text-[#475569] shadow-2xs">
          <div className="flex items-start sm:items-center gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] flex-shrink-0 mt-0.5 sm:mt-0" />
            <span>
              Tous les projets sont documentés avec code source, calculs normatifs (NF C 15-100, IEC 60909) et notebooks d'analyse hébergés sur GitHub.
            </span>
          </div>
          <a
            href="https://github.com/Moustaled?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#1A402B] hover:text-[#2D6A4F] font-bold underline underline-offset-2 flex-shrink-0"
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>Voir tous les dépôts @Moustaled</span>
          </a>
        </div>
      </div>
    </section>
  );
}
