type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ eyebrow, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-semibold text-gold">{title}</h2>
      {subtitle ? <p className="text-white/70">{subtitle}</p> : null}
    </div>
  );
}
