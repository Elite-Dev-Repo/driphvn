import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Lookbook", href: "#lookbook" },
  { label: "Gallery", href: "#gallery" },
  { label: "Our Story", href: "#brand" },
  { label: "Contact", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/96 backdrop-blur-xl border-b border-white/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a
            href="#"
            className="font-display text-[22px] md:text-[26px] tracking-widest3 text-offwhite hover:text-white transition-colors duration-300"
          >
            DRIPHVN
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono-custom text-[10px] tracking-widest2 uppercase text-offwhite/45 hover:text-offwhite transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-400" />
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-5">
            <button
              className="md:hidden text-offwhite"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-charcoal/75 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "tween",
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="fixed top-0 right-0 bottom-0 w-72 z-[70] bg-[#0f0f0f] border-l border-white/[0.08] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-white/[0.06]">
                <span className="font-display text-xl tracking-widest2 text-white">
                  DRIPHVN
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-offwhite/40 hover:text-offwhite transition-colors"
                >
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>

              <div className="flex-1 px-8 pt-12 flex flex-col gap-7">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.06 + 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    onClick={() => setMenuOpen(false)}
                    className="font-heading text-[28px] font-light text-offwhite hover:text-white transition-colors duration-300 tracking-wide"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="px-8 pb-12 pt-6 border-t border-white/[0.06]">
                <p className="font-mono-custom text-[10px] tracking-widest text-offwhite/20 uppercase text-center mt-5">
                  @driphvn_ · @driphvn
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
