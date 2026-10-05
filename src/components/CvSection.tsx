import React, { useState } from 'react';
import { PROFILE_DATA, EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { Printer, Copy, Check, FileText, Phone, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';
import { EcamEpmiLogo, EddLogo } from './TechLogos';

export function CvSection() {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cv" className="py-16 md:py-24 border-b border-[#E5E9E0]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header with action buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2D6A4F] uppercase tracking-wider font-bold">
              <FileText className="w-3.5 h-3.5" />
              <span>Curriculum Vitae</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#143823]">
              Curriculum Vitae Intégral
            </h2>
            <p className="text-sm sm:text-base text-[#475569] max-w-xl leading-relaxed">
              Consultez mon CV directement en ligne ou imprimez / enregistrez une copie en format PDF.
            </p>
          </div>

          <div className="flex items-center gap-2.5 self-start sm:self-auto">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A402B] hover:bg-[#143823] text-white text-xs font-mono-tech font-bold rounded-lg shadow-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / Télécharger PDF</span>
            </button>
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-[#F2F5EF] text-[#1A402B] text-xs font-mono-tech font-bold border border-[#CBD5E1] rounded-lg transition-colors shadow-2xs"
              title="Copier l’adresse email"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#2D6A4F]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copié !' : 'Copier email'}</span>
            </button>
          </div>
        </div>

        {/* Paper-styled CV Container */}
        <div className="bg-white rounded-2xl border border-[#DFE3D9] p-6 sm:p-10 lg:p-12 shadow-md text-[#19231E] print-only-container">
          {/* CV Header */}
          <div className="border-b-2 border-[#1A402B] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-white p-2 rounded-xl border border-[#DFE3D9] shadow-2xs">
                <EcamEpmiLogo size={145} />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#143823] tracking-tight uppercase">
                  {PROFILE_DATA.name}
                </h1>
                <div className="text-base sm:text-lg font-bold text-[#2D6A4F] mt-1">
                  Élève-ingénieur en Systèmes Électriques (Production · Transport · Distribution · Data)
                </div>
                <div className="text-xs sm:text-sm font-mono-tech font-bold text-[#1A402B] mt-1">
                  {PROFILE_DATA.internshipGoal}
                </div>
              </div>
            </div>

            <div className="text-xs font-mono-tech space-y-1 text-[#475569] md:text-right">
              <div className="flex items-center md:justify-end gap-1.5 font-semibold text-[#143823]">
                <MapPin className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Val-d’Oise (95) · Mobilité France</span>
              </div>
              <div className="flex items-center md:justify-end gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <a href="tel:+33745318816" className="hover:text-[#1A402B] font-bold">
                  {PROFILE_DATA.phone}
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <a href={`mailto:${PROFILE_DATA.email}`} className="hover:text-[#1A402B] underline decoration-[#2D6A4F]/40 font-bold">
                  {PROFILE_DATA.email}
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-1.5 text-[#2D6A4F]">
                <span>GitHub :</span>
                <a href={PROFILE_DATA.github} target="_blank" rel="noopener noreferrer" className="hover:underline font-bold">
                  github.com/{PROFILE_DATA.githubUsername}
                </a>
              </div>
              <div className="flex items-center md:justify-end gap-1.5 text-[#143823] pt-0.5">
                <Globe className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span className="text-[#64748B]">Portfolio en ligne :</span>
                <a
                  href={PROFILE_DATA.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline font-bold text-[#143823] inline-flex items-center gap-1"
                >
                  <span>{PROFILE_DATA.portfolioUrl.replace('https://', '')}</span>
                  <ExternalLink className="w-3 h-3 text-[#2D6A4F]" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-8 text-sm">
            {/* Profil */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#1A402B] border-b border-[#E5E9E0] pb-1">
                Profil
              </h2>
              <p className="text-[#334155] leading-relaxed">
                Élève-ingénieur à l’ECAM-EPMI, spécialisé en génie électrique, réseaux de distribution et systèmes de production d'énergie
                (centrales thermiques, nucléaires, renouvelables, microgrids hybrides). Fort d'une première expérience chez EDD
                en analyse de données de production et consolidation automatisée sous Python/SQL, je recherche un stage de fin d’études (6 mois)
                en bureau d’études électriques, centrales d'énergie, gestion des réseaux ou performance énergétique.
              </p>
            </div>

            {/* Expérience Professionnelle */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#1A402B] border-b border-[#E5E9E0] pb-1">
                Expérience Professionnelle
              </h2>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="flex items-center gap-2">
                    <EddLogo size={26} />
                    <span className="font-bold text-[#143823]">EDD (Électricité de Djibouti)</span>
                    <span className="text-[#64748B]">—</span>
                    <span className="font-bold text-[#2D6A4F]">{EXPERIENCE_DATA.role}</span>
                  </div>
                  <span className="font-mono-tech text-xs text-[#64748B] font-bold">
                    {EXPERIENCE_DATA.period}
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-1.5 text-[#334155] text-xs sm:text-sm pl-1">
                  {EXPERIENCE_DATA.tasks.map((task, i) => (
                    <li key={i} className="leading-relaxed">
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-xs font-mono-tech text-[#4F685A] pt-1">
                  <strong>Outils :</strong> {EXPERIENCE_DATA.tools.join(' · ')}
                </div>
              </div>
            </div>

            {/* Projets */}
            <div className="space-y-4">
              <h2 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#1A402B] border-b border-[#E5E9E0] pb-1">
                Projets Significatifs
              </h2>

              {/* Project 1 */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-bold text-[#143823]">Calcul d’un réseau électrique industriel</span>
                  <span className="font-mono-tech text-xs text-[#64748B]">Projet d'ingénierie</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#334155] pl-1">
                  <li>Étude d’une installation de distribution électrique basse tension à partir des caractéristiques des charges.</li>
                  <li>Dimensionnement des canalisations en tenant compte du courant admissible et des chutes de tension.</li>
                  <li>Calcul des courants de court-circuit selon IEC 60909 et vérification du choix des disjoncteurs.</li>
                  <li>Réalisation et analyse du schéma unifilaire de l’installation sous Caneco BT et AutoCAD.</li>
                </ul>
                <div className="text-xs font-mono-tech text-[#4F685A]">
                  <strong>Compétences :</strong> réseaux BT · dimensionnement de câbles · courts-circuits · protections · schémas unifilaires
                </div>
              </div>

              {/* Project 2 */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-bold text-[#143823]">Dimensionnement de câbles électriques BT</span>
                  <span className="font-mono-tech text-xs text-[#64748B]">Normes &amp; Algorithmes</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#334155] pl-1">
                  <li>Détermination méthodique du courant admissible Iz avec facteurs de pose k1, k2, k3 (NF C 15-100).</li>
                  <li>Contrôle de la chute de tension admissible et vérification thermique en court-circuit.</li>
                  <li>Automatisation des itérations de calcul sous Python et tableaux normatifs.</li>
                </ul>
                <div className="text-xs font-mono-tech text-[#4F685A]">
                  <strong>Compétences :</strong> NF C 15-100 · Python · automatisation · contrainte thermique
                </div>
              </div>

              {/* Project 3 */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-bold text-[#143823]">Simulation stockage &amp; production d'énergie hybride</span>
                  <span className="font-mono-tech text-xs text-[#64748B]">Systèmes Énergétiques</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#334155] pl-1">
                  <li>Modélisation de flux d'un système hybride multi-sources avec Power BI, PVsyst et Python.</li>
                  <li>Arbitrage des priorités énergétiques et évaluation des réductions de carburant et de CO₂.</li>
                </ul>
                <div className="text-xs font-mono-tech text-[#4F685A]">
                  <strong>Compétences :</strong> production hybride · Power BI · PVsyst · Python · bilan énergétique
                </div>
              </div>

              {/* Project 4 */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <span className="font-bold text-[#143823]">Audit énergétique d’un bâtiment</span>
                  <span className="font-mono-tech text-xs text-[#64748B]">Efficacité Énergétique</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#334155] pl-1">
                  <li>Analyse des consommations d’un bâtiment et identification des principaux postes consommateurs.</li>
                  <li>Construction d’indicateurs (KPI kWh/m²·an) permettant d’évaluer la performance énergétique.</li>
                  <li>Identification de solutions d'efficacité et chiffrage des gains technico-économiques (TRI).</li>
                </ul>
                <div className="text-xs font-mono-tech text-[#4F685A]">
                  <strong>Compétences :</strong> audit énergétique · efficacité énergétique · analyse de consommation · KPI · analyse technico-économique
                </div>
              </div>
            </div>

            {/* Compétences CV */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#1A402B] border-b border-[#E5E9E0] pb-1">
                Compétences
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <strong className="text-[#143823] block">Génie électrique &amp; Réseaux :</strong>
                  <span className="text-[#475569]">
                    Réseaux électriques BT/HTA · dimensionnement de câbles · calculs de court-circuit · protections · schémas unifilaires · machines électriques · transformateurs
                  </span>
                </div>

                <div>
                  <strong className="text-[#143823] block">Production d'énergie &amp; Systèmes :</strong>
                  <span className="text-[#475569]">
                    Centrales thermiques, groupes de secours, solaire, éolien, stockage d'énergie, efficacité énergétique, audit des consommations
                  </span>
                </div>

                <div>
                  <strong className="text-[#143823] block">10 Logiciels techniques maîtrisés :</strong>
                  <span className="text-[#475569]">
                    Caneco BT · AutoCAD / AutoCAD Electrical · Excel · DIALux evo · PVsyst · Power BI · Python · Revit MEP · TIA Portal · MATLAB / Simulink
                  </span>
                </div>

                <div>
                  <strong className="text-[#143823] block">Data &amp; Informatique :</strong>
                  <span className="text-[#475569]">
                    Python · pandas · NumPy · Matplotlib · SQL · Excel / tableaux croisés dynamiques
                  </span>
                </div>
              </div>
            </div>

            {/* Formation */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#1A402B] border-b border-[#E5E9E0] pb-1">
                Formation
              </h2>

              <div className="space-y-2">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-[#143823]">ECAM-EPMI — Diplôme d’ingénieur</span>
                    <span className="font-mono-tech text-xs text-[#64748B]">Cergy-Pontoise · 2024 – 2027</span>
                  </div>
                  <div className="text-xs text-[#2D6A4F] font-bold mt-0.5">
                    Spécialisation orientée génie électrique, production d'énergie et automatisation
                  </div>
                  <p className="text-xs text-[#475569] mt-1">
                    Principaux enseignements : électrotechnique · réseaux électriques · conversion et production d'énergie · électronique de puissance · machines électriques · automatique · informatique industrielle · traitement du signal · gestion de projet
                  </p>
                </div>

                <div className="pt-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-bold text-[#143823]">Classes préparatoires aux grandes écoles — MP, option informatique</span>
                    <span className="font-mono-tech text-xs text-[#64748B]">École d’Excellence · Djibouti · 2022 – 2024</span>
                  </div>
                  <p className="text-xs text-[#475569] mt-0.5">
                    Mathématiques approfondies · physique · algorithmique · programmation
                  </p>
                </div>
              </div>
            </div>

            {/* Langues & Centres d’intérêt */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E5E9E0] text-xs">
              <div>
                <strong className="text-[#143823] block mb-1 font-mono-tech uppercase">Langues :</strong>
                <span className="text-[#475569]">Français (courant / bilingue) · Anglais (B2 technique) · Arabe (intermédiaire)</span>
              </div>
              <div>
                <strong className="text-[#143823] block mb-1 font-mono-tech uppercase">Centres d’intérêt :</strong>
                <span className="text-[#475569]">Football · Programmation scientifique · Technologies de production et de gestion d'énergie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
