import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { ArrowRight } from "lucide-react";
import img7 from "../assets/img7.jpg";

const features = [
  "100% organic cotton canvas",
  "Oversized drop-shoulder fit",
  "YKK concealed zip closure",
  "Dry clean recommended",
];

export default function SpotlightSection() {
  return (
    <SectionWrapper className=" py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={img7}
                alt="Phantom Cargo Jacket"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tag badge */}
            <div className="absolute top-6 left-6 bg-black/90 border border-black/10 text-white font-mono-custom text-[9px] tracking-widest2 uppercase px-4 py-2">
              ELITE PIECE
            </div>

            {/* Floating price */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-5 right-8 bg-black px-6 py-4"
            >
              <p className="font-display text-2xl text-white tracking-widest">
                AFFORDABLE{" "}
                <span className="text-sm animate-pulse font-serif">*__*</span>
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8 lg:pt-0"
          >
            <p className="font-mono-custom text-[10px] tracking-widest3 text-black uppercase mb-5 flex items-center gap-3">
              <span className="w-6 h-px bg-black/60" />
              Featured Drop
            </p>

            <h2 className="font-display text-[clamp(2.8rem,6vw,4.5rem)] text-black leading-tight tracking-widest mb-6">
              Pitch
              <br />
              Black Jacket
            </h2>

            <p className="font-body text-black/45 text-base leading-relaxed mb-10 max-w-sm">
              Structured utility silhouette. Matte black canvas. Oversized cargo
              pockets with branded zipper pulls. The Phantom Jacket is
              authority, worn.
            </p>

            {/* Features list */}
            <ul className="space-y-3 mb-12">
              {features.map((feat) => (
                <li
                  key={feat}
                  className="flex items-center gap-3 font-body text-sm text-black/50"
                >
                  <span className="w-1 h-1 rounded-full bg-black flex-shrink-0" />
                  {feat}
                </li>
              ))}
            </ul>

            {/* CTA — link to full collection, no cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#collection"
                className="group inline-flex items-center gap-3 bg-black text-white font-mono-custom text-[10px] tracking-widest2 uppercase px-8 py-4 hover:bg-black-light transition-all duration-300"
              >
                View Full Collection
                <ArrowRight
                  size={13}
                  strokeWidth={2}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
              <a
                href="#lookbook"
                className="inline-flex items-center gap-3 border border-black/15 text-black/50 font-mono-custom text-[10px] tracking-widest2 uppercase px-8 py-4 hover:border-black hover:text-black transition-all duration-300"
              >
                See Lookbook
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
