import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";
import SectionWrapper from "../components/SectionWrapper";
import { products } from "../data";
import { ArrowRight } from "lucide-react";

export default function FeaturedSection() {
  return (
    <SectionWrapper id="collection" className=" py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-mono-custom text-[10px] tracking-widest3 text-black uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-black/60" />
              Top Sellers
            </p>
            <h2 className="font-display text-[clamp(3rem,7vw,5.5rem)] text-black leading-none tracking-widest">
              TOP
              <br />
              PRODUCTS
            </h2>
          </div>
          <a
            href="#"
            className="group self-start md:self-end inline-flex items-center gap-2 font-mono-custom text-[10px] tracking-widest2 uppercase text-offblack/35 hover:text-black transition-colors duration-300 border-b border-offblack/15 hover:border-black pb-1"
          >
            View Full Collection
            <ArrowRight
              size={11}
              strokeWidth={2}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <ProductCard key={product.id} {...product} index={i} />
          ))}
        </div>

        {/* Marquee ticker */}
        <div className="mt-24 border-t border-b border-black/[0.2] py-5 overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="flex gap-0 blackspace-nowrap"
          >
            {Array(8)
              .fill(null)
              .map((_, i) => (
                <span
                  key={i}
                  className="font-display text-[22px] tracking-widest2 text-black/[0.7] flex items-center gap-10 pr-10"
                >
                  <span>DRIPHVN</span>
                  <span className="text-black/80 text-base">✦</span>
                  <span>LUXURY STREETWEAR</span>
                  <span className="text-black/80 text-base">✦</span>
                  <span>LIMITED DROPS</span>
                  <span className="text-black/80 text-base">✦</span>
                </span>
              ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
