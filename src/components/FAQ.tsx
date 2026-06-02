export default function FAQ() {
  const faqs = [
    { q: "Berapa biaya pembuatan septic tank?", a: "Biaya bervariasi tergantung ukuran dan jenis material. Hubungi kami untuk survei lokasi dan estimasi harga." },
    { q: "Apakah bisa survei lokasi dulu?", a: "Ya, kami melayani survei lokasi untuk menentukan ukuran dan kebutuhan yang tepat." },
    { q: "Berapa lama proses pengerjaan?", a: "Tergantung ukuran dan kondisi tanah, biasanya memakan waktu 3 sampai 7 hari kerja." },
    { q: "Apakah bisa untuk rumah kontrakan atau kos?", a: "Sangat bisa, kami menangani proyek skala rumah kecil hingga bangunan komersial besar." },
    { q: "Apakah menerima renovasi septic tank lama?", a: "Ya, kami melayani jasa renovasi septic tank lama agar kembali berfungsi dengan baik." }
  ];
  return (
    <section className="py-20 px-4 bg-slate-50" id="faq">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-display font-bold text-slate-950 mb-12 text-center">FAQ</h2>
        {faqs.map((faq, i) => (
          <div key={i} className="mb-6 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <h3 className="font-semibold text-lg text-slate-950 mb-2">{faq.q}</h3>
            <p className="text-slate-700">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
