"use client";

export default function OfflinePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6" style={{ background: "#0a0a0a" }}>
      <div className="max-w-md text-center">
        <h1 className="mb-4 text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          You&apos;re Offline
        </h1>
        <p className="mb-8 text-text/60">
          Please check your internet connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="hero-cta inline-flex"
        >
          <span>Retry</span>
        </button>
      </div>
    </div>
  );
}
