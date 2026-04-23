import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import { ArrowRight } from "lucide-react";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const looks = [
  {
    label: "Look 01",
    title: "The Obsidian Set",
    src: img6,
    span: "lg:col-span-7 aspect-[4/5] lg:aspect-auto lg:min-h-[620px]",
  },
  {
    label: "Look 02",
    title: "Phantom Drape",
    src: img4,
    span: "aspect-[4/3]",
  },
  {
    label: "Look 03",
    title: "Void Series",
    src: img5,
    span: "aspect-[4/3]",
  },
];

export default function LookbookSection() {
  return (
    <SectionWrapper id="lookbook" className="bg-[#111] py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <p className="font-mono-custom text-[10px] tracking-widest3 text-red-500 uppercase mb-4 flex items-center gap-3">
            <span className="w-6 h-px bg-white/60" />
            SS 2025
          </p>
          <h2 className="font-display text-[clamp(3.5rem,9vw,7rem)] text-offwhite leading-none tracking-widest">
            THE
            <br />
            COLLECTION
          </h2>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5">
          {/* Large left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className={`relative overflow-hidden group cursor-pointer ${looks[0].span}`}
          >
            <img
              src={looks[0].src}
              alt={looks[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/10 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="font-mono-custom text-[9px] tracking-widest3 text-white uppercase mb-2">
                {looks[0].label}
              </p>
              <h3 className="font-display text-3xl text-offwhite tracking-widest">
                {looks[0].title}
              </h3>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="lg:col-span-5 flex flex-col gap-4 md:gap-5">
            {/* Look 02 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden group cursor-pointer ${looks[1].span}`}
            >
              <img
                src={looks[1].src}
                alt={looks[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-mono-custom text-[9px] tracking-widest3 text-white uppercase mb-1">
                  {looks[1].label}
                </p>
                <h3 className="font-display text-2xl text-offwhite tracking-widest">
                  {looks[1].title}
                </h3>
              </div>
            </motion.div>

            {/* Text / editorial card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/[0.03] border border-white/[0.07] p-8 md:p-10 flex flex-col justify-between min-h-[180px]"
            >
              <p className="font-heading italic text-xl md:text-2xl text-offwhite/70 font-light leading-snug">
                "Crafted for those who move differently. Designed to stand out."
              </p>
              <a
                href="#gallery"
                className="group mt-6 self-start inline-flex items-center gap-2 font-mono-custom text-[10px] tracking-widest2 uppercase text-offwhite/30 hover:text-white transition-colors duration-300 border-b border-white/10 hover:border-white pb-0.5"
              >
                Explore All Looks
                <ArrowRight
                  size={11}
                  className="group-hover:translate-x-1 transition-transform"
                  strokeWidth={2}
                />
              </a>
            </motion.div>

            {/* Look 03 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative overflow-hidden group cursor-pointer ${looks[2].span}`}
            >
              <img
                src={looks[2].src}
                alt={looks[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-mono-custom text-[9px] tracking-widest3 text-white uppercase mb-1">
                  {looks[2].label}
                </p>
                <h3 className="font-display text-2xl text-offwhite tracking-widest">
                  {looks[2].title}
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
