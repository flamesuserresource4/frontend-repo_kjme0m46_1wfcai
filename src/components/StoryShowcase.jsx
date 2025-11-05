import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Bot, BarChart, Rocket, Layers, Shield, Link as LinkIcon, Users, Sparkles } from 'lucide-react';

const Section = ({ children, className = '' }) => (
  <section className={`relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-28 ${className}`}>{children}</section>
);

const AnimatedItem = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
);

const TiltCard = ({ icon: Icon, title, desc, onMouseMove }) => (
  <div
    onMouseMove={onMouseMove}
    className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition will-change-transform hover:border-white/20"
  >
    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-cyan-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative z-10">
      <Icon className="h-6 w-6 text-indigo-300" />
      <h4 className="mt-4 text-lg font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  </div>
);

const StoryShowcase = () => {
  const [transformStyles, setTransformStyles] = useState({});

  const handleMouseMove = (idx) => (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -6;
    const rotateY = ((x - rect.width / 2) / rect.width) * 6;
    setTransformStyles((prev) => ({ ...prev, [idx]: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }));
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-black to-[#07070b] text-white">
      {/* Why ThynkEra */}
      <Section>
        <AnimatedItem>
          <h2 className="text-balance bg-gradient-to-r from-white to-white/70 bg-clip-text text-center text-3xl font-semibold leading-tight text-transparent sm:text-5xl">
            Why ThynkEra — The Big Problem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
            Traditional education is misaligned with the future. We teach skills that build creators, not test-takers.
          </p>
        </AnimatedItem>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { icon: Brain, title: 'Degrees ≠ Skills', desc: 'Knowledge without application leaves students unprepared. We build practical mastery.' },
            { icon: Bot, title: 'Automation & AI', desc: 'Machines are changing work. We teach students to leverage AI as a creative partner.' },
            { icon: BarChart, title: 'Skills Gap', desc: '85% of employers prioritize upskilling. We prepare learners for real impact.' },
          ].map((item, i) => (
            <AnimatedItem key={item.title} delay={i * 0.08}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-fuchsia-500/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                <div className="relative z-10">
                  <item.icon className="h-7 w-7 text-cyan-300" />
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </Section>

      {/* Our Vision */}
      <Section>
        <AnimatedItem>
          <h2 className="text-balance bg-gradient-to-r from-indigo-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-center text-3xl font-semibold leading-tight text-transparent sm:text-5xl">
            Our Vision — Curiosity → Creation → Confidence
          </h2>
        </AnimatedItem>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { title: 'Curiosity', desc: 'Spark wonder with playful exploration and questions that matter.', glow: 'from-indigo-400/30' },
            { title: 'Creation', desc: 'Turn ideas into prototypes, code, and real projects that solve problems.', glow: 'from-fuchsia-400/30' },
            { title: 'Confidence', desc: 'Build a portfolio, communicate boldly, and lead with empathy.', glow: 'from-cyan-400/30' },
          ].map((s, i) => (
            <AnimatedItem key={s.title} delay={i * 0.06}>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-6">
                <div className={`pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-br ${s.glow} via-transparent to-transparent opacity-0 blur-xl transition-opacity duration-500 hover:opacity-100`} />
                <div className="relative z-10">
                  <Sparkles className="h-6 w-6 text-white/80" />
                  <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{s.desc}</p>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </Section>

      {/* What Makes Us Different */}
      <Section>
        <AnimatedItem>
          <h2 className="text-balance text-center text-3xl font-semibold sm:text-5xl">What Makes Us Different</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
            An ecosystem that blends subjects, tech, and character — guided by mentors from industry.
          </p>
        </AnimatedItem>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Layers, title: 'Skill + Subject Integration', desc: 'Math, science, and language fused with maker skills.' },
            { icon: Rocket, title: 'Technology as a Tool', desc: 'Code, robotics, and AI used to express ideas.' },
            { icon: Shield, title: 'Holistic Growth', desc: 'Mindset, ethics, collaboration, and leadership.' },
            { icon: LinkIcon, title: 'Industry-Linked Learning', desc: 'Mentored by people building the future.' },
            { icon: Users, title: 'Junior Innovators (3–10)', desc: 'Age-appropriate paths to build confidence early.' },
          ].map((c, i) => (
            <AnimatedItem key={c.title} delay={i * 0.05}>
              <div
                className="[transform-style:preserve-3d]"
                style={{ transform: transformStyles[i] || 'none' }}
              >
                <TiltCard icon={c.icon} title={c.title} desc={c.desc} onMouseMove={handleMouseMove(i)} />
              </div>
            </AnimatedItem>
          ))}
        </div>
      </Section>

      {/* Output-Oriented Promise + Personas + Testimonials/Gallery */}
      <Section>
        <AnimatedItem>
          <h2 className="text-balance text-center text-3xl font-semibold sm:text-5xl">Output-Oriented Promise</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/70">
            See → Believe. Every learner ships real projects and prototypes.
          </p>
        </AnimatedItem>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((n, i) => (
            <AnimatedItem key={n} delay={i * 0.06}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-fuchsia-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-500/30 to-fuchsia-500/30" />
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-white/80">From Concept</span>
                    <span className="text-sm text-white/60">→</span>
                    <span className="text-sm text-white">To Prototype</span>
                  </div>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { title: 'Parents', desc: 'Clarity, confidence, and a future-ready path for your child.' },
            { title: 'Students', desc: 'Make things that matter. Find your voice and your craft.' },
            { title: 'Schools', desc: 'Partner programs that upgrade learning culture.' },
          ].map((p, i) => (
            <AnimatedItem key={p.title} delay={i * 0.06}>
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 h-24 rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,.35),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,.28),transparent_45%)]" />
              </div>
            </AnimatedItem>
          ))}
        </div>

        <AnimatedItem>
          <div className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square w-full overflow-hidden rounded-xl bg-[linear-gradient(135deg,rgba(99,102,241,0.35),rgba(236,72,153,0.25))]"
                >
                  <div className="h-full w-full scale-100 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_55%)] transition-transform duration-300 hover:scale-105" />
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-white/70">
              Moments from workshops, projects, and showcases.
            </p>
          </div>
        </AnimatedItem>
      </Section>
    </div>
  );
};

export default StoryShowcase;
