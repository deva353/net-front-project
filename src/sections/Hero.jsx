import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function Hero() {

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >

      {/* Background */}

      <div className="absolute inset-0">

        <img
          src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1800&q=85"
          alt="School campus"
          className="h-full w-full object-cover opacity-45"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/20" />

      </div>

      {/* Content */}

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-5 pb-16 pt-32 lg:px-8">

        <div className="w-full">

          {/* Badge */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em]">

              <Sparkles
                size={13}
                className="text-[#d8ff3e]"
              />

              The Modern Gurukul

            </span>

          </motion.div>

          {/* Heading */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
            className="mt-7 font-display text-[17vw] font-semibold leading-[0.82] tracking-[-0.07em] sm:text-8xl lg:text-[8rem]"
          >

            LEARN.
            <br />

            LIVE.
            <br />

            <span className="text-[#d8ff3e]">
              LEAD.
            </span>

          </motion.h1>

          {/* Description */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
            className="mt-8 max-w-xl text-base leading-7 text-white/65 sm:text-lg"
          >
            A contemporary residential learning
            environment where academic excellence
            meets sport, creativity, character and
            independence.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="mt-8 flex flex-wrap gap-3"
          >

            <a
              href="#admissions"
              className="group inline-flex items-center gap-3 rounded-full bg-[#d8ff3e] px-6 py-4 text-sm font-bold text-slate-950"
              data-cursor
            >

              Explore Admissions

              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />

            </a>

            <a
              href="#campus"
              className="rounded-full border border-white/20 px-6 py-4 text-sm font-bold"
              data-cursor
            >
              Discover Campus
            </a>

          </motion.div>

          {/* Bottom information */}

          <div className="mt-16 hidden items-center gap-3 text-sm text-white/50 lg:flex">

            <ArrowDownRight
              size={16}
              className="text-[#d8ff3e]"
            />

            Scroll to explore

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;