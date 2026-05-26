"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavBar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Dasbor", icon: "dashboard", href: "/" },
    { name: "Pasar", icon: "storefront", href: "/marketplace" },
    { name: "Detail Lahan", icon: "agriculture", href: "/farm-detail" },
    { name: "Analitik", icon: "monitoring", href: "/analytics" },
    { name: "Penyelesaian", icon: "receipt_long", href: "/settlement" },
    { name: "Rantai Pasok", icon: "hub", href: "/supply-chain" },
  ];

  return (
    <aside className="bg-surface-panel h-screen w-64 fixed left-0 top-0 shadow-[0_0_20px_rgba(0,0,0,0.5)] shadow-lg flex flex-col py-gutter z-50">
      <div className="px-gutter mb-8">
        <h1 className="font-headline-md text-headline-md font-bold text-accent-cyan">RDFA-AgriChain</h1>
        <p className="font-label-sm text-label-sm text-text-secondary mt-1">Institusional Global</p>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 scale-95 hover:bg-surface-bright/20 ${
                isActive
                  ? "text-accent-cyan border-r-4 border-accent-cyan bg-surface-variant/30"
                  : "text-text-secondary hover:text-on-surface-variant"
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
              >
                {item.icon}
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-widest">{item.name}</span>
            </Link>
          );
        })}
      </nav>
      <div className="px-4 mt-auto">
        <button className="w-full py-3 rounded-lg bg-gradient-to-r from-accent-magenta to-secondary-container text-text-primary font-headline-md text-sm font-bold shadow-[0_0_15px_rgba(176,38,255,0.4)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] transition-all duration-300">
          Perdagangkan Aset
        </button>
      </div>
    </aside>
  );
}
