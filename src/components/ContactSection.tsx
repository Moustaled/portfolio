import React, { useState } from 'react';
import { PROFILE_DATA } from '../data/portfolioData';
import { Mail, Copy, Check, Github, Linkedin, Phone, MapPin, Calendar, Send, Globe, ExternalLink, FileArchive, Download } from 'lucide-react';

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-2 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#2D6A4F] uppercase tracking-wider font-bold">
            <Mail className="w-3.5 h-3.5" />
            <span>Échange & Recrutement</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#143823]">
            Prendre Contact
          </h2>
          <p className="text-sm sm:text-base text-[#475569] max-w-xl mx-auto leading-relaxed">
            Je suis disponible pour un stage de fin d’études de 6 mois à partir de{' '}
            <strong className="text-[#143823] font-bold">février 2027</strong> en ingénierie électrique, production et distribution d’énergie, ou performance énergétique.
          </p>
        </div>

        {/* Contact Information Box */}
        <div className="bg-white rounded-2xl border border-[#DFE3D9] p-6 sm:p-8 lg:p-10 shadow-xs space-y-8">
          {/* Email Primary Highlight */}
          <div className="p-5 sm:p-6 bg-[#FAF9F5] rounded-xl border border-[#DFE3D9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono-tech uppercase tracking-wider text-[#64748B] font-bold block">
                Adresse électronique
              </span>
              <a
                href={`mailto:${PROFILE_DATA.email}`}
                className="text-base sm:text-lg font-bold text-[#143823] hover:text-[#2D6A4F] font-mono-tech transition-colors break-all"
              >
                {PROFILE_DATA.email}
              </a>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#F2F5EF] text-[#1A402B] text-xs font-mono-tech font-bold border border-[#CBD5E1] rounded-lg transition-colors shadow-2xs"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#2D6A4F]" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Adresse copiée !' : 'Copier l’adresse email'}</span>
              </button>

              <a
                href={`mailto:${PROFILE_DATA.email}?subject=Offre de stage PFE - Ingénieur Génie Électrique & Énergie`}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1A402B] hover:bg-[#143823] text-white text-xs font-mono-tech font-bold rounded-lg transition-colors shadow-2xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Écrire un email</span>
              </a>
            </div>
          </div>

          {/* Details Grid (NO Permis B) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono-tech">
            <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E5E9E0] space-y-1">
              <div className="flex items-center gap-2 text-[#64748B]">
                <Calendar className="w-4 h-4 text-[#2D6A4F]" />
                <span className="font-bold text-[#1A402B]">Disponibilité :</span>
              </div>
              <p className="text-sm font-bold text-[#143823]">
                Février 2027 · Durée 6 mois
              </p>
              <p className="text-[#64748B] text-[11px]">
                Stage de fin d’études ingénieur (PFE)
              </p>
            </div>

            <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E5E9E0] space-y-1">
              <div className="flex items-center gap-2 text-[#64748B]">
                <MapPin className="w-4 h-4 text-[#2D6A4F]" />
                <span className="font-bold text-[#1A402B]">Localisation &amp; Mobilité :</span>
              </div>
              <p className="text-sm font-bold text-[#143823]">
                Val-d’Oise (95) · Mobilité France
              </p>
              <p className="text-[#64748B] text-[11px]">
                Région parisienne et toute la France
              </p>
            </div>

            <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E5E9E0] space-y-1">
              <div className="flex items-center gap-2 text-[#64748B]">
                <Phone className="w-4 h-4 text-[#2D6A4F]" />
                <span className="font-bold text-[#1A402B]">Téléphone :</span>
              </div>
              <a href="tel:+33745318816" className="text-sm font-bold text-[#143823] hover:underline block">
                {PROFILE_DATA.phone}
              </a>
              <p className="text-[#64748B] text-[11px]">
                Appels &amp; contacts professionnels
              </p>
            </div>

            <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E5E9E0] space-y-1">
              <div className="flex items-center gap-2 text-[#64748B]">
                <Github className="w-4 h-4 text-[#2D6A4F]" />
                <span className="font-bold text-[#1A402B]">Réseaux professionnels :</span>
              </div>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href={PROFILE_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#143823] hover:text-[#2D6A4F] hover:underline flex items-center gap-1"
                >
                  <span>GitHub @Moustaled</span>
                </a>
                <span className="text-[#CBD5E1]">·</span>
                <a
                  href={PROFILE_DATA.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#143823] hover:text-[#2D6A4F] hover:underline flex items-center gap-1"
                >
                  <Linkedin className="w-3.5 h-3.5 text-[#2D6A4F]" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* ZIP Download Card */}
            <div className="p-5 bg-gradient-to-br from-[#F2F7F4] to-[#FAF9F5] rounded-xl border-2 border-[#CDE1D3] space-y-3 sm:col-span-2 shadow-2xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#1A402B] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <FileArchive className="w-5 h-5 text-[#8CE8AD]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#143823] text-sm sm:text-base">
                      Dossier ZIP du Projet
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Code source complet, photos réelles HD et configuration Vercel (vercel.json)
                    </p>
                  </div>
                </div>
                <a
                  href="/portfolio-moustaled-distallo.zip"
                  download="portfolio-moustaled-distallo.zip"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs sm:text-sm font-mono-tech font-bold text-white bg-[#1A402B] hover:bg-[#143823] rounded-lg transition-colors shadow-2xs shrink-0 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger le dossier ZIP</span>
                </a>
              </div>
              <div className="pt-2.5 border-t border-[#DFE3D9] flex flex-wrap items-center justify-between gap-2 text-xs text-[#475569]">
                <span>
                  Prêt à être déployé sur votre compte Vercel :
                </span>
                <a
                  href="https://vercel.com/moustaleddistallo-8831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#2D6A4F] hover:underline inline-flex items-center gap-1"
                >
                  <span>https://vercel.com/moustaleddistallo-8831</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="p-4 bg-[#FAF9F5] rounded-xl border border-[#E5E9E0] space-y-1 sm:col-span-2">
              <div className="flex items-center gap-2 text-[#64748B]">
                <Globe className="w-4 h-4 text-[#2D6A4F]" />
                <span className="font-bold text-[#1A402B]">Site Web en ligne &amp; Déploiement :</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1">
                <a
                  href={PROFILE_DATA.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#143823] hover:text-[#2D6A4F] hover:underline flex items-center gap-1.5"
                >
                  <span>{PROFILE_DATA.portfolioUrl}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#2D6A4F]" />
                </a>
                <span className="text-xs text-[#64748B]">
                  Portfolio en ligne officiel &amp; Déploiement Vercel
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
