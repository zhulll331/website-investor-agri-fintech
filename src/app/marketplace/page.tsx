export default function Marketplace() {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-12">
        <div className="glass-panel rounded-xl p-8 relative overflow-hidden bg-gradient-to-r from-surface-panel to-surface-container-high border border-outline-variant/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-magenta/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-accent-cyan/10 rounded-full blur-3xl translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="font-display-lg text-display-lg font-bold text-text-primary mb-2">Kolam Panen Tersedia</h2>
              <p className="font-body-base text-body-base text-text-secondary max-w-2xl">
                Akses aset pertanian dengan imbal hasil tinggi. Berinvestasi dalam kumpulan smart-contract terverifikasi yang didorong oleh data IoT dan satelit secara langsung. Transparansi tingkat institusional.
              </p>
            </div>
            
            {/* Filter/Sort Bar */}
            <div className="flex gap-4">
              <select className="bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-accent-cyan appearance-none glass-panel">
                <option>Filter berdasarkan Wilayah</option>
                <option>Asia Tenggara</option>
                <option>Amerika Selatan</option>
              </select>
              <select className="bg-surface-container border border-outline-variant/50 rounded-lg px-4 py-2 text-sm text-text-primary focus:outline-none focus:border-accent-cyan appearance-none glass-panel">
                <option>Urutkan berdasarkan ROI</option>
                <option>Tertinggi Dulu</option>
                <option>Terendah Dulu</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Pool Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-card-gap">
        {/* Card 1 */}
        <div className="glass-panel rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] transition-shadow duration-300 flex flex-col group">
          <div className="h-48 relative overflow-hidden">
            <img 
              alt="Pool 1" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" 
              src="/images/marketplace_banyuwangi_1778566927733.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-panel to-transparent"></div>
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 bg-accent-cyan/20 border border-accent-cyan text-accent-cyan rounded-full font-label-sm text-label-sm backdrop-blur-sm shadow-[0_0_10px_rgba(0,242,254,0.3)]">Baru Dibuka</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-headline-md text-headline-md text-text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-cyan">location_on</span>
                Banyuwangi
              </h3>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-label-sm text-label-sm text-text-secondary mb-1">Target Pendanaan</p>
                <p className="font-headline-md text-headline-md font-bold text-text-primary">$250,000</p>
              </div>
              <div className="text-right">
                <p className="font-label-sm text-label-sm text-text-secondary mb-1">Estimasi ROI</p>
                <p className="font-headline-md text-headline-md font-bold text-accent-cyan neon-glow-text">14.5%</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between font-label-sm text-label-sm mb-2">
                <span className="text-text-secondary">Progres</span>
                <span className="text-accent-magenta">Terdanai 22%</span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-accent-magenta neon-glow-magenta w-[22%] rounded-full"></div>
              </div>
            </div>
            <div className="mt-auto">
              <button className="w-full py-3 bg-gradient-to-r from-accent-magenta to-secondary-container rounded-lg font-label-sm text-label-sm text-text-primary font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(176,38,255,0.4)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] transition-all duration-300">
                Beli Token MGT
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="glass-panel rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] transition-shadow duration-300 flex flex-col group">
          <div className="h-48 relative overflow-hidden">
            <img 
              alt="Pool 2" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" 
              src="/images/marketplace_mendoza_1778566945384.png"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-panel to-transparent"></div>
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 bg-surface-bright/50 border border-outline-variant text-text-secondary rounded-full font-label-sm text-label-sm backdrop-blur-sm">Segera Ditutup</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-headline-md text-headline-md text-text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-cyan">location_on</span>
                Mendoza
              </h3>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-label-sm text-label-sm text-text-secondary mb-1">Target Pendanaan</p>
                <p className="font-headline-md text-headline-md font-bold text-text-primary">$500,000</p>
              </div>
              <div className="text-right">
                <p className="font-label-sm text-label-sm text-text-secondary mb-1">Estimasi ROI</p>
                <p className="font-headline-md text-headline-md font-bold text-accent-cyan">18.2%</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between font-label-sm text-label-sm mb-2">
                <span className="text-text-secondary">Progres</span>
                <span className="text-accent-magenta">Terdanai 89%</span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-accent-magenta neon-glow-magenta w-[89%] rounded-full"></div>
              </div>
            </div>
            <div className="mt-auto">
              <button className="w-full py-3 bg-gradient-to-r from-accent-magenta to-secondary-container rounded-lg font-label-sm text-label-sm text-text-primary font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(176,38,255,0.4)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] transition-all duration-300">
                Beli Token MGT
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="glass-panel rounded-xl overflow-hidden hover:shadow-[0_0_20px_rgba(0,242,254,0.15)] transition-shadow duration-300 flex flex-col group">
          <div className="h-48 relative overflow-hidden">
            <div className="absolute inset-0 bg-surface-container-low flex items-center justify-center opacity-50">
              <span className="material-symbols-outlined text-outline-variant text-6xl">eco</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-panel to-transparent"></div>
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3 py-1 bg-accent-cyan/20 border border-accent-cyan text-accent-cyan rounded-full font-label-sm text-label-sm backdrop-blur-sm shadow-[0_0_10px_rgba(0,242,254,0.3)]">Baru Dibuka</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-headline-md text-headline-md text-text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-cyan">location_on</span>
                Chiang Mai
              </h3>
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="font-label-sm text-label-sm text-text-secondary mb-1">Target Pendanaan</p>
                <p className="font-headline-md text-headline-md font-bold text-text-primary">$120,000</p>
              </div>
              <div className="text-right">
                <p className="font-label-sm text-label-sm text-text-secondary mb-1">Estimasi ROI</p>
                <p className="font-headline-md text-headline-md font-bold text-accent-cyan">12.0%</p>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex justify-between font-label-sm text-label-sm mb-2">
                <span className="text-text-secondary">Progres</span>
                <span className="text-accent-magenta">Terdanai 5%</span>
              </div>
              <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
                <div className="h-full bg-accent-magenta neon-glow-magenta w-[5%] rounded-full"></div>
              </div>
            </div>
            <div className="mt-auto">
              <button className="w-full py-3 bg-gradient-to-r from-accent-magenta to-secondary-container rounded-lg font-label-sm text-label-sm text-text-primary font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(176,38,255,0.4)] hover:shadow-[0_0_25px_rgba(176,38,255,0.6)] transition-all duration-300">
                Beli Token MGT
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
