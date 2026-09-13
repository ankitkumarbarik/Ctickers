import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 13, 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Breadcrumb back to home */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-rose-600 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Ctickers Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Legal & Compliance</span>
        </div>
        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-xs sm:text-sm text-slate-500">
          Last Updated: <strong>{lastUpdated}</strong> • Effective for Ctickers (https://ctickers.com)
        </p>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2 border-t border-slate-100">
          Welcome to <strong>Ctickers</strong> ("we", "our", or "us"). We value your privacy and are committed to protecting any personal data you share with us. This Privacy Policy outlines how we collect, use, store, and disclose information when you visit our website, upload artwork for custom sticker production, browse our catalog, or interact with third-party developer integrations including Pinterest.
        </p>
      </div>

      {/* Document Body */}
      <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8 sm:space-y-10 text-slate-700 text-xs sm:text-sm md:text-base leading-relaxed">
        
        {/* Table of contents shortcut */}
        <nav aria-label="Table of Contents" className="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200 text-xs space-y-2">
          <p className="font-bold text-slate-900 uppercase tracking-wider">Quick Navigation</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-rose-600 font-semibold">
            <a href="#section-1" className="hover:underline">1. Information We Collect</a>
            <a href="#section-2" className="hover:underline">2. How We Use Information</a>
            <a href="#section-3" className="hover:underline">3. User Uploads & Artwork Rights</a>
            <a href="#section-4" className="hover:underline">4. Pinterest API & Third-Party Services</a>
            <a href="#section-5" className="hover:underline">5. Cookies & Tracking Technologies</a>
            <a href="#section-6" className="hover:underline">6. Data Security & Storage</a>
            <a href="#section-7" className="hover:underline">7. Your Privacy Rights (GDPR & CCPA)</a>
            <a href="#section-8" className="hover:underline">8. Contact Us & Inquiries</a>
          </div>
        </nav>

        {/* Section 1 */}
        <section id="section-1" className="space-y-3 pt-2">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-rose-500 font-mono">1.</span> Information We Collect
          </h2>
          <p>
            When you use our demonstration site and services, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
            <li>
              <strong>Voluntarily Provided Information:</strong> When you send inquiries through our contact form, subscribe to our newsletter, or initiate order previews, you may provide your name, email address, order specifications, and messaging details.
            </li>
            <li>
              <strong>Uploaded Content:</strong> Photos, graphics, SVG files, and imagery uploaded through our Custom Sticker tool to generate custom print previews.
            </li>
            <li>
              <strong>Device and Usage Information:</strong> Browser type, operating system version, referring URLs, screen resolution, and time spent on pages to ensure a seamless responsive user experience.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-rose-500 font-mono">2.</span> How We Use Your Information
          </h2>
          <p>We process collected information for the following legitimate purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
            <li>To render interactive sticker proofs, calculate dynamic pricing, and maintain your shopping cart.</li>
            <li>To respond to customer support inquiries and provide technical assistance.</li>
            <li>To evaluate website performance, improve user interface designs, and optimize mobile responsiveness.</li>
            <li>To fulfill regulatory and developer platform compliance, including Pinterest Developer terms.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-rose-500 font-mono">3.</span> User Uploads & Artwork Rights
          </h2>
          <p>
            You retain 100% intellectual property ownership of any graphics, photos, or logos you upload to Ctickers.
          </p>
          <p className="text-sm text-slate-600">
            Uploaded files are used strictly to generate your sticker mockups and facilitate print production. We do not sell, license, publicly display, or distribute your private custom artwork to third parties without your explicit permission.
          </p>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-rose-500 font-mono">4.</span> Pinterest API & Third-Party Developer Services
          </h2>
          <p>
            Ctickers integrates with developer tools, including the <strong>Pinterest API</strong>, to allow users to discover design inspiration, view public boards, and save custom sticker concepts:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
            <li>
              <strong>Pinterest API Compliance:</strong> Our application adheres strictly to the{' '}
              <a
                href="https://developers.pinterest.com/terms/"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 hover:underline font-medium"
              >
                Pinterest Developer Terms of Service
              </a>{' '}
              and Pinterest API Guidelines.
            </li>
            <li>
              <strong>Data Access:</strong> When Pinterest API features are authenticated, we request only the minimal permissions (such as public board reading and pin retrieval) necessary to display design inspiration. We do not store or sell Pinterest user passwords or private personal data.
            </li>
            <li>
              <strong>Revoking Access:</strong> Users can revoke third-party app permissions at any time through their Pinterest account security settings.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-rose-500 font-mono">5.</span> Cookies & Local Storage
          </h2>
          <p>
            Ctickers uses local storage and lightweight cookies strictly to remember your demo shopping cart items and interface preferences between browser sessions. You may clear your browser cookies or storage at any time via your browser settings.
          </p>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-rose-500 font-mono">6.</span> Data Security & Storage
          </h2>
          <p>
            We implement modern industry-standard security practices, including TLS/HTTPS encryption across all endpoints, strict access control, and sanitization of file uploads to protect your information against unauthorized access or disclosure.
          </p>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-rose-500 font-mono">7.</span> Your Privacy Rights (GDPR & CCPA)
          </h2>
          <p>Depending on your jurisdiction, you possess the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-sm">
            <li>Request access to any personal information we hold about you.</li>
            <li>Request correction or deletion of your uploaded artwork or submitted contact messages.</li>
            <li>Opt out of any marketing emails or announcements at any time.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section id="section-8" className="space-y-3 pt-4 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
            <span className="text-rose-500 font-mono">8.</span> Contact Us
          </h2>
          <p>
            If you have questions, feedback, or data privacy requests concerning this Privacy Policy or our developer integrations, please reach out to our privacy officer:
          </p>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-sm space-y-1">
            <p className="font-bold text-slate-900">Ctickers Privacy & Developer Support</p>
            <p className="text-slate-600 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-rose-500" />
              <span>Email: </span>
              <a href="mailto:privacy@ctickers.com" className="text-rose-600 hover:underline font-medium">
                privacy@ctickers.com
              </a>
              <span className="text-slate-400"> / </span>
              <a href="mailto:support@ctickers.com" className="text-rose-600 hover:underline font-medium">
                support@ctickers.com
              </a>
            </p>
            <p className="text-slate-500 text-xs">Website: https://ctickers.com</p>
          </div>
        </section>

      </div>
    </div>
  );
}
