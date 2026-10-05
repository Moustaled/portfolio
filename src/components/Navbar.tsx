import React, { useState, useEffect } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { EcamEpmiLogo } from './TechLogos';
import {
  Github,
  Menu,
  X,
  FileDown,
  Briefcase,
  Layers,
  Wrench,
  GraduationCap,
  Mail,
  FileText,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';

interface NavbarProps {
  onOpenCvModal?: () => void;
}

export function Navbar({ onOpenCvModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section spy
      const sections = ['accueil', 'projets', 'experience', 'competences', 'parcours', 'cv', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Accueil', href: '#accueil', id: 'accueil', icon: null },
    { label: 'Projets (4)', href: '#projets', id: 'projets', icon: Layers },
    { label: 'Expérience', href: '#experience', id: 'experience', icon: Briefcase },
    { label: 'Compétences', href: '#competences', id: 'competences', icon: Wrench },
    { label: 'Parcours', href: '#parcours', id: 'parcours', icon: GraduationCap },
    { label: 'CV', href: '#cv', id: 'cv', icon: FileText },
    { label: 'Contact', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F5]/98 backdrop-blur-md border-b border-[#DFE3D9] shadow-sm py-2'
          : 'bg-[#FAF9F5]/95 backdrop-blur-xs border-b border-[#E5E9E0] py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity: ECAM-EPMI + Candidate Name */}
        <a href="#accueil" className="flex items-center gap-3.5 group shrink-0">
          <div className="bg-white px-2.5 py-1.5 rounded-xl border border-[#DFE3D9] group-hover:border-[#143823] transition-colors shadow-2xs">
            <EcamEpmiLogo size={135} />
          </div>

          <div className="hidden sm:block border-l border-[#DFE3D9] pl-3.5">
            <div className="font-bold text-sm sm:text-base text-[#143823] tracking-tight group-hover:text-[#2D6A4F] transition-colors leading-tight">
              {PROFILE_DATA.name}
            </div>
            <div className="text-[11px] font-mono-tech text-[#4F685A] flex items-center gap-2 mt-0.5">
              <span>Systèmes Électriques</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A4F]" />
              <span className="text-[#1A402B] font-semibold">PFE Fév. 2027</span>
            </div>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-xs font-mono-tech font-semibold text-[#475569]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  isActive
                    ? 'text-[#143823] bg-[#EBF3ED] font-bold border border-[#CDE1D3]'
                    : 'hover:text-[#143823] hover:bg-[#EBF3ED]/70 border border-transparent'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Quick Actions */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech text-[#334155] hover:text-[#143823] bg-white hover:bg-[#F2F5EF] border border-[#CBD5E1] rounded-lg transition-colors shadow-2xs"
            title="Dépôts GitHub @Moustaled"
          >
            <Github className="w-3.5 h-3.5" />
            <span>@Moustaled</span>
          </a>

          <a
            href="#cv"
            onClick={(e) => {
              if (onOpenCvModal) {
                e.preventDefault();
                onOpenCvModal();
              }
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono-tech font-bold text-white bg-[#1A402B] hover:bg-[#143823] rounded-lg transition-colors shadow-2xs cursor-pointer"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>CV (PDF)</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="#cv"
            onClick={(e) => {
              if (onOpenCvModal) {
                e.preventDefault();
                onOpenCvModal();
              }
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-mono-tech font-bold text-[#1A402B] bg-[#EBF3ED] border border-[#CDE1D3] rounded-md sm:hidden"
          >
            <FileDown className="w-3 h-3" />
            <span>CV</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#334155] hover:text-[#143823] hover:bg-[#EAEFE6] rounded-lg transition-colors"
            aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F5] border-b border-[#DFE3D9] px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <div className="font-mono-tech text-xs text-[#2D6A4F] font-bold px-2 pb-1 border-b border-[#E5E9E0]">
            NAVIGATION DU PORTFOLIO
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2 text-sm font-mono-tech text-[#334155] hover:text-[#143823] hover:bg-[#EBF3ED] rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    {Icon && <Icon className="w-4 h-4 text-[#2D6A4F]" />}
                    <span>{link.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-[#DFE3D9] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCvModal) onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono-tech font-bold text-white bg-[#1A402B] hover:bg-[#143823] rounded-lg transition-colors"
            >
              <FileDown className="w-4 h-4" />
              <span>Consulter mon CV intégral (PDF)</span>
            </button>

            <a
              href={PROFILE_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono-tech font-bold text-[#334155] bg-white border border-[#CBD5E1] rounded-lg transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Voir le profil GitHub (@Moustaled)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
