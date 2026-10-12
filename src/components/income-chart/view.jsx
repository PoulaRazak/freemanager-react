import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

const DATA = [
  { month: "Apr", income: 620 },
  { month: "May", income: 840 },
  { month: "Jun", income: 760 },
  { month: "Jul", income: 1020 },
  { month: "Aug", income: 930 },
  { month: "Sep", income: 1240 },
];

const RANGES = { "3M": 3, "6M": 6, "12M": 12 };

function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-white/10 bg-[#0A0E2A] px-3 py-2 text-xs shadow-lg">
      <div className="text-slate-400">{label}</div>
      <div className="font-semibold tabular-nums text-white">
        ${payload[0].value.toLocaleString("en-US")}
      </div>
    </div>
  );
}

export function IncomeOverview() {
  const [range, setRange] = useState("6M");
  const data = DATA.slice(-RANGES[range]);

  return (
    <div className="rounded-[18px] border border-white/10 bg-white/[0.035] p-5">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-[13.5px] font-semibold text-white">Income overview</h3>
          <p className="text-[11.5px] text-emerald-400">
            +18.4% <span className="text-slate-500">vs last 6 months</span>
          </p>
        </div>

        <div className="flex gap-1">
          {Object.keys(RANGES).map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={
                r === range
                  ? "rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 px-2.5 py-1 text-[11px] font-semibold text-white"
                  : "rounded-md px-2.5 py-1 text-[11px] text-slate-400 hover:text-slate-200"
              }
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Chart — the parent must have a fixed height */}
      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 8, right: 4, left: 4, bottom: 0 }}>
            <defs>
              <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.45} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#5B6684", fontSize: 11 }}
            />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: "rgba(255,255,255,0.12)" }}
            />
            <Area
              type="linear"
              dataKey="income"
              stroke="#22D3EE"
              strokeWidth={2.5}
              fill="url(#incomeFill)"
              activeDot={{ r: 4, fill: "#22D3EE", stroke: "#0A0E2A", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}