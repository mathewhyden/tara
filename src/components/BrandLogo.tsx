import React from 'react';
import { IMG } from '../data/siteData';
interface BrandLogoProps { variant?: 'light' | 'dark' | 'footer'; className?: string; showTagline?: boolean; }
export const BrandLogo: React.FC<BrandLogoProps> = ({ variant = 'dark', className = '', showTagline = true }) => {
  const dark = variant === 'dark';
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <img src={IMG.logo} alt="Tara Mindcare logo" width={48} height={48} className="w-12 h-12 flex-shrink-0 rounded-full" />
      <div className="leading-tight">
        <div className={`font-serif text-xl font-bold ${dark ? 'text-[#4A2748]' : 'text-white'}`}>Tara Mindcare</div>
        {showTagline && <div className={`text-[10px] tracking-[0.18em] uppercase ${dark ? 'text-[#7F4B7C]' : 'text-purple-200'}`}>Heal • Empower • Thrive</div>}
      </div>
    </div>
  );
};
