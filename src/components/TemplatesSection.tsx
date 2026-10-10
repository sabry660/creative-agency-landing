"use client";

import { SITE_CONTENT, Template } from "@/data/siteContent";
import { ArrowRight } from "lucide-react";

export default function TemplatesSection() {
  return (
    <section id="templates" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-accent"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Templates
          </p>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
            data-cursor="text"
          >
            Ready-Made Templates
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text/60">
            Purchase template source code and customize it yourself. Starting at EGP{" "}
            {SITE_CONTENT.templates.basePrice.toLocaleString()}.
          </p>
        </div>

        {SITE_CONTENT.templates.items && SITE_CONTENT.templates.items.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SITE_CONTENT.templates.items.map((template) => (
              <div
                key={template.id}
                className="border border-white/10 bg-white/[0.02] p-6 transition-all hover:border-accent/50"
              >
                <div className="mb-4 aspect-video bg-white/5"></div>
                <h3
                  className="mb-2 text-lg font-bold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {template.name}
                </h3>
                <p className="mb-4 text-sm text-text/60">{template.category}</p>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-accent">
                    EGP {template.price.toLocaleString()}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 ${
                      template.availability === "Available"
                        ? "bg-accent/20 text-accent"
                        : "bg-white/10 text-text/60"
                    }`}
                  >
                    {template.availability}
                  </span>
                </div>
                <button
                  className="w-full py-2 text-sm font-semibold transition-colors hover:text-accent"
                  disabled={template.availability !== "Available"}
                >
                  {template.availability === "Available" ? "Inquire" : "Coming Soon"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="border border-white/10 bg-white/[0.02] p-12 text-center">
            <p className="mb-4 text-text/60">
              Templates coming soon. Contact us to discuss custom landing page options.
            </p>
            <a href="#contact" className="hero-cta inline-flex">
              <span>Start a Project</span>
              <ArrowRight size={16} className="hero-cta-arrow" />
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
