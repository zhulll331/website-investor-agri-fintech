export default function Settlement() {
  return (
    <>
      {/* Glowing Notification */}
      <div className="mb-8 p-4 rounded-xl bg-surface-panel border border-accent-cyan/30 flex items-center justify-between shadow-[0_0_20px_rgba(0,242,254,0.15)] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-transparent opacity-50"></div>
        <div className="relative z-10 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-accent-cyan/20 flex items-center justify-center border border-accent-cyan text-accent-cyan shadow-[0_0_10px_rgba(0,242,254,0.5)]">
            <span className="material-symbols-outlined">check_circle</span>
          </div>
          <div>
            <h3 className="font-label-sm text-label-sm font-bold text-accent-cyan uppercase tracking-wider">Pembayaran Terbaru Dikonfirmasi</h3>
            <p className="font-body-base text-body-base text-text-secondary text-sm mt-1">Eksekusi Smart Contract berhasil untuk imbal hasil Fase 3.</p>
          </div>
        </div>
        <button className="relative z-10 text-text-secondary hover:text-accent-cyan transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-card-gap mb-card-gap">
        {/* Summary KPI */}
        <div className="col-span-12 md:col-span-4 bg-surface-panel rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent-magenta/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <p className="font-label-sm text-label-sm text-text-secondary uppercase tracking-widest mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">account_balance</span>
              Total Pembayaran Diterima
            </p>
            <h2 className="font-kpi-value text-kpi-value text-text-primary mb-4">$1,284,500<span className="text-accent-cyan text-lg ml-1">.00</span></h2>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center gap-1">
                <span className="material-symbols-outlined text-accent-cyan text-[16px]">trending_up</span>
                <span className="font-label-sm text-label-sm text-accent-cyan font-bold">+12.4%</span>
              </div>
              <span className="font-body-base text-body-base text-text-secondary text-xs">vs kuartal lalu</span>
            </div>
          </div>
        </div>

        {/* ROI Chart */}
        <div className="col-span-12 md:col-span-8 bg-surface-panel rounded-xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-md text-headline-md text-text-primary text-xl">Riwayat ROI</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs font-label-sm text-label-sm rounded bg-surface-variant text-text-primary hover:bg-surface-bright transition-colors">1B</button>
              <button className="px-3 py-1 text-xs font-label-sm text-label-sm rounded bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30 shadow-[0_0_10px_rgba(0,242,254,0.2)]">6B</button>
              <button className="px-3 py-1 text-xs font-label-sm text-label-sm rounded bg-surface-variant text-text-primary hover:bg-surface-bright transition-colors">1T</button>
            </div>
          </div>
          <div className="flex-1 flex items-end gap-2 h-48 relative">
            {/* Chart Background Grid */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
              <div className="border-b border-outline w-full h-0"></div>
              <div className="border-b border-outline w-full h-0"></div>
              <div className="border-b border-outline w-full h-0"></div>
              <div className="border-b border-outline w-full h-0"></div>
            </div>
            {/* Bars */}
            <div className="w-full flex justify-between items-end h-full px-2">
              <div className="flex flex-col items-center gap-2 group w-1/6">
                <div className="w-full bg-gradient-to-t from-surface-variant to-outline-variant rounded-t-sm h-[30%] relative group-hover:from-accent-cyan/20 group-hover:to-accent-cyan/50 transition-all duration-300"></div>
                <span className="font-label-sm text-[10px] text-text-secondary">Jan</span>
              </div>
              <div className="flex flex-col items-center gap-2 group w-1/6">
                <div className="w-full bg-gradient-to-t from-surface-variant to-outline-variant rounded-t-sm h-[45%] relative group-hover:from-accent-cyan/20 group-hover:to-accent-cyan/50 transition-all duration-300"></div>
                <span className="font-label-sm text-[10px] text-text-secondary">Feb</span>
              </div>
              <div className="flex flex-col items-center gap-2 group w-1/6">
                <div className="w-full bg-gradient-to-t from-surface-variant to-outline-variant rounded-t-sm h-[60%] relative group-hover:from-accent-cyan/20 group-hover:to-accent-cyan/50 transition-all duration-300"></div>
                <span className="font-label-sm text-[10px] text-text-secondary">Mar</span>
              </div>
              <div className="flex flex-col items-center gap-2 group w-1/6">
                <div className="w-full bg-gradient-to-t from-surface-variant to-outline-variant rounded-t-sm h-[50%] relative group-hover:from-accent-cyan/20 group-hover:to-accent-cyan/50 transition-all duration-300"></div>
                <span className="font-label-sm text-[10px] text-text-secondary">Apr</span>
              </div>
              <div className="flex flex-col items-center gap-2 group w-1/6">
                <div className="w-full bg-gradient-to-t from-surface-variant to-outline-variant rounded-t-sm h-[75%] relative group-hover:from-accent-cyan/20 group-hover:to-accent-cyan/50 transition-all duration-300"></div>
                <span className="font-label-sm text-[10px] text-text-secondary">Mei</span>
              </div>
              <div className="flex flex-col items-center gap-2 group w-1/6">
                <div className="w-full bg-gradient-to-t from-accent-magenta/30 to-accent-magenta rounded-t-sm h-[90%] relative shadow-[0_0_15px_rgba(176,38,255,0.4)]">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container px-2 py-1 rounded text-xs font-bold text-accent-magenta border border-accent-magenta/30 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">8.2%</div>
                </div>
                <span className="font-label-sm text-[10px] text-accent-magenta font-bold">Jun</span>
              </div>
            </div>
          </div>
        </div>

        {/* Transaction Table */}
        <div className="col-span-12 bg-surface-panel rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] overflow-hidden">
          <div className="p-6 border-b border-outline-variant/30 flex justify-between items-center bg-surface-panel/50 backdrop-blur">
            <h3 className="font-headline-md text-headline-md text-text-primary text-xl flex items-center gap-2">
              <span className="material-symbols-outlined text-accent-cyan">receipt_long</span>
              Riwayat Penyelesaian
            </h3>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-outline-variant text-text-secondary hover:text-text-primary hover:border-outline transition-colors text-sm font-label-sm">
              <span className="material-symbols-outlined text-[18px]">download</span>
              Ekspor CSV
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-variant/30 font-label-sm text-label-sm text-text-secondary uppercase tracking-wider">
                  <th className="p-4 pl-6 font-medium">Tanggal & Waktu</th>
                  <th className="p-4 font-medium">ID Aset</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium text-right">Jumlah</th>
                  <th className="p-4 pr-6 font-medium text-right">Verifikasi</th>
                </tr>
              </thead>
              <tbody className="font-body-base text-body-base text-sm divide-y divide-outline-variant/20">
                <tr className="hover:bg-surface-bright/10 transition-colors group">
                  <td className="p-4 pl-6 text-on-surface-variant">2023-10-27 14:32:01 UTC</td>
                  <td className="p-4 text-text-primary font-mono text-xs">AGRI-SOY-992A</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-bold tracking-wide shadow-[0_0_5px_rgba(0,242,254,0.2)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
                      Panen Selesai - ROI 8% Didistribusikan
                    </span>
                  </td>
                  <td className="p-4 text-right text-text-primary font-bold">+$42,500.00</td>
                  <td className="p-4 pr-6 text-right">
                    <a className="inline-flex items-center gap-1 text-accent-magenta hover:text-accent-purple transition-colors text-xs font-mono uppercase tracking-wider group-hover:underline" href="#">
                      <span className="material-symbols-outlined text-[14px]">link</span>
                      0x7a...4f2b
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright/10 transition-colors group">
                  <td className="p-4 pl-6 text-on-surface-variant">2023-09-15 09:12:44 UTC</td>
                  <td className="p-4 text-text-primary font-mono text-xs">AGRI-WHT-104B</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-bold tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan"></span>
                      Panen Selesai - ROI 7.5% Didistribusikan
                    </span>
                  </td>
                  <td className="p-4 text-right text-text-primary font-bold">+$18,200.00</td>
                  <td className="p-4 pr-6 text-right">
                    <a className="inline-flex items-center gap-1 text-text-secondary hover:text-accent-cyan transition-colors text-xs font-mono uppercase tracking-wider group-hover:underline" href="#">
                      <span className="material-symbols-outlined text-[14px]">link</span>
                      0x3b...9e1a
                    </a>
                  </td>
                </tr>
                <tr className="hover:bg-surface-bright/10 transition-colors group">
                  <td className="p-4 pl-6 text-on-surface-variant">2023-08-02 11:45:10 UTC</td>
                  <td className="p-4 text-text-primary font-mono text-xs">AGRI-CORN-77X</td>
                  <td className="p-4">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-variant border border-outline-variant text-text-secondary text-xs font-medium tracking-wide">
                      <span className="material-symbols-outlined text-[12px]">pending</span>
                      Memproses Audit
                    </span>
                  </td>
                  <td className="p-4 text-right text-text-secondary font-medium">--</td>
                  <td className="p-4 pr-6 text-right">
                    <span className="text-text-secondary text-xs italic">Tertunda</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-outline-variant/30 bg-surface-panel/50 flex justify-center">
            <button className="text-xs font-label-sm text-text-secondary hover:text-accent-cyan transition-colors flex items-center gap-1">
              Lihat Semua Catatan <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
