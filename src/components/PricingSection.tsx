"use client";

import { useState } from "react";
import { SITE_CONTENT } from "@/data/siteContent";
import { ArrowRight } from "lucide-react";

export default function PricingSection() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());

  const toggleAddOn = (addOnId: string) => {
    const newSelected = new Set(selectedAddOns);
    if (newSelected.has(addOnId)) {
      newSelected.delete(addOnId);
    } else {
      newSelected.add(addOnId);
    }
    setSelectedAddOns(newSelected);
  };

  const calculateTotal = () => {
    if (!selectedPackage) return 0;

    const pkg = SITE_CONTENT.packages.find((p) => p.id === selectedPackage);
    if (!pkg) return 0;

    let total = pkg.price;

    selectedAddOns.forEach((addOnId) => {
      const addOn = SITE_CONTENT.addOns.find((a) => a.id === addOnId);
      if (addOn) {
        if (addOn.pricingModel === "fixed") {
          total += addOn.price;
        } else if (addOn.pricingModel === "percentage" && addOn.percentageValue) {
          // Rush delivery applies to subtotal
          const subtotal = total;
          total += subtotal * (addOn.percentageValue / 100);
        }
        // "starting" price add-ons are not included in calculation - they require confirmation
      }
    });

    return Math.round(total);
  };

  const getSelectedAddOns = () => {
    return SITE_CONTENT.addOns.filter((a) => selectedAddOns.has(a.id));
  };

  const handleRequestEstimate = () => {
    // This would prefill the contact form
    // For now, scroll to contact
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-accent"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Pricing
          </p>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
            data-cursor="text"
          >
            Choose Your Package
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text/60">
            All prices in EGP. Select a package and add-ons to get an estimate.
          </p>
        </div>

        {/* Package Cards */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {SITE_CONTENT.packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative border p-8 transition-all flex flex-col ${
                selectedPackage === pkg.id
                  ? "border-accent bg-accent/5"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <h3
                className="mb-2 text-2xl font-bold"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {pkg.name}
              </h3>
              <p className="mb-4 text-sm text-text/60">{pkg.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">EGP {pkg.price.toLocaleString()}</span>
              </div>
              <ul className="mb-6 space-y-2 text-sm text-text/70 flex-1">
                {pkg.includedFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 text-accent">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedPackage(pkg.id)}
                className={`w-full py-3 font-semibold transition-colors ${
                  selectedPackage === pkg.id
                    ? "bg-accent text-black"
                    : "border border-white/20 hover:border-accent hover:text-accent"
                }`}
              >
                {selectedPackage === pkg.id ? "Selected" : pkg.ctaLabel}
              </button>
            </div>
          ))}
        </div>

        {/* Add-on Calculator */}
        {selectedPackage && (
          <div className="border border-white/10 bg-white/[0.02] p-8">
            <h3
              className="mb-6 text-2xl font-bold"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Add-ons
            </h3>

            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SITE_CONTENT.addOns.map((addOn) => (
                <label
                  key={addOn.id}
                  className={`flex cursor-pointer items-start gap-3 rounded border p-4 transition-all ${
                    selectedAddOns.has(addOn.id)
                      ? "border-accent bg-accent/5"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedAddOns.has(addOn.id)}
                    onChange={() => toggleAddOn(addOn.id)}
                    className="mt-1 h-4 w-4 accent-accent"
                  />
                  <div className="flex-1">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="font-semibold">{addOn.name}</span>
                      <span className="text-sm text-accent">
                        {addOn.pricingModel === "percentage"
                          ? `+${addOn.price}%`
                          : addOn.pricingModel === "starting"
                          ? `From EGP ${addOn.price.toLocaleString()}`
                          : `EGP ${addOn.price.toLocaleString()}`}
                      </span>
                    </div>
                    <p className="text-xs text-text/60">{addOn.description}</p>
                    {addOn.notes && (
                      <p className="mt-1 text-xs text-text/40 italic">
                        {addOn.notes}
                      </p>
                    )}
                  </div>
                </label>
              ))}
            </div>

            {/* Estimate Summary */}
            <div className="border-t border-white/10 pt-6">
              <div className="mb-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text/60">Base Package:</span>
                  <span>
                    EGP{" "}
                    {SITE_CONTENT.packages.find((p) => p.id === selectedPackage)?.price.toLocaleString()}
                  </span>
                </div>
                {getSelectedAddOns().map((addOn) => (
                  <div key={addOn.id} className="flex justify-between text-sm">
                    <span className="text-text/60">{addOn.name}:</span>
                    <span>
                      {addOn.pricingModel === "percentage"
                        ? `+${addOn.price}%`
                        : addOn.pricingModel === "starting"
                        ? `From EGP ${addOn.price.toLocaleString()}*`
                        : `EGP ${addOn.price.toLocaleString()}`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-6 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-lg font-bold">Estimated Total:</span>
                <span className="text-2xl font-bold text-accent">
                  EGP {calculateTotal().toLocaleString()}
                </span>
              </div>

              {getSelectedAddOns().some((a) => a.pricingModel === "starting") && (
                <p className="mb-4 text-xs text-text/40">
                  * Prices marked as &quot;From&quot; are indicative and require final confirmation based on scope.
                </p>
              )}

              <button
                onClick={handleRequestEstimate}
                className="hero-cta w-full justify-center"
              >
                <span>Request This Estimate</span>
                <ArrowRight size={16} className="hero-cta-arrow" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
