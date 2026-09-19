import React from 'react';
import { ShieldCheck, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  const lastUpdated = 'September 13, 2026';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16 space-y-6">
      {/* Breadcrumb back to home */}
      <div>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#6B6B6B] hover:text-[#0A0A0A] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Ctickers Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="card-bun space-y-3">
        <div className="chip-bun-pink">
          <ShieldCheck className="w-3.5 h-3.5" />
          Legal & Compliance
        </div>
        <h1 className="font-headline-lg text-3xl sm:text-5xl text-[#0A0A0A]">
          Privacy Policy
        </h1>
        <p className="font-mono text-xs text-[#6B6B6B]">
          Last Updated: <strong>{lastUpdated}</strong> • Effective for Ctickers (https://ctickers.com)
        </p>
        <p className="font-mono text-xs sm:text-sm text-[#0A0A0A] leading-relaxed pt-3 border-t border-[#E5E7EB]">
          Welcome to <strong>Ctickers</strong> ("we", "our", or "us"). We value your privacy and are committed to protecting any personal data you share with us. This Privacy Policy outlines how we collect, use, store, and disclose information when you visit our website, upload artwork for custom sticker production, browse our catalog, or interact with third-party developer integrations including Pinterest.
        </p>
      </div>

      {/* Document Body */}
      <div className="card-bun space-y-8 font-mono text-xs sm:text-sm text-[#0A0A0A] leading-relaxed">
        
        {/* Table of contents */}
        <nav aria-label="Table of Contents" className="p-4 bg-[#F7F7F7] border border-[#E5E7EB] space-y-2">
          <p className="font-bold text-[#0A0A0A] uppercase tracking-wider text-xs">Table of Contents</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#FF1F8F]">
            <a href="#section-1" className="hover:underline">1. Information We Collect</a>
            <a href="#section-2" className="hover:underline">2. How We Use Information</a>
            <a href="#section-3" className="hover:underline">3. User Uploads & Artwork Rights</a>
            <a href="#section-4" className="hover:underline">4. Pinterest API & Developer Services</a>
            <a href="#section-5" className="hover:underline">5. Cookies & Local Storage</a>
            <a href="#section-6" className="hover:underline">6. Data Security & Storage</a>
            <a href="#section-7" className="hover:underline">7. Your Privacy Rights</a>
            <a href="#section-8" className="hover:underline">8. Contact Us</a>
          </div>
        </nav>

        {/* Section 1 */}
        <section id="section-1" className="space-y-3 pt-2">
          <h2 className="font-sans font-bold text-lg text-[#0A0A0A] flex items-center gap-2">
            <span className="text-[#FF1F8F] font-mono">1.</span> Information We Collect
          </h2>
          <p className="text-[#6B6B6B]">
            When you use our demonstration site and services, we may collect the following types of information:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#6B6B6B]">
            <li>
              <strong className="text-[#0A0A0A]">Voluntarily Provided Information:</strong> When you send inquiries through our contact form, initiate order previews, or configure custom sticker batches, you provide your name, email address, order specifications, and messaging details.
            </li>
            <li>
              <strong className="text-[#0A0A0A]">Uploaded Content:</strong> Photos, graphics, SVG files, and imagery uploaded through our Custom Sticker tool to generate custom print previews.
            </li>
            <li>
              <strong className="text-[#0A0A0A]">Device and Technical Information:</strong> Browser type, operating system version, referring URLs, screen resolution, and time spent on pages to ensure optimal responsive performance.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section id="section-2" className="space-y-3 pt-4 border-t border-[#E5E7EB]">
          <h2 className="font-sans font-bold text-lg text-[#0A0A0A] flex items-center gap-2">
            <span className="text-[#FF1F8F] font-mono">2.</span> How We Use Your Information
          </h2>
          <p className="text-[#6B6B6B]">We process collected information for the following legitimate purposes:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#6B6B6B]">
            <li>To render interactive sticker proofs, calculate dynamic pricing, and maintain shopping cart state.</li>
            <li>To respond to customer support inquiries and provide technical assistance.</li>
            <li>To evaluate website performance and optimize developer tooling and interfaces.</li>
            <li>To fulfill regulatory and developer platform compliance, including Pinterest Developer terms.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section id="section-3" className="space-y-3 pt-4 border-t border-[#E5E7EB]">
          <h2 className="font-sans font-bold text-lg text-[#0A0A0A] flex items-center gap-2">
            <span className="text-[#FF1F8F] font-mono">3.</span> User Uploads & Artwork Rights
          </h2>
          <p className="text-[#0A0A0A] font-semibold">
            You retain 100% intellectual property ownership of any graphics, photos, or logos you upload to Ctickers.
          </p>
          <p className="text-[#6B6B6B]">
            Uploaded files are used strictly to generate your sticker mockups and facilitate print production. We do not sell, license, publicly display, or distribute your private custom artwork to third parties without your explicit permission.
          </p>
        </section>

        {/* Section 4 */}
        <section id="section-4" className="space-y-3 pt-4 border-t border-[#E5E7EB]">
          <h2 className="font-sans font-bold text-lg text-[#0A0A0A] flex items-center gap-2">
            <span className="text-[#FF1F8F] font-mono">4.</span> Pinterest API & Third-Party Developer Services
          </h2>
          <p className="text-[#6B6B6B]">
            Ctickers integrates with developer tools, including the <strong>Pinterest API</strong>, to allow users to discover design inspiration, view public boards, and save custom sticker concepts:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#6B6B6B]">
            <li>
              <strong className="text-[#0A0A0A]">Pinterest API Compliance:</strong> Our application adheres strictly to the{' '}
              <a
                href="https://developers.pinterest.com/terms/"
                target="_blank"
                rel="noreferrer"
                className="text-[#FF1F8F] hover:underline"
              >
                Pinterest Developer Terms of Service
              </a>{' '}
              and Pinterest API Guidelines.
            </li>
            <li>
              <strong className="text-[#0A0A0A]">Data Access:</strong> When Pinterest API features are authenticated, we request only the minimal permissions necessary to display design inspiration. We do not store or sell Pinterest user passwords or private personal data.
            </li>
            <li>
              <strong className="text-[#0A0A0A]">Revoking Access:</strong> Users can revoke third-party app permissions at any time through their Pinterest account security settings.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section id="section-5" className="space-y-3 pt-4 border-t border-[#E5E7EB]">
          <h2 className="font-sans font-bold text-lg text-[#0A0A0A] flex items-center gap-2">
            <span className="text-[#FF1F8F] font-mono">5.</span> Cookies & Local Storage
          </h2>
          <p className="text-[#6B6B6B]">
            Ctickers uses local storage and lightweight cookies strictly to remember demo shopping cart items and interface preferences between browser sessions. You may clear your browser cookies or storage at any time via your browser settings.
          </p>
        </section>

        {/* Section 6 */}
        <section id="section-6" className="space-y-3 pt-4 border-t border-[#E5E7EB]">
          <h2 className="font-sans font-bold text-lg text-[#0A0A0A] flex items-center gap-2">
            <span className="text-[#FF1F8F] font-mono">6.</span> Data Security & Storage
          </h2>
          <p className="text-[#6B6B6B]">
            We implement modern industry-standard security practices, including TLS/HTTPS encryption across all endpoints, strict access control, and sanitization of file uploads to protect your information against unauthorized access or disclosure.
          </p>
        </section>

        {/* Section 7 */}
        <section id="section-7" className="space-y-3 pt-4 border-t border-[#E5E7EB]">
          <h2 className="font-sans font-bold text-lg text-[#0A0A0A] flex items-center gap-2">
            <span className="text-[#FF1F8F] font-mono">7.</span> Your Privacy Rights
          </h2>
          <p className="text-[#6B6B6B]">Depending on your jurisdiction, you possess the right to:</p>
          <ul className="list-disc pl-5 space-y-1.5 text-[#6B6B6B]">
            <li>Request access to any personal information we hold about you.</li>
            <li>Request correction or deletion of your uploaded artwork or submitted contact messages.</li>
            <li>Opt out of any marketing emails or announcements at any time.</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section id="section-8" className="space-y-3 pt-4 border-t border-[#E5E7EB]">
          <h2 className="font-sans font-bold text-lg text-[#0A0A0A] flex items-center gap-2">
            <span className="text-[#FF1F8F] font-mono">8.</span> Contact Us
          </h2>
          <p className="text-[#6B6B6B]">
            If you have questions, feedback, or data privacy requests concerning this Privacy Policy or our developer integrations, please reach out to our privacy officer:
          </p>
          <div className="p-4 bg-[#F7F7F7] border border-[#E5E7EB] space-y-1">
            <p className="font-bold text-[#0A0A0A]">Ctickers Privacy & Developer Support</p>
            <p className="text-[#6B6B6B] flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-[#FF1F8F]" />
              <span>Email: </span>
              <a href="mailto:privacy@ctickers.com" className="text-[#FF1F8F] hover:underline">
                privacy@ctickers.com
              </a>
              <span className="text-[#9CA3AF]"> / </span>
              <a href="mailto:support@ctickers.com" className="text-[#FF1F8F] hover:underline">
                support@ctickers.com
              </a>
            </p>
            <p className="text-[#9CA3AF] text-xs">Website: https://ctickers.com</p>
          </div>
        </section>

      </div>
    </div>
  );
}
