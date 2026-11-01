import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

/**
 * ECAM-EPMI Official Logo
 * High-definition, perfectly proportioned, uncompressed vector presentation.
 * Signature Navy Blue #002D62 / #082547 with Gold/Cyan engineering accent.
 */
export function EcamEpmiLogo({ className = '', size = 180 }: LogoProps) {
  // Height proportion approx 0.32 of width
  const height = Math.round(size * 0.32);

  return (
    <div
      className={`inline-flex items-center shrink-0 ${className}`}
      title="ECAM-EPMI — Grande École d'Ingénieurs (Cergy-Pontoise)"
    >
      <svg
        width={size}
        height={height}
        viewBox="0 0 340 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto select-none"
      >
        {/* Engineering Emblem / Crest */}
        <g transform="translate(6, 12)">
          {/* Hexagonal Shield */}
          <path
            d="M34 4 L64 20 V52 L34 68 L4 52 V20 Z"
            fill="#082547"
            stroke="#1D4ED8"
            strokeWidth="2.5"
          />
          {/* Inner Compass / Energy Vectors */}
          <path
            d="M34 14 L49 48 H19 Z"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <circle cx="34" cy="40" r="4.5" fill="#F59E0B" />
          <path d="M34 8 V16 M34 60 V64" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Brand Typography */}
        <g transform="translate(80, 0)">
          {/* "ECAM" in bold solid navy */}
          <text
            x="0"
            y="42"
            fill="#082547"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="2.5"
          >
            ECAM
          </text>

          {/* "EPMI" with distinct energetic royal blue */}
          <text
            x="115"
            y="42"
            fill="#1D4ED8"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="900"
            fontSize="34"
            letterSpacing="2.5"
          >
            EPMI
          </text>

          {/* Subtitle with wide technical tracking */}
          <text
            x="2"
            y="64"
            fill="#082547"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="800"
            fontSize="10"
            letterSpacing="2.2"
          >
            GRADUATE SCHOOL OF ENGINEERING
          </text>

          {/* Engineering subtitle line */}
          <text
            x="2"
            y="79"
            fill="#475569"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="600"
            fontSize="9.5"
            letterSpacing="1.2"
          >
            Grande École d’Ingénieurs · Cergy-Pontoise
          </text>

          {/* Dynamic accent underline */}
          <path
            d="M 2 85 H 245"
            stroke="#1D4ED8"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="245" cy="85" r="2.5" fill="#F59E0B" />
        </g>
      </svg>
    </div>
  );
}

/**
 * École d'Excellence Official Logo
 * CPGE Mathématiques & Physique (Djibouti).
 * High-definition, perfectly legible, non-compressed presentation.
 */
export function EcoleExcellenceLogo({ className = '', size = 180 }: LogoProps) {
  const height = Math.round(size * 0.42);

  return (
    <div
      className={`inline-flex items-center shrink-0 ${className}`}
      title="École d'Excellence — CPGE MP (Djibouti)"
    >
      <svg
        width={size}
        height={height}
        viewBox="0 0 340 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto select-none"
      >
        {/* Open Book Insignia & Golden Stars on Left */}
        <g transform="translate(8, 18)">
          {/* Background circle badge */}
          <circle cx="44" cy="40" r="38" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.5" />

          {/* 2 Golden 5-pointed stars of excellence */}
          <polygon
            points="24,18 27,26 35,27 29,32 31,40 24,35 17,40 19,32 13,27 21,26"
            fill="#F59E0B"
            stroke="#D97706"
            strokeWidth="1"
          />
          <polygon
            points="64,18 67,26 75,27 69,32 71,40 64,35 57,40 59,32 53,27 61,26"
            fill="#F59E0B"
            stroke="#D97706"
            strokeWidth="1"
          />

          {/* Open Book */}
          <g stroke="#1E3A8A" strokeWidth="2.2" fill="#FFFFFF">
            <path d="M 44 46 Q 24 38 4 48 Q 24 68 44 65 Q 64 68 84 48 Q 64 38 44 46 Z" />
            <path d="M 44 46 V 65" stroke="#1E3A8A" strokeWidth="2.5" />
            {/* Book pages */}
            <path d="M 12 51 Q 26 46 41 49" stroke="#93C5FD" strokeWidth="1.2" fill="none" />
            <path d="M 14 56 Q 26 51 41 54" stroke="#93C5FD" strokeWidth="1.2" fill="none" />
            <path d="M 47 49 Q 62 46 76 51" stroke="#93C5FD" strokeWidth="1.2" fill="none" />
            <path d="M 47 54 Q 62 51 74 56" stroke="#93C5FD" strokeWidth="1.2" fill="none" />
          </g>

          {/* Central quill / torch */}
          <path d="M 44 24 V 40" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" />
          <polygon points="44,20 46,25 42,25" fill="#DC2626" />
        </g>

        {/* Colorful Title Typography */}
        <g transform="translate(100, 0)">
          {/* Main Title: "École d'Excellence" */}
          <g fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="900" fontSize="24">
            <text x="0" y="42" fill="#1E40AF">É</text>
            <text x="16" y="42" fill="#15803D">c</text>
            <text x="30" y="42" fill="#B91C1C">o</text>
            <text x="45" y="42" fill="#D97706">l</text>
            <text x="53" y="42" fill="#16A34A">e</text>
            <text x="69" y="42" fill="#475569">d’</text>
            <text x="92" y="42" fill="#DC2626">Excellence</text>
          </g>

          {/* Subtitle 1: CPGE Filière MP */}
          <text
            x="2"
            y="66"
            fill="#1E3A8A"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="800"
            fontSize="11.5"
            letterSpacing="1.2"
          >
            CLASSES PRÉPARATOIRES AUX GRANDES ÉCOLES
          </text>

          {/* Subtitle 2: Filière MP (Maths - Physique) */}
          <text
            x="2"
            y="85"
            fill="#475569"
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            fontWeight="700"
            fontSize="10"
            letterSpacing="1"
          >
            Filière MP (Maths - Physique) · Option Informatique
          </text>

          {/* Gold banner line */}
          <path d="M 2 96 H 230" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
          <text
            x="2"
            y="108"
            fill="#64748B"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="600"
            fontSize="8.5"
          >
            Formation d’Élite Scientifique &amp; Pré-Ingénieur
          </text>
        </g>
      </svg>
    </div>
  );
}

