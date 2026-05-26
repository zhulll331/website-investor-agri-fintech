export default function Dashboard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-gutter">
        {/* KPI 1 */}
        <div className="glass-panel rounded-xl p-card-gap relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-magenta/20 rounded-full blur-2xl group-hover:bg-accent-magenta/30 transition-all"></div>
          <h3 className="font-label-sm text-label-sm text-text-secondary uppercase mb-2">Total MGT Dimiliki</h3>
          <div className="flex items-end space-x-2">
            <span className="font-kpi-value text-kpi-value text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-accent-magenta">25,000</span>
            <span className="font-body-base text-body-base text-accent-magenta pb-1">MGT</span>
          </div>
        </div>
        {/* KPI 2 */}
        <div className="glass-panel rounded-xl p-card-gap relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-cyan/20 rounded-full blur-2xl group-hover:bg-accent-cyan/30 transition-all"></div>
          <h3 className="font-label-sm text-label-sm text-text-secondary uppercase mb-2">Estimasi Imbal Hasil (APR)</h3>
          <div className="flex items-end space-x-2">
            <span className="font-kpi-value text-kpi-value text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-accent-cyan">8.2</span>
            <span className="font-body-base text-body-base text-accent-cyan pb-1">%</span>
          </div>
        </div>
        {/* KPI 3 */}
        <div className="glass-panel rounded-xl p-card-gap flex flex-col justify-between">
          <h3 className="font-label-sm text-label-sm text-text-secondary uppercase mb-2">Cuaca Lahan Saat Ini</h3>
          <div className="flex items-center space-x-3 mt-1">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center neon-glow-cyan">
              <span className="material-symbols-outlined text-accent-cyan">sunny</span>
            </div>
            <div>
              <div className="inline-flex items-center px-2 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-label-sm text-xs uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mr-1.5 animate-pulse"></span> Aman
              </div>
              <p className="font-body-base text-sm text-on-surface-variant mt-1">Kondisi tumbuh optimal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Main Chart Area */}
        <div className="md:col-span-8 glass-panel rounded-xl p-card-gap flex flex-col min-h-[400px]">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-headline-md text-headline-md text-text-primary">Pelacak Panen Manggis</h2>
              <p className="font-label-sm text-label-sm text-text-secondary mt-1">Proyeksi vs Aktual (Pemindaian NDVI)</p>
            </div>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-accent-cyan shadow-[0_0_5px_#00F2FE]"></div>
                <span className="font-label-sm text-xs text-text-secondary">Proyeksi</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-accent-magenta shadow-[0_0_5px_#B026FF]"></div>
                <span className="font-label-sm text-xs text-text-secondary">Aktual (NDVI)</span>
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full h-full border-b border-l border-outline-variant/30">
            <div className="absolute inset-0 flex flex-col justify-between pb-8">
              <div className="w-full border-t border-outline-variant/10"></div>
              <div className="w-full border-t border-outline-variant/10"></div>
              <div className="w-full border-t border-outline-variant/10"></div>
              <div className="w-full border-t border-outline-variant/10"></div>
            </div>

            <svg className="absolute inset-0 w-full h-full pb-8" preserveAspectRatio="none" viewBox="0 0 100 100">
              <defs>
                <linearGradient id="cyanGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.2"></stop>
                  <stop offset="100%" stopColor="#00F2FE" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient id="magGrad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#B026FF" stopOpacity="0.2"></stop>
                  <stop offset="100%" stopColor="#B026FF" stopOpacity="0"></stop>
                </linearGradient>
                <filter height="140%" id="glowCyan" width="140%" x="-20%" y="-20%">
                  <feGaussianBlur result="blur" stdDeviation="2"></feGaussianBlur>
                  <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                </filter>
                <filter height="140%" id="glowMag" width="140%" x="-20%" y="-20%">
                  <feGaussianBlur result="blur" stdDeviation="2"></feGaussianBlur>
                  <feComposite in="SourceGraphic" in2="blur" operator="over"></feComposite>
                </filter>
              </defs>

              <path d="M0,80 Q20,70 40,50 T80,30 L100,20 L100,100 L0,100 Z" fill="url(#cyanGrad)"></path>
              <path d="M0,90 Q25,85 45,65 T75,45 L100,35 L100,100 L0,100 Z" fill="url(#magGrad)"></path>

              <path d="M0,80 Q20,70 40,50 T80,30 L100,20" fill="none" filter="url(#glowCyan)" stroke="#00F2FE" strokeWidth="0.8"></path>
              <path d="M0,90 Q25,85 45,65 T75,45 L100,35" fill="none" filter="url(#glowMag)" stroke="#B026FF" strokeWidth="0.8"></path>
            </svg>

            <div className="absolute bottom-0 w-full flex justify-between text-[10px] text-text-secondary pt-2">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>Mei</span>
              <span>Jun</span>
            </div>
          </div>
        </div>

        {/* Right Panel: Live Farmer Feed */}
        <div className="md:col-span-4 glass-panel rounded-xl p-card-gap flex flex-col h-full">
          <div className="flex items-center space-x-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse shadow-[0_0_8px_#00F2FE]"></span>
            <h2 className="font-headline-md text-headline-md text-text-primary text-lg">Umpan Petani Langsung</h2>
          </div>
          <div className="flex-1 space-y-6 relative before:absolute before:inset-y-0 before:left-[15px] before:w-[1px] before:bg-outline-variant/30">
            {/* Activity Item 1 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-[32px] h-[32px] rounded-full bg-surface-container border border-accent-cyan flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,242,254,0.2)]">
                <span className="material-symbols-outlined text-accent-cyan" style={{ fontSize: "16px" }}>psychology</span>
              </div>
              <div>
                <p className="font-body-base text-sm text-text-primary">Pak Slamet melakukan pemindaian AI</p>
                <p className="font-label-sm text-xs text-accent-cyan mt-0.5">Dikonfirmasi Bebas Hama</p>
                <p className="font-label-sm text-xs text-text-secondary mt-1">2 jam lalu</p>
              </div>
            </div>
            {/* Activity Item 2 */}
            <div className="relative pl-10">
              <div className="absolute left-0 top-1 w-[32px] h-[32px] rounded-full bg-surface-container border border-accent-magenta flex items-center justify-center z-10 shadow-[0_0_10px_rgba(176,38,255,0.2)]">
                <span className="material-symbols-outlined text-accent-magenta" style={{ fontSize: "16px" }}>payments</span>
              </div>
              <div>
                <p className="font-body-base text-sm text-text-primary">Dana OPEX dicairkan</p>
                <p className="font-label-sm text-xs text-accent-magenta mt-0.5">Smart Contract Dieksekusi</p>
                <p className="font-label-sm text-xs text-text-secondary mt-1">Kemarin</p>
              </div>
            </div>
            {/* Activity Item 3 */}
            <div className="relative pl-10 opacity-70">
              <div className="absolute left-0 top-1 w-[32px] h-[32px] rounded-full bg-surface-container border border-outline-variant flex items-center justify-center z-10">
                <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: "16px" }}>sensors</span>
              </div>
              <div>
                <p className="font-body-base text-sm text-on-surface-variant">Pembaruan Kelembapan Tanah IoT</p>
                <p className="font-label-sm text-xs text-text-secondary mt-1">2 hari lalu</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Left Widget */}
        <div className="md:col-span-4 glass-panel rounded-xl p-card-gap">
          <h2 className="font-headline-md text-headline-md text-text-primary text-lg mb-6">Rasio Xanthone</h2>
          <div className="flex items-center justify-center relative py-4">
            <svg height="160" viewBox="0 0 160 160" width="160">
              <circle cx="80" cy="80" fill="none" r="70" stroke="#2e3637" strokeWidth="16"></circle>
              <circle className="origin-center -rotate-90" cx="80" cy="80" fill="none" r="70" stroke="#00F2FE" strokeDasharray="439.8" strokeDashoffset="109.9" strokeLinecap="round" strokeWidth="16" style={{ filter: "drop-shadow(0 0 8px rgba(0,242,254,0.4))" }}></circle>
              <circle className="origin-center rotate-180" cx="80" cy="80" fill="none" r="70" stroke="#B026FF" strokeDasharray="439.8" strokeDashoffset="329.8" strokeLinecap="round" strokeWidth="16" style={{ filter: "drop-shadow(0 0 8px rgba(176,38,255,0.4))" }}></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-kpi-value text-2xl text-text-primary">100%</span>
              <span className="font-label-sm text-[10px] text-text-secondary uppercase">Hasil Panen</span>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="text-center">
              <div className="font-label-sm text-xs text-accent-cyan uppercase mb-1">Daging Ekspor</div>
              <div className="font-headline-md text-lg text-text-primary">75%</div>
            </div>
            <div className="text-center">
              <div className="font-label-sm text-xs text-accent-magenta uppercase mb-1">Limbah Kulit</div>
              <div className="font-headline-md text-lg text-text-primary">25%</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 glass-panel rounded-xl p-card-gap flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('/images/dashboard_banner_1778566912356.png')] bg-cover bg-center opacity-20"></div>
          <div className="relative z-10 text-center">
            <span className="material-symbols-outlined text-outline text-4xl mb-2">satellite_alt</span>
            <h3 className="font-body-base text-on-surface-variant">Memuat Telemetri Satelit Langsung...</h3>
          </div>
        </div>
      </div>
    </>
  );
}
