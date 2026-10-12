import { Icon } from "@iconify/react";
import { ProgressRing } from "../../components/progress-ring/view";

const PLATFORMS = [
  { name: "Upwork", icon: "thesvg-color:upwork", amount: 1000 },
  { name: "Fiverr", icon: "thesvg-color:fiverr", amount: 500 },
  { name: "Freelancer", icon: "thesvg-color:freelancer", amount: 100 },
];

const total = PLATFORMS.reduce((sum, p) => sum + p.amount, 0);
const top = PLATFORMS.reduce((a, b) => (b.amount > a.amount ? b : a));
const topShare = Math.round((top.amount / total) * 100);

const fmt = (n) => `$${n.toLocaleString("en-US")}`;

export function PlatformMixCard() {
  return (
    <div className="flex flex-1 items-center justify-between gap-6 rounded-[18px] border border-white/10 bg-gradient-to-br from-[#1B2E7A] via-[#101A4A] to-[#0A1030] p-6">
      {/* Left: title + list */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div>
          <p className="text-[13px] font-semibold text-white">Platform Mix</p>
          <p className="text-[11px] text-[#B9C6F2]">{PLATFORMS.length} active platforms</p>
        </div>

        <ul className="flex flex-col gap-2.5">
          {PLATFORMS.map(({ name, icon, amount }) => (
            <li key={name} className="flex items-center gap-2.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-white/10">
                <Icon icon={icon} className="size-4" />
              </span>
              <span className="flex-1 truncate text-[12.5px] text-[#AEBBE8]">{name}</span>
              <span className="text-[12.5px] font-semibold tabular-nums text-white">
                {fmt(amount)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right: ring */}
      <div className="shrink-0 border-l border-white/10 pl-6">
        <ProgressRing value={topShare} size={60} stroke={8} label={`from ${top.name}`} />
      </div>
    </div>
  );
}