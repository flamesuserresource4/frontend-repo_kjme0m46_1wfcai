import React from 'react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Future Explorers (3–5)',
    points: ['Playful making', 'Visual coding', 'Story-led science'],
    gradient: 'from-indigo-500/30 to-cyan-400/30',
  },
  {
    title: 'Future Foundations (6–8)',
    points: ['Robotics basics', 'App + web', 'Design thinking'],
    gradient: 'from-fuchsia-500/30 to-indigo-400/30',
  },
  {
    title: 'Future Builders (9–10)',
    points: ['AI assistants', 'Product sprints', 'Portfolio projects'],
    gradient: 'from-cyan-400/30 to-fuchsia-500/30',
  },
];

const ProgramsScroller = () => {
  return (
    <section id="programs" className="relative w-full bg-[#07070b] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-semibold sm:text-5xl">Our Programs</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            Step-by-step paths where learners build tangible projects at every stage.
          </p>
        </div>
      </div>

      <div className="mt-10 overflow-x-auto">
        <div className="mx-auto flex w-[140%] snap-x snap-mandatory gap-6 px-6 sm:w-[120%] md:w-[100%]">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              className="min-w-[85%] snap-center sm:min-w-[60%] md:min-w-[40%] lg:min-w-[32%]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.05 }}
            >
              <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <div className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${p.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-white/5 to-white/0">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,.35),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(236,72,153,.28),transparent_45%)]" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl items-center justify-center gap-2 px-6">
        {programs.map((_, i) => (
          <span key={i} className="h-1.5 w-8 rounded-full bg-white/15" />
        ))}
      </div>
    </section>
  );
};

export default ProgramsScroller;
