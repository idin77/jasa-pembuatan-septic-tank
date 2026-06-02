export default function Testimonials() {
  const testimonials = [
    { name: "Pak Budi, Pemilik Rumah", quote: "Pengerjaan sangat rapi dan septic tank awet, sudah 3 tahun tidak ada masalah." },
    { name: "Ibu Sari, Pengelola Kontrakan", quote: "Solusi terbaik buat kontrakan saya, warga tidak lagi mengeluh septic tank penuh." },
    { name: "Bapak Deni, Pemilik Restoran", quote: "Pengerjaan cepat, tim profesional, sangat memuaskan." }
  ];
  return (
    <section className="py-20 px-4 bg-white" id="testimoni">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-slate-950 mb-12 text-center">Testimoni Pelanggan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-slate-50p-8 rounded-2xl p-6 border border-slate-100">
              <p className="text-slate-700 italic mb-4">"{t.quote}"</p>
              <h4 className="font-semibold text-slate-950">— {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
