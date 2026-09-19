import React, { useState } from 'react';
import {
  Mail,
  Send,
  Clock,
  CheckCircle2,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { InstagramIcon } from '../components/BrandIcons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      subject: 'General Inquiry',
      message: '',
    });
  };

  const faqs = [
    {
      q: 'Are Ctickers really 100% waterproof and dishwasher safe?',
      a: 'Yes. We print with commercial outdoor inks on heavy 6.0 mil vinyl, laminated with an outdoor UV-resistant film. They endure dishwashers, car washes, and direct sunlight without peeling.'
    },
    {
      q: 'What file formats can I upload for custom stickers?',
      a: 'We accept PNG, JPG, SVG, WebP, PDF, and PSD. Transparent PNGs and vector SVGs yield the crispest laser die-cut outlines.'
    },
    {
      q: 'How does the Pinterest Inspiration gallery work?',
      a: 'Our inspiration section allows you to explore trending aesthetic designs and convert them into tangible vinyl stickers. In the future, you will be able to link your own Pinterest account and print stickers directly from your private boards.'
    },
    {
      q: 'What is the turnaround time for custom orders?',
      a: 'Standard orders print within 24–48 hours and dispatch via 2–4 business day domestic ground shipping.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-[#E5E7EB]">
        <div className="chip-bun-pink">
          Support & Contact
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-5xl text-[#0A0A0A]">
          Contact Ctickers
        </h1>
        <p className="font-mono text-xs sm:text-sm text-[#6B6B6B] max-w-2xl">
          Have questions regarding custom bulk orders, developer API access, or sample packs? Reach out directly.
        </p>
      </div>

      {/* Main Grid: Channels + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Channels */}
        <div className="lg:col-span-5 space-y-4">
          <div className="card-bun space-y-3">
            <div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center">
              <Mail className="w-4 h-4 text-[#FF1F8F]" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-sm text-[#0A0A0A]">Email Support</h3>
              <p className="font-mono text-xs text-[#6B6B6B] mt-0.5">
                Our support crew replies to inquiries within 24 hours.
              </p>
            </div>
            <a
              href="mailto:support@ctickers.com"
              className="font-mono text-xs font-bold text-[#FF1F8F] hover:underline block"
            >
              support@ctickers.com
            </a>
          </div>

          <div className="card-bun space-y-3">
            <div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center">
              <InstagramIcon className="w-4 h-4 text-[#FF1F8F]" />
            </div>
            <div>
              <h3 className="font-sans font-bold text-sm text-[#0A0A0A]">Instagram Community</h3>
              <p className="font-mono text-xs text-[#6B6B6B] mt-0.5">
                Tag us in your sticker haul for a chance to be featured.
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs font-bold text-[#0A0A0A] hover:text-[#FF1F8F] flex items-center gap-2"
            >
              <span>@ctickers_official</span>
              <span className="chip-bun text-[10px] py-0">Official</span>
            </a>
          </div>

          <div className="bg-[#F7F7F7] border border-[#E5E7EB] p-4 text-xs font-mono text-[#6B6B6B] space-y-2">
            <div className="flex items-center gap-2 font-bold text-[#0A0A0A]">
              <Clock className="w-4 h-4 text-[#0A0A0A]" />
              <span>Studio Working Hours</span>
            </div>
            <p>Monday – Friday: 9:00 AM – 6:00 PM EST</p>
            <p>Saturday – Sunday: On-call for urgent print proof approvals</p>
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className="lg:col-span-7 card-bun p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4 font-mono">
              <div className="w-12 h-12 bg-[#0A0A0A] text-[#FF1F8F] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-xl text-[#0A0A0A]">Message Received</h3>
              <p className="text-xs text-[#6B6B6B] max-w-md mx-auto">
                Thank you for reaching out, <strong>{formData.name}</strong>. We will reply to <strong>{formData.email}</strong> shortly.
              </p>
              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="btn-secondary text-xs"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-sans font-bold text-lg text-[#0A0A0A]">Send Inquiry</h3>
                <p className="font-mono text-xs text-[#6B6B6B] mt-0.5">
                  Fill in the details below and we will respond promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
                <div className="space-y-1.5">
                  <label className="text-xs text-[#0A0A0A] font-semibold">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full input-bun text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-[#0A0A0A] font-semibold">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full input-bun text-xs"
                  />
                </div>
              </div>

              <div className="space-y-1.5 font-mono">
                <label className="text-xs text-[#0A0A0A] font-semibold">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full input-bun text-xs cursor-pointer"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Custom Sticker Bulk Quote">Custom Sticker Bulk Quote (500+)</option>
                  <option value="Pinterest Developer App Inquiry">Pinterest Developer App Inquiry</option>
                  <option value="Sample Pack Request">Sample Pack Request</option>
                  <option value="Feedback & Ideas">Feedback & Ideas</option>
                </select>
              </div>

              <div className="space-y-1.5 font-mono">
                <label className="text-xs text-[#0A0A0A] font-semibold">Message *</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what stickers you're envisioning or how we can help..."
                  className="w-full input-bun text-xs resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-secondary text-sm py-3 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="space-y-4 pt-6 border-t border-[#E5E7EB]">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-[#FF1F8F]" />
          <h2 className="font-sans font-bold text-xl text-[#0A0A0A]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#E5E7EB] bg-white transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-4 text-left font-sans font-bold text-sm text-[#0A0A0A] flex items-center justify-between hover:bg-[#F7F7F7] cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#6B6B6B] transition-transform duration-150 ${
                    openFaq === index ? 'rotate-180 text-[#FF1F8F]' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 pt-1 font-mono text-xs text-[#6B6B6B] leading-relaxed border-t border-[#E5E7EB] bg-[#F7F7F7]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
