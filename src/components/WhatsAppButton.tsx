import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/siteData';

export const WhatsAppButton: React.FC = () => {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center group">
      <a
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Dr Anne Rosario"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-white text-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping opacity-75"></span>
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full"></span>
        </div>
        <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
