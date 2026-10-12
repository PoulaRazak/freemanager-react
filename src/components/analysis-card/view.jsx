import { Icon } from "@iconify/react";

function AnalysisCard( { title, value, amount, icon }) {
  return<>
      <div className="flex flex-col gap-6 px-10 py-4 rounded-2xl border border-slate-800 bg-[#101528]">
        <div className="flex flex-row gap-4 items-center justify-between">
          <h1 className="text-xs text-semibold text-slate-400">{title}</h1>
          <div className="bg-[#2DAFF2] rounded-lg px-2 py-2 text-slate-50">
            <Icon icon={icon} className="size-4 text-slate-50" />
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <p className="text-slate-50 font-bold text-2xl">{value}</p>
          <p className="text-green-400 text-xs pt-2 font-semibold">{amount}</p>
        </div>
      </div>
    </>
}
export default AnalysisCard;
