import React from "react";

interface FlagProps {
  className?: string;
  size?: number;
}

export const USFlag: React.FC<FlagProps> = ({ className = "", size = 20 }) => (
  <svg
    width={size}
    height={Math.round((size * 3) / 4)}
    viewBox="0 0 640 480"
    className={`inline-block rounded-xs shadow-xs object-cover border border-white/20 ${className}`}
    aria-hidden="true"
  >
    <path fill="#bd3d44" d="M0 0h640v480H0z" />
    <path
      stroke="#fff"
      strokeWidth="37"
      d="M0 55.5h640M0 129.5h640M0 203.5h640M0 277.5h640M0 351.5h640M0 425.5h640"
    />
    <path fill="#192f5d" d="M0 0h285.7v258.5H0z" />
    <g fill="#fff">
      <g id="s18">
        <g id="s9">
          <g id="s5">
            <polygon points="23.7,11.5 28.3,25.6 16.2,16.8 31.2,16.8 19.1,25.6" />
            <polygon points="71.2,11.5 75.8,25.6 63.7,16.8 78.7,16.8 66.6,25.6" />
            <polygon points="118.7,11.5 123.3,25.6 111.2,16.8 126.2,16.8 114.1,25.6" />
            <polygon points="166.2,11.5 170.8,25.6 158.7,16.8 173.7,16.8 161.6,25.6" />
            <polygon points="213.7,11.5 218.3,25.6 206.2,16.8 221.2,16.8 209.1,25.6" />
          </g>
          <polygon points="261.2,11.5 265.8,25.6 253.7,16.8 268.7,16.8 256.6,25.6" />
        </g>
        <g id="s4" transform="translate(23.7, 24)">
          <polygon points="23.7,11.5 28.3,25.6 16.2,16.8 31.2,16.8 19.1,25.6" />
          <polygon points="71.2,11.5 75.8,25.6 63.7,16.8 78.7,16.8 66.6,25.6" />
          <polygon points="118.7,11.5 123.3,25.6 111.2,16.8 126.2,16.8 114.1,25.6" />
          <polygon points="166.2,11.5 170.8,25.6 158.7,16.8 173.7,16.8 161.6,25.6" />
        </g>
      </g>
      <use href="#s18" y="48" />
      <use href="#s18" y="96" />
      <use href="#s18" y="144" />
      <use href="#s9" y="192" />
    </g>
  </svg>
);

export const SpainFlag: React.FC<FlagProps> = ({ className = "", size = 20 }) => (
  <svg
    width={size}
    height={Math.round((size * 3) / 4)}
    viewBox="0 0 640 480"
    className={`inline-block rounded-xs shadow-xs object-cover border border-white/20 ${className}`}
    aria-hidden="true"
  >
    <path fill="#c60b1e" d="M0 0h640v480H0z" />
    <path fill="#ffc400" d="M0 120h640v240H0z" />
    {/* Escudo simplificado con alto contraste */}
    <g transform="translate(140, 180) scale(0.65)">
      <rect x="0" y="0" width="80" height="100" rx="10" fill="#c60b1e" stroke="#000" strokeWidth="4" />
      <rect x="5" y="5" width="33" height="43" fill="#ffc400" />
      <rect x="42" y="5" width="33" height="43" fill="#c60b1e" />
      <rect x="5" y="52" width="33" height="43" fill="#c60b1e" />
      <rect x="42" y="52" width="33" height="43" fill="#ffc400" />
      <path d="M-15 10v80M95 10v80" stroke="#71717a" strokeWidth="8" strokeLinecap="round" />
    </g>
  </svg>
);

export const ItalyFlag: React.FC<FlagProps> = ({ className = "", size = 20 }) => (
  <svg
    width={size}
    height={Math.round((size * 3) / 4)}
    viewBox="0 0 640 480"
    className={`inline-block rounded-xs shadow-xs object-cover border border-white/20 ${className}`}
    aria-hidden="true"
  >
    <path fill="#009246" d="M0 0h213.3v480H0z" />
    <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
    <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
  </svg>
);

export const GermanyFlag: React.FC<FlagProps> = ({ className = "", size = 20 }) => (
  <svg
    width={size}
    height={Math.round((size * 3) / 4)}
    viewBox="0 0 640 480"
    className={`inline-block rounded-xs shadow-xs object-cover border border-white/20 ${className}`}
    aria-hidden="true"
  >
    <path fill="#000" d="M0 0h640v160H0z" />
    <path fill="#dd0000" d="M0 160h640v160H0z" />
    <path fill="#ffce00" d="M0 320h640v160H0z" />
  </svg>
);

export const FranceFlag: React.FC<FlagProps> = ({ className = "", size = 20 }) => (
  <svg
    width={size}
    height={Math.round((size * 3) / 4)}
    viewBox="0 0 640 480"
    className={`inline-block rounded-xs shadow-xs object-cover border border-white/20 ${className}`}
    aria-hidden="true"
  >
    <path fill="#002395" d="M0 0h213.3v480H0z" />
    <path fill="#fff" d="M213.3 0h213.4v480H213.3z" />
    <path fill="#ed2939" d="M426.7 0H640v480H426.7z" />
  </svg>
);