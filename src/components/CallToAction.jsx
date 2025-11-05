import React from 'react';
import { motion } from 'framer-motion';

const GlowButton = ({ children, variant = 'primary', ...props }) => {
  const styles =
    variant === 'primary'
      ? 'bg-white text-black hover:brightness-95'
      : 'bg-transparent text-white border border-white/20 hover:border-white/40';

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      data-cursor="magnet"
      className={`relative overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition ${styles}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-cyan-400/40 opacity-0 transition-opacity duration-300 hover:opacity-100 mix-blend-overlay" />
    </motion.button>
  );
};

const CallToAction = () => {
  return (
    <section className="relative w-full overflow-hidden bg-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_80%,rgba(99,102,241,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-balance text-3xl font-semibold sm:text-5xl"
        >
          The Future Belongs to Makers. Let’s Build It Together.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-white/70"
        >
          ThynkEra Institute — Because the world doesn’t need more followers. It needs fearless creators.
        </motion.p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GlowButton>Enroll Now</GlowButton>
          <GlowButton variant="secondary">Book a Free Demo Class at Your Doorstep</GlowButton>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
