import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Props {
  name: string;
  price: string;
  image: string;
  tag?: string | null;
  index?: number;
}

export default function ProductCard({
  name,
  price,
  image,
  tag,
  index = 0,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative cursor-pointer"
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[3/4] bg-[#111]">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Dark overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-600" />

        {/* View details - hover reveal */}
        <div className="absolute bottom-0 left-0 right-0 px-5 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="flex items-center justify-between bg-white text-black px-4 py-3">
            <span className="font-mono-custom text-[10px] tracking-widest2 uppercase">
              View Piece
            </span>
            <ArrowUpRight size={14} strokeWidth={2} />
          </div>
        </div>

        {/* Tag badge */}
        {tag && (
          <div className="absolute top-4 left-4 bg-white text-black font-mono-custom text-[9px] tracking-widest2 uppercase px-3 py-1.5 border border-white/10">
            {tag}
          </div>
        )}
      </div>

      {/* Info */}

      {/* Bottom line - white on hover */}
      <div className="h-px bg-black/50 group-hover:bg-black transition-colors duration-500" />
    </motion.div>
  );
}
