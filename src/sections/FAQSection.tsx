import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import { faqs } from "../data";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq" className=" py-28 md:py-36">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="font-mono-custom text-[10px] tracking-widest3 text-black uppercase mb-5 flex items-center justify-center gap-3">
            <span className="w-6 h-px bg-black/60" />
            Support
            <span className="w-6 h-px bg-black/60" />
          </p>
          <h2 className="font-display text-[clamp(3rem,8vw,5.5rem)] text-black leading-none tracking-widest">
            FAQ
          </h2>
          <p className="font-body text-black/35 mt-6 text-sm leading-relaxed">
            Everything you need to know. Can't find an answer?{" "}
            <a
              href="mailto:support@driphvn.com"
              className="text-black border-b border-black/30 hover:border-black transition-colors duration-300"
            >
              Email us.
            </a>
          </p>
        </div>

        {/* Accordion */}
        <div className="border-t border-black/[0.07]">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-black/[0.07]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-7 flex items-center justify-between gap-8 text-left group"
              >
                <span className="font-body font-medium text-base text-black/70 group-hover:text-black transition-colors duration-300">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 w-8 h-8 border border-black/10 flex items-center justify-center text-black/30 group-hover:border-black/50 group-hover:text-black transition-all duration-300">
                  {open === i ? (
                    <Minus size={13} strokeWidth={2} />
                  ) : (
                    <Plus size={13} strokeWidth={2} />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-black/40 text-sm leading-relaxed pb-8 max-w-2xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
