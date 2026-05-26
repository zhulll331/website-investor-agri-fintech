# Light Theme Migration Plan

Mengubah tema "Neon Cyber-Agri" yang bernuansa gelap (dark mode) menjadi tema putih (light mode) memerlukan pembaruan pada konfigurasi token warna di seluruh aplikasi.

## Proposed Changes

### `src/app/globals.css`
Saya akan mengubah variabel warna pada blok `@theme` di `globals.css` untuk merefleksikan estetika tema terang yang bersih dan modern.

#### [MODIFY] globals.css
**Perubahan Warna Utama:**
- `--color-app-bg`: Diubah dari `#151521` (Gelap) menjadi `#f8fafc` (Slate muda/Abu-abu sangat terang).
- `--color-background`, `--color-surface`: Diubah menjadi `#ffffff` (Putih).
- `--color-surface-panel`: Diubah dari `#27293D` menjadi `#ffffff` (Putih) agar kartu-kartu (cards) terlihat bersih.
- `--color-text-primary`: Diubah dari `#FFFFFF` menjadi `#0f172a` (Abu-abu kehitaman) agar teks terbaca jelas.
- `--color-text-secondary`: Diubah dari `#8F9BB3` menjadi `#475569` (Abu-abu medium).
- `--color-on-background`: Diubah menjadi `#0f172a`.

**Perubahan Warna Elemen Surface & Border:**
- `--color-outline-variant`: Menjadi `#e2e8f0` (Border abu-abu muda).
- `--color-surface-variant`, `--color-surface-container`: Menjadi `#f1f5f9`.

**Warna Aksen (Accent Colors):**
- Warna neon *Cyan* (`#00F2FE`) dan *Magenta* (`#B026FF`) dapat dipertahankan karena tetap akan memberikan kontras yang baik dan mempertahankan identitas "Agri-Fintech", atau dapat sedikit digelapkan jika Anda menginginkan kontras yang lebih tinggi pada latar belakang putih.

**Perubahan Class `.glass-panel`:**
- Latar belakang akan diubah dari `rgba(39, 41, 61, 0.7)` menjadi `rgba(255, 255, 255, 0.7)` agar efek kaca tembus pandang cocok untuk tema putih.
- Warna border kaca akan disesuaikan menjadi abu-abu muda.

### `src/app/layout.tsx`
Menghapus class `dark` dari tag `<html>` (meskipun pada Tailwind v4 global theme ini mungkin opsional, ini adalah praktik terbaik).

## User Review Required

> [!IMPORTANT]  
> Mengubah tema akan mengubah tampilan keseluruhan aplikasi secara drastis dari "Neon Dark" menjadi "Clean Light". Apakah Anda setuju dengan pemetaan warna latar belakang putih/abu-abu terang dan teks gelap seperti yang diusulkan di atas? 
> 
> **Pertanyaan Tambahan:** Apakah Anda ingin saya tetap mempertahankan warna aksen Cyan dan Magenta yang menyala, atau Anda ingin mengubah warna aksen tersebut agar lebih redup dan cocok dengan tema terang?
