export default function SupplyChain() {
  return (
    <>
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="font-display-lg text-display-lg font-bold text-text-primary mb-2">Ketertelusuran Rantai Pasok</h2>
        <p className="font-body-base text-body-base text-text-secondary">Pemantauan aliran aset waktu nyata untuk ekosistem Mangosteen Token (MGT).</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-card-gap">
        {/* Live Node Map / Flow (Full Width) */}
        <div className="col-span-12 glass-panel rounded-xl p-6 shadow-lg">
          <h3 className="font-headline-md text-headline-md font-semibold text-text-primary mb-6 flex items-center">
            <span className="material-symbols-outlined text-accent-cyan mr-2">timeline</span> Perutean Aliran Aktif
          </h3>
          <div className="relative flex items-center justify-between w-full px-8 py-4">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-16 right-16 h-1 bg-surface-bright -translate-y-1/2 z-0">
              {/* Active Progress */}
              <div className="h-full bg-accent-cyan shadow-[0_0_10px_rgba(0,242,254,0.8)]" style={{ width: "75%" }}></div>
            </div>
            {/* Nodes */}
            {/* Origin */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-surface-panel border-2 border-accent-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                <span className="material-symbols-outlined text-accent-cyan">agriculture</span>
              </div>
              <span className="mt-3 font-label-sm text-label-sm font-bold text-text-primary">Asal</span>
              <span className="font-label-sm text-[10px] text-text-secondary">Alpha Banyuwangi</span>
            </div>
            {/* Processing */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-surface-panel border-2 border-accent-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.3)]">
                <span className="material-symbols-outlined text-accent-cyan">science</span>
              </div>
              <span className="mt-3 font-label-sm text-label-sm font-bold text-text-primary">Pemrosesan</span>
              <span className="font-label-sm text-[10px] text-text-secondary">Laboratorium Xanthone</span>
            </div>
            {/* Logistics */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-surface-panel border-2 border-accent-cyan flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.3)] relative">
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent-cyan rounded-full animate-ping"></span>
                <span className="material-symbols-outlined text-accent-cyan">local_shipping</span>
              </div>
              <span className="mt-3 font-label-sm text-label-sm font-bold text-text-primary">Logistik</span>
              <span className="font-label-sm text-[10px] text-text-secondary">Smart Contract</span>
            </div>
            {/* Export */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-surface-panel border-2 border-surface-bright flex items-center justify-center">
                <span className="material-symbols-outlined text-text-secondary">flight_takeoff</span>
              </div>
              <span className="mt-3 font-label-sm text-label-sm font-bold text-text-secondary">Ekspor</span>
              <span className="font-label-sm text-[10px] text-text-secondary">Tertunda</span>
            </div>
          </div>
        </div>

        {/* Logistics Telemetry Map (8 columns) */}
        <div className="col-span-12 lg:col-span-8 glass-panel rounded-xl p-6 shadow-lg h-[400px] relative overflow-hidden">
          <h3 className="font-headline-md text-headline-md font-semibold text-text-primary mb-4 absolute z-20 top-6 left-6 flex items-center bg-surface-panel/80 px-3 py-1 rounded-md">
            <span className="material-symbols-outlined text-accent-cyan mr-2">map</span> Telemetri Logistik
          </h3>
          {/* Faux Map Background */}
          <div className="absolute inset-0 bg-[#0a1111] z-0 opacity-80">
            {/* Simulated map lines/grid */}
            <div className="w-full h-full border border-outline-variant/10" style={{ backgroundImage: "linear-gradient(rgba(58, 73, 75, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(58, 73, 75, 0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
            {/* Track Line */}
            <svg className="absolute inset-0 w-full h-full z-10" preserveAspectRatio="none">
              <path d="M 100 300 Q 300 250 500 200 T 700 150" fill="none" stroke="rgba(0, 242, 254, 0.5)" strokeDasharray="5,5" strokeWidth="2"></path>
            </svg>
            {/* Moving Point */}
            <div className="absolute top-[200px] left-[500px] w-4 h-4 bg-accent-cyan rounded-full shadow-[0_0_15px_rgba(0,242,254,1)] z-20 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-accent-cyan absolute animate-ping opacity-50"></div>
            </div>
            {/* Map Overlay Card */}
            <div className="absolute bottom-6 right-6 bg-surface-panel/90 backdrop-blur border border-outline-variant/30 rounded-lg p-4 z-20 w-64 shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-label-sm text-text-secondary">ID Kendaraan</span>
                <span className="font-label-sm text-label-sm text-accent-cyan">TRK-992-MGT</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-label-sm text-text-secondary">Kecepatan</span>
                <span className="font-label-sm text-label-sm text-text-primary">65 km/j</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-text-secondary">Suhu</span>
                <span className="font-label-sm text-label-sm text-text-primary">12°C <span className="text-accent-cyan">Opt</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Inventory & Batch (4 columns) */}
        <div className="col-span-12 lg:col-span-4 glass-panel rounded-xl p-6 shadow-lg flex flex-col h-[400px]">
          <h3 className="font-headline-md text-headline-md font-semibold text-text-primary mb-4 flex items-center">
            <span className="material-symbols-outlined text-accent-cyan mr-2">inventory_2</span> Batch Aktif
          </h3>
          <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-hide">
            {/* Batch Item */}
            <div className="bg-surface-container rounded-lg p-3 border border-outline-variant/20 hover:bg-surface-bright/20 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-label-sm text-[10px] text-text-secondary uppercase">ID Batch</span>
                  <div className="font-label-sm text-label-sm font-bold text-text-primary">MGT-BANYU-001</div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-label-sm text-[10px]">Sedang Transit</span>
              </div>
              <div className="w-full bg-surface-bright h-1 rounded-full mt-2">
                <div className="bg-accent-cyan h-1 rounded-full w-[75%]"></div>
              </div>
            </div>
            {/* Batch Item Alert */}
            <div className="bg-surface-container rounded-lg p-3 border border-accent-magenta/30 hover:bg-surface-bright/20 transition-colors relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-magenta"></div>
              <div className="flex justify-between items-start mb-2 pl-2">
                <div>
                  <span className="font-label-sm text-[10px] text-text-secondary uppercase">ID Batch</span>
                  <div className="font-label-sm text-label-sm font-bold text-text-primary">MGT-BALI-042</div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-accent-magenta/10 border border-accent-magenta/50 text-accent-magenta font-label-sm text-[10px] flex items-center">
                  <span className="material-symbols-outlined text-[12px] mr-1">warning</span> Peringatan Suhu
                </span>
              </div>
              <div className="w-full bg-surface-bright h-1 rounded-full mt-2 ml-2 w-[calc(100%-0.5rem)]">
                <div className="bg-accent-magenta h-1 rounded-full w-[40%]"></div>
              </div>
            </div>
            {/* Batch Item */}
            <div className="bg-surface-container rounded-lg p-3 border border-outline-variant/20 hover:bg-surface-bright/20 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-label-sm text-[10px] text-text-secondary uppercase">ID Batch</span>
                  <div className="font-label-sm text-label-sm font-bold text-text-primary">MGT-JAVA-105</div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-surface-bright border border-outline-variant/30 text-text-secondary font-label-sm text-[10px]">Pemrosesan</span>
              </div>
              <div className="w-full bg-surface-bright h-1 rounded-full mt-2">
                <div className="bg-surface-variant h-1 rounded-full w-[25%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
