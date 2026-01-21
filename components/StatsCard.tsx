type StatsCardProps = {
  label: string;
  value: string;
  helper?: string;
};

export function StatsCard({ label, value, helper }: StatsCardProps) {
  return (
    <div className="glass-card flex flex-col gap-2 p-4">
      <span className="text-xs uppercase tracking-[0.2em] text-white/60">
        {label}
      </span>
      <span className="text-2xl font-semibold text-gold">{value}</span>
      {helper ? <span className="text-sm text-white/60">{helper}</span> : null}
    </div>
  );
}
