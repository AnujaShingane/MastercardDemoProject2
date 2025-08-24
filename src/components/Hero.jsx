export default function Hero({ children, withImage = true }) {
  return (
    <section className={`${withImage ? "bg-hero" : "bg-hero-fallback"} relative min-h-screen`}>
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white/70" />

      {/* Content container – bottom-left */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 min-h-screen flex">
        {/* top padding ensures text never hides under the floating navbar */}
        <div className="mt-auto pb-20 pt-16 md:pt-24 max-w-3xl">
          {children}
        </div>
      </div>
    </section>
  );
}
