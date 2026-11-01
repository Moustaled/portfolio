import React, { useState } from 'react';
import { Sun, BatteryCharging, Power, Factory, Zap, ShieldCheck, HelpCircle, CheckCircle2, Image as ImageIcon, GitFork, ArrowRight, Gauge, Cpu } from 'lucide-react';

interface StorageFluxProps {
  className?: string;
  activeView?: 'schematic' | 'photo';
  onToggleView?: (view: 'schematic' | 'photo') => void;
}

export function StorageFluxSvg({ className = '', activeView = 'photo', onToggleView }: StorageFluxProps) {
  const [selectedElement, setSelectedElement] = useState<'pv' | 'bess' | 'diesel' | 'load' | null>('pv');
  const [operatingMode, setOperatingMode] = useState<'solar_direct' | 'battery_discharge' | 'diesel_backup'>('solar_direct');

  return (
    <div className={`relative bg-[#FBFBF9] rounded-2xl border border-[#DFE3D9] p-4 sm:p-6 text-[#19231E] shadow-xs ${className}`}>
      {/* Blueprint Header matching Project 1 layout */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-[#E5E9E0] gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1A402B]"></span>
            <h4 className="font-mono-tech font-bold text-sm sm:text-base text-[#143823] tracking-wide uppercase">
              SCHÉMA UNIFILAIRE · CENTRALE HYBRIDE &amp; STOCKAGE BESS
            </h4>
          </div>
          <p className="text-xs text-[#64748B] font-mono-tech mt-0.5">
            Microgrid PV (100 kWp) · Batterie Li-ion (200 kWh) · Groupe secours (120 kW) · Bus 400 V
          </p>
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono-tech text-[#64748B]">
            <span>PVsyst &amp; Power BI</span>
            <span className="text-[#CBD5E1]" aria-hidden="true">·</span>
            <span>Simulation pas horaire</span>
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
                <span>Rendu Réel</span>
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
        {/* Left Column: Indicateurs Réseau / Hybride (Exact same layout as Project 1) */}
        <div className="lg:col-span-3 space-y-3 font-mono-tech">
          <div className="bg-white rounded-xl border border-[#E2E6DD] p-3.5 shadow-2xs space-y-3">
            <div className="text-[11px] font-bold text-[#475569] uppercase tracking-wider flex items-center justify-between">
              <span>INDICATEURS HYBRIDES</span>
            </div>

            {/* Metric 1: Production PV */}
            <div
              onClick={() => setSelectedElement('pv')}
              className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                selectedElement === 'pv' ? 'bg-[#FEF3C7]/40 border-[#D97706]' : 'bg-[#FAF9F5] border-[#EAEFE6]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#FEF3C7] flex items-center justify-center text-[#D97706]">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#64748B]">Production PV</div>
                  <div className="text-sm font-bold text-[#D97706]">48 kW <span className="text-[10px] font-normal text-[#64748B]">(725 W/m²)</span></div>
                </div>
              </div>
              <HelpCircle className="w-3.5 h-3.5 text-[#94A3B8]" />
            </div>

            {/* Metric 2: BESS Battery */}
            <div
              onClick={() => setSelectedElement('bess')}
              className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                selectedElement === 'bess' ? 'bg-[#EBF3ED] border-[#2D6A4F]' : 'bg-[#FAF9F5] border-[#EAEFE6]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#EBF3ED] flex items-center justify-center text-[#2D6A4F]">
                  <BatteryCharging className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#64748B]">Batterie BESS</div>
                  <div className="text-sm font-bold text-[#143823]">SOC : 85 % <span className="text-[10px] font-normal text-[#2D6A4F]">(+14 kW)</span></div>
                </div>
              </div>
              <HelpCircle className="w-3.5 h-3.5 text-[#94A3B8]" />
            </div>

            {/* Metric 3: Demand / Load */}
            <div
              onClick={() => setSelectedElement('load')}
              className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                selectedElement === 'load' ? 'bg-[#EFF6FF] border-[#3B82F6]' : 'bg-[#FAF9F5] border-[#EAEFE6]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#EFF6FF] flex items-center justify-center text-[#2563EB]">
                  <Factory className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#64748B]">Charge site TGBT</div>
                  <div className="text-sm font-bold text-[#1E3A8A]">62 kW <span className="text-[10px] font-normal text-[#64748B]">(Tri 400V)</span></div>
                </div>
              </div>
              <HelpCircle className="w-3.5 h-3.5 text-[#94A3B8]" />
            </div>

            {/* Metric 4: Diesel Standby */}
            <div
              onClick={() => setSelectedElement('diesel')}
              className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                selectedElement === 'diesel' ? 'bg-[#F1F5F9] border-[#64748B]' : 'bg-[#FAF9F5] border-[#EAEFE6]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-md bg-[#F1F5F9] flex items-center justify-center text-[#475569]">
                  <Power className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#64748B]">Groupe secours</div>
                  <div className="text-xs font-bold text-[#10B981]">0 kW (Arrêt · 100% Éco)</div>
                </div>
              </div>
              <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            </div>
          </div>

          {/* Arbitrage Logic Box */}
          <div className="p-3 bg-[#FAF9F5] rounded-xl border border-[#DFE3D9] text-[11px] space-y-1.5">
            <div className="font-bold text-[#143823] flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#2D6A4F]" />
              <span>Priorité d’arbitrage EMS :</span>
            </div>
            <ol className="text-[#475569] space-y-1 list-decimal list-inside pl-0.5 text-[10px]">
              <li><strong className="text-[#D97706]">PV direct :</strong> Alimentation 1ère charge</li>
              <li><strong className="text-[#2D6A4F]">BESS Li-ion :</strong> Stockage surplus ou appoint</li>
              <li><strong className="text-[#475569]">Diesel :</strong> Secours si déficit prolongé</li>
            </ol>
          </div>
        </div>

        {/* Center & Right: High-Precision Single-Line Vector Schematic */}
        <div className="lg:col-span-9 relative bg-white rounded-xl border border-[#DFE3D9] p-4 overflow-hidden">
          <svg
            viewBox="0 0 680 430"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto select-none font-mono-tech"
          >
            {/* Grid pattern */}
            <defs>
              <pattern id="storage-grid-v2" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#F1F4EE" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect width="680" height="430" fill="url(#storage-grid-v2)" rx="6" />

            {/* --- SOURCE 1: PV ARRAY (Top Left) --- */}
            <g transform="translate(40, 20)" className="cursor-pointer" onClick={() => setSelectedElement('pv')}>
              <rect x="0" y="0" width="160" height="75" rx="6" fill="#FFFBEB" stroke="#D97706" strokeWidth="1.5" />
              <circle cx="20" cy="22" r="10" fill="#FDE68A" />
              <path d="M 20 16 L 20 28 M 14 22 L 26 22 M 16 18 L 24 26 M 24 18 L 16 26" stroke="#D97706" strokeWidth="1.5" />
              <text x="36" y="22" fontSize="10.5" fontWeight="700" fill="#B45309">CHAMP SOLAIRE PV</text>
              <text x="36" y="34" fontSize="8" fill="#78350F">100 kWp · Modules monocristallins</text>
              <line x1="10" y1="44" x2="150" y2="44" stroke="#FDE68A" strokeWidth="1" />
              <text x="12" y="58" fontSize="8.5" fill="#78350F">Irradiation : <strong>725 W/m²</strong></text>
              <text x="12" y="69" fontSize="8.5" fontWeight="700" fill="#B45309">P_dc instantanée = 48 kW</text>
            </g>

            {/* PV Inverter MPPT Block */}
            <g transform="translate(90, 115)">
              <rect x="0" y="0" width="60" height="42" rx="4" fill="#FFFFFF" stroke="#D97706" strokeWidth="1.5" />
              <text x="30" y="16" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#B45309">ONDULEUR</text>
              <path d="M 12 30 L 48 30" stroke="#CBD5E1" strokeWidth="1" />
              <text x="18" y="27" fontSize="7" fontWeight="600" fill="#64748B">=</text>
              <text x="38" y="27" fontSize="8" fontWeight="600" fill="#2563EB">~</text>
              <text x="30" y="38" textAnchor="middle" fontSize="6.5" fill="#64748B">MPPT 98.4%</text>
            </g>
            <line x1="120" y1="95" x2="120" y2="115" stroke="#D97706" strokeWidth="2.5" />
            <line x1="120" y1="157" x2="120" y2="205" stroke="#D97706" strokeWidth="2.5" />
            <circle cx="120" cy="205" r="4" fill="#D97706" />

            {/* --- SOURCE 2: BESS BATTERY (Top Center) --- */}
            <g transform="translate(260, 20)" className="cursor-pointer" onClick={() => setSelectedElement('bess')}>
              <rect x="0" y="0" width="160" height="75" rx="6" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.5" />
              <rect x="12" y="14" width="16" height="20" rx="2" fill="#BBF7D0" stroke="#16A34A" strokeWidth="1.2" />
              <rect x="17" y="10" width="6" height="4" fill="#16A34A" />
              <text x="36" y="22" fontSize="10.5" fontWeight="700" fill="#15803D">BATTERIE BESS</text>
              <text x="36" y="34" fontSize="8" fill="#166534">200 kWh · Li-ion LFP · 400 V DC</text>
              <line x1="10" y1="44" x2="150" y2="44" stroke="#DCFCE7" strokeWidth="1" />
              <text x="12" y="58" fontSize="8.5" fill="#166534">SOC actuel : <strong>85 %</strong> (Utile: 170 kWh)</text>
              <text x="12" y="69" fontSize="8.5" fontWeight="700" fill="#15803D">Mode décharge : +14 kW vers bus</text>
            </g>

            {/* Bidirectional DC/AC Converter */}
            <g transform="translate(310, 115)">
              <rect x="0" y="0" width="60" height="42" rx="4" fill="#FFFFFF" stroke="#16A34A" strokeWidth="1.5" />
              <text x="30" y="16" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#15803D">CONVERT.</text>
              <text x="30" y="26" textAnchor="middle" fontSize="6.5" fill="#64748B">BIDIRECTIONNEL</text>
              <path d="M 16 34 L 44 34 M 20 31 L 16 34 L 20 37 M 40 31 L 44 34 L 40 37" stroke="#16A34A" strokeWidth="1.2" />
            </g>
            <line x1="340" y1="95" x2="340" y2="115" stroke="#16A34A" strokeWidth="2.5" />
            <line x1="340" y1="157" x2="340" y2="205" stroke="#16A34A" strokeWidth="2.5" />
            <circle cx="340" cy="205" r="4" fill="#16A34A" />

            {/* --- SOURCE 3: DIESEL GENERATOR (Top Right) --- */}
            <g transform="translate(480, 20)" className="cursor-pointer" onClick={() => setSelectedElement('diesel')}>
              <rect x="0" y="0" width="160" height="75" rx="6" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.5" />
              <circle cx="22" cy="24" r="11" fill="#E2E8F0" stroke="#64748B" strokeWidth="1.2" />
              <text x="22" y="28" textAnchor="middle" fontSize="10" fontWeight="700" fill="#475569">G</text>
              <text x="40" y="22" fontSize="10.5" fontWeight="700" fill="#334155">GROUPE DIESEL</text>
              <text x="40" y="34" fontSize="8" fill="#64748B">120 kW (150 kVA) · Secours</text>
              <line x1="10" y1="44" x2="150" y2="44" stroke="#E2E8F0" strokeWidth="1" />
              <text x="12" y="58" fontSize="8.5" fill="#64748B">Statut : <strong>Arrêté (Veille ATS)</strong></text>
              <text x="12" y="69" fontSize="8.5" fontWeight="700" fill="#10B981">Conso = 0 L/h · 100% Solaire/BESS</text>
            </g>

            {/* ATS Switch Contact (Open) */}
            <g transform="translate(535, 120)">
              <rect x="0" y="0" width="50" height="35" rx="3" fill="#FFFFFF" stroke="#64748B" strokeWidth="1.2" />
              <text x="25" y="14" textAnchor="middle" fontSize="7" fontWeight="700" fill="#475569">ATS SECOURS</text>
              {/* Switch open diagram */}
              <line x1="15" y1="26" x2="23" y2="26" stroke="#DC2626" strokeWidth="1.5" />
              <circle cx="23" cy="26" r="2" fill="#DC2626" />
              <line x1="23" y1="26" x2="35" y2="18" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="1 1" />
              <circle cx="35" cy="26" r="2" fill="#64748B" />
            </g>
            <line x1="560" y1="95" x2="560" y2="120" stroke="#64748B" strokeWidth="2" strokeDasharray="3 3" />
            <line x1="560" y1="155" x2="560" y2="205" stroke="#64748B" strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="560" cy="205" r="4" fill="#94A3B8" />

            {/* --- MAIN AC BUSBAR 400 V (JEU DE BARRES HYBRIDE) --- */}
            <g>
              <rect x="50" y="205" width="580" height="8" rx="4" fill="#143823" />
              {/* Busbar Label Left */}
              <rect x="50" y="188" width="145" height="15" rx="2" fill="#143823" />
              <text x="122" y="199" textAnchor="middle" fontSize="8" fontWeight="700" fill="#FFFFFF">
                BUS MICROGRID AC 400 V · 50 Hz
              </text>
              {/* Busbar Power Balance Badge Right */}
              <rect x="420" y="185" width="210" height="18" rx="3" fill="#FAF9F5" stroke="#DFE3D9" strokeWidth="1" />
              <text x="525" y="197" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#143823">
                Équilibre : PV 48 kW + BESS 14 kW = 62 kW (Charge)
              </text>
            </g>

            {/* --- FEEDERS / LOADS (Bottom Row) --- */}
            {/* Feeder 1: Procédés Industriels (35 kW) */}
            <g transform="translate(100, 213)">
              <line x1="20" y1="0" x2="20" y2="35" stroke="#143823" strokeWidth="2" />
              {/* Circuit breaker Q1 */}
              <rect x="10" y="35" width="20" height="22" rx="2" fill="#EBF3ED" stroke="#1A402B" strokeWidth="1" />
              <text x="20" y="49" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#143823">Q1</text>
              <line x1="20" y1="57" x2="20" y2="90" stroke="#143823" strokeWidth="2" />
              {/* Load Box */}
              <rect x="-15" y="90" width="70" height="65" rx="4" fill="#FAF9F5" stroke="#DFE3D9" strokeWidth="1.2" />
              <text x="20" y="106" textAnchor="middle" fontSize="8" fontWeight="700" fill="#143823">ATELIER PROCÉDÉS</text>
              <text x="20" y="118" textAnchor="middle" fontSize="7" fill="#64748B">Machines &amp; Moteurs</text>
              <line x1="-5" y1="124" x2="45" y2="124" stroke="#E2E6DD" strokeWidth="0.8" />
              <text x="20" y="137" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2563EB">35 kW</text>
              <text x="20" y="148" textAnchor="middle" fontSize="6.5" fill="#64748B">cos φ = 0.85</text>
            </g>

            {/* Feeder 2: CVC & Climatisation (18 kW) */}
            <g transform="translate(300, 213)">
              <line x1="20" y1="0" x2="20" y2="35" stroke="#143823" strokeWidth="2" />
              <rect x="10" y="35" width="20" height="22" rx="2" fill="#EBF3ED" stroke="#1A402B" strokeWidth="1" />
              <text x="20" y="49" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#143823">Q2</text>
              <line x1="20" y1="57" x2="20" y2="90" stroke="#143823" strokeWidth="2" />
              <rect x="-15" y="90" width="70" height="65" rx="4" fill="#FAF9F5" stroke="#DFE3D9" strokeWidth="1.2" />
              <text x="20" y="106" textAnchor="middle" fontSize="8" fontWeight="700" fill="#143823">CVC / CLIMATISATION</text>
              <text x="20" y="118" textAnchor="middle" fontSize="7" fill="#64748B">Pompes &amp; Groupes froid</text>
              <line x1="-5" y1="124" x2="45" y2="124" stroke="#E2E6DD" strokeWidth="0.8" />
              <text x="20" y="137" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2563EB">18 kW</text>
              <text x="20" y="148" textAnchor="middle" fontSize="6.5" fill="#64748B">cos φ = 0.90</text>
            </g>

            {/* Feeder 3: Éclairage & Auxiliaires (9 kW) */}
            <g transform="translate(500, 213)">
              <line x1="20" y1="0" x2="20" y2="35" stroke="#143823" strokeWidth="2" />
              <rect x="10" y="35" width="20" height="22" rx="2" fill="#EBF3ED" stroke="#1A402B" strokeWidth="1" />
              <text x="20" y="49" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#143823">Q3</text>
              <line x1="20" y1="57" x2="20" y2="90" stroke="#143823" strokeWidth="2" />
              <rect x="-15" y="90" width="70" height="65" rx="4" fill="#FAF9F5" stroke="#DFE3D9" strokeWidth="1.2" />
              <text x="20" y="106" textAnchor="middle" fontSize="8" fontWeight="700" fill="#143823">ÉCLAIRAGE / BUREAUX</text>
              <text x="20" y="118" textAnchor="middle" fontSize="7" fill="#64748B">LED &amp; Informatique</text>
              <line x1="-5" y1="124" x2="45" y2="124" stroke="#E2E6DD" strokeWidth="0.8" />
              <text x="20" y="137" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2563EB">9 kW</text>
              <text x="20" y="148" textAnchor="middle" fontSize="6.5" fill="#64748B">cos φ = 0.95</text>
            </g>

            {/* Central EMS Controller Stamp */}
            <g transform="translate(265, 385)">
              <rect x="0" y="0" width="150" height="25" rx="4" fill="#143823" />
              <text x="75" y="16" textAnchor="middle" fontSize="8" fontWeight="700" fill="#A7D7B5">
                SUPERVISEUR EMS ACTIF · PILOTAGE AUTOMATIQUE
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Bottom Summary Bar with interactive Operating Mode scenarios */}
      <div className="mt-4 pt-3 border-t border-[#E5E9E0] flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-bold text-[#143823]">Scénario simulé :</span>
          <button
            onClick={() => setOperatingMode('solar_direct')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              operatingMode === 'solar_direct' ? 'bg-[#143823] text-white' : 'bg-[#EAEFE6] text-[#475569] hover:text-[#143823]'
            }`}
          >
            Plein soleil (PV + BESS)
          </button>
          <button
            onClick={() => setOperatingMode('battery_discharge')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              operatingMode === 'battery_discharge' ? 'bg-[#143823] text-white' : 'bg-[#EAEFE6] text-[#475569] hover:text-[#143823]'
            }`}
          >
            Soirée (Décharge BESS)
          </button>
          <button
            onClick={() => setOperatingMode('diesel_backup')}
            className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors cursor-pointer ${
              operatingMode === 'diesel_backup' ? 'bg-[#143823] text-white' : 'bg-[#EAEFE6] text-[#475569] hover:text-[#143823]'
            }`}
          >
            Nuit critique (Secours Diesel)
          </button>
        </div>

        <div className="text-[11px] text-[#64748B] flex items-center gap-1.5 font-semibold">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
          <span>Émissions évitées : ~240 kgCO₂/jour</span>
        </div>
      </div>
    </div>
  );
}
