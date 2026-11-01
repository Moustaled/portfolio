import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, Zap, Activity, ShieldCheck, X, Image as ImageIcon, GitFork } from 'lucide-react';

interface NetworkDiagramProps {
  className?: string;
  activeView?: 'schematic' | 'photo';
  onToggleView?: (view: 'schematic' | 'photo') => void;
}

export function NetworkDiagramSvg({ className = '', activeView = 'photo', onToggleView }: NetworkDiagramProps) {
  const [selectedFeeder, setSelectedFeeder] = useState<'cvc' | 'moteurs' | 'eclairage' | 'chargeurs' | null>('cvc');
  const [activeHover, setActiveHover] = useState<string | null>(null);

  return (
    <div className={`relative bg-[#FBFBF9] rounded-2xl border border-[#DFE3D9] p-4 sm:p-6 text-[#19231E] shadow-xs ${className}`}>
      {/* Blueprint Header matching Image 1 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#E5E9E0] gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A402B]"></span>
            <h4 className="font-mono-tech font-bold text-sm sm:text-base text-[#143823] tracking-wide uppercase">
              SCHÉMA UNIFILAIRE · TGBT 400 V
            </h4>
          </div>
          <p className="text-xs text-[#64748B] font-mono-tech mt-0.5">
            Alimentation, protection et distribution des principaux départs
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono-tech text-[#64748B]">
            <span>NF C 15-100</span>
            <span className="text-[#CBD5E1]" aria-hidden="true">·</span>
            <span>Calculs selon IEC 60909</span>
          </div>

          {onToggleView && (
            <div className="flex items-center p-0.5 bg-[#EAEFE6] rounded-lg border border-[#DFE3D9]">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onToggleView('photo'); }}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                  activeView === 'photo'
                    ? 'bg-white text-[#143823] shadow-xs'
                    : 'text-[#64748B] hover:text-[#143823]'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Rendu</span>
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); onToggleView('schematic'); }}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono-tech font-bold transition-all cursor-pointer ${
                  activeView === 'schematic'
                    ? 'bg-[#143823] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#143823]'
                }`}
              >
                <GitFork className="w-3.5 h-3.5" />
                <span>Schéma</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* Left Side: Indicateurs Réseau (Matching Image 4) */}
        <div className="lg:col-span-3 space-y-3 font-mono-tech">
          <div className="bg-white rounded-xl border border-[#E2E6DD] p-3.5 shadow-2xs space-y-3">
            <div className="text-[11px] font-bold text-[#475569] uppercase tracking-wider flex items-center justify-between">
              <span>INDICATEURS RÉSEAU</span>
            </div>

            {/* Metric 1 */}
            <div className="p-2.5 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#EBF3ED] flex items-center justify-center text-[#2D6A4F]">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#64748B]">ΔU global</div>
                  <div className="text-sm font-bold text-[#143823]">&lt; 3 %</div>
                </div>
              </div>
              <HelpCircle className="w-3.5 h-3.5 text-[#94A3B8]" />
            </div>

            {/* Metric 2 */}
            <div className="p-2.5 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#EBF3ED] flex items-center justify-center text-[#2D6A4F]">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#64748B]">Ik3 au TGBT</div>
                  <div className="text-sm font-bold text-[#143823]">25 kA</div>
                </div>
              </div>
              <HelpCircle className="w-3.5 h-3.5 text-[#94A3B8]" />
            </div>

            {/* Metric 3 */}
            <div className="p-2.5 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#EBF3ED] flex items-center justify-center text-[#2D6A4F]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#64748B]">Sélectivité</div>
                  <div className="text-xs font-bold text-[#2D6A4F]">Conforme</div>
                </div>
              </div>
              <HelpCircle className="w-3.5 h-3.5 text-[#94A3B8]" />
            </div>
          </div>
        </div>

        {/* Center & Right: Main Single-Line Diagram */}
        <div className="lg:col-span-9 relative bg-white rounded-xl border border-[#DFE3D9] p-4 overflow-hidden">
          <svg
            viewBox="0 0 680 430"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto select-none font-mono-tech"
          >
            {/* Grid pattern */}
            <defs>
              <pattern id="diag-grid-v2" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F1F4EE" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="680" height="430" fill="url(#diag-grid-v2)" rx="6" />

            {/* --- HTA SOURCE (Pylon icon) --- */}
            <g transform="translate(290, 15)">
              <rect x="0" y="0" width="38" height="38" rx="4" fill="#F4F8F5" stroke="#1A402B" strokeWidth="1.5" />
              {/* Electric Pylon SVG */}
              <path d="M 19 6 L 12 32 M 19 6 L 26 32 M 10 18 L 28 18 M 8 26 L 30 26" stroke="#1A402B" strokeWidth="1.2" strokeLinecap="round" />
              <text x="50" y="16" fontSize="11" fontWeight="700" fill="#143823">
                RÉSEAU HTA 20 kV
              </text>
              <text x="50" y="28" fontSize="8.5" fill="#64748B">
                Sk = 500 MVA · U = 20 kV
              </text>
            </g>

            {/* Connecting line */}
            <line x1="309" y1="53" x2="309" y2="78" stroke="#1A402B" strokeWidth="2" />
            <circle cx="309" cy="78" r="3" fill="#2D6A4F" />

            {/* --- TRANSFORMER 630 kVA --- */}
            <g transform="translate(293, 85)">
              <circle cx="16" cy="14" r="14" fill="#FFFFFF" stroke="#1A402B" strokeWidth="1.8" />
              <circle cx="16" cy="30" r="14" fill="#FFFFFF" stroke="#1A402B" strokeWidth="1.8" />
              <text x="48" y="20" fontSize="11" fontWeight="700" fill="#143823">
                Transfo HTA / BT 630 kVA
              </text>
              <text x="48" y="32" fontSize="8.5" fill="#64748B">
                20 kV / 400 V · Dyn11 · Uk = 6%
              </text>
            </g>

            {/* Connecting line */}
            <line x1="309" y1="129" x2="309" y2="150" stroke="#1A402B" strokeWidth="2" />
            <circle cx="309" cy="150" r="3" fill="#2D6A4F" />

            {/* --- DISJONCTEUR TGBT Q0 --- */}
            <g transform="translate(295, 155)">
              <rect x="0" y="0" width="28" height="24" rx="3" fill="#143823" stroke="#143823" strokeWidth="1" />
              <path d="M 6 5 L 22 19 M 22 5 L 6 19" stroke="#FFFFFF" strokeWidth="1.6" />
              <text x="45" y="11" fontSize="11" fontWeight="700" fill="#143823">
                Disjoncteur TGBT Q0
              </text>
              <text x="45" y="22" fontSize="8.5" fill="#64748B">
                In = 1 250 A · 4P · Icu = 50 kA (415 V)
              </text>
            </g>

            {/* Line to main busbar */}
            <line x1="309" y1="179" x2="309" y2="205" stroke="#143823" strokeWidth="3" />

            {/* --- MAIN BUSBAR (JEU DE BARRES 400 V) --- */}
            <g>
              <rect x="40" y="205" width="600" height="7" rx="3.5" fill="#143823" />
              {/* Busbar Tag Left */}
              <rect x="40" y="188" width="95" height="15" rx="2" fill="#143823" />
              <text x="87" y="199" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#FFFFFF">
                TGBT 400 V · In = 1 250 A
              </text>
              {/* Copper busbar spec tag right */}
              <rect x="520" y="168" width="120" height="24" rx="3" fill="#FAF9F5" stroke="#DFE3D9" strokeWidth="0.8" />
              <text x="580" y="178" textAnchor="middle" fontSize="7.5" fontWeight="600" fill="#475569">
                Jeu de barres cuivre
              </text>
              <text x="580" y="188" textAnchor="middle" fontSize="7" fill="#64748B">
                In = 1 250 A · Icw = 50 kA / 1 s
              </text>
            </g>

            {/* --- FEEDER 1: Ateliers moteurs --- */}
            <g
              transform="translate(130, 212)"
              className="cursor-pointer"
              onClick={() => setSelectedFeeder('moteurs')}
            >
              <circle cx="0" cy="0" r="3.5" fill="#2D6A4F" />
              <line x1="0" y1="0" x2="0" y2="28" stroke="#1A402B" strokeWidth="1.6" />
              {/* Breaker Q1 */}
              <rect x="-11" y="28" width="22" height="18" rx="2" fill="#FFFFFF" stroke="#1A402B" strokeWidth="1.2" />
              <path d="M -6 32 L 6 42 M 6 32 L -6 42" stroke="#1A402B" strokeWidth="1.2" />
              <text x="16" y="36" fontSize="7.5" fontWeight="700" fill="#143823">Q1</text>
              <text x="16" y="44" fontSize="6.5" fill="#64748B">In=160A · Icu=36kA</text>
              {/* Cable line */}
              <line x1="0" y1="46" x2="0" y2="88" stroke="#1A402B" strokeWidth="1.6" />
              <text x="-4" y="68" textAnchor="end" fontSize="7" fill="#475569">3G70 mm² · 35m</text>
              {/* Load Motor box */}
              <rect x="-42" y="88" width="84" height="64" rx="6" fill="#FFFFFF" stroke="#1A402B" strokeWidth="1.2" />
              <circle cx="0" cy="106" r="10" stroke="#1A402B" strokeWidth="1.2" fill="#FAF9F5" />
              <text x="0" y="110" textAnchor="middle" fontSize="9" fontWeight="700" fill="#1A402B">M</text>
              <text x="0" y="126" textAnchor="middle" fontSize="8" fontWeight="700" fill="#143823">Ateliers moteurs</text>
              <text x="0" y="136" textAnchor="middle" fontSize="6.8" fill="#64748B">P = 90 kW · Ib = 125 A</text>
              <text x="0" y="145" textAnchor="middle" fontSize="6.8" fill="#64748B">Cos φ = 0,85</text>
            </g>

            {/* --- FEEDER 2: CVC (Highlighted as in Image 4) --- */}
            <g
              transform="translate(280, 212)"
              className="cursor-pointer"
              onClick={() => setSelectedFeeder('cvc')}
            >
              <circle cx="0" cy="0" r="3.5" fill="#D97706" />
              <line x1="0" y1="0" x2="0" y2="28" stroke="#D97706" strokeWidth="1.8" />
              {/* Breaker Q2 */}
              <rect x="-11" y="28" width="22" height="18" rx="2" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
              <path d="M -6 32 L 6 42 M 6 32 L -6 42" stroke="#D97706" strokeWidth="1.5" />
              <text x="16" y="36" fontSize="7.5" fontWeight="700" fill="#D97706">Q2</text>
              <text x="16" y="44" fontSize="6.5" fill="#64748B">In=125A · Icu=36kA</text>
              {/* Cable line */}
              <line x1="0" y1="46" x2="0" y2="88" stroke="#D97706" strokeWidth="1.8" />
              <text x="-4" y="68" textAnchor="end" fontSize="7" fontWeight="600" fill="#D97706">5G35 mm² · 28m</text>
              {/* Load CVC box */}
              <rect x="-38" y="88" width="76" height="64" rx="6" fill="#F4F8F5" stroke="#1A402B" strokeWidth="1.8" />
              <circle cx="0" cy="106" r="10" stroke="#1A402B" strokeWidth="1.2" fill="#EBF3ED" />
              {/* Fan icon */}
              <path d="M -4 106 Q 0 100 4 106 M 0 102 L 0 110" stroke="#1A402B" strokeWidth="1.2" />
              <text x="0" y="126" textAnchor="middle" fontSize="8" fontWeight="700" fill="#143823">CVC</text>
              <text x="0" y="136" textAnchor="middle" fontSize="6.8" fill="#64748B">P = 45 kW · Ib = 68 A</text>
              <text x="0" y="145" textAnchor="middle" fontSize="6.8" fill="#64748B">Cos φ = 0,90</text>
            </g>

            {/* --- FEEDER 3: Éclairage tertiaire --- */}
            <g
              transform="translate(430, 212)"
              className="cursor-pointer"
              onClick={() => setSelectedFeeder('eclairage')}
            >
              <circle cx="0" cy="0" r="3.5" fill="#2D6A4F" />
              <line x1="0" y1="0" x2="0" y2="28" stroke="#1A402B" strokeWidth="1.6" />
              <rect x="-11" y="28" width="22" height="18" rx="2" fill="#FFFFFF" stroke="#1A402B" strokeWidth="1.2" />
              <path d="M -6 32 L 6 42 M 6 32 L -6 42" stroke="#1A402B" strokeWidth="1.2" />
              <text x="16" y="36" fontSize="7.5" fontWeight="700" fill="#143823">Q3</text>
              <text x="16" y="44" fontSize="6.5" fill="#64748B">In=63A · Icu=25kA</text>
              <line x1="0" y1="46" x2="0" y2="88" stroke="#1A402B" strokeWidth="1.6" />
              <text x="-4" y="68" textAnchor="end" fontSize="7" fill="#475569">3G16 mm² · 45m</text>
              <rect x="-40" y="88" width="80" height="64" rx="6" fill="#FFFFFF" stroke="#1A402B" strokeWidth="1.2" />
              <circle cx="0" cy="105" r="9" stroke="#1A402B" strokeWidth="1.2" fill="#FAF9F5" />
              <path d="M -4 105 L 4 105 M 0 101 L 0 109" stroke="#1A402B" strokeWidth="1.2" />
              <text x="0" y="126" textAnchor="middle" fontSize="8" fontWeight="700" fill="#143823">Éclairage tertiaire</text>
              <text x="0" y="136" textAnchor="middle" fontSize="6.8" fill="#64748B">P = 18 kW · Ib = 28 A</text>
              <text x="0" y="145" textAnchor="middle" fontSize="6.8" fill="#64748B">Cos φ = 0,95</text>
            </g>

            {/* --- FEEDER 4: Chargeurs & réserve --- */}
            <g
              transform="translate(580, 212)"
              className="cursor-pointer"
              onClick={() => setSelectedFeeder('chargeurs')}
            >
              <circle cx="0" cy="0" r="3.5" fill="#2D6A4F" />
              <line x1="0" y1="0" x2="0" y2="28" stroke="#1A402B" strokeWidth="1.6" />
              <rect x="-11" y="28" width="22" height="18" rx="2" fill="#FFFFFF" stroke="#1A402B" strokeWidth="1.2" />
              <path d="M -6 32 L 6 42 M 6 32 L -6 42" stroke="#1A402B" strokeWidth="1.2" />
              <text x="16" y="36" fontSize="7.5" fontWeight="700" fill="#143823">Q4</text>
              <text x="16" y="44" fontSize="6.5" fill="#64748B">In=100A · Icu=36kA</text>
              <line x1="0" y1="46" x2="0" y2="88" stroke="#1A402B" strokeWidth="1.6" />
              <text x="-4" y="68" textAnchor="end" fontSize="7" fill="#475569">5G25 mm² · 60m</text>
              <rect x="-42" y="88" width="84" height="64" rx="6" fill="#FFFFFF" stroke="#1A402B" strokeWidth="1.2" />
              <rect x="-12" y="98" width="24" height="16" rx="2" stroke="#1A402B" strokeWidth="1.2" fill="#FAF9F5" />
              <circle cx="-5" cy="106" r="2" fill="#1A402B" />
              <circle cx="5" cy="106" r="2" fill="#1A402B" />
              <text x="0" y="126" textAnchor="middle" fontSize="8" fontWeight="700" fill="#143823">Chargeurs & réserve</text>
              <text x="0" y="136" textAnchor="middle" fontSize="6.8" fill="#64748B">P = 36 kW · Ib = 55 A</text>
              <text x="0" y="145" textAnchor="middle" fontSize="6.8" fill="#64748B">Cos φ = 0,90</text>
            </g>
          </svg>

          {/* Interactive Modal Popup (Matching Image 4: "Départ CVC") */}
          {selectedFeeder === 'cvc' && (
            <div className="absolute top-[180px] left-[42%] sm:left-[38%] -translate-x-1/2 z-20 w-64 bg-white/95 backdrop-blur-md rounded-xl border border-[#DFE3D9] p-3.5 shadow-xl text-xs font-mono-tech animate-fade-in">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#EAEFE6]">
                <span className="font-bold text-[#143823]">Départ CVC</span>
                <button
                  onClick={() => setSelectedFeeder(null)}
                  className="p-1 text-[#94A3B8] hover:text-[#19231E]"
                  aria-label="Fermer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Disjoncteur</span>
                  <span className="font-bold text-[#143823]">Q2 — 125 A (4P)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Câble</span>
                  <span className="font-semibold text-[#143823]">5G35 mm² (Cu)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Courant d’emploi Ib</span>
                  <span className="font-bold text-[#143823]">68 A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Longueur</span>
                  <span className="font-semibold text-[#143823]">28 m</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748B]">Chute de tension ΔU</span>
                  <span className="font-bold text-[#2D6A4F]">1,8 %</span>
                </div>
              </div>

              <div className="mt-2.5 pt-2 border-t border-[#EAEFE6] flex items-center gap-1.5 text-[11px] font-bold text-[#2D6A4F]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Conforme (ΔU &lt; 3 %)</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Blueprint Footer Bar (Matching Image 4) */}
      <div className="mt-4 pt-3 border-t border-[#E5E9E0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono-tech text-[#64748B]">
        <div className="flex items-center gap-2 text-[#2D6A4F]">
          <span className="w-2 h-2 rounded-full bg-[#2D6A4F]"></span>
          <span>Cliquez sur un départ (CVC, Moteurs, Éclairage) pour inspecter les paramètres calculés</span>
        </div>
        <div className="flex items-center gap-3">
          <span>Calculs : NF C 15-100</span>
          <span className="text-[#CBD5E1]" aria-hidden="true">|</span>
          <span>Méthode Ik : IEC 60909</span>
          <span className="text-[#CBD5E1]" aria-hidden="true">|</span>
          <span>ΔU max : 3 %</span>
        </div>
      </div>
    </div>
  );
}
