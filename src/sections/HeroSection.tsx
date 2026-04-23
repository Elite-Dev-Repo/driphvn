import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import hero from "../assets/hero.jpg";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.4 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-end">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="DRIPHVN Hero"
          className="w-full h-full object-cover object-center opacity-75"
        />
        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/5" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent" />
      </div>

      {/* Thin left accent line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute left-8 top-28 bottom-28 w-px bg-white/25 hidden lg:block"
      />

      {/* Top-right label */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute top-24 right-8 md:right-12 hidden md:flex flex-col items-end gap-1"
      >
        <span className="font-mono-custom text-[9px] tracking-widest3 text-offwhite/25 uppercase">
          SS — 2025
        </span>
        <span className="font-mono-custom text-[9px] tracking-widest3 text-white/50 uppercase">
          Limited Drop
        </span>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 pt-40 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="font-mono-custom text-[10px] tracking-widest3 text-white uppercase mb-7 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-white/60" />
            Luxury Streetwear · Born in Nigeria
          </motion.p>

          {/* Brand name - huge */}
          <motion.div variants={item} className="overflow-hidden mb-2">
            <h1
              className="font-display leading-none text-offwhite"
              style={{
                fontSize: "clamp(5rem, 15vw, 11rem)",
                letterSpacing: "0.05em",
              }}
            >
              DRIP<span className="text-black px-4 py-2 bg-[#e60505]">HVN</span>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="font-heading italic text-2xl md:text-3xl text-offwhite/60 mb-3 font-light"
          >
            Not all luxury is made the same.
          </motion.p>

          {/* Sub-text */}
          <motion.p
            variants={item}
            className="font-body font-light text-sm md:text-base text-offwhite/40 max-w-md leading-relaxed mb-12"
          >
            We are luxury streetwear — a fusion of high fashion and street
            culture, built for those who refuse to be ordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#lookbook"
              className="inline-flex items-center gap-3 border border-offwhite/20 text-offwhite/70 font-mono-custom text-[10px] tracking-widest2 uppercase px-8 py-4 hover:border-white hover:text-white transition-all duration-300"
            >
              Explore Collection
            </a>
          </motion.div>
        </motion.div>

        {/* Right side stats — desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-24 right-10 hidden lg:flex flex-col gap-8 text-right"
        >
          {[
            { val: "100%", label: "In-House Design" },
            { val: "Ltd.", label: "Every Piece" },
            { val: "NG", label: "Born & Made" },
          ].map(({ val, label }) => (
            <div key={label}>
              <p className="font-display text-2xl text-offwhite tracking-widest">
                {val}
              </p>
              <p className="font-mono-custom text-[9px] tracking-widest2 text-offwhite/25 uppercase">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono-custom text-[9px] text-offwhite/25 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-offwhite/25" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  );
}
