export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-white font-bold text-xl mb-4">Jasa Pembuatan Septic Tank</h3>
          <p>Area: Karawang, Cikarang, Bekasi dan sekitarnya</p>
          <p>WhatsApp: 085882448632</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Layanan Utama</h4>
          <p className="text-sm">Pembuatan Septic Tank, Renovasi Septic Tank, Pembuatan Resapan, Perbaikan & Pembuatan Saluran Limbah</p>
        </div>
      </div>
      <div className="text-center mt-12 text-sm border-t border-slate-800 pt-8">
        &copy; {new Date().getFullYear()} Jasa Pembuatan Septic Tank. Semua Hak Dilindungi.
      </div>
    </footer>
  );
}
