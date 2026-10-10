"use client";

import { useState } from "react";
import { SITE_CONTENT } from "@/data/siteContent";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-accent"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            FAQ
          </p>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
            data-cursor="text"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {SITE_CONTENT.faq.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 bg-white/[0.02]"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-white/[0.04]"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold" style={{ fontFamily: "var(--font-heading)" }}>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 px-6 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-text/60">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