/**
 * EDD (Électricité de Djibouti) Official Logo
 */
export function EddLogo({ className = '', size = 44 }: LogoProps) {
  return (
    <div className={`inline-flex items-center shrink-0 ${className}`} title="EDD — Électricité de Djibouti">
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto select-none"
      >
        <defs>
          <radialGradient id="edd-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#80B3FF" />
            <stop offset="100%" stopColor="#1E40AF" />
          </radialGradient>
          <linearGradient id="edd-lightning" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF3B30" />
            <stop offset="100%" stopColor="#FF6B00" />
          </linearGradient>
        </defs>

        {/* 16-teeth Blue Gear Wheel */}
        <g fill="#1D4ED8">
          <circle cx="50" cy="50" r="42" />
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map(
            (angle, idx) => (
              <rect
                key={idx}
                x="45"
                y="3"
                width="10"
                height="10"
                rx="1"
                transform={`rotate(${angle} 50 50)`}
              />
            )
          )}
        </g>

        {/* Center glowing circle */}
        <circle cx="50" cy="50" r="33" fill="url(#edd-glow)" />

        {/* Letter 'E' */}
        <path d="M 17 38 H 30 V 44 H 23 V 48 H 29 V 53 H 23 V 58 H 30 V 64 H 17 Z" fill="#FFFFFF" />

        {/* Letter 'D' */}
        <path d="M 72 38 H 82 C 87 38 90 43 90 51 C 90 59 87 64 82 64 H 72 Z M 78 44 V 58 H 81 C 84 58 85 55 85 51 C 85 47 84 44 81 44 Z" fill="#FFFFFF" />

        {/* Lowercase 'd' */}
        <text x="50" y="56" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#FFFFFF" fontFamily="sans-serif">
          d
        </text>

        {/* Red/Orange Lightning bolt */}
        <path d="M 66 12 L 20 53 H 42 L 35 88 L 76 46 H 55 L 66 12 Z" fill="url(#edd-lightning)" stroke="#B91C1C" strokeWidth="0.8" />
      </svg>
    </div>
  );
}

// =========================================================================
// THE 10 EXACT TECHNICAL SOFTWARE LOGOS REQUESTED BY USER
// 1. Caneco BT
// 2. AutoCAD / AutoCAD Electrical
// 3. Excel
// 4. DIALux evo
// 5. PVsyst
// 6. Power BI
// 7. Python
// 8. Revit MEP
// 9. TIA Portal
// 10. MATLAB / Simulink
// =========================================================================

