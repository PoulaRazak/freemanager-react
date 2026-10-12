import logo from "../../../public/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router";

const SidebarItems = [
  { label: "Overview", href: "/dashboard", icon: "cuida:dashboard-outline" },
  { label: "Transactions", href: "/transactions", icon: "ic:outline-list-alt" },
  { label: "Platforms", href: "/platforms", icon: "mdi:web" },
];

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
        <p className="px-3.5 py-2 text-[10px] font-semibold text-slate-200">
          Freelancer Management Money
        </p>
        <div className="flex flex-col gap-0.5 mt-6">
          {SidebarItems.map(({ label, href, icon }) => {
            return (
              <a
                key={href}
                href={href}
                className="flex items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-[13.5px] transition-colors hover:bg-white/5 hover:text-slate-200"
              >
                <Icon icon={icon} className="size-4 text-slate-400" />
                <p className="text-slate-400">{label}</p>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
