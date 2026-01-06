import React from 'react';

interface FlagProps {
  className?: string;
  size?: number;
}

export const USFlag: React.FC<FlagProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="2" fill="#B22234"/>
    <rect width="24" height="1.85" y="0" fill="#B22234"/>
    <rect width="24" height="1.85" y="3.7" fill="#FFFFFF"/>
    <rect width="24" height="1.85" y="7.4" fill="#B22234"/>
    <rect width="24" height="1.85" y="11.1" fill="#FFFFFF"/>
    <rect width="24" height="1.85" y="14.8" fill="#B22234"/>
    <rect width="24" height="1.85" y="18.5" fill="#FFFFFF"/>
    <rect width="24" height="1.85" y="22.2" fill="#B22234"/>
    <rect width="9.6" height="12.8" fill="#3C3B6E"/>
    <g fill="#FFFFFF">
      <circle cx="2" cy="2" r="0.3"/>
      <circle cx="4" cy="2" r="0.3"/>
      <circle cx="6" cy="2" r="0.3"/>
      <circle cx="8" cy="2" r="0.3"/>
      <circle cx="3" cy="4" r="0.3"/>
      <circle cx="5" cy="4" r="0.3"/>
      <circle cx="7" cy="4" r="0.3"/>
      <circle cx="2" cy="6" r="0.3"/>
      <circle cx="4" cy="6" r="0.3"/>
      <circle cx="6" cy="6" r="0.3"/>
      <circle cx="8" cy="6" r="0.3"/>
      <circle cx="3" cy="8" r="0.3"/>
      <circle cx="5" cy="8" r="0.3"/>
      <circle cx="7" cy="8" r="0.3"/>
      <circle cx="2" cy="10" r="0.3"/>
      <circle cx="4" cy="10" r="0.3"/>
      <circle cx="6" cy="10" r="0.3"/>
      <circle cx="8" cy="10" r="0.3"/>
    </g>
  </svg>
);

export const SpainFlag: React.FC<FlagProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="2" fill="#C60B1E"/>
    <rect width="24" height="12" y="6" fill="#FFC400"/>
    <rect width="24" height="6" y="0" fill="#C60B1E"/>
    <rect width="24" height="6" y="18" fill="#C60B1E"/>
  </svg>
);

export const ItalyFlag: React.FC<FlagProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="2" fill="#FFFFFF"/>
    <rect width="8" height="24" fill="#009246"/>
    <rect width="8" height="24" x="16" fill="#CE2B37"/>
  </svg>
);

export const GermanyFlag: React.FC<FlagProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="2" fill="#000000"/>
    <rect width="24" height="8" y="8" fill="#DD0000"/>
    <rect width="24" height="8" y="16" fill="#FFCE00"/>
  </svg>
);

export const FranceFlag: React.FC<FlagProps> = ({ className = '', size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <rect width="24" height="24" rx="2" fill="#FFFFFF"/>
    <rect width="8" height="24" fill="#0055A4"/>
    <rect width="8" height="24" x="16" fill="#EF4135"/>
  </svg>
);