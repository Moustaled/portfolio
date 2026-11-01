import React, { useState } from 'react';
import { Zap, Activity, ShieldCheck, ArrowRight, Layers, Sliders, Database } from 'lucide-react';

interface SynoptiqueEnergieSvgProps {
  className?: string;
}

/**
 * Synoptique Global de l'Énergie & des Systèmes Électriques
 * Chaîne complète : Production (Toutes sources) → Transport HTB → Postes Source HTA → Distribution HTA/BT → Usages & Supervision Data
 */
export function SynoptiqueEnergieSvg({ className = '' }: SynoptiqueEnergieSvgProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      title: "1. PRODUCTION D'ÉNERGIE (Mix & Centrales)",
      voltage: "10 kV – 24 kV",
      desc: "Centrales thermiques & turbines, nucléaire, parcs éoliens & solaires photovoltaïques, groupes électrogènes de secours et stockage batterie.",
      kpis: ["Puissance installée assignée", "Régulation fréquence/tension", "Alternateurs synchrones"],
    },
    {
      title: "2. POSTE ÉLÉVATEUR & TRANSPORT (HTB)",
      voltage: "225 kV – 400 kV",
      desc: "Élévation de tension pour minimiser les pertes Joules en ligne (PJ = R·I²). Réseau maillé de transport très haute tension et interconnexions.",
      kpis: ["Lignes aériennes HTB", "Postes d'interconnexion", "Stabilité dynamique du réseau"],
    },
    {
      title: "3. POSTE SOURCE & RÉSEAU DE DISTRIBUTION (HTA)",
      voltage: "20 kV (Moyenne Tension)",
      desc: "Transformation HTB/HTA en poste source. Réseaux de distribution bouclés ou en antenne vers les zones industrielles et urbaines.",
      kpis: ["Transformateurs HTB/HTA", "Régimes de neutre compensé", "Cellules de coupure HTA"],
    },
    {
      title: "4. POSTES HTA/BT & UTILISATION INDUSTRIELLE (BT)",
      voltage: "400 V Triphasé / 230 V Mono",
      desc: "Postes de livraison HTA/BT (20 kV / 400 V), Tableaux Généraux Basse Tension (TGBT), moteurs asynchrones, usines, bâtiments et charges.",
      kpis: ["Bilan de puissance & foisonnement", "Calculs courts-circuits Ik3 / Ik1", "NF C 15-100 & Caneco BT"],
    },
  ];

  return (
    <div className={`relative bg-[#FBFBF9] rounded-2xl border border-[#DFE3D9] p-4 sm:p-6 text-[#19231E] shadow-xs ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#E5E9E0] gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A402B] animate-pulse"></span>
            <h4 className="font-mono-tech font-bold text-sm sm:text-base text-[#143823] tracking-wide uppercase">
              SYNOPTIQUE GLOBAL DES SYSTÈMES ÉLECTRIQUES
            </h4>
          </div>
          <p className="text-xs text-[#64748B] font-mono-tech mt-0.5">
            Architecture complète : Production · Transport HTB · Postes Source · Distribution HTA/BT &amp; Supervision Data
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#2D6A4F] bg-[#EBF3ED] px-2.5 py-1 rounded-md border border-[#CDE1D3] font-bold">
          <Activity className="w-3.5 h-3.5" />
          <span>Chaîne Électrotechnique Complète</span>
        </div>
      </div>

      {/* Main Interactive Vector Diagram */}
      <div className="bg-white rounded-xl border border-[#DFE3D9] p-3 sm:p-5 overflow-hidden">
        <svg
          viewBox="0 0 860 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto select-none font-mono-tech"
        >
          {/* Subtle Blueprint Grid */}
          <defs>
            <pattern id="synop-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F1F4EE" strokeWidth="0.8" />
            </pattern>
            <linearGradient id="busbar-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E40AF" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>
          <rect width="860" height="380" fill="url(#synop-grid)" rx="8" />

          {/* ============================================================== */}
          {/* BLOC 1: PRODUCTION D'ÉNERGIE (x: 20 to 180) */}
          {/* ============================================================== */}
          <g
            className="cursor-pointer transition-opacity"
            opacity={activeStep === 0 || activeStep === null ? 1 : 0.45}
            onClick={() => setActiveStep(0)}
          >
            <rect
              x="20"
              y="30"
              width="180"
              height="300"
              rx="10"
              fill={activeStep === 0 ? '#F0FDF4' : '#FAFAFA'}
              stroke={activeStep === 0 ? '#16A34A' : '#CBD5E1'}
              strokeWidth={activeStep === 0 ? '2' : '1.2'}
            />
            <rect x="20" y="30" width="180" height="28" rx="8" fill="#143823" />
            <text x="110" y="48" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
              1. PRODUCTION
            </text>

            {/* Alternateur / Turbine Thermique */}
            <g transform="translate(35, 75)">
              <rect x="0" y="0" width="150" height="60" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
              <circle cx="30" cy="30" r="18" fill="#EBF3ED" stroke="#2D6A4F" strokeWidth="1.5" />
              <text x="30" y="35" textAnchor="middle" fill="#143823" fontSize="13" fontWeight="bold">~ G</text>
              <text x="58" y="26" fill="#19231E" fontSize="9.5" fontWeight="bold">Centrales &amp; Turbines</text>
              <text x="58" y="40" fill="#64748B" fontSize="8">Thermique / Gaz / Énergie</text>
              <text x="58" y="52" fill="#2D6A4F" fontSize="8" fontWeight="bold">15 kV · Alternateurs</text>
            </g>

            {/* Solaire PV & Stockage Batterie */}
            <g transform="translate(35, 150)">
              <rect x="0" y="0" width="150" height="60" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
              <rect x="12" y="14" width="34" height="24" rx="3" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.2" />
              <line x1="29" y1="14" x2="29" y2="38" stroke="#2563EB" strokeWidth="1" />
              <line x1="12" y1="26" x2="46" y2="26" stroke="#2563EB" strokeWidth="1" />
              <text x="56" y="26" fill="#19231E" fontSize="9.5" fontWeight="bold">Parcs Solaires &amp; ENR</text>
              <text x="56" y="40" fill="#64748B" fontSize="8">Microgrids &amp; Hybride</text>
              <text x="56" y="52" fill="#D97706" fontSize="8" fontWeight="bold">Onduleurs + Batteries</text>
            </g>

            {/* Collecteur Production Interne */}
            <line x1="185" y1="145" x2="215" y2="145" stroke="#143823" strokeWidth="3" />
            <circle cx="185" cy="145" r="3.5" fill="#143823" />
            <text x="110" y="235" textAnchor="middle" fill="#475569" fontSize="8.5">Tension de génération</text>
            <text x="110" y="250" textAnchor="middle" fill="#16A34A" fontSize="10" fontWeight="bold">10 kV à 24 kV</text>
            <text x="110" y="295" textAnchor="middle" fill="#64748B" fontSize="8">Bilan de puissance initial</text>
          </g>

          {/* Connection Line 1 -> 2 */}
          <path d="M 200 145 H 230" stroke="#059669" strokeWidth="3" strokeDasharray="4 2" />
          <polygon points="230,145 222,141 222,149" fill="#059669" />

          {/* ============================================================== */}
          {/* BLOC 2: TRANSPORT & POSTE ÉLÉVATEUR (x: 235 to 425) */}
          {/* ============================================================== */}
          <g
            className="cursor-pointer transition-opacity"
            opacity={activeStep === 1 || activeStep === null ? 1 : 0.45}
            onClick={() => setActiveStep(1)}
          >
            <rect
              x="235"
              y="30"
              width="195"
              height="300"
              rx="10"
              fill={activeStep === 1 ? '#EFF6FF' : '#FAFAFA'}
              stroke={activeStep === 1 ? '#2563EB' : '#CBD5E1'}
              strokeWidth={activeStep === 1 ? '2' : '1.2'}
            />
            <rect x="235" y="30" width="195" height="28" rx="8" fill="#0C2D64" />
            <text x="332" y="48" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
              2. TRANSPORT HTB
            </text>

            {/* Transformateur Élévateur */}
            <g transform="translate(250, 75)">
              <rect x="0" y="0" width="165" height="60" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
              <circle cx="28" cy="30" r="14" fill="none" stroke="#2563EB" strokeWidth="2" />
              <circle cx="44" cy="30" r="14" fill="none" stroke="#1D4ED8" strokeWidth="2" />
              <text x="68" y="26" fill="#19231E" fontSize="9.5" fontWeight="bold">Transfo Élévateur</text>
              <text x="68" y="40" fill="#64748B" fontSize="8">20 kV → 225 / 400 kV</text>
              <text x="68" y="52" fill="#2563EB" fontSize="8" fontWeight="bold">Pertes Joules minime</text>
            </g>

            {/* Pylône Haute Tension HTB */}
            <g transform="translate(305, 155)">
              {/* Pylon Tower Vector */}
              <line x1="25" y1="0" x2="10" y2="80" stroke="#334155" strokeWidth="2" />
              <line x1="25" y1="0" x2="40" y2="80" stroke="#334155" strokeWidth="2" />
              <line x1="8" y1="25" x2="42" y2="25" stroke="#334155" strokeWidth="1.5" />
              <line x1="2" y1="48" x2="48" y2="48" stroke="#334155" strokeWidth="1.5" />
              <line x1="10" y1="80" x2="40" y2="80" stroke="#334155" strokeWidth="1.5" />
              <line x1="15" y1="36" x2="35" y2="36" stroke="#334155" strokeWidth="1" />
              <line x1="10" y1="62" x2="40" y2="62" stroke="#334155" strokeWidth="1" />
            </g>

            <text x="332" y="270" textAnchor="middle" fill="#475569" fontSize="8.5">Lignes Très Haute Tension</text>
            <text x="332" y="286" textAnchor="middle" fill="#1D4ED8" fontSize="11" fontWeight="bold">225 kV – 400 kV</text>
            <text x="332" y="305" textAnchor="middle" fill="#64748B" fontSize="8">Interconnexion &amp; Transit</text>
          </g>

          {/* Connection Line 2 -> 3 */}
          <path d="M 430 145 H 460" stroke="#2563EB" strokeWidth="3" strokeDasharray="4 2" />
          <polygon points="460,145 452,141 452,149" fill="#2563EB" />

          {/* ============================================================== */}
          {/* BLOC 3: DISTRIBUTION HTA & POSTE SOURCE (x: 465 to 640) */}
          {/* ============================================================== */}
          <g
            className="cursor-pointer transition-opacity"
            opacity={activeStep === 2 || activeStep === null ? 1 : 0.45}
            onClick={() => setActiveStep(2)}
          >
            <rect
              x="465"
              y="30"
              width="180"
              height="300"
              rx="10"
              fill={activeStep === 2 ? '#FFFBEB' : '#FAFAFA'}
              stroke={activeStep === 2 ? '#D97706' : '#CBD5E1'}
              strokeWidth={activeStep === 2 ? '2' : '1.2'}
            />
            <rect x="465" y="30" width="180" height="28" rx="8" fill="#78350F" />
            <text x="555" y="48" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
              3. DISTRIBUTION HTA
            </text>

            {/* Poste Source Abaisseur */}
            <g transform="translate(478, 75)">
              <rect x="0" y="0" width="154" height="60" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
              <circle cx="28" cy="30" r="14" fill="none" stroke="#D97706" strokeWidth="2" />
              <circle cx="44" cy="30" r="14" fill="none" stroke="#B45309" strokeWidth="2" />
              <text x="68" y="26" fill="#19231E" fontSize="9.5" fontWeight="bold">Poste Source</text>
              <text x="68" y="40" fill="#64748B" fontSize="8">HTB → HTA (20 kV)</text>
              <text x="68" y="52" fill="#D97706" fontSize="8" fontWeight="bold">Régulation sous charge</text>
            </g>

            {/* Boucle HTA 20 kV */}
            <g transform="translate(478, 150)">
              <rect x="0" y="0" width="154" height="70" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
              <path d="M 25 15 H 125 V 55 H 25 Z" fill="none" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 2" />
              <rect x="45" y="10" width="10" height="10" fill="#B45309" />
              <rect x="95" y="10" width="10" height="10" fill="#B45309" />
              <text x="75" y="38" textAnchor="middle" fill="#19231E" fontSize="9" fontWeight="bold">Réseau Bouclé HTA</text>
              <text x="75" y="50" textAnchor="middle" fill="#64748B" fontSize="8">Cellules SM6 / Disjoncteurs</text>
            </g>

            <text x="555" y="250" textAnchor="middle" fill="#475569" fontSize="8.5">Moyenne Tension</text>
            <text x="555" y="266" textAnchor="middle" fill="#D97706" fontSize="11" fontWeight="bold">HTA · 20 000 V</text>
            <text x="555" y="295" textAnchor="middle" fill="#64748B" fontSize="8">Dessertes industrielles &amp; urbaines</text>
          </g>

          {/* Connection Line 3 -> 4 */}
          <path d="M 645 145 H 675" stroke="#D97706" strokeWidth="3" strokeDasharray="4 2" />
          <polygon points="675,145 667,141 667,149" fill="#D97706" />

          {/* ============================================================== */}
          {/* BLOC 4: POSTE HTA/BT & UTILISATION BT (x: 680 to 840) */}
          {/* ============================================================== */}
          <g
            className="cursor-pointer transition-opacity"
            opacity={activeStep === 3 || activeStep === null ? 1 : 0.45}
            onClick={() => setActiveStep(3)}
          >
            <rect
              x="680"
              y="30"
              width="160"
              height="300"
              rx="10"
              fill={activeStep === 3 ? '#F0FDF4' : '#FAFAFA'}
              stroke={activeStep === 3 ? '#15803D' : '#CBD5E1'}
              strokeWidth={activeStep === 3 ? '2' : '1.2'}
            />
            <rect x="680" y="30" width="160" height="28" rx="8" fill="#143823" />
            <text x="760" y="48" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">
              4. TGBT &amp; USAGES BT
            </text>

            {/* Transformateur HTA / BT */}
            <g transform="translate(692, 75)">
              <rect x="0" y="0" width="136" height="60" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
              <circle cx="25" cy="30" r="13" fill="none" stroke="#15803D" strokeWidth="2" />
              <circle cx="39" cy="30" r="13" fill="none" stroke="#143823" strokeWidth="2" />
              <text x="60" y="26" fill="#19231E" fontSize="9" fontWeight="bold">Poste HTA/BT</text>
              <text x="60" y="40" fill="#64748B" fontSize="8">630 kVA · Dyn11</text>
              <text x="60" y="52" fill="#15803D" fontSize="8" fontWeight="bold">20 kV → 400 V</text>
            </g>

            {/* TGBT & Départs */}
            <g transform="translate(692, 148)">
              <rect x="0" y="0" width="136" height="72" rx="6" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
              {/* Busbars */}
              <line x1="15" y1="20" x2="120" y2="20" stroke="#DC2626" strokeWidth="2" />
              <line x1="15" y1="26" x2="120" y2="26" stroke="#16A34A" strokeWidth="2" />
              <line x1="15" y1="32" x2="120" y2="32" stroke="#2563EB" strokeWidth="2" />
              <line x1="15" y1="38" x2="120" y2="38" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="3 2" />

              <text x="68" y="54" textAnchor="middle" fill="#143823" fontSize="8.5" fontWeight="bold">TGBT &amp; Canalisations</text>
              <text x="68" y="65" textAnchor="middle" fill="#64748B" fontSize="7.5">NF C 15-100 · Caneco BT</text>
            </g>

            <text x="760" y="246" textAnchor="middle" fill="#475569" fontSize="8.5">Basse Tension Industrielle</text>
            <text x="760" y="262" textAnchor="middle" fill="#143823" fontSize="11" fontWeight="bold">400 V / 230 V</text>
            <text x="760" y="280" textAnchor="middle" fill="#64748B" fontSize="8">Moteurs · CVC · Ateliers</text>
            <text x="760" y="295" textAnchor="middle" fill="#2D6A4F" fontSize="8" fontWeight="bold">Ik3 max ~ 22,7 kA</text>
          </g>

          {/* Bottom Banner: Data & Supervisory Layer (Supervision, Power BI, Python, SCADA) */}
          <g transform="translate(20, 340)">
            <rect x="0" y="0" width="820" height="30" rx="6" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
            <text x="20" y="20" fill="#0F172A" fontSize="9.5" fontWeight="bold">
              SUPERVISION GLOBALE &amp; ANALYSE DE DONNÉES (SCADA · Power BI · Python · SQL) :
            </text>
            <text x="490" y="20" fill="#475569" fontSize="9">
              Télémesures, flux d'énergie, dispatching, bilans et pilotage prédictif
            </text>
          </g>
        </svg>
      </div>

      {/* Step Detail Cards below diagram */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((st, sIdx) => {
          const isSelected = activeStep === sIdx;
          return (
            <div
              key={sIdx}
              onClick={() => setActiveStep(sIdx)}
              className={`p-3 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white border-[#1A402B] shadow-sm ring-1 ring-[#1A402B]'
                  : 'bg-white/70 border-[#DFE3D9] hover:bg-white hover:border-[#94A3B8]'
              }`}
            >
              <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-[#F0F2EB]">
                <span className="text-[10px] font-mono-tech font-bold text-[#143823] truncate">
                  {st.title.split(' ')[1]}
                </span>
                <span className="text-[9.5px] font-mono-tech font-bold px-1.5 py-0.5 rounded bg-[#FAF9F5] border border-[#E2E6DD] text-[#2D6A4F]">
                  {st.voltage}
                </span>
              </div>
              <p className="text-[10.5px] text-[#475569] leading-snug line-clamp-2">
                {st.desc}
              </p>
              <div className="mt-2 pt-2 border-t border-[#F0F2EB] flex flex-wrap gap-1">
                {st.kpis.map((k, kIdx) => (
                  <span
                    key={kIdx}
                    className="text-[9px] font-mono-tech px-1.5 py-0.5 bg-[#FAF9F5] text-[#334155] rounded border border-[#DFE3D9]"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
