import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#080808] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10 md:pt-28 md:pb-12">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14 md:gap-10 pb-16 border-b border-white/[0.06]">
          {/* Brand column */}
          <div className="md:col-span-5">
            <h2 className="font-display text-5xl md:text-6xl tracking-widest2 text-offwhite mb-5 leading-none">
              DRIPHVN
            </h2>
            <p className="font-body text-sm text-offwhite/35 leading-relaxed max-w-[300px] mb-8">
              Luxury Streetwear. A fusion of high fashion and street culture.
              Not all luxury is made the same — ours is built different.
            </p>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/driphvn_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <span className="font-mono-custom text-[10px] tracking-widest2 uppercase text-offwhite/30 group-hover:text-white transition-colors duration-300">
                  Instagram
                </span>
                <ExternalLink
                  size={11}
                  className="text-offwhite/20 group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <span className="font-mono-custom text-[10px] text-offwhite/20 group-hover:text-offwhite/40 transition-colors duration-300">
                  @driphvn_
                </span>
              </a>
              <a
                href="https://www.tiktok.com/@driphvn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <span className="font-mono-custom text-[10px] tracking-widest2 uppercase text-offwhite/30 group-hover:text-white transition-colors duration-300">
                  TikTok
                </span>
                <ExternalLink
                  size={11}
                  className="text-offwhite/20 group-hover:text-white transition-colors duration-300"
                  strokeWidth={1.5}
                />
                <span className="font-mono-custom text-[10px] text-offwhite/20 group-hover:text-offwhite/40 transition-colors duration-300">
                  @driphvn
                </span>
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div className="md:col-span-3">
            <h3 className="font-mono-custom text-[10px] tracking-widest3 uppercase text-white mb-7">
              Navigate
            </h3>
            <ul className="space-y-4">
              {[
                "New Arrivals",
                "The Collection",
                "Lookbook",
                "Our Story",
                "FAQ",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-sm text-offwhite/35 hover:text-offwhite transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h3 className="font-mono-custom text-[10px] tracking-widest3 uppercase text-white mb-7">
              Early Access
            </h3>
            <p className="font-body text-sm text-offwhite/35 leading-relaxed mb-7">
              Be first to know about new drops, exclusive previews, and
              editorial content.
            </p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="font-mono-custom text-[10px] tracking-widest2 text-white uppercase">
                  You're in. Welcome to DRIPHVN.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-white/[0.04] border border-white/[0.1] px-4 py-3.5 font-mono-custom text-[11px] text-offwhite placeholder-offwhite/20 focus:outline-none focus:border-white/40 transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="w-12 bg-white flex items-center justify-center text-charcoal hover:bg-white-light transition-colors duration-300 flex-shrink-0"
                >
                  <ArrowRight size={14} strokeWidth={2} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono-custom text-[10px] text-offwhite/18 tracking-widest2">
            © {new Date().getFullYear()} DRIPHVN. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms", "Returns"].map((item) => (
              <a
                key={item}
                href="#"
                className="font-mono-custom text-[10px] text-offwhite/18 hover:text-offwhite/45 transition-colors tracking-widest"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
