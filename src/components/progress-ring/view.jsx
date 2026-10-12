export function ProgressRing({ value = 50, size = 56, stroke = 7, label = "of income" }) {
  const r = (size - stroke) / 2;
  const c = size / 2;

  return (
    <div className="flex items-center gap-3">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        {/* Track */}
        <circle
          cx={c} cy={c} r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-white/10"
        />
        {/* Progress */}
        <circle
          cx={c} cy={c} r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={`${value} 100`}
          className="text-cyan-400 transition-all duration-700"
        />
      </svg>

      <div>
        <div className="text-lg font-bold text-white">{value}%</div>
        <div className="text-xs text-slate-500">{label}</div>
      </div>
    </div>
  );
}