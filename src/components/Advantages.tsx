export default function Advantages() {
  const points = [
    "Tukang Berpengalaman", "Material Kuat & Berkualitas", "Pengerjaan Rapi & Cepat",
    "Bisa Survei Lokasi", "Harga Transparan & Jujur", "Melayani Berbagai Jenis Bangunan", "Konsultasi Ukuran Akurat"
  ];
  return (
    <section className="py-20 px-4 bg-white" id="keunggulan">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-slate-950 mb-12 text-center">Keunggulan Layanan Kami</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {points.map((p, i) => (
            <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-yellow-500 text-2xl">✓</span>
              <span className="font-medium text-slate-800">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
