import React from 'react';
import { X, Check, Clock, Calendar, ShieldCheck, HeartHandshake, MessageCircle } from 'lucide-react';
import { ServiceItem, BRAND_INFO } from '../data/siteData';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookService,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-xl w-full rounded-2xl shadow-2xl border border-[#E8DCE8] overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#7F4B7C] text-white px-6 py-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-purple-200">
              Psychological Service
            </span>
            <h3 className="font-serif text-xl font-bold">{service.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-purple-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-[#2C2C2C]">
          <div className="flex items-center gap-4 text-xs text-gray-500 bg-[#FAF6EE] p-3.5 border border-[#E8DCE8] rounded-xl">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#7F4B7C]" />
              <span className="font-medium text-[#2C2C2C]">{service.duration}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#7F4B7C]" />
              <span>Strictly Confidential</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-[#7F4B7C]" />
              <span>Dr Anne Rosario</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7F4B7C] mb-2">
              About This Consultation
            </h4>
            <p className="text-sm leading-relaxed text-gray-700">
              {service.fullDescription}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7F4B7C] mb-2.5">
              Key Focus Areas & Outcomes
            </h4>
            <ul className="space-y-2">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                  <div className="w-4 h-4 rounded-full bg-[#F1E8F1] text-[#7F4B7C] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F1E8F1]/70 p-4 border-l-4 border-[#7F4B7C] text-xs text-gray-700 rounded-2xl shadow-xs">
            <p className="italic">
              "{BRAND_INFO.aboutIntro}"
            </p>
            <p className="mt-1 font-semibold text-[#7F4B7C]">
              — {BRAND_INFO.doctorName}, {BRAND_INFO.title}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onBookService(service.id);
              }}
              className="flex-1 bg-[#7F4B7C] hover:bg-[#5B3259] text-white py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow hover:shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Consultation</span>
            </button>
            <a
              href={`${BRAND_INFO.whatsappUrl}%20regarding%20${encodeURIComponent(service.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-3 border border-gray-300 text-xs font-semibold uppercase tracking-wider text-gray-700 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
