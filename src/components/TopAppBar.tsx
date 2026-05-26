"use client";

export default function TopAppBar() {
  return (
    <header className="bg-app-bg/80 backdrop-blur-md fixed top-0 right-0 w-[calc(100%-16rem)] h-16 border-b border-outline-variant/20 flex justify-between items-center px-gutter ml-64 z-40">
      <div className="flex-1 flex items-center">
        <div className="relative w-64">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary">search</span>
          <input
            className="w-full bg-surface-container border border-outline-variant/50 rounded-full py-2 pl-10 pr-4 text-sm text-text-primary focus:outline-none focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan transition-colors placeholder:text-text-secondary"
            placeholder="Cari titik data..."
            type="text"
          />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-text-secondary hover:text-accent-magenta transition-colors cursor-pointer active:opacity-70">
          <span className="material-symbols-outlined">wifi_tethering</span>
        </button>
        <button className="text-text-secondary hover:text-accent-magenta transition-colors cursor-pointer active:opacity-70 relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-0 right-0 w-2 h-2 bg-accent-cyan rounded-full shadow-[0_0_8px_#00F2FE]"></span>
        </button>
        <button className="text-text-secondary hover:text-accent-magenta transition-colors cursor-pointer active:opacity-70">
          <span className="material-symbols-outlined" style={{ fontSize: "28px" }}>account_circle</span>
        </button>
      </div>
    </header>
  );
}
