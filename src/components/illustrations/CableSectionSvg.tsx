import React, { useState } from 'react';
import { HelpCircle, Check, X, Image as ImageIcon, GitFork } from 'lucide-react';

interface CableSectionProps {
  className?: string;
  activeView?: 'schematic' | 'photo';
  onToggleView?: (view: 'schematic' | 'photo') => void;
}

export function CableSectionSvg({ className = '', activeView = 'photo', onToggleView }: CableSectionProps) {
  const [selectedConductor, setSelectedConductor] = useState<'l1' | 'l2' | 'l3' | 'n' | null>('l1');

  return (
    <div className={`relative bg-[#FBFBF9] rounded-2xl border border-[#DFE3D9] p-4 sm:p-6 text-[#19231E] shadow-xs ${className}`}>
      {/* Header matching Image 2 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#E5E9E0] gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A402B]"></span>
            <h4 className="font-mono-tech font-bold text-sm sm:text-base text-[#143823] tracking-wide uppercase">
              COUPE CÂBLE BT · U-1000 R2V
            </h4>
          </div>
          <p className="text-xs text-[#64748B] font-mono-tech mt-0.5">
            Dimensionnement de câbles électriques BT
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono-tech text-[#64748B]">
            <span>Norme NF C 15-100</span>
            <span className="text-[#CBD5E1]" aria-hidden="true">·</span>
            <span>Câbles d’énergie 0,6/1 kV</span>
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
        {/* Left Column: Caractéristiques Câble (Image 5) */}
        <div className="lg:col-span-3 space-y-3 font-mono-tech">
          <div className="bg-white rounded-xl border border-[#DFE3D9] p-3.5 shadow-2xs space-y-3">
            <div className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">
              CARACTÉRISTIQUES CÂBLE
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6]">
                <div className="text-[10px] text-[#64748B]">Type</div>
                <div className="font-bold text-[#143823]">U-1000 R2V</div>
              </div>

              <div className="p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6]">
                <div className="text-[10px] text-[#64748B]">Tension assignée</div>
                <div className="font-bold text-[#143823]">0,6 / 1 kV</div>
              </div>

              <div className="p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6]">
                <div className="text-[10px] text-[#64748B]">Conducteurs</div>
                <div className="font-bold text-[#143823]">Cuivre massif ou câblé</div>
              </div>

              <div className="p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6]">
                <div className="text-[10px] text-[#64748B]">Isolation</div>
                <div className="font-bold text-[#143823]">PR (XLPE) 90 °C</div>
              </div>

              <div className="p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6]">
                <div className="text-[10px] text-[#64748B]">Gaine extérieure</div>
                <div className="font-bold text-[#143823]">PVC noir résistant UV</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Cable Cross-Section Drawing + Interactive Details (Image 5) */}
        <div className="lg:col-span-5 relative bg-white rounded-xl border border-[#DFE3D9] p-4 flex flex-col items-center justify-center min-h-[300px]">
          <svg
            viewBox="0 0 320 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[280px] h-auto select-none font-mono-tech"
          >
            {/* Outer Sheath (Gaine PVC Noire) */}
            <circle cx="160" cy="150" r="118" fill="#1C241F" stroke="#0E1410" strokeWidth="4" />
            <circle cx="160" cy="150" r="102" fill="#D3D9CF" stroke="#B1BBAE" strokeWidth="2" strokeDasharray="3 3" />

            {/* Central filler core */}
            <circle cx="160" cy="150" r="14" fill="#9AA798" />

            {/* CONDUCTOR L1 (Top-Left, Brown) */}
            <g className="cursor-pointer" onClick={() => setSelectedConductor('l1')}>
              <circle cx="124" cy="114" r="32" fill="#78350F" stroke="#451A03" strokeWidth="2" />
              <circle cx="124" cy="114" r="22" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              {/* Copper Strands */}
              <circle cx="124" cy="114" r="6" fill="#FBBF24" />
              <circle cx="115" cy="108" r="4.5" fill="#FBBF24" />
              <circle cx="133" cy="108" r="4.5" fill="#FBBF24" />
              <circle cx="115" cy="120" r="4.5" fill="#FBBF24" />
              <circle cx="133" cy="120" r="4.5" fill="#FBBF24" />
              <text x="124" y="117" textAnchor="middle" fontSize="10" fontWeight="900" fill="#451A03">L1</text>
            </g>

            {/* CONDUCTOR L2 (Top-Right, Black) */}
            <g className="cursor-pointer" onClick={() => setSelectedConductor('l2')}>
              <circle cx="196" cy="114" r="32" fill="#262626" stroke="#0A0A0A" strokeWidth="2" />
              <circle cx="196" cy="114" r="22" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              <circle cx="196" cy="114" r="6" fill="#FBBF24" />
              <circle cx="187" cy="108" r="4.5" fill="#FBBF24" />
              <circle cx="205" cy="108" r="4.5" fill="#FBBF24" />
              <circle cx="187" cy="120" r="4.5" fill="#FBBF24" />
              <circle cx="205" cy="120" r="4.5" fill="#FBBF24" />
              <text x="196" y="117" textAnchor="middle" fontSize="10" fontWeight="900" fill="#FFFFFF">L2</text>
            </g>

            {/* CONDUCTOR L3 (Bottom-Left, Grey) */}
            <g className="cursor-pointer" onClick={() => setSelectedConductor('l3')}>
              <circle cx="124" cy="186" r="32" fill="#6B7280" stroke="#374151" strokeWidth="2" />
              <circle cx="124" cy="186" r="22" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              <circle cx="124" cy="186" r="6" fill="#FBBF24" />
              <circle cx="115" cy="180" r="4.5" fill="#FBBF24" />
              <circle cx="133" cy="180" r="4.5" fill="#FBBF24" />
              <circle cx="115" cy="192" r="4.5" fill="#FBBF24" />
              <circle cx="133" cy="192" r="4.5" fill="#FBBF24" />
              <text x="124" y="189" textAnchor="middle" fontSize="10" fontWeight="900" fill="#111827">L3</text>
            </g>

            {/* CONDUCTOR N (Bottom-Right, Blue) */}
            <g className="cursor-pointer" onClick={() => setSelectedConductor('n')}>
              <circle cx="196" cy="186" r="32" fill="#1D4ED8" stroke="#1E3A8A" strokeWidth="2" />
              <circle cx="196" cy="186" r="22" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
              <circle cx="196" cy="186" r="6" fill="#FBBF24" />
              <circle cx="187" cy="180" r="4.5" fill="#FBBF24" />
              <circle cx="205" cy="180" r="4.5" fill="#FBBF24" />
              <circle cx="187" cy="192" r="4.5" fill="#FBBF24" />
              <circle cx="205" cy="192" r="4.5" fill="#FBBF24" />
              <text x="196" y="189" textAnchor="middle" fontSize="10" fontWeight="900" fill="#FFFFFF">N</text>
            </g>

            {/* Labels and callout lines */}
            <line x1="124" y1="82" x2="80" y2="40" stroke="#16A34A" strokeWidth="1.5" />
            <circle cx="124" cy="82" r="3" fill="#16A34A" />
            <text x="80" y="34" fontSize="9" fontWeight="700" fill="#15803D">Conducteur L1</text>

            <line x1="42" y1="150" x2="10" y2="150" stroke="#16A34A" strokeWidth="1.5" />
            <circle cx="42" cy="150" r="3" fill="#16A34A" />
            <text x="8" y="144" fontSize="8" fontWeight="600" fill="#475569">Gaine PVC</text>

            <line x1="228" y1="186" x2="270" y2="210" stroke="#16A34A" strokeWidth="1.5" />
            <circle cx="228" cy="186" r="3" fill="#16A34A" />
            <text x="270" y="222" fontSize="9" fontWeight="700" fill="#15803D">Neutre N</text>

            <line x1="196" y1="150" x2="260" y2="150" stroke="#16A34A" strokeWidth="1.5" />
            <circle cx="196" cy="150" r="3" fill="#16A34A" />
            <text x="260" y="146" fontSize="8" fontWeight="600" fill="#475569">Remplissage</text>
          </svg>

          {/* Interactive Modal Popup on selected conductor (Matching Image 5) */}
          {selectedConductor === 'l1' && (
            <div className="absolute top-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl border border-[#DFE3D9] p-3 shadow-lg text-xs font-mono-tech z-10 animate-fade-in">
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#EAEFE6]">
                <span className="font-bold text-[#143823] text-[11px]">Conducteur L1 (sélectionné)</span>
                <button onClick={() => setSelectedConductor(null)} className="p-0.5 text-[#94A3B8] hover:text-[#19231E]">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-1.5 text-[10px]">
                <div className="p-1.5 bg-[#FAF9F5] rounded border border-[#EAEFE6]">
                  <span className="font-bold text-[#143823] block">Âme cuivre</span>
                  <span className="text-[#64748B]">Conducteur classe 1 ou 2 selon NF EN 60228</span>
                </div>
                <div className="p-1.5 bg-[#FAF9F5] rounded border border-[#EAEFE6]">
                  <span className="font-bold text-[#143823] block">Isolation PR (XLPE)</span>
                  <span className="text-[#64748B]">Identique pour L1, L2, L3, N · Repérage par couleur</span>
                </div>
                <div className="p-1.5 bg-[#FAF9F5] rounded border border-[#EAEFE6]">
                  <span className="font-bold text-[#143823] block">Gaine extérieure PVC</span>
                  <span className="text-[#64748B]">Résistante aux UV et agents chimiques (U-1000 R2V)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Formulas & Sizing Rules (Image 5) */}
        <div className="lg:col-span-4 space-y-3 font-mono-tech text-xs">
          {/* Règle fondamentale */}
          <div className="bg-white rounded-xl border border-[#DFE3D9] p-3.5 shadow-2xs">
            <div className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider">
              RÈGLE FONDAMENTALE
            </div>
            <div className="text-base font-bold text-[#143823] mt-1 text-center py-1 bg-[#FAF9F5] rounded border border-[#EAEFE6]">
              Ib ≤ In ≤ Iz
            </div>
            <div className="space-y-0.5 text-[10px] text-[#475569] mt-2">
              <div><strong>Ib :</strong> Courant d’emploi du circuit (A)</div>
              <div><strong>In :</strong> Courant nominal du disjoncteur (A)</div>
              <div><strong>Iz :</strong> Courant admissible corrigé (A)</div>
            </div>
          </div>

          {/* Facteurs d'environnement */}
          <div className="bg-white rounded-xl border border-[#DFE3D9] p-3.5 shadow-2xs">
            <div className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider">
              FACTEURS D'ENVIRONNEMENT
            </div>
            <div className="text-sm font-bold text-[#2D6A4F] mt-1 text-center py-1 bg-[#FAF9F5] rounded border border-[#EAEFE6]">
              k = k1 × k2 × k3
            </div>
            <div className="space-y-0.5 text-[10px] text-[#475569] mt-2">
              <div><strong>k1 :</strong> Mode de pose (conduit, chemin..)</div>
              <div><strong>k2 :</strong> Température ambiante (ex. 30 °C)</div>
              <div><strong>k3 :</strong> Groupement de circuits jointifs</div>
            </div>
          </div>

          {/* Chute de tension */}
          <div className="bg-white rounded-xl border border-[#DFE3D9] p-3.5 shadow-2xs">
            <div className="text-[10px] text-[#64748B] font-bold uppercase tracking-wider">
              CHUTE DE TENSION EN LIGNE
            </div>
            <div className="text-xs font-bold text-[#143823] mt-1 text-center py-1 bg-[#FAF9F5] rounded border border-[#EAEFE6]">
              ΔU = b · (ρ·L/S · cosφ + λ·L · sinφ) · Ib
            </div>
            <div className="text-[10px] text-[#2D6A4F] mt-1.5 font-semibold">
              Contrainte critique sur les longueurs &gt; 50-60 m
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 3 Metric Boxes (Image 5) */}
      <div className="mt-4 pt-3 border-t border-[#E5E9E0] grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono-tech text-xs">
        <div className="p-3 bg-white rounded-xl border border-[#DFE3D9]">
          <div className="text-[10px] text-[#64748B] uppercase font-semibold">SECTION EXEMPLE</div>
          <div className="text-sm font-bold text-[#143823] mt-0.5">S = 4 mm²</div>
          <div className="text-[10px] text-[#475569] mt-0.5">Cuivre · U-1000 R2V (3P+N)</div>
        </div>

        <div className="p-3 bg-white rounded-xl border border-[#DFE3D9]">
          <div className="text-[10px] text-[#64748B] uppercase font-semibold">LONGUEUR DE LIGNE</div>
          <div className="text-sm font-bold text-[#143823] mt-0.5">L = 25 m</div>
          <div className="text-[10px] text-[#475569] mt-0.5">Aller simple · Chemin de câbles</div>
        </div>

        <div className="p-3 bg-white rounded-xl border border-[#DFE3D9]">
          <div className="text-[10px] text-[#64748B] uppercase font-semibold">COURANT ADMISSIBLE</div>
          <div className="text-sm font-bold text-[#2D6A4F] mt-0.5">Iz = 32 A</div>
          <div className="text-[10px] text-[#475569] mt-0.5">Chemin perforé · Ta = 30 °C · k = 0,91</div>
        </div>
      </div>
    </div>
  );
}
