import React, { useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HeroSection from './components/HeroSection.jsx';
import StoryShowcase from './components/StoryShowcase.jsx';
import ProgramsScroller from './components/ProgramsScroller.jsx';
import CallToAction from './components/CallToAction.jsx';

function App() {
  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  // Custom cursor state
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });

  useEffect(() => {
    const move = (e) => setCursor((c) => ({ ...c, x: e.clientX, y: e.clientY }));
    const over = (e) => {
      const isMagnet = e.target.closest?.('[data-cursor="magnet"]');
      setCursor((c) => ({ ...c, active: !!isMagnet }));
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, []);

  const cursorStyle = useMemo(() => ({
    transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`,
  }), [cursor.x, cursor.y]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Scroll progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-50 h-1 w-screen origin-left bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400"
      />

      {/* Custom cursor */}
      <div
        className="pointer-events-none fixed z-50 hidden select-none md:block"
        style={{ left: 0, top: 0 }}
      >
        <motion.div
          animate={{
            width: cursor.active ? 36 : 16,
            height: cursor.active ? 36 : 16,
            opacity: 0.9,
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          style={cursorStyle}
          className="rounded-full bg-white/90 mix-blend-difference"
        />
      </div>

      <main className="relative">
        <HeroSection />
        <StoryShowcase />
        <ProgramsScroller />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;
