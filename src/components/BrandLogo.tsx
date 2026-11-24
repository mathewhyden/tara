import React from 'react';
import { IMG } from '../data/siteData';
interface BrandLogoProps { variant?: 'light' | 'dark' | 'footer'; className?: string; showTagline?: boolean; size?: 'normal' | 'large'; }
export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'dark', className = '', showTagline = true, size = 'normal' }) => {
  const dark = variant === 'dark';
  const large = size === 'large';
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img src={IMG.logo} alt="Tara Mindcare logo" width={large ? 64 : 48} height={large ? 64 : 48} className={`${large ? 'w-16 h-16' : 'w-12 h-12'} flex-shrink-0 rounded-full`} />
      <div className="leading-tight">
        <div className={`font-serif ${large ? 'text-2xl' : 'text-xl'} font-bold ${dark ? 'text-[#4A2748]' : 'text-white'}`}>Tara Mindcare</div>
        {showTagline && <div className={`${large ? 'text-[11px]' : 'text-[10px]'} tracking-[0.18em] uppercase ${dark ? 'text-[#7F4B7C]' : 'text-purple-200'}`}>Heal • Empower • Thrive</div>}
      </div>
    </div>
  );
};
