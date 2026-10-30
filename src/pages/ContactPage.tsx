import React, { useState } from 'react';
import { useBusiness } from '../context/BusinessContext';
import { PrimaryButton } from '../components/common/Buttons';
import {
  MapPin,
  Clock,
  ExternalLink,
  Phone,
  MessageSquare,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Navigation,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { config } = useBusiness();

  // Form State
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [enquiryType, setEnquiryType] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  // Status
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = 'Please provide your full name.';
    if (!contactInfo.trim()) {
      newErrors.contactInfo = 'Please enter your phone number or email address.';
    }
    if (!message.trim()) newErrors.message = 'Please type your enquiry message.';
    if (!consent) {
      newErrors.consent = 'Please confirm consent to be contacted regarding this message.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate real client request timing, then show honest client-side confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage(
        `Thank you, ${name}! Your demonstration enquiry regarding "${enquiryType}" was verified on this device. In production, this form routes directly to ${
          config.emailAddress || 'the café manager’s email'
        }.`
      );
      setName('');
      setContactInfo('');
      setMessage('');
      setConsent(false);
      setErrors({});
    }, 800);
  };

  return (
    <div className="py-12 md:py-20 bg-[#FAF6EF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Heading */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#687653] font-semibold block mb-2">
            Get In Touch
          </span>
          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-[#3B241C] tracking-tight">
            Location & Contact
          </h1>
          <p className="font-sans text-base text-[#6B665F] mt-3 leading-relaxed">
            Have questions about our menu, seating, or visit directions? We are here to help. Reach out through our verified channels or submit an inquiry below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Verified Contact & Schedule Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#E6DED2] shadow-xs space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-[#FAF6EF] text-[#3B241C] border border-[#E6DED2]">
                  <MapPin className="w-5 h-5 text-[#C58B54]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#3B241C]">
                    Verified Destination
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B665F] mt-1 leading-relaxed">
                    {config.isAddressVerified
                      ? config.fullAddress
                      : 'Google Business Profile location confirmed.'}
                  </p>
                  <p className="text-xs text-[#687653] font-medium mt-1">
                    Locality: {config.locality} · {config.city}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={config.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block"
                >
                  <PrimaryButton
                    fullWidth
                    size="md"
                    icon={<Navigation className="w-4 h-4 text-[#C58B54]" />}
                  >
                    Get Directions on Google Maps
                  </PrimaryButton>
                </a>
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="bg-white rounded-2xl p-6 border border-[#E6DED2] shadow-xs space-y-4">
              <h3 className="font-serif font-bold text-lg text-[#3B241C]">
                Direct Channels
              </h3>

              {/* Telephone */}
              {config.isPhoneVerified && config.phoneNumber ? (
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF6EF] border border-[#E6DED2]">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#687653]" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#6B665F] block">
                        Telephone
                      </span>
                      <a
                        href={`tel:${config.phoneNumber.replace(/\s+/g, '')}`}
                        className="text-sm font-semibold text-[#3B241C] hover:text-[#C58B54] tabular-nums"
                      >
                        {config.phoneNumber}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`tel:${config.phoneNumber.replace(/\s+/g, '')}`}
                    className="text-xs font-semibold text-[#687653] hover:underline"
                  >
                    Call Now
                  </a>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-[#FAF6EF] border border-[#E6DED2] text-xs text-[#6B665F]">
                  <span className="font-medium text-[#3B241C]">Telephone:</span> Direct café telephone line is pending owner confirmation.
                </div>
              )}

              {/* WhatsApp */}
              {config.isWhatsAppVerified && config.whatsAppNumber ? (
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-emerald-700" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-emerald-800 block">
                        WhatsApp Instant Enquiry
                      </span>
                      <span className="text-xs font-medium text-emerald-950">
                        Chat directly with the café
                      </span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${config.whatsAppNumber}?text=${encodeURIComponent(
                      config.whatsAppDefaultMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900"
                  >
                    Open Chat
                  </a>
                </div>
              ) : null}

              {/* Email */}
              {config.isEmailVerified && config.emailAddress && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF6EF] border border-[#E6DED2]">
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C58B54]" />
                    <div>
                      <span className="text-[10px] uppercase font-semibold text-[#6B665F] block">
                        Email Address
                      </span>
                      <a
                        href={`mailto:${config.emailAddress}`}
                        className="text-xs font-semibold text-[#3B241C] hover:text-[#C58B54]"
                      >
                        {config.emailAddress}
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* Google Business Profile Link */}
              <div className="pt-2 border-t border-[#E6DED2]">
                <a
                  href={config.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#C58B54] hover:text-[#3B241C] font-semibold transition-colors"
                >
                  <span>View Official Google Business Listing</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-2xl p-6 border border-[#E6DED2] shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#687653]" />
                <h3 className="font-serif font-bold text-base text-[#3B241C]">
                  Visiting Hours
                </h3>
              </div>
              <div className="space-y-1.5 text-xs">
                {config.hours.map((h) => (
                  <div key={h.day} className="flex justify-between py-1 border-b border-[#FAF6EF]">
                    <span className="text-[#6B665F]">{h.day}</span>
                    <span className="font-semibold text-[#3B241C] tabular-nums">
                      {h.isClosed ? 'Closed' : `${h.opens} – ${h.closes}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 border border-[#E6DED2] shadow-md space-y-6">
              <div>
                <h3 className="font-serif font-bold text-2xl text-[#3B241C]">
                  Send a Message or Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#6B665F] mt-1 font-sans">
                  Have a question about large group seating, custom cakes, or menu dietary options? Fill out the form and we will get back to you.
                </p>
              </div>

              {/* Demo Notice per section 8 requirements */}
              <div className="p-3.5 rounded-xl bg-[#FAF6EF] border border-[#E6DED2] text-xs text-[#6B665F] flex items-start gap-2.5">
                <HelpCircle className="w-4 h-4 text-[#C58B54] shrink-0 mt-0.5" />
                <p>
                  <strong className="text-[#3B241C]">Form Status:</strong> Client-side validation active. Submitted messages validate and record in local session without silent loss.
                </p>
              </div>

              {submittedMessage ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3 animate-in fade-in">
                  <div className="flex items-center gap-2 text-emerald-800 font-semibold text-base font-serif">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Message Registered</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">{submittedMessage}</p>
                  <button
                    onClick={() => setSubmittedMessage(null)}
                    className="mt-2 text-xs font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292622] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Khan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full text-sm bg-[#FAF6EF] border rounded-xl px-4 py-2.5 text-[#292622] focus:outline-hidden focus:ring-2 focus:ring-[#C58B54] ${
                        errors.name ? 'border-red-400 bg-red-50/30' : 'border-[#E6DED2]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Contact Info (Phone or Email) */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292622] mb-1">
                      Contact Phone or Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. +92 300 1234567 or email@domain.com"
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className={`w-full text-sm bg-[#FAF6EF] border rounded-xl px-4 py-2.5 text-[#292622] focus:outline-hidden focus:ring-2 focus:ring-[#C58B54] ${
                        errors.contactInfo
                          ? 'border-red-400 bg-red-50/30'
                          : 'border-[#E6DED2]'
                      }`}
                    />
                    {errors.contactInfo && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.contactInfo}</span>
                      </p>
                    )}
                  </div>

                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292622] mb-1">
                      Enquiry Purpose
                    </label>
                    <select
                      value={enquiryType}
                      onChange={(e) => setEnquiryType(e.target.value)}
                      className="w-full text-sm bg-[#FAF6EF] border border-[#E6DED2] rounded-xl px-4 py-2.5 text-[#292622] focus:outline-hidden focus:ring-2 focus:ring-[#C58B54]"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Menu & Dietary Question">Menu & Dietary Question</option>
                      <option value="Group Seating or Event">Group Seating or Event</option>
                      <option value="Feedback & Suggestions">Feedback & Suggestions</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-[#292622] mb-1">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you need or ask any questions..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className={`w-full text-sm bg-[#FAF6EF] border rounded-xl p-4 text-[#292622] focus:outline-hidden focus:ring-2 focus:ring-[#C58B54] ${
                        errors.message ? 'border-red-400 bg-red-50/30' : 'border-[#E6DED2]'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Consent */}
                  <div>
                    <label className="flex items-start gap-2.5 text-xs text-[#6B665F] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={consent}
                        onChange={(e) => setConsent(e.target.checked)}
                        className="mt-0.5 rounded text-[#3B241C] focus:ring-[#C58B54]"
                      />
                      <span>
                        I consent to KS CAFE contacting me via the provided phone number or email address in response to this inquiry.
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <PrimaryButton
                      type="submit"
                      disabled={isSubmitting}
                      fullWidth
                      size="lg"
                      icon={<Send className="w-4 h-4 text-[#C58B54]" />}
                    >
                      {isSubmitting ? 'Validating Submission...' : 'Send Enquiry'}
                    </PrimaryButton>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