/** 1. Caneco BT Logo */
export function CanecoLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <rect width="100" height="100" rx="18" fill="#005B94" />
      <path d="M50 16L80 33V67L50 84L20 67V33L50 16Z" stroke="#00C0F3" strokeWidth="5.5" fill="#0A3F66" />
      <text x="50" y="47" textAnchor="middle" fontSize="16" fontWeight="900" fill="#00C0F3" fontFamily="sans-serif" letterSpacing="1">
        CANECO
      </text>
      <text x="50" y="68" textAnchor="middle" fontSize="22" fontWeight="900" fill="#FFFFFF" fontFamily="sans-serif">
        BT
      </text>
    </svg>
  );
}

/** 2. AutoCAD / AutoCAD Electrical Logo */
export function AutocadLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <rect width="100" height="100" rx="18" fill="#E52424" />
      {/* Sharp AutoCAD 'A' */}
      <path d="M22 80L44 20H56L78 80H65L59 64H41L35 80H22ZM44 54H56L50 36L44 54Z" fill="#FFFFFF" />
      {/* Electrical lightning bolt overlay */}
      <path d="M72 18L58 38H72L60 56" stroke="#FFE600" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** 3. Microsoft Excel Logo */
export function ExcelLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <path d="M28 6H40C41.1 6 42 6.9 42 8V40C42 41.1 41.1 42 40 42H28V6Z" fill="#107C41" />
      <path d="M6 11L28 6V42L6 37C4.9 36.8 4 35.8 4 34.6V13.4C4 12.2 4.9 11.2 6 11Z" fill="#107C41" />
      <path d="M30 14H40V19H30V14ZM30 21.5H40V26.5H30V21.5ZM30 29H40V34H30V29Z" fill="#33C481" />
      <path
        d="M12.5 18L15.3 23.8L18.1 18H21.5L17.2 25.5L21.8 33.5H18.4L15.3 27.2L12.2 33.5H8.8L13.4 25.5L9.1 18H12.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

/** 4. DIALux evo Logo */
export function DialuxLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <rect width="100" height="100" rx="18" fill="#D32F2F" />
      {/* Lowercase 'd' */}
      <path
        d="M 52 20 H 66 V 78 H 52 V 69 C 48 75 41 79 33 79 C 20 79 12 68 12 50 C 12 32 20 21 33 21 C 41 21 48 25 52 31 V 20 Z M 52 50 C 52 39 46 33 38 33 C 30 33 25 39 25 50 C 25 61 30 67 38 67 C 46 67 52 61 52 50 Z"
        fill="#FFFFFF"
      />
      {/* 'evo' label */}
      <text x="74" y="44" fontSize="15" fontWeight="900" fill="#FFCDD2" fontFamily="sans-serif">
        evo
      </text>
    </svg>
  );
}

/** 5. PVsyst Logo */
export function PvsystLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <rect width="100" height="100" rx="18" fill="#0C356A" />
      {/* Golden Sun */}
      <circle cx="50" cy="35" r="17" fill="#F59E0B" />
      {/* PV Solar Array Grid in perspective */}
      <path d="M 20 54 L 80 54 L 88 86 L 12 86 Z" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2" />
      <line x1="50" y1="54" x2="50" y2="86" stroke="#FFFFFF" strokeWidth="2" />
      <line x1="35" y1="54" x2="30" y2="86" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="65" y1="54" x2="70" y2="86" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="16" y1="70" x2="84" y2="70" stroke="#FFFFFF" strokeWidth="1.5" />
    </svg>
  );
}

/** 6. Microsoft Power BI Logo */
export function PowerBiLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <rect width="100" height="100" rx="18" fill="#F2C811" />
      {/* 3 Analytics Bars with subtle shadows */}
      <rect x="22" y="50" width="14" height="30" rx="3" fill="#262626" />
      <rect x="43" y="36" width="14" height="44" rx="3" fill="#262626" />
      <rect x="64" y="22" width="14" height="58" rx="3" fill="#262626" />
    </svg>
  );
}

