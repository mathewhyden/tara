import React, { useState } from 'react';
import { openMail } from '../data/siteData';
import {
  Phone,
  Mail,
  Clock,
  Instagram,
  Linkedin,
  MapPin,
  Send,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ShieldCheck,
  MessageCircle,
} from 'lucide-react';
import { BRAND_INFO, FAQS_DATA, emailComposeUrl } from '../data/siteData';

interface ContactPageProps {
  setCurrentPage: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }
    openMail('Website enquiry', Object.entries(formData).map(([k, v]) => k + ': ' + v).join('\n'));
    setFormSubmitted(true);
    setErrorMessage('');
  };

  return (
    <div className="w-full">
      {/* Title Banner */}
      <section className="bg-[#2f1b30] text-white py-16 px-4 border-b border-[#7F4B7C]/40 text-center">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-200">
            Connect With Us
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-3">
            Contact Dr Anne Rosario
          </h1>
          
        </div>
      </section>

      {/* 3 Prominent Contact Information Cards (Soft Rounded-2xl Cards) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Phone & WhatsApp */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8DCE8] text-center hover:border-[#7F4B7C] transition-all shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#F1E8F1] text-[#7F4B7C] flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Direct Phone & WhatsApp
              </span>
              <h3 className="font-serif text-lg font-bold text-[#2C2C2C] mt-1 mb-2">
                Call / WhatsApp
              </h3>
              <a
                href={`tel:${BRAND_INFO.phone}`}
                className="text-sm font-semibold text-[#7F4B7C] hover:text-[#5B3259] transition-colors block"
              >
                {BRAND_INFO.phoneDisplay}
              </a>
              <p className="text-xs text-gray-500 mt-2">
                {BRAND_INFO.consultationHours}
              </p>
            </div>

            <div className="pt-5">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow hover:shadow-md cursor-pointer hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8DCE8] text-center hover:border-[#7F4B7C] transition-all shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#F1E8F1] text-[#7F4B7C] flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Email Correspondence
              </span>
              <h3 className="font-serif text-lg font-bold text-[#2C2C2C] mt-1 mb-2">
                Email Address
              </h3>
              <a
                href={emailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#7F4B7C] hover:text-[#5B3259] transition-colors block break-all"
              >
                {BRAND_INFO.email}
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Email for private enquiries
              </p>
            </div>

            <div className="pt-5">
              <a
                href={emailComposeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-[#7F4B7C] text-[#7F4B7C] hover:bg-[#7F4B7C] hover:text-white py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Write An Email</span>
              </a>
            </div>
          </div>

          {/* Card 3: Social & Professional */}
          <div className="bg-white p-8 rounded-2xl border border-[#E8DCE8] text-center hover:border-[#7F4B7C] transition-all shadow-sm hover:shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 rounded-full bg-[#F1E8F1] text-[#7F4B7C] flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Social & Network
              </span>
              <h3 className="font-serif text-lg font-bold text-[#2C2C2C] mt-1 mb-2">
                Connect Online
              </h3>
              <div className="flex flex-col gap-1 items-center">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#7F4B7C] hover:underline"
                >
                  Instagram: {BRAND_INFO.instagramHandle}
                </a>
                <a
                  href={BRAND_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#7F4B7C] hover:underline"
                >
                  LinkedIn: {BRAND_INFO.linkedinName}
                </a>
              </div>
            </div>

            <div className="pt-5">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 border border-[#7F4B7C] text-[#7F4B7C] hover:bg-[#7F4B7C] hover:text-white py-2.5 px-4 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Form & Practice Notes Section */}
      <section className="py-16 bg-[#FAF6EE] border-t border-[#E8DCE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column (col-span-7) - Crisp Box Card Shape for Visual Contrast */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#E8DCE8] rounded-none shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4B7C]">
                Send a Message
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C] mt-2 mb-3">
                Get In Touch
              </h2>
              <p className="text-xs text-gray-600 mb-6 leading-relaxed">
                Whether you have questions regarding consultations, session structure, or scheduling, please submit your inquiry below.
              </p>

              {errorMessage && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 text-xs p-3 mb-4 rounded-xl">
                  {errorMessage}
                </div>
              )}

              {formSubmitted ? (
                <div className="p-8 bg-[#F1E8F1] border border-[#7F4B7C] text-center space-y-3 rounded-2xl">
                  <div className="w-12 h-12 bg-[#7F4B7C] text-white rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#2C2C2C]">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-gray-700 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Gmail should open a draft with your message. Please review and send it; Dr Anne can reply by email (<span className="font-semibold text-[#7F4B7C]">{formData.email}</span>).
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                    }}
                    className="text-xs font-bold uppercase tracking-wider text-[#7F4B7C] underline pt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl p-3 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl p-3 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl p-3 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="General Inquiry / Consultation Question"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl p-3 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Please share how Dr Anne Rosario can assist you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FAF6EE] border border-[#E8DCE8] rounded-xl p-3 text-xs text-[#2C2C2C] focus:outline-none focus:border-[#7F4B7C]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#7F4B7C] hover:bg-[#5B3259] text-white py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Column (col-span-5) - Rounded-2xl Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-8 border border-[#E8DCE8] rounded-2xl shadow-sm">
                <h3 className="font-serif text-xl font-bold text-[#2C2C2C] mb-4 cloe-border-bottom-left">
                  Practice Information
                </h3>
                <div className="space-y-4 text-xs text-gray-600 leading-relaxed pt-2">
                  <div>
                    <span className="font-bold text-[#2C2C2C] block">Psychologist:</span>
                    <span>{BRAND_INFO.doctorName}, {BRAND_INFO.title}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#2C2C2C] block">Brand:</span>
                    <span>{BRAND_INFO.brandName} ({BRAND_INFO.tagline})</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#2C2C2C] block">Consultation Availability:</span>
                    <span>{BRAND_INFO.consultationHours}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#2C2C2C] block">Formats:</span>
                    <span>{BRAND_INFO.consultationType}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex items-center gap-2 text-[#7F4B7C] font-semibold">
                    <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                    <span>{BRAND_INFO.confidentialityNotice}</span>
                  </div>
                </div>

              </div>

              {/* Consultation Note - Rounded-2xl */}
              <div className="bg-[#F1E8F1] p-6 border-l-4 border-[#7F4B7C] text-xs text-gray-700 space-y-2 rounded-2xl shadow-xs">
                <span className="font-bold uppercase tracking-wider text-[#7F4B7C] block">
                  Important Note
                </span>
                <p>
                  Tara Mindcare provides outpatient counselling psychology services. If you or someone you know is in severe emergency crisis, please reach out immediately to your nearest emergency medical hospital or specialized national crisis helpline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section (Rounded-2xl Cards) */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7F4B7C]">
            Common Questions
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2C2C] mt-1 cloe-border-bottom">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#E8DCE8] rounded-2xl overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left p-5 flex items-center justify-between text-sm font-semibold text-[#2C2C2C] hover:text-[#7F4B7C] transition-colors cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#7F4B7C] transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-50 bg-[#FAF6EE]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
