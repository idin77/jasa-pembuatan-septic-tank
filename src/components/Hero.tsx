import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="bg-slate-950 text-white min-h-[90vh] flex items-center justify-center py-20 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Profesional & Terpercaya</span>
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
          Jasa Pembuatan Septic Tank Profesional & Bergaransi
        </h1>
        <p className="text-xl text-slate-300 mb-10 leading-relaxed font-sans max-w-2xl mx-auto">
          Melayani pembuatan septic tank baru untuk rumah, kontrakan, kos, restoran, kantor, dan bangunan usaha dengan pengerjaan rapi, kuat, dan tahan lama.
        </p>
        <a 
          href="https://wa.me/6285882448632" 
          className="inline-flex bg-yellow-400 text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg hover:shadow-yellow-400/20"
        >
          Konsultasi via WhatsApp
        </a>
      </motion.div>
    </section>
  );
}