/** 7. Python Official Logo */
export function PythonLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 110 110" fill="none" className={className}>
      <path
        d="M54.5 5C27.5 5 29 16.7 29 16.7L29.1 28.9H55V32.6H17.8C17.8 32.6 5 31.1 5 58.2C5 85.3 16.3 84 16.3 84H23.1V72.5C23.1 72.5 22.5 58.7 36.5 58.7H62.7C62.7 58.7 75.3 59.2 75.3 46.8V17.3C75.3 17.3 77.2 5 54.5 5ZM40.9 14.5C43.5 14.5 45.6 16.6 45.6 19.2C45.6 21.8 43.5 23.9 40.9 23.9C38.3 23.9 36.2 21.8 36.2 19.2C36.2 16.6 38.3 14.5 40.9 14.5Z"
        fill="#3776AB"
      />
      <path
        d="M55.5 105C82.5 105 81 93.3 81 93.3L80.9 81.1H55V77.4H92.2C92.2 77.4 105 78.9 105 51.8C105 24.7 93.7 26 93.7 26H86.9V37.5C86.9 37.5 87.5 51.3 73.5 51.3H47.3C47.3 51.3 34.7 50.8 34.7 63.2V92.7C34.7 92.7 32.8 105 55.5 105ZM69.1 95.5C66.5 95.5 64.4 93.4 64.4 90.8C64.4 88.2 66.5 86.1 69.1 86.1C71.7 86.1 73.8 88.2 73.8 90.8C73.8 93.4 71.7 95.5 69.1 95.5Z"
        fill="#FFD43B"
      />
    </svg>
  );
}

/** 8. Autodesk Revit MEP Logo */
export function RevitLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <rect width="100" height="100" rx="18" fill="#0696D7" />
      {/* Revit stylized 'R' */}
      <path
        d="M26 22 H54 C66 22 75 30 75 42 C75 52 67 60 56 61 L75 78 H60 L44 63 H38 V78 H26 V22 Z M38 32 V53 H51 C58 53 63 49 63 42 C63 36 58 32 51 32 H38 Z"
        fill="#FFFFFF"
      />
      <text x="82" y="86" fontSize="13" fontWeight="900" fill="#FFFFFF" textAnchor="end" fontFamily="sans-serif">
        MEP
      </text>
    </svg>
  );
}

/** 9. Siemens TIA Portal Logo */
export function TiaPortalLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <rect width="100" height="100" rx="18" fill="#00646E" />
      {/* Siemens TIA Orange / White Brand */}
      <text x="50" y="44" textAnchor="middle" fontSize="20" fontWeight="900" fill="#EB780A" fontFamily="sans-serif">
        TIA
      </text>
      <text x="50" y="66" textAnchor="middle" fontSize="14" fontWeight="800" fill="#FFFFFF" fontFamily="sans-serif" letterSpacing="1">
        PORTAL
      </text>
      <rect x="22" y="74" width="56" height="5" rx="2.5" fill="#EB780A" />
    </svg>
  );
}

/** 10. MATLAB & Simulink Logo */
export function MatlabLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <rect width="100" height="100" rx="18" fill="#E1523D" />
      <path
        d="M18 72C34 46 44 34 54 60C62 76 72 40 82 28L80 75C68 78 50 82 18 72Z"
        fill="#FFFFFF"
        opacity="0.92"
      />
      <path
        d="M20 68C32 50 42 40 50 64C58 84 68 50 78 35"
        stroke="#FFFFFF"
        strokeWidth="5.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** SQL Logo */
export function SqlLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
      <rect x="6" y="8" width="36" height="10" rx="5" fill="#336791" />
      <path d="M6 13V24C6 26.8 14 29 24 29C34 29 42 26.8 42 24V13C42 15.8 34 18 24 18C14 18 6 15.8 6 13Z" fill="#336791" opacity="0.85" />
      <path d="M6 24V35C6 37.8 14 40 24 40C34 40 42 37.8 42 35V24C42 26.8 34 29 24 29C14 29 6 26.8 6 24Z" fill="#336791" opacity="0.7" />
      <ellipse cx="24" cy="13" rx="18" ry="5" fill="#4B8BBE" />
    </svg>
  );
}

/** Jupyter Notebook Logo */
export function JupyterLogo({ className = '', size = 24 }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
      <path
        d="M50 14C32 14 17 25 17 40C17 43 18 46 20 49C22 47 25 45 28 44C27 43 27 41 27 40C27 29 37 21 50 21C63 21 73 29 73 40C73 41 73 43 72 44C75 45 78 47 80 49C82 46 83 43 83 40C83 25 68 14 50 14Z"
        fill="#F37626"
      />
      <path
        d="M50 86C68 86 83 75 83 60C83 57 82 54 80 51C78 53 75 55 72 56C73 57 73 59 73 60C73 71 63 79 50 79C37 79 27 71 27 60C27 59 27 57 28 56C25 55 22 53 20 51C18 54 17 57 17 60C17 75 32 86 50 86Z"
        fill="#F37626"
      />
      <circle cx="21" cy="40" r="5" fill="#767677" />
      <circle cx="79" cy="60" r="5" fill="#767677" />
      <circle cx="50" cy="50" r="6" fill="#F37626" />
    </svg>
  );
}
