import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

import img8 from "../assets/img8.jpg";

const stats = [
  { val: "2026", label: "Founded" },
  { val: "500+", label: "Pieces Sold" },
  { val: "12", label: "Drops / Year" },
];

export default function BrandSection() {
  return (
    <SectionWrapper id="brand" className="bg-[#111] py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={img8}
                alt="Brand story"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Rotated watermark */}
            <div
              className="absolute -right-6 top-1/2 hidden lg:block"
              style={{
                transform: "translateY(-50%) rotate(90deg)",
                transformOrigin: "center",
              }}
            >
              <span className="font-mono-custom text-[9px] tracking-widest3 text-offwhite/[0.07] uppercase whitespace-nowrap">
                We Are Not Traditional — We Are Not Traditional —
              </span>
            </div>

            {/* white accent block */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-white/20 hidden lg:block" />
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <p className="font-mono-custom text-[10px] tracking-widest3 text-white uppercase mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-white/60" />
              Our Philosophy
            </p>

            <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] text-offwhite leading-none tracking-widest mb-10">
              WE ARE
              <br />
              NOT
              <br />
              TRADITIONAL
            </h2>

            <div className="space-y-5 font-body text-offwhite/45 text-base leading-relaxed max-w-xl">
              <p>
                DRIPHVN was born from a refusal — a refusal to choose between
                elegance and edge, between the runway and the street. We exist
                in the space between those worlds.
              </p>
              <p>
                Every piece we create carries intention. We work with premium
                materials, uncompromising construction, and an obsessive
                attention to silhouette. But we design for people who live fully
                — not for display cases.
              </p>
              <p>
                Our identity is bold because our community is bold. We don't
                follow trends. We build the culture.
              </p>
            </div>

            {/* Pull quote */}
            <div className="mt-12 pl-6 border-l-2 border-white/60">
              <p className="font-heading italic text-2xl md:text-3xl text-offwhite/85 leading-snug font-light">
                "Luxury is not a price tag.
                <br />
                It's a standard of living."
              </p>
              <p className="font-mono-custom text-[9px] tracking-widest3 text-white/70 uppercase mt-4">
                — DRIPHVN Founder
              </p>
            </div>

            {/* Stats */}
            <div className="mt-14 grid grid-cols-3 gap-8 pt-10 border-t border-white/[0.06]">
              {stats.map(({ val, label }) => (
                <div key={label}>
                  <p className="font-display text-3xl text-white tracking-widest">
                    {val}
                  </p>
                  <p className="font-mono-custom text-[9px] tracking-widest2 text-offwhite/25 uppercase mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
