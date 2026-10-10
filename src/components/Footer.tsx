"use client";

import { useRef, useCallback } from "react";
import { Github, Linkedin, Twitter, Instagram, ArrowRight, Mail, MessageCircle } from "lucide-react";
import gsap from "gsap";
import { SITE_CONTENT } from "@/data/siteContent";

const FOOTER_NAV = SITE_CONTENT.navigation.filter((link) => link.href !== "#contact");

function MagneticIcon({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ size?: number }>;
  label: string;
  href?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(ref.current, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  return (
    <a
      ref={ref}
      href={href || "#"}
      className="magnetic-icon"
      aria-label={label}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Icon size={20} />
    </a>
  );
}

export default function Footer() {
  const hasSocialLinks = Object.values(SITE_CONTENT.contact.social || {}).some(Boolean);

  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Brand & CTA */}
        <div className="mb-12 text-center lg:text-left">
          <h2
            className="mb-2 text-2xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {SITE_CONTENT.brand.name}
          </h2>
          <p className="mb-6 text-sm text-text/60">{SITE_CONTENT.brand.description}</p>
          <a href="#contact" className="hero-cta inline-flex">
            <span>{SITE_CONTENT.brand.hero.secondaryCta}</span>
            <ArrowRight size={16} className="hero-cta-arrow" />
          </a>
        </div>

        {/* Navigation */}
        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4
              className="mb-4 text-sm font-bold uppercase tracking-widest text-text"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4
              className="mb-4 text-sm font-bold uppercase tracking-widest text-text"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              {SITE_CONTENT.contact.email && (
                <li>
                  <a
                    href={`mailto:${SITE_CONTENT.contact.email}`}
                    className="footer-link flex items-center gap-2"
                  >
                    <Mail size={14} />
                    {SITE_CONTENT.contact.email}
                  </a>
                </li>
              )}
              {SITE_CONTENT.contact.whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${SITE_CONTENT.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link flex items-center gap-2"
                  >
                    <MessageCircle size={14} />
                    {SITE_CONTENT.contact.whatsapp}
                  </a>
                </li>
              )}
              {!SITE_CONTENT.contact.email && !SITE_CONTENT.contact.whatsapp && (
                <li className="text-sm text-text/40">Contact info coming soon</li>
              )}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/5" />

        {/* Bottom: social + copyright */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {hasSocialLinks && (
            <div className="flex gap-4">
              {SITE_CONTENT.contact.social?.github && (
                <MagneticIcon icon={Github} label="GitHub" href={SITE_CONTENT.contact.social.github} />
              )}
              {SITE_CONTENT.contact.social?.linkedin && (
                <MagneticIcon icon={Linkedin} label="LinkedIn" href={SITE_CONTENT.contact.social.linkedin} />
              )}
              {SITE_CONTENT.contact.social?.twitter && (
                <MagneticIcon icon={Twitter} label="Twitter" href={SITE_CONTENT.contact.social.twitter} />
              )}
              {SITE_CONTENT.contact.social?.instagram && (
                <MagneticIcon icon={Instagram} label="Instagram" href={SITE_CONTENT.contact.social.instagram} />
              )}
            </div>
          )}

          <p
            className="text-sm text-text/30"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            &copy; {new Date().getFullYear()} {SITE_CONTENT.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
