import { Icon } from "@iconify/react";
import AnalysisCard from "../../components/analysis-card/view";

const now = new Date();
const currentMonth = now.toLocaleDateString("en-US", {
  month: "long",
  year: "numeric",
});

function Overview() {
  return (
    <>
      <div className="flex flex-col gap-4 px-3.5 py-6">
        <div className="flex flex-row gap-4 items-center justify-between">
          <div>
            <h1 className="text-xs text-semibold text-slate-400">OVERVIEW</h1>
            <p className="text-slate-50 font-bold text-2xl">{currentMonth}</p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
              <Icon
                icon="ci:add-plus-circle"
                className="size-4 font-bold text-slate-50"
              />
            </button>
          </div>
        </div>

        <div className="flex flex-row gap-4 items-center">
          <AnalysisCard
            title="Total Income"
            value="$ 12,000"
            amount="+ $ 2,000"
            icon="mdi:currency-usd"
          />
          <AnalysisCard
            title="Total Expenses"
            value="$ 8,000"
            amount="- $ 1,500"
            icon="mdi:briefcase"
          />
          <AnalysisCard
            title="Net Income"
            value="$ 4,000"
            amount="+ $ 500"
            icon="andrsrxn:arrow-up"
          />
          <AnalysisCard
            title="Projects Done"
            value="15"
            amount="+ 3"
            icon="hugeicons:task-done-01"
          />
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="relative flex-1 overflow-hidden rounded-[18px] border border-white/10 bg-gradient-to-br from-[#1B2E7A] via-[#101A4A] to-[#0A1030] p-6">
            {/* Glow orbs */}
            <div className="pointer-events-none absolute -right-10 -top-8 size-56 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.45),transparent_70%)] blur-sm" />
            <div className="pointer-events-none absolute -bottom-12 right-8 size-40 rounded-full bg-[radial-gradient(circle,#3B82F6,transparent_70%)] opacity-50 blur-md" />

            {/* Content */}
            <div className="relative flex max-w-xs flex-col items-start gap-2">
              <p className="text-xs text-[#B9C6F2]">Welcome back,</p>
              <h2 className="text-[21px] font-bold text-white">Poula Razak</h2>
              <p className="mb-3 text-[12.5px] leading-relaxed text-[#AEBBE8]">
                Your income is up 18% this month — keep it going.
              </p>
              <button className="inline-flex items-center gap-1.5 rounded-[9px] border border-white/20 bg-white/10 px-3.5 py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-white/20">
                Add Income →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Overview;
