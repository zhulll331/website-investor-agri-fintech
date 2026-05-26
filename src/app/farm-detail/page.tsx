export default function FarmDetail() {
  return (
    <>
      {/* Header Section: Farm Detail */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-card-gap mb-card-gap">
        <div className="col-span-1 md:col-span-12 bg-surface-panel rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-outline-variant/10 overflow-hidden flex flex-col md:flex-row relative">
          {/* Data Info Side */}
          <div className="flex-1 p-8 flex flex-col justify-center relative z-10 bg-gradient-to-r from-surface-panel via-surface-panel to-transparent">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-1 bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-label-sm text-label-sm px-3 py-1 rounded-full uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span> Imbal Hasil Aktif
              </span>
              <span className="inline-flex items-center gap-1 bg-surface-variant text-text-secondary font-label-sm text-label-sm px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-[14px]">token</span> ERC-3643
              </span>
            </div>
            <h2 className="font-display-lg text-display-lg font-bold text-text-primary mb-2">Lahan Alpha Banyuwangi</h2>
            <div className="flex items-center gap-6 text-text-secondary font-body-base text-body-base mb-6">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">location_on</span>
                8°12'45.2"S 114°20'18.9"E
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">forest</span>
                Mangosteen Core
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-outline">straighten</span>
                42.5 Hectares
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6 md:mt-auto">
              <div>
                <p className="font-label-sm text-label-sm text-text-secondary uppercase mb-1">NAB Saat Ini</p>
                <p className="font-kpi-value text-kpi-value text-primary-fixed-dim">$1.42 <span className="text-body-base font-normal text-text-secondary">/ Token</span></p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-text-secondary uppercase mb-1">Estimasi Imbal Hasil Tahunan</p>
                <p className="font-kpi-value text-kpi-value text-accent-cyan">14.8%</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-text-secondary uppercase mb-1">Panen Berikutnya</p>
                <p className="font-kpi-value text-kpi-value text-on-background">42 <span className="text-body-base font-normal text-text-secondary">Hari</span></p>
              </div>
            </div>
          </div>
          {/* Satellite Map Side */}
          <div className="w-full md:w-1/3 h-64 md:h-auto relative flex-shrink-0 border-t md:border-t-0 md:border-l border-outline-variant/30 bg-surface-container-low">
            <img 
              alt="Satellite view of farm" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity" 
              src="/images/satellite_farm_1778566834878.png"
            />
            {/* Overlay Grid/Reticle */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,242,254,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,242,254,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-accent-magenta/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(176,38,255,0.3)]">
              <div className="w-2 h-2 bg-accent-magenta rounded-full shadow-[0_0_10px_rgba(176,38,255,1)]"></div>
              <div className="absolute w-full h-[1px] bg-accent-magenta/30"></div>
              <div className="absolute h-full w-[1px] bg-accent-magenta/30"></div>
            </div>
            <div className="absolute bottom-4 right-4 bg-app-bg/80 backdrop-blur px-2 py-1 rounded font-label-sm text-label-sm text-accent-cyan border border-accent-cyan/20">
              SIARAN SATELIT LANGSUNG
            </div>
          </div>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-card-gap">
        {/* Left Column: Data Visualizations */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-card-gap">
          {/* Sentinel-2 NDVI Area Chart */}
          <div className="bg-surface-panel rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-outline-variant/10 p-6 flex flex-col h-80">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-headline-md text-headline-md font-semibold text-on-background">Indeks NDVI Sentinel-2</h3>
                <p className="font-label-sm text-label-sm text-text-secondary mt-1">Pelacakan Kesehatan & Kepadatan Vegetasi (90 Hari)</p>
              </div>
              <div className="flex items-center gap-2 bg-surface-variant/50 rounded-lg p-1">
                <button className="px-3 py-1 font-label-sm text-label-sm rounded bg-surface-panel shadow text-accent-cyan border border-accent-cyan/30">NDVI</button>
                <button className="px-3 py-1 font-label-sm text-label-sm rounded text-text-secondary hover:text-on-background">EVI</button>
              </div>
            </div>
            {/* Chart Area */}
            <div className="flex-1 relative w-full flex items-end">
              <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-text-secondary font-label-sm text-[10px] w-8">
                <span>0.9</span>
                <span>0.6</span>
                <span>0.3</span>
                <span>0.0</span>
              </div>
              <div className="absolute left-10 right-0 top-0 bottom-6 flex flex-col justify-between z-0">
                <div className="w-full border-t border-outline-variant/10"></div>
                <div className="w-full border-t border-outline-variant/10"></div>
                <div className="w-full border-t border-outline-variant/10"></div>
                <div className="w-full border-t border-outline-variant/20"></div>
              </div>
              <div className="absolute left-10 right-0 bottom-6 top-4 z-10 overflow-hidden">
                <svg className="w-full h-full drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <defs>
                    <linearGradient id="ndviGrad" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.4"></stop>
                      <stop offset="100%" stopColor="#00F2FE" stopOpacity="0.0"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M 0,80 C 10,75 20,60 30,65 C 40,70 50,40 60,35 C 70,30 80,15 90,20 C 95,22 98,10 100,5 L 100,100 L 0,100 Z" fill="url(#ndviGrad)"></path>
                  <path d="M 0,80 C 10,75 20,60 30,65 C 40,70 50,40 60,35 C 70,30 80,15 90,20 C 95,22 98,10 100,5" fill="none" stroke="#00F2FE" strokeLinecap="round" strokeWidth="1.5"></path>
                </svg>
                <div className="absolute top-[5%] right-0 w-3 h-3 bg-app-bg border-2 border-accent-cyan rounded-full shadow-[0_0_10px_rgba(0,242,254,1)] transform translate-x-1/2 -translate-y-1/2"></div>
              </div>
              <div className="absolute left-10 right-0 bottom-0 flex justify-between text-text-secondary font-label-sm text-[10px]">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span className="text-accent-cyan">Hari Ini</span>
              </div>
            </div>
          </div>

          {/* AI Scanner Log Gallery */}
          <div className="bg-surface-panel rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-outline-variant/10 p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-headline-md text-headline-md font-semibold text-on-background">Log Pemindai AI</h3>
                <p className="font-label-sm text-label-sm text-text-secondary mt-1">Siaran visual langsung dari kamera IoT lapangan</p>
              </div>
              <button className="text-accent-magenta font-label-sm text-label-sm hover:underline flex items-center gap-1">
                Lihat Semua <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Gallery Item 1 */}
              <div className="relative group rounded-lg overflow-hidden border border-outline-variant/20 aspect-video bg-surface-container">
                <img alt="Mangosteen crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" src="/images/mangosteen_crop_1778566852128.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center gap-1 bg-surface-panel/80 backdrop-blur border border-accent-cyan text-accent-cyan font-label-sm text-[10px] px-2 py-0.5 rounded shadow-[0_0_8px_rgba(0,242,254,0.3)]">
                    <span className="material-symbols-outlined text-[12px] symbol-filled">check_circle</span> Sehat
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end font-label-sm text-[10px] text-on-surface-variant">
                  <span>Sector 4-A</span>
                  <span>12:44 PM</span>
                </div>
              </div>
              {/* Gallery Item 2 */}
              <div className="relative group rounded-lg overflow-hidden border border-outline-variant/20 aspect-video bg-surface-container">
                <img alt="Mangosteen field" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" src="/images/mangosteen_field_1778566868249.png" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center gap-1 bg-surface-panel/80 backdrop-blur border border-accent-cyan text-accent-cyan font-label-sm text-[10px] px-2 py-0.5 rounded shadow-[0_0_8px_rgba(0,242,254,0.3)]">
                    <span className="material-symbols-outlined text-[12px] symbol-filled">check_circle</span> Sehat
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end font-label-sm text-[10px] text-on-surface-variant">
                  <span>Sector 4-B</span>
                  <span>12:15 PM</span>
                </div>
              </div>
              {/* Gallery Item 3 */}
              <div className="relative group rounded-lg overflow-hidden border border-outline-variant/20 aspect-video bg-surface-container">
                <img alt="Mangosteen detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 mix-blend-luminosity" src="/images/mangosteen_detail_1778566884777.png" />
                <div className="absolute inset-0 bg-accent-cyan/10 mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute top-2 left-2">
                  <span className="inline-flex items-center gap-1 bg-surface-panel/80 backdrop-blur border border-tertiary-fixed-dim text-tertiary-fixed-dim font-label-sm text-[10px] px-2 py-0.5 rounded shadow-[0_0_8px_rgba(232,196,35,0.3)]">
                    <span className="material-symbols-outlined text-[12px]">water_drop</span> Mengairi
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 right-2 flex justify-between items-end font-label-sm text-[10px] text-on-surface-variant">
                  <span>Sensor Node 9</span>
                  <span>11:50 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Investment & Metrics */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-card-gap">
          {/* Investment Widget */}
          <div className="bg-surface-panel rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-outline-variant/10 p-6 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-magenta/10 blur-[40px] rounded-full pointer-events-none"></div>
            <div className="mb-6">
              <h3 className="font-headline-md text-headline-md font-semibold text-on-background">Investasi di Lahan</h3>
              <p className="font-label-sm text-label-sm text-text-secondary mt-1">Dapatkan kepemilikan fraksional melalui token ERC-3643.</p>
            </div>
            <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/20 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-sm text-label-sm text-text-secondary">Alokasi Tersedia</span>
                <span className="font-label-sm text-label-sm text-on-background font-semibold">12,450 TOKENS</span>
              </div>
              <div className="w-full bg-surface-bright rounded-full h-1.5 mb-1 overflow-hidden">
                <div className="bg-gradient-to-r from-accent-cyan to-primary-fixed h-1.5 rounded-full shadow-[0_0_8px_rgba(0,242,254,0.5)]" style={{ width: "65%" }}></div>
              </div>
              <div className="text-right font-label-sm text-[10px] text-text-secondary">65% Berlangganan</div>
            </div>
            <div className="mb-6 relative">
              <label className="block font-label-sm text-label-sm text-text-secondary mb-2">Jumlah Investasi (USD)</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant font-headline-md text-headline-md">$</span>
                <input className="w-full bg-surface-container border border-outline-variant/30 rounded-lg py-3 pl-8 pr-16 text-right font-headline-md text-headline-md text-text-primary focus:border-accent-magenta focus:ring-1 focus:ring-accent-magenta transition-colors" placeholder="0.00" type="number" defaultValue="5000" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary font-label-sm text-label-sm">USD</span>
              </div>
              <div className="flex justify-between items-center mt-2 font-label-sm text-label-sm">
                <span className="text-text-secondary">≈ 3,521.12 BANYU</span>
                <button className="text-accent-cyan hover:underline">Maks</button>
              </div>
            </div>
            <button className="w-full bg-gradient-to-r from-accent-magenta to-accent-purple text-text-primary font-body-base text-body-base font-bold py-3.5 rounded-lg shadow-[0_0_15px_rgba(176,38,255,0.4)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] transition-all duration-300 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">shopping_cart_checkout</span>
              Selesaikan Alokasi
            </button>
            <p className="text-center font-label-sm text-[10px] text-text-secondary mt-4 flex items-center justify-center gap-1">
              <span className="material-symbols-outlined text-[14px]">lock</span> Smart Contract Diaudit & Diamankan
            </p>
          </div>

          {/* Circular Economy Widget */}
          <div className="bg-surface-panel rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-outline-variant/10 p-6 flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-headline-md text-headline-md font-semibold text-on-background">Ekonomi Sirkular</h3>
                <p className="font-label-sm text-label-sm text-text-secondary mt-1">Pemulihan nilai produk sampingan</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center border border-outline-variant/30 text-accent-cyan">
                <span className="material-symbols-outlined text-[18px]">recycling</span>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-body-base text-body-base text-primary-fixed mb-1">Produksi Xanthone</h4>
              <p className="font-label-sm text-label-sm text-text-secondary mb-3">Mengekstrak senyawa bernilai tinggi dari kulit buah untuk pasar farmasi, meningkatkan total agunan aset.</p>
              <div className="flex items-end gap-3 mb-2">
                <span className="font-kpi-value text-kpi-value text-text-primary">84%</span>
                <span className="font-label-sm text-label-sm text-accent-cyan flex items-center mb-1">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> +12% MoM
                </span>
              </div>
              <div className="relative w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-accent-cyan via-primary-fixed to-accent-magenta rounded-full shadow-[0_0_10px_rgba(176,38,255,0.5)]" style={{ width: "84%" }}></div>
                <div className="absolute top-0 left-1/4 h-full w-[1px] bg-background/50 z-10"></div>
                <div className="absolute top-0 left-2/4 h-full w-[1px] bg-background/50 z-10"></div>
                <div className="absolute top-0 left-3/4 h-full w-[1px] bg-background/50 z-10"></div>
              </div>
              <div className="flex justify-between text-[10px] font-label-sm text-text-secondary mt-1 uppercase">
                <span>Pengumpulan</span>
                <span>Pemrosesan</span>
                <span className="text-accent-magenta font-semibold">Agunan Ditambahkan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
