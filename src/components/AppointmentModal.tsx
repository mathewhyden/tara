import React, { useState } from 'react';
import { openMail } from '../data/siteData';
import {
  X,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CheckCircle2,
  ShieldCheck,
  Video,
  MapPin,
  MessageCircle,
} from 'lucide-react';
import { BRAND_INFO, SERVICES_DATA } from '../data/siteData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: preselectedService || 'trauma-recovery',
    otherService: '',
    mode: 'online',
    date: '',
    timeSlot: 'Morning (9:00 AM - 12:00 PM)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || (formData.service === 'other' && !formData.otherService.trim())) {
      setErrorMsg('Please complete all required fields and describe your area of focus if you selected Other.');
      return;
    }

    const { otherService, ...requestData } = formData;
    const selectedService = formData.service === 'other'
      ? otherService.trim()
      : SERVICES_DATA.find((service) => service.id === formData.service)?.title || formData.service;
    openMail('Session enquiry', Object.entries({ ...requestData, service: selectedService }).map(([k, v]) => k + ': ' + v).join('\n'));
    setSubmitted(true);
    setErrorMsg('');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white max-w-xl w-full rounded-2xl shadow-2xl border border-[#E8DCE8] overflow-hidden relative max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#7F4B7C] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Calendar className="w-5 h-5 text-purple-200" />
            <div>
              <h3 className="font-serif text-lg font-bold">Schedule an Appointment</h3>
              <p className="text-xs text-purple-200">Dr Anne Rosario • Counselling Psychologist</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-purple-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-[#F1E8F1] text-[#7F4B7C] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-[#2C2C2C]">
                Your email is ready to send
              </h4>

              <div className="bg-[#FAF6EE] border border-[#E8DCE8] p-5 text-left rounded-2xl space-y-2 max-w-md mx-auto text-xs text-[#2C2C2C] shadow-xs">
                <div className="flex justify-between border-b border-gray-200 pb-1.5">
                  <span className="text-gray-500">Next step:</span>
                  <span className="font-mono font-bold text-[#7F4B7C]">Press send in your email app</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-1.5">
                  <span className="text-gray-500">Client Name:</span>
                  <span className="font-semibold">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-1.5">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-semibold">
                    {formData.service === 'other'
                      ? formData.otherService
                      : SERVICES_DATA.find((s) => s.id === formData.service)?.title || formData.service}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-1.5">
                  <span className="text-gray-500">Format:</span>
                  <span className="font-semibold capitalize">{formData.mode} Consultation</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-1.5">
                  <span className="text-gray-500">Time Preference:</span>
                  <span className="font-semibold">{formData.timeSlot}</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                Gmail should open a draft with this request. Please review and send it. A session is only arranged once Dr Anne replies by email (<span className="font-medium text-[#7F4B7C]">{formData.email}</span>).
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full transition-all flex items-center justify-center gap-2 shadow"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Notify via WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="bg-[#7F4B7C] hover:bg-[#5B3259] text-white text-xs font-semibold uppercase tracking-wider px-8 py-3 rounded-full transition-colors cursor-pointer"
                >
                  Close & Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs px-3.5 py-2 rounded-xl">
                  {errorMsg}
                </div>
              )}

              {/* Consultation Format Selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Consultation Format
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'online' })}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 border text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                      formData.mode === 'online'
                        ? 'border-[#7F4B7C] bg-[#F1E8F1] text-[#7F4B7C] shadow-xs'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <Video className="w-4 h-4" />
                    <span>Online Video</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, mode: 'in-person' })}
                    className={`flex items-center justify-center gap-2 py-2.5 px-3 border text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                      formData.mode === 'in-person'
                        ? 'border-[#7F4B7C] bg-[#F1E8F1] text-[#7F4B7C] shadow-xs'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <MapPin className="w-4 h-4" />
                    <span>In-Person</span>
                  </button>
                </div>
              </div>

              {/* Service Select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Select Area of Focus *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl p-2.5 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title} ({srv.duration})
                    </option>
                  ))}
                  <option value="other">Other</option>
                </select>
                {formData.service === 'other' && (
                  <input
                    type="text"
                    required
                    aria-label="Describe your area of focus"
                    placeholder="Please describe your area of focus"
                    value={formData.otherService}
                    onChange={(e) => setFormData({ ...formData, otherService: e.target.value })}
                    className="mt-2 w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl p-2.5 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                  />
                )}
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl pl-9 pr-3 py-2.5 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                  />
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl p-2.5 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                    Preferred Time Window
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl p-2.5 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                  >
                    <option value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (1:00 PM - 4:00 PM)">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 8:00 PM)">Evening (5:00 PM - 8:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                  Brief Note or What You’d Like to Discuss (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any context or questions you have before our session..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl p-2.5 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                />
              </div>

              {/* Privacy notice */}
              <div className="flex items-center gap-2 text-[11px] text-gray-500 bg-[#FAF6EE] p-3 border border-[#E8DCE8] rounded-xl">
                <ShieldCheck className="w-4 h-4 text-[#7F4B7C] flex-shrink-0" />
                <span>Your privacy matters. Dr Anne can explain how information is handled and any limits to confidentiality before counselling begins.</span>
              </div>

              {/* WhatsApp direct alternative button */}
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="text-gray-500">Prefer instant messaging?</span>
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#20bd5a] font-bold"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#7F4B7C] hover:bg-[#5B3259] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow hover:shadow-md cursor-pointer hover:scale-[1.01] active:scale-98"
                >
                  Prepare Email Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
