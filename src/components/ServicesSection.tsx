"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE_CONTENT } from "@/data/siteContent";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current || !sectionRef.current) return;

    const cards = gridRef.current.querySelectorAll(".service-card");

    if (cards.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.from(cards, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="skew-section py-24 md:py-32 lg:py-40"
      suppressHydrationWarning
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-accent"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Services
          </p>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
            data-cursor="text"
          >
            What We Offer
          </h2>
        </div>

        <div ref={gridRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SITE_CONTENT.services && SITE_CONTENT.services.length > 0 ? (
            SITE_CONTENT.services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative border border-white/10 bg-white/[0.02] p-8 transition-all hover:border-accent/50 hover:bg-white/[0.04]"
                style={{ opacity: 1 }}
              >
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                      service.addOn
                        ? "border border-secondary/50 text-secondary"
                        : "border border-accent/50 text-accent"
                    }`}
                  >
                    {service.addOn ? "Add-on" : "Included"}
                  </span>
                </div>
                <h3
                  className="mb-3 text-xl font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {service.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-text/60">
                  {service.description}
                </p>
                {service.includedIn && service.includedIn.length > 0 && (
                  <p className="text-xs text-text/40">
                    Included in: {service.includedIn.join(", ")}
                  </p>
                )}
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-text/60">
              No services available yet.
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="hero-cta">
            <span>Get a Quote</span>
            <ArrowRight size={16} className="hero-cta-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
