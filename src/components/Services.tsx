export default function Services() {
  const services = [
    "Pembuatan Septic Tank Baru", "Renovasi Septic Tank Lama", "Perbaikan Septic Tank Bocor",
    "Pembuatan Resapan", "Pembuatan Saluran Pembuangan", "Konsultasi Ukuran Septic Tank"
  ];
  return (
    <section className="py-20 px-4 bg-slate-100" id="layanan">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-slate-950 mb-12 text-center">Layanan Kami</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-950">{service}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
