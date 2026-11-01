import React from 'react';
import { Layers, Calendar, Sun, Wind, Activity, Settings, Database, LineChart, Lightbulb, Zap } from 'lucide-react';

export function HeroGridIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full max-w-[620px] mx-auto ${className}`}>
      {/* Paper-styled engineering blueprint container matching Image 1 */}
      <div className="bg-[#FAFBF9] rounded-2xl border border-[#DFE3D9] p-4 sm:p-6 shadow-sm text-[#19231E]">
        {/* Top Header matching Image 1 */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E5E9E0]">
          <div className="flex items-center gap-2.5">
            <span className="w-3 h-3 rounded-full bg-[#2D6A4F]"></span>
            <span className="font-mono-tech text-[#143823] font-bold text-xs sm:text-sm tracking-wide uppercase">
              SYNOPTIQUE SYSTÈME · ÉLEC × ÉNERGIE × DATA
            </span>
          </div>
          <span className="font-mono-tech text-[#64748B] text-xs font-semibold">
            ECAM-EPMI · Réf. 2024–2027
          </span>
        </div>

        {/* 3 Step Pipeline matching Image 1 */}
        <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-stretch font-mono-tech">
          {/* STEP 1: PRODUCTION ENR */}
          <div className="md:col-span-3 bg-white rounded-xl border border-[#DFE3D9] p-3.5 flex flex-col justify-between shadow-2xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1A402B] text-white text-[11px] font-bold flex items-center justify-center">
                1
              </span>
              <span className="text-xs font-bold text-[#143823] uppercase">
                PRODUCTION ENR
              </span>
            </div>

            {/* PV Item */}
            <div className="space-y-1 p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6]">
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#D97706]" />
                <span className="text-[11px] font-bold text-[#143823]">Photovoltaïque (PV)</span>
              </div>
              <div className="h-1.5 w-full bg-[#E2EDE5] rounded-full overflow-hidden">
                <div className="bg-[#2D6A4F] h-full rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            {/* Wind / Météo Item */}
            <div className="space-y-1 p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6]">
              <div className="flex items-center gap-2">
                <Wind className="w-4 h-4 text-[#2D6A4F]" />
                <span className="text-[11px] font-bold text-[#143823]">Éolien &amp; météo</span>
              </div>
              <div className="text-[9.5px] text-[#64748B]">Séries temporelles</div>
            </div>

            {/* Bottom tag */}
            <div className="p-2 bg-[#EBF3ED] rounded-lg border border-[#CDE1D3] flex items-center gap-2 text-[10px] text-[#1A402B] font-bold">
              <Activity className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Flux P(t), Q(t)</span>
            </div>
          </div>

          {/* Arrow 1 -> 2 */}
          <div className="hidden md:flex md:col-span-1 items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-[#EBF3ED] border border-[#CDE1D3] flex items-center justify-center text-[#1A402B] font-bold text-sm">
              &gt;
            </div>
          </div>

          {/* STEP 2: RÉSEAU BT & TRANSFO */}
          <div className="md:col-span-3 bg-white rounded-xl border border-[#DFE3D9] p-3.5 flex flex-col justify-between shadow-2xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1A402B] text-white text-[11px] font-bold flex items-center justify-center">
                2
              </span>
              <span className="text-xs font-bold text-[#143823] uppercase">
                RÉSEAU BT &amp; TRANSFO
              </span>
            </div>

            {/* Transformer graphic representation */}
            <div className="p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6] text-center space-y-1">
              <div className="flex justify-center items-center gap-1.5 text-[#143823]">
                <Zap className="w-4 h-4 text-[#D97706]" />
                <span className="text-[11px] font-bold">20 kV / 400 V BT</span>
              </div>
              <div className="h-1.5 w-full bg-[#E2EDE5] rounded-full overflow-hidden">
                <div className="bg-[#1A402B] h-full rounded-full" style={{ width: '65%' }}></div>
              </div>
            </div>

            {/* ΔU Badge */}
            <div className="p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6] flex items-center gap-2 text-[10px] text-[#334155]">
              <Settings className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>ΔU ≤ 3 % · NF C 15-100</span>
            </div>

            {/* Ik3 Badge */}
            <div className="p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6] flex items-center gap-2 text-[10px] text-[#334155]">
              <Database className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Ik3 = 22,7 kA · Iz ≥ In</span>
            </div>
          </div>

          {/* Arrow 2 -> 3 */}
          <div className="hidden md:flex md:col-span-1 items-center justify-center">
            <div className="w-7 h-7 rounded-full bg-[#EBF3ED] border border-[#CDE1D3] flex items-center justify-center text-[#1A402B] font-bold text-sm">
              &gt;
            </div>
          </div>

          {/* STEP 3: ANALYSE & DATA */}
          <div className="md:col-span-3 bg-white rounded-xl border border-[#DFE3D9] p-3.5 flex flex-col justify-between shadow-2xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#1A402B] text-white text-[11px] font-bold flex items-center justify-center">
                3
              </span>
              <span className="text-xs font-bold text-[#143823] uppercase">
                ANALYSE &amp; DATA
              </span>
            </div>

            {/* Python SQL KPI */}
            <div className="p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6] space-y-1">
              <div className="text-[11px] font-bold text-[#143823]">Python · SQL · KPI</div>
              <div className="text-[9.5px] text-[#64748B]">Prévision vs Réalisé</div>
            </div>

            {/* Consolidation */}
            <div className="p-2 bg-[#FAF9F5] rounded-lg border border-[#EAEFE6] flex items-center gap-2 text-[10px] text-[#334155]">
              <LineChart className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Consolidation auto</span>
            </div>

            {/* Decision */}
            <div className="p-2 bg-[#EBF3ED] rounded-lg border border-[#CDE1D3] flex items-center gap-2 text-[10px] text-[#1A402B] font-bold">
              <Lightbulb className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Synthèse &amp; Décision</span>
            </div>
          </div>
        </div>

        {/* Bottom Status Footer matching Image 1 */}
        <div className="mt-4 pt-3 border-t border-[#E5E9E0] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono-tech text-[#64748B]">
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Modélisation · Simulation · Normes NF C 15-100 · Python / Câblage</span>
          </div>

          <div className="flex items-center gap-1.5 text-[#143823] font-bold">
            <Calendar className="w-3.5 h-3.5 text-[#2D6A4F]" />
            <span>Stage 6 mois · Fév. 2027</span>
          </div>
        </div>
      </div>
    </div>
  );
}
