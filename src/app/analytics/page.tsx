export default function Analytics() {
  return (
    <>
      {/* Page Header */}
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="font-display-lg text-display-lg font-black text-text-primary tracking-tight">Analitik & Pemantauan Lanjutan</h2>
          <p className="font-body-base text-body-base text-text-secondary mt-2">Telemetri waktu nyata dan model prediktif untuk aset pertanian global.</p>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-high px-4 py-2 rounded-lg border border-outline-variant/30">
          <span className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant">
            <span className="w-2 h-2 rounded-full bg-accent-cyan shadow-[0_0_8px_#00F2FE]"></span> Sinkronisasi Langsung Aktif
          </span>
          <span className="text-outline">|</span>
          <span className="font-label-sm text-label-sm text-text-secondary">Pembaruan terakhir: Baru saja</span>
        </div>
      </div>

      {/* Main Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-card-gap">
        {/* Satellite Telemetry & NDVI Analysis (Spans 8 cols) */}
        <section className="col-span-12 xl:col-span-8 glass-panel rounded-xl p-6 flex flex-col relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-3xl -z-10 group-hover:bg-accent-cyan/20 transition-all duration-700"></div>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="font-headline-md text-headline-md text-text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-cyan">satellite_alt</span>
                Telemetri Satelit & Analisis NDVI
              </h3>
              <p className="font-label-sm text-label-sm text-text-secondary mt-1">Indeks Vegetasi Perbedaan Dinormalisasi 12 Bulan</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 bg-accent-cyan shadow-[0_0_5px_#00F2FE]"></div>
                <span className="font-label-sm text-label-sm text-text-secondary">Kesehatan Aktual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-0.5 border-t border-dashed border-accent-magenta"></div>
                <span className="font-label-sm text-label-sm text-text-secondary">Target Dasar</span>
              </div>
            </div>
          </div>
          {/* Line Chart Placeholder */}
          <div className="flex-1 min-h-[300px] w-full relative border-l border-b border-outline-variant/30 flex items-end px-2 pb-2" style={{ backgroundImage: "linear-gradient(to right, rgba(132, 148, 149, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(132, 148, 149, 0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
            {/* Y-Axis Labels */}
            <div className="absolute left-[-30px] top-0 bottom-0 flex flex-col justify-between text-[10px] text-text-secondary font-mono py-2">
              <span>1.0</span><span>0.8</span><span>0.6</span><span>0.4</span><span>0.2</span>
            </div>
            {/* Simulated Chart Path (Cyan) */}
            <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]" preserveAspectRatio="none" viewBox="0 0 1000 300">
              <defs>
                <linearGradient id="ndviGrad2" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#00F2FE" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path d="M0,250 C100,240 200,180 300,150 C400,120 500,80 600,100 C700,120 800,90 900,110 L1000,90 L1000,300 L0,300 Z" fill="url(#ndviGrad2)"></path>
              <path d="M0,250 C100,240 200,180 300,150 C400,120 500,80 600,100 C700,120 800,90 900,110 L1000,90" fill="none" stroke="#00F2FE" strokeWidth="3"></path>
              {/* Dashed Target Line (Magenta) */}
              <path d="M0,220 C200,200 400,160 600,140 C800,120 1000,110 1000,110" fill="none" opacity="0.6" stroke="#B026FF" strokeDasharray="8 4" strokeWidth="2"></path>
            </svg>
            {/* X-Axis Labels */}
            <div className="absolute bottom-[-25px] left-0 right-0 flex justify-between text-[10px] text-text-secondary font-mono px-4">
              <span>Jan</span><span>Mar</span><span>Mei</span><span>Jul</span><span>Sep</span><span>Nov</span>
            </div>
          </div>
        </section>

        {/* Weather Risk Assessment (Spans 4 cols) */}
        <section className="col-span-12 xl:col-span-4 glass-panel rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-headline-md text-headline-md text-text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-magenta">storm</span>
                Risiko Cuaca
              </h3>
              <span className="px-3 py-1 rounded-full bg-accent-magenta/10 border border-accent-magenta text-accent-magenta font-label-sm text-label-sm shadow-[0_0_10px_rgba(176,38,255,0.5)]">
                Peringatan Hujan Tinggi
              </span>
            </div>
            <div className="flex items-center gap-6 mb-8">
              <span className="material-symbols-outlined text-6xl text-text-primary">rainy</span>
              <div>
                <div className="font-display-lg text-display-lg text-text-primary">24°C</div>
                <div className="font-body-base text-body-base text-text-secondary">Sektor Banyuwangi</div>
              </div>
            </div>
          </div>
          {/* 7-Day Forecast mini */}
          <div className="space-y-3">
            <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Prakiraan 7 Hari</div>
            <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
              <span className="font-body-base text-label-sm text-text-secondary w-12">Sen</span>
              <span className="material-symbols-outlined text-accent-cyan text-sm">partly_cloudy_day</span>
              <span className="font-body-base text-label-sm font-semibold">26° / 21°</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
              <span className="font-body-base text-label-sm text-text-secondary w-12">Sel</span>
              <span className="material-symbols-outlined text-accent-magenta text-sm">thunderstorm</span>
              <span className="font-body-base text-label-sm font-semibold">24° / 20°</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-outline-variant/20">
              <span className="font-body-base text-label-sm text-text-secondary w-12">Rab</span>
              <span className="material-symbols-outlined text-accent-cyan text-sm">cloud</span>
              <span className="font-body-base text-label-sm font-semibold">25° / 21°</span>
            </div>
          </div>
        </section>

        {/* Field Sensor Network Grid (Spans 6 cols) */}
        <section className="col-span-12 xl:col-span-6 glass-panel rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-md text-headline-md text-text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-cyan">sensors</span>
              Jaringan Sensor Lapangan
            </h3>
            <span className="font-label-sm text-label-sm text-text-secondary">Node Aktif: 1,402</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {/* Sensor Card 1 */}
            <div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/20 hover:border-accent-cyan/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-sm text-label-sm text-text-secondary">Kelembapan Tanah</span>
                <span className="material-symbols-outlined text-accent-cyan text-lg">water_drop</span>
              </div>
              <div className="font-kpi-value text-kpi-value text-text-primary shadow-[0_0_10px_rgba(0,242,254,0.5)]">68<span className="text-lg text-text-secondary ml-1">%</span></div>
              <div className="w-full bg-surface-bright h-1 mt-3 rounded-full overflow-hidden">
                <div className="bg-accent-cyan h-full w-[68%] shadow-[0_0_8px_#00F2FE]"></div>
              </div>
            </div>
            {/* Sensor Card 2 */}
            <div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/20 hover:border-accent-magenta/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-sm text-label-sm text-text-secondary">Suhu Sekitar</span>
                <span className="material-symbols-outlined text-accent-magenta text-lg">device_thermostat</span>
              </div>
              <div className="font-kpi-value text-kpi-value text-text-primary">32<span className="text-lg text-text-secondary ml-1">°C</span></div>
              <div className="w-full bg-surface-bright h-1 mt-3 rounded-full overflow-hidden">
                <div className="bg-accent-magenta h-full w-[85%] shadow-[0_0_8px_#B026FF]"></div>
              </div>
            </div>
            {/* Sensor Card 3 */}
            <div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/20 hover:border-accent-cyan/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-sm text-label-sm text-text-secondary">Kelembapan</span>
                <span className="material-symbols-outlined text-accent-cyan text-lg">air</span>
              </div>
              <div className="font-kpi-value text-kpi-value text-text-primary">74<span className="text-lg text-text-secondary ml-1">%</span></div>
              <div className="w-full bg-surface-bright h-1 mt-3 rounded-full overflow-hidden">
                <div className="bg-accent-cyan h-full w-[74%] shadow-[0_0_8px_#00F2FE]"></div>
              </div>
            </div>
            {/* Sensor Card 4 */}
            <div className="bg-surface-container-low rounded-lg p-4 border border-outline-variant/20 hover:border-accent-cyan/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <span className="font-label-sm text-label-sm text-text-secondary">Radiasi Matahari</span>
                <span className="material-symbols-outlined text-accent-cyan text-lg">light_mode</span>
              </div>
              <div className="font-kpi-value text-kpi-value text-text-primary">850<span className="text-lg text-text-secondary ml-1">W/m²</span></div>
              <div className="w-full bg-surface-bright h-1 mt-3 rounded-full overflow-hidden">
                <div className="bg-accent-cyan h-full w-[60%] shadow-[0_0_8px_#00F2FE]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Geospatial Health Map (Spans 6 cols) */}
        <section className="col-span-12 xl:col-span-6 glass-panel rounded-xl p-0 relative overflow-hidden group border border-outline-variant/30 min-h-[300px]">
          <div className="absolute inset-0 bg-surface-container-lowest z-0" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #151d1e 0%, #081010 100%)" }}>
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSIjYjljYWNiIi8+Cjwvc3ZnPg==')]"></div>
          </div>
          <div className="absolute top-4 left-4 z-10 bg-app-bg/80 backdrop-blur-md px-4 py-2 rounded-lg border border-outline-variant/50">
            <h3 className="font-headline-md text-body-base font-semibold text-text-primary flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-cyan text-sm">map</span>
              Peta Kesehatan Geospasial
            </h3>
            <p className="font-label-sm text-label-sm text-text-secondary mt-1">Wilayah: Banyuwangi</p>
          </div>
          {/* Simulated Heatmap points */}
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-accent-cyan/30 rounded-full blur-2xl z-0 pointer-events-none"></div>
          <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-accent-cyan/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-magenta/30 rounded-full blur-xl z-0 pointer-events-none"></div>
          {/* Map Overlay UI */}
          <div className="absolute bottom-4 right-4 z-10 flex gap-2">
            <button className="w-8 h-8 rounded bg-surface-container/80 backdrop-blur flex items-center justify-center border border-outline-variant/30 text-text-secondary hover:text-white"><span className="material-symbols-outlined text-sm">add</span></button>
            <button className="w-8 h-8 rounded bg-surface-container/80 backdrop-blur flex items-center justify-center border border-outline-variant/30 text-text-secondary hover:text-white"><span className="material-symbols-outlined text-sm">remove</span></button>
          </div>
        </section>

        {/* Predictive Harvest Analytics (Spans 12 cols) */}
        <section className="col-span-12 glass-panel rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="font-headline-md text-headline-md text-text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-cyan">bar_chart</span>
                Analitik Panen Prediktif
              </h3>
              <p className="font-label-sm text-label-sm text-text-secondary mt-1">Proyeksi volume panen vs rata-rata historis (3 Siklus Berikutnya)</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-cyan rounded-sm shadow-[0_0_5px_#00F2FE]"></div>
                <span className="font-label-sm text-label-sm text-text-secondary">Proyeksi Panen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-surface-bright border border-outline-variant rounded-sm"></div>
                <span className="font-label-sm text-label-sm text-text-secondary">Rata-rata Historis</span>
              </div>
            </div>
          </div>
          {/* Bar Chart Placeholder */}
          <div className="h-48 w-full flex items-end gap-12 px-8 pt-4 border-l border-b border-outline-variant/30 relative" style={{ backgroundImage: "linear-gradient(to right, rgba(132, 148, 149, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(132, 148, 149, 0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
            {/* Y-Axis Labels */}
            <div className="absolute left-[-40px] top-0 bottom-0 flex flex-col justify-between text-[10px] text-text-secondary font-mono py-2">
              <span>10k</span><span>7.5k</span><span>5k</span><span>2.5k</span><span>0</span>
            </div>
            {/* Cycle 1 */}
            <div className="flex items-end gap-2 h-full relative group w-1/3 justify-center">
              <div className="w-12 h-[60%] bg-surface-bright border border-outline-variant/50 rounded-t-sm"></div>
              <div className="w-12 h-[80%] bg-gradient-to-t from-accent-cyan/20 to-accent-cyan border border-accent-cyan rounded-t-sm shadow-[0_0_15px_rgba(0,242,254,0.3)]"></div>
              <div className="absolute -bottom-8 font-label-sm text-label-sm text-text-secondary">Q3 2024</div>
            </div>
            {/* Cycle 2 */}
            <div className="flex items-end gap-2 h-full relative group w-1/3 justify-center">
              <div className="w-12 h-[65%] bg-surface-bright border border-outline-variant/50 rounded-t-sm"></div>
              <div className="w-12 h-[75%] bg-gradient-to-t from-accent-cyan/20 to-accent-cyan border border-accent-cyan rounded-t-sm shadow-[0_0_15px_rgba(0,242,254,0.3)]"></div>
              <div className="absolute -bottom-8 font-label-sm text-label-sm text-text-secondary">Q4 2024</div>
            </div>
            {/* Cycle 3 (Alert) */}
            <div className="flex items-end gap-2 h-full relative group w-1/3 justify-center">
              <div className="w-12 h-[70%] bg-surface-bright border border-outline-variant/50 rounded-t-sm"></div>
              <div className="w-12 h-[50%] bg-gradient-to-t from-accent-magenta/20 to-accent-magenta border border-accent-magenta rounded-t-sm shadow-[0_0_15px_rgba(176,38,255,0.3)]"></div>
              <div className="absolute -bottom-8 font-label-sm text-label-sm text-accent-magenta shadow-[0_0_10px_rgba(176,38,255,0.5)]">Q1 2025 (Risiko)</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
