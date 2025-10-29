import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/hero-bg.jpg)",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-white/80 text-sm font-medium tracking-[0.2em] uppercase mb-6">
            INTERIOR DESIGN STUDIO
          </p>
          
          <h1 className="text-white mb-8 leading-tight" style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}>
            Designing spaces
            <br />
            that tell your story
          </h1>
        </motion.div>
      </div>
    </section>
  );
}
