import React, { useState } from 'react';
import { Building2, X, HelpCircle, TrendingDown, Clock, ShieldAlert, Image as ImageIcon, GitFork } from 'lucide-react';

interface BuildingAuditProps {
  className?: string;
  activeView?: 'schematic' | 'photo';
  onToggleView?: (view: 'schematic' | 'photo') => void;
}

export function BuildingAuditSvg({ className = '', activeView = 'photo', onToggleView }: BuildingAuditProps) {
  const [selectedFloor, setSelectedFloor] = useState<'cvc' | 'eclairage' | 'bureautique' | null>('cvc');

  return (
    <div className={`relative bg-[#FBFBF9] rounded-2xl border border-[#DFE3D9] p-4 sm:p-6 text-[#19231E] shadow-xs ${className}`}>
      {/* Header matching Image 4 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#E5E9E0] gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A402B]"></span>
            <h4 className="font-mono-tech font-bold text-sm sm:text-base text-[#143823] tracking-wide uppercase">
              BILAN ÉNERGÉTIQUE BÂTIMENT · RÉPARTITION PAR POSTES
            </h4>
          </div>
          <p className="text-xs text-[#64748B] font-mono-tech mt-0.5">
            Analyse des consommations et leviers d'optimisation · Méthode d'audit · kWh/m²·an
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono-tech text-[#64748B]">
            <span>Surface : 5 420 m²</span>
            <span className="text-[#CBD5E1]" aria-hidden="true">·</span>
            <span>Th-BCE 2020</span>
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
        {/* Left: Indicateurs Clés (Matching Image 7) */}
        <div className="lg:col-span-3 space-y-3 font-mono-tech">
          <div className="bg-white rounded-xl border border-[#DFE3D9] p-3.5 shadow-2xs space-y-3">
            <div className="text-[11px] font-bold text-[#475569] uppercase tracking-wider">
              INDICATEURS CLÉS
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6]">
                <div className="text-[10px] text-[#64748B]">Consommation annuelle</div>
                <div className="text-sm font-bold text-[#D97706] mt-0.5">245 kWh/m²·an</div>
              </div>

              <div className="p-2.5 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6]">
                <div className="text-[10px] text-[#64748B]">Émissions GES (énergie)</div>
                <div className="text-sm font-bold text-[#143823] mt-0.5">32 kgCO₂/m²·an</div>
              </div>

              <div className="p-2.5 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6]">
                <div className="text-[10px] text-[#64748B]">Surface de référence</div>
                <div className="text-sm font-bold text-[#143823] mt-0.5">5 420 m²</div>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Architectural Cross Section (Matching Image 7) */}
        <div className="lg:col-span-5 relative bg-white rounded-xl border border-[#DFE3D9] p-4 flex flex-col items-center justify-center min-h-[340px]">
          <div className="w-full space-y-2 font-mono-tech text-xs">
            {/* Roof */}
            <div className="p-2.5 bg-[#FAF9F5] rounded-t-xl border border-[#DFE3D9] text-center text-[11px] text-[#64748B]">
              <span className="font-bold text-[#143823]">Toiture :</span> Isolation thermique &amp; Panneaux PV
            </div>

            {/* R+2: Bureaux & Moteurs */}
            <div
              onClick={() => setSelectedFloor('bureautique')}
              className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                selectedFloor === 'bureautique'
                  ? 'bg-[#EBF3ED] border-[#2D6A4F] shadow-xs'
                  : 'bg-[#FAF9F5] border-[#DFE3D9] hover:bg-[#F2F5EF]'
              }`}
            >
              <div>
                <span className="font-bold text-[#143823] text-xs">R+2 · Bureaux &amp; Postes informatiques</span>
                <div className="text-[10px] text-[#64748B]">Bureautique, serveurs &amp; auxiliaires</div>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-[#143823] block">32 %</span>
                <span className="text-[10px] text-[#64748B]">79 kWh/m²·an</span>
              </div>
            </div>

            {/* R+1: Éclairage */}
            <div
              onClick={() => setSelectedFloor('eclairage')}
              className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                selectedFloor === 'eclairage'
                  ? 'bg-[#FEF3C7] border-[#D97706] shadow-xs'
                  : 'bg-[#FAF9F5] border-[#DFE3D9] hover:bg-[#F2F5EF]'
              }`}
            >
              <div>
                <span className="font-bold text-[#143823] text-xs">R+1 · Bureaux &amp; Éclairage</span>
                <div className="text-[10px] text-[#64748B]">Luminaires tertiaires</div>
              </div>
              <div className="text-right">
                <span className="text-sm font-bold text-[#D97706] block">16 %</span>
                <span className="text-[10px] text-[#64748B]">39 kWh/m²·an</span>
              </div>
            </div>

            {/* RDC: CVC & Chauffage (Main focus) */}
            <div
              onClick={() => setSelectedFloor('cvc')}
              className={`p-3.5 rounded-lg border-2 transition-all cursor-pointer flex items-center justify-between ${
                selectedFloor === 'cvc'
                  ? 'bg-[#FEF2F2] border-[#EF4444] shadow-sm'
                  : 'bg-[#FAF9F5] border-[#DFE3D9]'
              }`}
            >
              <div>
                <span className="font-bold text-[#991B1B] text-xs block">RDC · Chauffage &amp; CVC</span>
                <div className="text-[10px] text-[#64748B]">Centrale de traitement d’air, chaudière &amp; PAC</div>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-[#DC2626] block">52 %</span>
                <span className="text-[10px] text-[#64748B]">127 kWh/m²·an</span>
              </div>
            </div>

            {/* Sous-sol */}
            <div className="p-2.5 bg-[#FAF9F5] rounded-b-xl border border-[#DFE3D9] text-center text-[11px] text-[#64748B]">
              <span className="font-bold text-[#143823]">Sous-sol :</span> Parking, ventilation &amp; pompes
            </div>
          </div>

          {/* Interactive Modal Popup (Matching Image 7: "Chauffage & CVC") */}
          {selectedFloor === 'cvc' && (
            <div className="mt-3 w-full bg-white rounded-xl border border-[#DFE3D9] p-3 shadow-md text-xs font-mono-tech animate-fade-in">
              <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-[#EAEFE6]">
                <span className="font-bold text-[#DC2626]">Chauffage &amp; CVC (Poste critique)</span>
                <button onClick={() => setSelectedFloor(null)} className="text-[#94A3B8] hover:text-[#19231E]">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="p-1.5 bg-[#FAF9F5] rounded border border-[#EAEFE6]">
                  <span className="text-[#64748B] block">Plage horaire</span>
                  <span className="font-bold text-[#143823]">6h – 22h</span>
                </div>
                <div className="p-1.5 bg-[#FAF9F5] rounded border border-[#EAEFE6]">
                  <span className="text-[#64748B] block">Intermittence</span>
                  <span className="font-bold text-[#DC2626]">Continue (100%)</span>
                </div>
                <div className="p-1.5 bg-[#FAF9F5] rounded border border-[#EAEFE6]">
                  <span className="text-[#64748B] block">Dérive horaire</span>
                  <span className="font-bold text-[#D97706]">+ 1,8 °C</span>
                </div>
                <div className="p-1.5 bg-[#FAF9F5] rounded border border-[#EAEFE6]">
                  <span className="text-[#64748B] block">Part de facture</span>
                  <span className="font-bold text-[#DC2626]">52 %</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Diagnostic & Scénario optimisé (Matching Image 7) */}
        <div className="lg:col-span-4 space-y-3 font-mono-tech text-xs">
          {/* Diagnostic Initial */}
          <div className="bg-white rounded-xl border border-[#DFE3D9] p-3.5 shadow-2xs space-y-2">
            <div className="flex items-center gap-1.5 text-[#DC2626] font-bold text-[11px] uppercase">
              <ShieldAlert className="w-4 h-4" />
              <span>DIAGNOSTIC INITIAL</span>
            </div>
            <div className="text-xs font-bold text-[#143823]">
              Poste CVC &gt; 50 %
            </div>
            <p className="text-[10px] text-[#475569] leading-relaxed">
              Le chauffage et la climatisation représentent plus de la moitié des consommations du bâtiment.
            </p>
            <div className="pt-1.5 border-t border-[#EAEFE6] text-[10px] flex justify-between">
              <span className="text-[#64748B]">Bâtiment étudié :</span>
              <strong className="text-[#DC2626]">127 kWh/m²·an</strong>
            </div>
            <div className="text-[10px] flex justify-between">
              <span className="text-[#64748B]">Référence tertiaire :</span>
              <strong className="text-[#143823]">70 kWh/m²·an</strong>
            </div>
          </div>

          {/* Talon nocturne */}
          <div className="bg-white rounded-xl border border-[#DFE3D9] p-3.5 shadow-2xs space-y-2">
            <div className="flex items-center gap-1.5 text-[#D97706] font-bold text-[11px] uppercase">
              <Clock className="w-4 h-4" />
              <span>TALON NOCTURNE</span>
            </div>
            <div className="text-xs font-bold text-[#143823]">
              ~ 18 % consommé hors présence
            </div>
            <p className="text-[10px] text-[#475569] leading-relaxed">
              Consommations inutiles la nuit et le week-end (veilles, auxiliaires et ventilation continue).
            </p>
          </div>

          {/* Scénario optimisé */}
          <div className="bg-white rounded-xl border border-[#DFE3D9] p-3.5 shadow-2xs space-y-2">
            <div className="flex items-center gap-1.5 text-[#2D6A4F] font-bold text-[11px] uppercase">
              <TrendingDown className="w-4 h-4" />
              <span>SCÉNARIO OPTIMISÉ</span>
            </div>
            <div className="text-xs font-bold text-[#2D6A4F]">
              - 25 % à - 35 % d'économies
            </div>
            <p className="text-[10px] text-[#475569] leading-relaxed">
              Régulation CVC, LED asservies et coupure automatique : réduction de 245 à 160 kWh/m²·an.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
