import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  [
    "IV–V",
    "Foundation",
    "Build strong learning habits, curiosity and confidence.",
  ],
  [
    "VI–VIII",
    "Middle School",
    "Explore ideas deeply while developing independence.",
  ],
  [
    "IX–X",
    "Secondary",
    "Strengthen concepts, discipline and academic direction.",
  ],
  [
    "XI–XII",
    "Senior School",
    "Prepare for higher education and ambitious next steps.",
  ],
];

function Academics() {

  return (
    <section
      id="academics"
      className="bg-slate-950 px-5 py-24 text-white lg:px-8 lg:py-32"
    >

      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d8ff3e]">
          02 — Academics
        </p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl lg:text-6xl"
        >
          Room to grow. Space to think.
        </motion.h2>

        <p className="mt-6 max-w-2xl text-white/60">
          A structured journey from foundational learning
          to senior-school readiness.
        </p>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">

          {programs.map(
            ([grade, title, description], index) => (

              <motion.div
                key={grade}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="grid gap-5 py-8 md:grid-cols-[110px_1fr_1fr_auto] md:items-center"
              >

                <div className="text-sm font-bold text-[#d8ff3e]">
                  {grade}
                </div>

                <h3 className="font-display text-3xl font-semibold">
                  {title}
                </h3>

                <p className="max-w-md text-sm leading-6 text-white/50">
                  {description}
                </p>

                <div className="grid h-10 w-10 place-items-center rounded-full border border-white/10">
                  <ArrowRight size={16} />
                </div>

              </motion.div>

            )
          )}

        </div>

      </div>

    </section>
  );
}

export default Academics;