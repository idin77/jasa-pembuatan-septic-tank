export default function Process() {
  const steps = [
    { title: "Konsultasi", desc: "Bagikan kebutuhan Anda kepada kami." },
    { title: "Survei Lokasi", desc: "Kami mengunjungi lokasi untuk pemetaan." },
    { title: "Penentuan Ukuran", desc: "Menentukan ukuran septic tank yang pas." },
    { title: "Estimasi Harga", desc: "Penawaran harga terbaik dan transparan." },
    { title: "Pengerjaan", desc: "Tim bekerja dengan rapi dan profesional." },
    { title: "Finishing & Cek", desc: "Pengecekan akhir untuk memastikan berfungsi." }
  ];
  return (
    <section className="py-20 px-4 bg-white" id="proses">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-slate-950 mb-12 text-center">Proses Pengerjaan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-4">
              <div className="bg-slate-900 text-yellow-400 font-bold w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                {i + 1}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="text-slate-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
