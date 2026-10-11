import logo from "../../../public/logo.png";
import { Icon } from "@iconify/react";

export function Navbar() {
  return (
    <>
      <div className="flex-col gap-6 px-3.5 py-6">
        <div className="flex items-center gap-2 px-2">
          <img src={logo} alt="Logo" className="h-8" />
          <span className="text-[20px] font-bold text-slate-50">
            Freemanager
          </span>
        </div>
        <div className="flex flex-col gap-0.5 mt-6">
          <div className="flex items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-[13.5px] transition-colors hover:bg-white/5 hover:text-slate-200">
            <Icon
              icon="cuida:dashboard-outline"
              className="size-4 text-slate-400"
            />
            <p className="text-slate-400">Overview</p>
          </div>
        </div>
      </div>
    </>
  );
}
