interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="relative border-b border-white/[0.07] bg-[#08090D] px-6 pt-32 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
      {/* Subtle directional gradient illumination */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[250px] bg-gradient-to-br from-primary/[0.07] via-transparent to-transparent pointer-events-none" />
      
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right,rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.03) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto relative space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-medium text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-soft" />
          {eyebrow}
        </div>
        <h1 className="text-[clamp(2.2rem,4vw,3.4rem)] font-bold text-white tracking-[-0.03em] leading-[1.1] max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-[15px] sm:text-[16px] text-white/55 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
