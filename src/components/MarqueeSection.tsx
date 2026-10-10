"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SITE_CONTENT } from "@/data/siteContent";

const ROW_1 = SITE_CONTENT.capabilities.map((cap, i) => ({
  text: cap,
  accent: i % 2 === 0,
}));

const ROW_2 = [...SITE_CONTENT.capabilities].reverse().map((cap, i) => ({
  text: cap,
  accent: i % 2 === 1,
}));

function MarqueeRow({
  items,
  direction,
}: {
  items: typeof ROW_1;
  direction: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const xFrom = direction === "left" ? 0 : -50;
    const xTo = direction === "left" ? -50 : 0;

    gsap.set(track, { xPercent: xFrom });

    const tween = gsap.to(track, {
      xPercent: xTo,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    // Store tween reference on the element for velocity modulation
    (track as HTMLDivElement & { _marquee?: gsap.core.Tween })._marquee =
      tween;

    return () => {
      tween.kill();
    };
  }, [direction]);

  const content = (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-8">
          <span
            className={`marquee-text ${item.accent ? "marquee-text-accent" : ""}`}
          >
            {item.text}
          </span>
          <span className="marquee-separator marquee-text">•</span>
        </span>
      ))}
    </>
  );

  return (
    <div className="marquee-container">
      <div ref={trackRef} className="marquee-track">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}

export default function MarqueeSection() {
  return (
    <section className="skew-section overflow-hidden py-16 md:py-24">
      <MarqueeRow items={ROW_1} direction="left" />
      <MarqueeRow items={ROW_2} direction="right" />
    </section>
  );
}
