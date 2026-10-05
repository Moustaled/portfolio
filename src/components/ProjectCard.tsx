import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { ArrowUpRight, Github, ExternalLink, Image as ImageIcon, GitFork, Eye } from 'lucide-react';
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
import { NetworkDiagramSvg } from './illustrations/NetworkDiagramSvg';
import { CableSectionSvg } from './illustrations/CableSectionSvg';
import { StorageFluxSvg } from './illustrations/StorageFluxSvg';
import { BuildingAuditSvg } from './illustrations/BuildingAuditSvg';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  const [viewMode, setViewMode] = useState<'schematic' | 'photo'>('photo');

  const renderSchematic = () => {
    switch (project.slug) {
      case 'calcul-reseau-electrique-industriel':
        return <NetworkDiagramSvg activeView={viewMode} onToggleView={setViewMode} />;
      case 'dimensionnement-cables-electriques-bt':
        return <CableSectionSvg activeView={viewMode} onToggleView={setViewMode} />;
      case 'simulation-stockage-energie-renouvelable':
        return <StorageFluxSvg activeView={viewMode} onToggleView={setViewMode} />;
      case 'Audit-energetique-batiment':
        return <BuildingAuditSvg activeView={viewMode} onToggleView={setViewMode} />;
      default:
        return null;
    }
  };

  const renderToolIcon = (toolName: string) => {
    const lower = toolName.toLowerCase();
    if (lower.includes('caneco')) return <CanecoLogo size={16} />;
    if (lower.includes('autocad')) return <AutocadLogo size={16} />;
    if (lower.includes('excel')) return <ExcelLogo size={16} />;
    if (lower.includes('dialux')) return <DialuxLogo size={16} />;
    if (lower.includes('pvsyst')) return <PvsystLogo size={16} />;
    if (lower.includes('power bi')) return <PowerBiLogo size={16} />;
    if (lower.includes('python')) return <PythonLogo size={16} />;
    if (lower.includes('revit')) return <RevitLogo size={16} />;
    if (lower.includes('tia portal')) return <TiaPortalLogo size={16} />;
    if (lower.includes('matlab') || lower.includes('simulink')) return <MatlabLogo size={16} />;
    if (lower.includes('sql')) return <SqlLogo size={16} />;
    if (lower.includes('jupyter')) return <JupyterLogo size={16} />;
    return null;
  };

  return (
    <div className="group bg-white rounded-2xl border border-[#DFE3D9] hover:border-[#1A402B] transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-lg">
      {/* Top Permanent Dual-View Toggle Bar: [Schéma Technique] / [Photo Réelle] */}
      <div className="px-4 py-2 bg-[#F6F8F4] border-b border-[#DFE3D9] flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-[11px] font-mono-tech font-bold text-[#143823] uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#2D6A4F]"></span>
          <span>Vue {project.category}</span>
        </div>

        <div className="flex items-center p-0.5 bg-white rounded-lg border border-[#CBD5E1] shadow-2xs">
          <button
            type="button"
            onClick={() => setViewMode('schematic')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono-tech font-bold transition-all cursor-pointer ${
              viewMode === 'schematic'
                ? 'bg-[#143823] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#143823]'
            }`}
            title="Afficher le schéma technique unifilaire"
          >
            <GitFork className="w-3.5 h-3.5" />
            <span>Schéma</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('photo')}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono-tech font-bold transition-all cursor-pointer ${
              viewMode === 'photo'
                ? 'bg-[#143823] text-white shadow-xs'
                : 'text-[#64748B] hover:text-[#143823]'
            }`}
            title="Afficher la photographie réelle de l'installation"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Photo Réelle</span>
          </button>
        </div>
      </div>

      {/* Visual Area: Toggleable between [Schéma] and [Photo] */}
      <div className="border-b border-[#DFE3D9] bg-[#FAF9F5]">
        {viewMode === 'schematic' ? (
          <div>
            {renderSchematic()}
          </div>
        ) : (
          <div className="relative h-[320px] sm:h-[390px] overflow-hidden group/photo cursor-pointer" onClick={() => onOpenDetails(project)}>
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
              loading="lazy"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 flex flex-col justify-between p-4 sm:p-5 text-white">
              {/* Top Bar with Mode Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono-tech uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs border border-white/20">
                  {project.domain}
                </span>

                <div className="flex items-center p-0.5 bg-black/50 backdrop-blur-xs rounded-lg border border-white/20">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setViewMode('photo'); }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono-tech font-bold transition-all bg-white text-[#143823] shadow-xs cursor-pointer"
                  >
                    <ImageIcon className="w-3.5 h-3.5" />
                    <span>Photo</span>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); setViewMode('schematic'); }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono-tech font-bold transition-all text-white/80 hover:text-white cursor-pointer"
                  >
                    <GitFork className="w-3.5 h-3.5" />
                    <span>Schéma</span>
                  </button>
                </div>
              </div>

              {/* Bottom Caption */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#A7D7B5] font-bold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Photographie Réelle d’Installation Industrielle</span>
                </div>
                <div className="text-base sm:text-lg font-bold text-white mt-1 leading-tight">
                  {project.title}
                </div>
                <div className="text-xs text-slate-300 mt-1 line-clamp-1">
                  Cliquez pour explorer l'étude technique détaillée, schémas et calculs
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      <div className="p-5 sm:p-6 pb-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category Tag & GitHub Link */}
          <div className="flex items-center justify-between text-xs text-[#64748B] font-mono-tech mb-2">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#EBF3ED] text-[#1A402B] border border-[#CDE1D3]">
              {project.category}
            </span>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748B] hover:text-[#143823] transition-colors p-1"
              title="Consulter le dépôt GitHub"
              aria-label={`Dépôt GitHub pour ${project.title}`}
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

          <h3
            onClick={() => onOpenDetails(project)}
            className="text-lg sm:text-xl font-bold text-[#143823] group-hover:text-[#2D6A4F] transition-colors cursor-pointer leading-snug"
          >
            {project.title}
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        <div className="space-y-4 pt-3 border-t border-[#F0F2EB]">
          {/* Tools with Dedicated Software Logos */}
          <div className="flex flex-wrap items-center gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono-tech bg-[#FAF9F5] text-[#334155] border border-[#DFE3D9] rounded-md font-semibold hover:border-[#2D6A4F] transition-colors"
              >
                {renderToolIcon(tool)}
                <span>{tool}</span>
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-1.5 text-xs font-mono-tech font-bold text-[#1A402B] hover:text-[#143823] group/btn cursor-pointer"
            >
              <span>Voir l’étude détaillée</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 text-[#2D6A4F]" />
            </button>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono-tech text-[#64748B] hover:text-[#143823] inline-flex items-center gap-1"
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
