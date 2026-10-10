"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE_CONTENT } from "@/data/siteContent";

const NAV_LINKS = SITE_CONTENT.navigation;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#hero");
  const [isClient, setIsClient] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle scroll for navbar background
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    if (!isClient) return;

    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(Boolean) as HTMLElement[];

    const observerOptions = {
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = `#${entry.target.id}`;
          setActiveLink(id);
          // Update URL hash without scrolling
          if (window.location.hash !== id) {
            window.history.replaceState(null, "", id);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isClient]);

  // Handle escape key
  useEffect(() => {
    if (!isClient) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen, isClient]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (!isClient) return;

    if (menuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [menuOpen, isClient]);

  const handleLinkClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
      hamburgerRef.current?.focus();
    }
  };

  if (!isClient) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a
            href="#hero"
            className="font-heading text-xl font-bold tracking-wider"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {SITE_CONTENT.brand.name}<span className="text-accent">.</span>
          </a>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "nav-scrolled" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#hero");
            }}
            className="font-heading text-xl font-bold tracking-wider"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {SITE_CONTENT.brand.name}<span className="text-accent">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={cn(
                  "nav-link",
                  activeLink === link.href && "active"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#contact");
            }}
            className="hero-cta hidden lg:inline-flex"
          >
            <span>{SITE_CONTENT.brand.hero.secondaryCta}</span>
            <ArrowRight size={16} className="hero-cta-arrow" />
          </a>

          {/* Hamburger Menu Button */}
          <button
            ref={hamburgerRef}
            className={cn(
              "flex flex-col gap-[6px] lg:hidden z-[100] relative",
              menuOpen && "hamburger-open"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn("mobile-menu", menuOpen && "open")}
        onClick={handleBackdropClick}
      >
        {/* Close Button X */}
        <button
          className="absolute top-6 right-6 z-[101] p-2 text-text hover:text-accent transition-colors"
          onClick={() => {
            setMenuOpen(false);
            hamburgerRef.current?.focus();
          }}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {NAV_LINKS.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick(link.href);
            }}
            className="mobile-menu-link"
            style={{ transitionDelay: menuOpen ? `${i * 0.1}s` : "0s" }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
