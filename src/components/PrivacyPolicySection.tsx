export default function PrivacyPolicySection() {
  const sections = [
    {
      title: "1. Information We Collect",
      text:
        "Montra may collect information you provide directly through our website, including your name, brand name, project details, email address, and WhatsApp contact details when you submit an inquiry or request a quote. We may also collect limited technical information such as browser type, device type, page activity, and referral data to help improve the site and user experience.",
    },
    {
      title: "2. How We Use Your Information",
      text:
        "We use the information we collect to respond to inquiries, prepare proposals, provide project support, improve our website and services, and communicate about your project. We do not sell or rent personal information to third parties for marketing purposes.",
    },
    {
      title: "3. Communication and Project Inquiry Data",
      text:
        "If you use our contact form, WhatsApp, or email channels, we may store or process the details you provide to understand your project requirements, send follow-up communication, and assist with your request. By contacting us, you agree that the information you provide is accurate and necessary to address your inquiry.",
    },
    {
      title: "4. Cookies and Analytics",
      text:
        "We may use cookies, analytics tools, or similar technologies to understand website usage, improve performance, and assess which parts of the site are most useful. You may disable cookies in your browser settings, though some website features may not function as expected.",
    },
    {
      title: "5. Third-Party Services",
      text:
        "Our website may use third-party tools for analytics, hosting, email delivery, or communication. These providers may process information in accordance with their own privacy policies. We take reasonable steps to work only with providers that meet our standards for privacy and security.",
    },
    {
      title: "6. Data Security",
      text:
        "We apply reasonable organizational and technical safeguards to help protect personal information from unauthorized access, alteration, disclosure, or destruction. However, no digital system can be guaranteed completely secure, and we encourage users to use caution when transmitting sensitive information online.",
    },
    {
      title: "7. Your Rights",
      text:
        "Depending on applicable law, you may have the right to request access to, correction of, or deletion of personal data you have provided to us, as well as to object to or restrict certain processing. If you would like to make a privacy request or ask a question, please contact us using the website contact form or the WhatsApp contact option available on the site.",
    },
    {
      title: "8. Retention",
      text:
        "We retain personal information only as long as needed to fulfill the purpose for which it was collected, comply with legal obligations, resolve disputes, and enforce agreements. When information is no longer necessary, it will be deleted or anonymized where appropriate.",
    },
    {
      title: "9. Updates to This Policy",
      text:
        "Montra may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or service offerings. Any updates will be reflected on this page with a revised effective date. This policy should be reviewed by legal counsel before publication if additional business details, jurisdiction-specific requirements, or formal privacy notices are required.",
    },
  ];

  return (
    <section id="privacy-policy" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-accent"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Privacy Policy
          </p>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
            data-cursor="text"
          >
            Privacy Policy
          </h2>
        </div>

        <div className="space-y-6 rounded border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <p className="text-sm leading-relaxed text-text/70">
            This Privacy Policy explains how Montra collects, uses, stores, and protects personal information when you visit our website or communicate with us about a project.
          </p>

          {sections.map((section) => (
            <div key={section.title} className="border-t border-white/10 pt-6 first:border-t-0 first:pt-0">
              <h3
                className="mb-3 text-lg font-semibold text-text"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {section.title}
              </h3>
              <p className="text-sm leading-relaxed text-text/70">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
