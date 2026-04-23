import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { ArrowUpRight } from "lucide-react";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img7 from "../assets/img7.jpg";

const images = [
  {
    src: img5,
    alt: "Editorial 1",
    cls: "row-span-2",
  },
  {
    src: img9,
    alt: "Editorial 2",
    cls: "",
  },
  {
    src: img10,
    alt: "Editorial 3",
    cls: "",
  },
  {
    src: img4,
    alt: "Editorial 4",
    cls: "col-span-2",
  },
  {
    src: img7,
    alt: "Editorial 5",
    cls: "",
  },
];

export default function GallerySection() {
  return (
    <SectionWrapper id="gallery" className="bg-charcoal py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-mono-custom text-[10px] tracking-widest3 text-white uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-white/60" />
              Visual
            </p>
            <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] text-offwhite leading-none tracking-widest">
              GALLERY
            </h2>
          </div>
          <p className="font-body text-offwhite/30 text-sm max-w-xs leading-relaxed">
            Editorial images from our latest shoots. Fashion that speaks before
            you do.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] md:auto-rows-[270px] gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative overflow-hidden group cursor-pointer ${img.cls}`}
            >
              <motion.img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/45 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-400 border border-offwhite/60 px-5 py-3 flex items-center gap-2"
                >
                  <span className="font-mono-custom text-[9px] tracking-widest2 text-offwhite uppercase">
                    View
                  </span>
                  <ArrowUpRight
                    size={11}
                    className="text-offwhite"
                    strokeWidth={1.5}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://www.instagram.com/driphvn_"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 font-mono-custom text-[10px] tracking-widest2 uppercase border border-offwhite/15 text-offwhite/40 px-8 py-4 hover:border-white hover:text-white transition-all duration-300"
          >
            Follow on Instagram
            <ArrowUpRight
              size={12}
              strokeWidth={1.5}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
