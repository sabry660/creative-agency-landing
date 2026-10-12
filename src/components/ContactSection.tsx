"use client";

import { useEffect, useState } from "react";
import { SITE_CONTENT } from "@/data/siteContent";
import { ArrowRight, MessageCircle } from "lucide-react";

const STORAGE_KEY = "montra-contact-form";

const formatValue = (value: string | undefined, fallback = "Not provided") => {
  const cleaned = value?.trim();
  return cleaned ? cleaned : fallback;
};

const safeReadFromStorage = () => {
  if (typeof window === "undefined" || !window.sessionStorage) return null;

  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const safeWriteToStorage = (value: Record<string, string>) => {
  if (typeof window === "undefined" || !window.sessionStorage) return;

  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  } catch {
    // Ignore storage errors to keep the form usable without breaking submission.
  }
};

export default function ContactSection() {
  const [formData, setFormData] = useState(() => {
    const savedValues = safeReadFromStorage();

    return {
      name: savedValues?.name ?? "",
      brandName: savedValues?.brandName ?? "",
      inquiryType: savedValues?.inquiryType ?? "",
      description: savedValues?.description ?? "",
    };
  });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    safeWriteToStorage(formData);
  }, [formData, isHydrated]);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.brandName.trim()) {
      newErrors.brandName = "Brand name is required";
    }

    if (!formData.inquiryType.trim()) {
      newErrors.inquiryType = "Inquiry type is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!validateForm()) return;

    const message = [
      "Hello Mohamed Sabry,",
      "",
      `My name is ${formatValue(formData.name)}, and I’m reaching out regarding a project for ${formatValue(formData.brandName)}.`,
      "",
      `Service Required: ${formatValue(formData.inquiryType)}`,
      "",
      "Project Details:",
      formatValue(formData.description),
      "",
      "I’d love to discuss the requirements and explore how Montra can help bring this project to life.",
      "",
      "Looking forward to hearing from you.",
      "",
      "Best regards,",
      formatValue(formData.name),
    ].join("\n");

    const whatsappNumber = SITE_CONTENT.contact.whatsapp || "";

    if (whatsappNumber) {
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    } else {
      alert("WhatsApp number not configured.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      brandName: "",
      inquiryType: "",
      description: "",
    });

    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors.
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));

    if (errors[name]) {
      setErrors((previous) => {
        const nextErrors = { ...previous };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p
            className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-accent"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Contact
          </p>
          <h2
            className="text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
            data-cursor="text"
          >
            Start Your Project
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text/60">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border bg-white/[0.02] px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none ${
                  errors.name ? "border-red-500" : "border-white/10"
                }`}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="brandName" className="mb-2 block text-sm font-medium">
                Brand Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                className={`w-full border bg-white/[0.02] px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none ${
                  errors.brandName ? "border-red-500" : "border-white/10"
                }`}
                placeholder="Your brand name"
              />
              {errors.brandName && <p className="mt-1 text-xs text-red-500">{errors.brandName}</p>}
            </div>

            <div>
              <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium">
                Inquiry Type <span className="text-accent">*</span>
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className={`w-full border bg-white/[0.02] px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none ${
                  errors.inquiryType ? "border-red-500" : "border-white/10"
                }`}
              >
                <option value="">Select an option</option>
                <option value="custom-landing">Custom Landing Page</option>
                <option value="template">Template Purchase</option>
                <option value="consultation">General Inquiry</option>
              </select>
              {errors.inquiryType && <p className="mt-1 text-xs text-red-500">{errors.inquiryType}</p>}
            </div>

            <div>
              <label htmlFor="description" className="mb-2 block text-sm font-medium">
                Description <span className="text-accent">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className={`w-full border bg-white/[0.02] px-4 py-3 text-sm transition-colors focus:border-accent focus:outline-none ${
                  errors.description ? "border-red-500" : "border-white/10"
                }`}
                placeholder="Tell us about your project..."
              />
              {errors.description && (
                <p className="mt-1 text-xs text-red-500">{errors.description}</p>
              )}
            </div>

            <button type="submit" className="hero-cta w-full justify-center">
              <span>Send via WhatsApp</span>
              <MessageCircle size={16} className="hero-cta-arrow" />
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="mt-3 w-full border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-text/70 transition-colors hover:border-accent hover:text-accent"
            >
              Reset form
            </button>

            <p className="text-center text-xs text-text/40">Your message will be sent via WhatsApp</p>
          </form>
        </div>
      </div>
    </section>
  );
}
