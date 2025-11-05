import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const handleExploreClick = () => {
    const el = document.getElementById('programs');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to enhance readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.25),transparent_45%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-['Mona_Sans',Inter,ui-sans-serif] text-4xl leading-tight sm:text-6xl sm:leading-[1.1] md:text-7xl"
        >
          The Future Can’t Wait. <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">Neither Should You.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="mt-5 max-w-2xl text-balance text-base text-white/80 sm:text-lg"
        >
          At ThynkEra, we go beyond books to nurture curiosity, ignite imagination, and shape conscious innovators who turn ideas into real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-8 flex items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleExploreClick}
            data-cursor="magnet"
            className="group relative overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-2xl shadow-indigo-600/20 transition"
          >
            <span className="relative z-10">Explore Courses</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-overlay" />
          </motion.button>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-xs text-white/70">
            <span>Scroll</span>
            <span className="mt-2 h-8 w-px animate-bounce rounded-full bg-white/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
