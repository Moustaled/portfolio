import React, { useEffect, useState } from 'react';
import { Project } from '../data/portfolioData';
import {
  X,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Wrench,
  FileCode2,
  BookOpen,
  Image as ImageIcon,
} from 'lucide-react';
import { NetworkDiagramSvg } from './illustrations/NetworkDiagramSvg';
import { CableSectionSvg } from './illustrations/CableSectionSvg';
import { StorageFluxSvg } from './illustrations/StorageFluxSvg';
import { BuildingAuditSvg } from './illustrations/BuildingAuditSvg';
import {
  PythonLogo,
  ExcelLogo,
  SqlLogo,
  CanecoLogo,
  AutocadLogo,
  MatlabLogo,
  JupyterLogo,
  DialuxLogo,
  PvsystLogo,
  PowerBiLogo,
  RevitLogo,
  TiaPortalLogo,
} from './TechLogos';

interface ProjectDetailModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (p: Project) => void;
}

export function ProjectDetailModal({
  project,
  allProjects,
  onClose,
  onSelectProject,
}: ProjectDetailModalProps) {
  const [activeMediaTab, setActiveMediaTab] = useState<'schematic' | 'photo' | 'both'>('photo');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const renderToolLogo = (toolName: string) => {
    const lower = toolName.toLowerCase();
    if (lower.includes('caneco')) return <CanecoLogo size={18} key={toolName} />;
    if (lower.includes('autocad')) return <AutocadLogo size={18} key={toolName} />;
    if (lower.includes('excel')) return <ExcelLogo size={18} key={toolName} />;
    if (lower.includes('dialux')) return <DialuxLogo size={18} key={toolName} />;
    if (lower.includes('pvsyst')) return <PvsystLogo size={18} key={toolName} />;
    if (lower.includes('power bi')) return <PowerBiLogo size={18} key={toolName} />;
    if (lower.includes('python')) return <PythonLogo size={18} key={toolName} />;
    if (lower.includes('revit')) return <RevitLogo size={18} key={toolName} />;
    if (lower.includes('tia portal')) return <TiaPortalLogo size={18} key={toolName} />;
    if (lower.includes('matlab') || lower.includes('simulink')) return <MatlabLogo size={18} key={toolName} />;
    if (lower.includes('sql')) return <SqlLogo size={18} key={toolName} />;
    if (lower.includes('jupyter')) return <JupyterLogo size={18} key={toolName} />;
    return null;
  };

  const renderIllustration = (slug: string) => {
    const handleToggle = (view: 'schematic' | 'photo') => {
      setActiveMediaTab(view);
    };

    switch (slug) {
      case 'calcul-reseau-electrique-industriel':
        return <NetworkDiagramSvg activeView={activeMediaTab === 'photo' ? 'photo' : 'schematic'} onToggleView={handleToggle} />;
      case 'dimensionnement-cables-electriques-bt':
        return <CableSectionSvg activeView={activeMediaTab === 'photo' ? 'photo' : 'schematic'} onToggleView={handleToggle} />;
      case 'simulation-stockage-energie-renouvelable':
        return <StorageFluxSvg activeView={activeMediaTab === 'photo' ? 'photo' : 'schematic'} onToggleView={handleToggle} />;
      case 'Audit-energetique-batiment':
        return <BuildingAuditSvg activeView={activeMediaTab === 'photo' ? 'photo' : 'schematic'} onToggleView={handleToggle} />;
      default:
        return null;
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex justify-center p-3 sm:p-6 lg:p-8 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-[#FAF9F5] rounded-2xl border border-[#DFE3D9] shadow-2xl overflow-hidden flex flex-col my-auto max-h-[94vh]">
        {/* Top Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E5E9E0]">
          <div className="flex items-center gap-3">
            <span className="font-mono-tech text-xs uppercase tracking-wider text-[#2D6A4F] font-bold">
              Projet {currentIndex + 1} sur {allProjects.length}
            </span>
            <span className="text-[#CBD5E1]" aria-hidden="true">·</span>
            <span className="font-mono-tech text-xs text-[#64748B]">{project.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech font-bold text-[#1A402B] bg-[#EBF3ED] hover:bg-[#DDEAE0] border border-[#C5DBCB] rounded-md transition-colors"
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>Dépôt GitHub</span>
              <ExternalLink className="w-3 h-3 text-[#2D6A4F]" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-[#64748B] hover:text-[#19231E] hover:bg-[#EAEFE6] rounded-md transition-colors"
              aria-label="Fermer la vue détaillée"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-[#19231E]">
          {/* Project Title Block */}
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#4F685A] mb-2">
              <span className="font-semibold text-[#1A402B]">{project.domain}</span>
              <span aria-hidden="true">·</span>
              <span>{project.type}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#143823] tracking-tight">
              {project.title}
            </h2>
            <p className="mt-3 text-base text-[#475569] leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Visual Showcase: Photo & Technical Diagram */}
          <div className="space-y-3">
            {/* Visual tab toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-1">
              <span className="text-xs font-mono-tech text-[#64748B] uppercase font-bold tracking-wider">
                Support d'Ingénierie &amp; Rendu Réel
              </span>

              <div className="flex items-center p-0.5 bg-[#EAEFE6] rounded-lg border border-[#DFE3D9] self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveMediaTab('schematic')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                    activeMediaTab === 'schematic'
                      ? 'bg-[#143823] text-white shadow-xs'
                      : 'text-[#64748B] hover:text-[#143823]'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Schéma Technique</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMediaTab('photo')}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                    activeMediaTab === 'photo'
                      ? 'bg-white text-[#143823] shadow-xs'
                      : 'text-[#64748B] hover:text-[#143823]'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Rendu Réel</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMediaTab('both')}
                  className={`hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                    activeMediaTab === 'both'
                      ? 'bg-white text-[#143823] shadow-xs'
                      : 'text-[#64748B] hover:text-[#143823]'
                  }`}
                >
                  <span>Vue Combinée</span>
                </button>
              </div>
            </div>

            {/* Display based on selected tab */}
            {activeMediaTab === 'schematic' && (
              <div className="w-full">
                {renderIllustration(project.slug)}
              </div>
            )}

            {activeMediaTab === 'photo' && (
              <div className="relative rounded-2xl overflow-hidden border border-[#DFE3D9] bg-white group shadow-sm">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-[360px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-5 text-white">
                  <div className="flex items-center gap-1.5 text-xs font-mono-tech uppercase font-bold text-[#A7D7B5]">
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Installation Réelle · {project.domain}</span>
                  </div>
                  <div className="text-lg font-bold mt-0.5">{project.title}</div>
                </div>
              </div>
            )}

            {activeMediaTab === 'both' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-stretch">
                <div className="md:col-span-5 relative rounded-xl overflow-hidden border border-[#DFE3D9] bg-white group min-h-[260px]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-3 text-white">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono-tech uppercase font-bold text-[#A7D7B5]">
                      <ImageIcon className="w-3 h-3" />
                      <span>Rendu d’Installation</span>
                    </div>
                    <div className="text-xs font-semibold">{project.domain}</div>
                  </div>
                </div>

                <div className="md:col-span-7 flex flex-col justify-center">
                  {renderIllustration(project.slug)}
                </div>
              </div>
            )}
          </div>

          {/* Key Metrics / Highlights */}
          {project.keyMetrics && project.keyMetrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.keyMetrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-white p-3.5 rounded-xl border border-[#E2E6DD] text-center shadow-2xs"
                >
                  <div className="text-[11px] font-mono-tech text-[#64748B]">{metric.label}</div>
                  <div className="text-sm sm:text-base font-bold text-[#143823] mt-1 font-mono-tech">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Context & Technical Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-6 rounded-xl border border-[#DFE3D9] shadow-2xs">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1A402B] mb-2">
                <BookOpen className="w-4 h-4 text-[#2D6A4F]" />
                <h3>Contexte & Enjeux</h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.context}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#DFE3D9] shadow-2xs">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1A402B] mb-2">
                <Wrench className="w-4 h-4 text-[#2D6A4F]" />
                <h3>Problématique technique</h3>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                {project.problem}
              </p>
            </div>
          </div>

          {/* Methodology: Step by Step */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#143823]">
              Méthodologie & Démarche d’Ingénierie
            </h3>
            <div className="bg-white rounded-xl border border-[#DFE3D9] p-6 shadow-2xs">
              <ol className="space-y-3.5 text-sm text-[#334155]">
                {project.methodology.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#EBF3ED] text-[#1A402B] font-mono-tech text-xs font-bold flex items-center justify-center mt-0.5 border border-[#CDE1D3]">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Tools with Real Logos */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#143823]">
              Outils & Logiciels Mobilisés
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.tools.map((tool, i) => {
                const logo = renderToolLogo(tool);
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3.5 py-2 bg-white border border-[#DFE3D9] text-[#1A402B] rounded-lg font-mono-tech text-xs font-semibold shadow-2xs"
                  >
                    {logo}
                    <span>{tool}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Results & Observations */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#143823]">
              Résultats & Observations Concrètes
            </h3>
            <div className="bg-[#FAF9F5] border border-[#DFE3D9] rounded-xl p-6 space-y-3">
              {project.results.map((res, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-[#334155]">
                  <CheckCircle2 className="w-4 h-4 text-[#2D6A4F] flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learnings & Competencies */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-[#143823]">
              Ce que j’ai appris & compétences consolidées
            </h3>
            <div className="bg-[#EBF3ED]/70 border border-[#CDE1D3] rounded-xl p-6 space-y-2.5">
              {project.learnings.map((learning, i) => (
                <div key={i} className="flex items-start gap-2.5 text-sm text-[#1A402B]">
                  <span className="text-[#2D6A4F] font-bold" aria-hidden="true">→</span>
                  <span className="leading-relaxed">{learning}</span>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Repository CTA */}
          <div className="p-5 bg-white rounded-xl border border-[#DFE3D9] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div>
              <div className="text-sm font-bold text-[#143823]">
                Dépôt GitHub public associé
              </div>
              <div className="text-xs text-[#64748B] mt-0.5 font-mono-tech">
                github.com/Moustaled/{project.slug}
              </div>
            </div>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1A402B] hover:bg-[#143823] text-white text-xs font-mono-tech font-bold rounded-lg shadow-sm transition-colors"
            >
              <span>Accéder aux sources & notebooks</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-3.5 bg-[#FAF9F5] border-t border-[#E5E9E0]">
          <div>
            {prevProject ? (
              <button
                onClick={() => onSelectProject(prevProject)}
                className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#475569] hover:text-[#1A402B] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Précédent :</span>
                <span className="font-bold text-[#1A402B] truncate max-w-[150px] sm:max-w-none">
                  {prevProject.title}
                </span>
              </button>
            ) : (
              <span className="text-xs text-transparent">Premier projet</span>
            )}
          </div>

          <div>
            {nextProject ? (
              <button
                onClick={() => onSelectProject(nextProject)}
                className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#475569] hover:text-[#1A402B] transition-colors"
              >
                <span className="hidden sm:inline">Suivant :</span>
                <span className="font-bold text-[#1A402B] truncate max-w-[150px] sm:max-w-none">
                  {nextProject.title}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onClose}
                className="text-xs font-mono-tech font-bold text-[#1A402B] hover:underline"
              >
                Retour aux projets
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
