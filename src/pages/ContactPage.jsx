import React, { useState } from 'react';
import {
  Mail,
  Send,
  MessageSquare,
  Sparkles,
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
      a: 'Yes! We print with premium commercial inks on thick vinyl, laminated with an outdoor UV-resistant film. They will withstand dishwashers, car washes, rain, and direct sunlight without fading.'
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
      a: 'Standard orders print within 24–48 hours and arrive via 2–4 business day domestic ground shipping.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16 space-y-10 sm:space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2.5 sm:space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>We'd Love To Hear From You</span>
        </div>
        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Contact Ctickers
        </h1>
        <p className="text-slate-600 text-xs sm:text-base">
          Have a question about custom bulk orders, special finishes, or developer inquiries? Drop us a note anytime.
        </p>
      </div>

      {/* Main Grid: Info Cards + Contact Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* LEFT COLUMN: Channels & Socials */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          {/* Email card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900">Email Support</h3>
              <p className="text-xs text-slate-500 mt-1">
                Our support crew replies to inquiries within 24 hours.
              </p>
            </div>
            <a
              href="mailto:support@ctickers.com"
              className="inline-block text-sm sm:text-base font-bold text-rose-600 hover:underline break-all"
            >
              support@ctickers.com
            </a>
          </div>

          {/* Instagram Placeholder Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm space-y-3 sm:space-y-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center">
              <InstagramIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-slate-900">Instagram Community</h3>
              <p className="text-xs text-slate-500 mt-1">
                Tag us in your sticker haul for a chance to be featured in our monthly drop showcase.
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm sm:text-base font-bold text-fuchsia-600 hover:underline"
            >
              <span>@ctickers_official</span>
              <span className="text-[10px] sm:text-xs bg-fuchsia-100 text-fuchsia-700 px-2 py-0.5 rounded-full ml-1 sm:ml-2">Official</span>
            </a>
          </div>

          {/* Operating hours & pledge */}
          <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200 text-xs text-slate-600 space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Clock className="w-4 h-4 text-slate-500" />
              <span>Studio Working Hours</span>
            </div>
            <p>Monday – Friday: 9:00 AM – 6:00 PM EST</p>
            <p>Saturday – Sunday: Email on-call for urgent print proof approvals</p>
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200/90 shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Message Received!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for reaching out to Ctickers, <strong>{formData.name}</strong>. We've logged your message and will get back to <strong>{formData.email}</strong> shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-xl font-black text-slate-900">Send Us a Note</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in the details below and we'll respond promptly.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Subject</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all cursor-pointer"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Custom Sticker Bulk Quote">Custom Sticker Bulk Quote (500+)</option>
                  <option value="Pinterest Developer App Inquiry">Pinterest Developer App Inquiry</option>
                  <option value="Sample Pack Request">Sample Pack Request</option>
                  <option value="Feedback & Ideas">Feedback & Ideas</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700">Message *</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what stickers you're envisioning or how we can help..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:bg-white transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-[1.01]"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Frequently Asked Questions Accordion */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <HelpCircle className="w-8 h-8 text-rose-500 mx-auto" />
          <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
          <p className="text-xs text-slate-500">Quick answers to common questions about Ctickers production</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 pt-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full p-4 text-left font-bold text-sm text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                    openFaq === index ? 'rotate-180 text-rose-500' : ''
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
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
