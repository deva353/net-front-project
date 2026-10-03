import { motion } from "framer-motion";

const testimonials = [
  "The teachers genuinely bring out the best in our child.",
  "Sports and academics have helped our child understand himself better.",
  "The environment gives children exposure and confidence.",
];

function Testimonials() {

  return (
    <section className="bg-[#f3f2ed] px-5 py-24 lg:px-8 lg:py-32">

      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
          05 — Voices
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
          A community that notices growth.
        </motion.h2>

        <div className="mt-14 grid gap-5 md:grid-cols-3">

          {testimonials.map((quote, index) => (

            <motion.blockquote
              key={quote}
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
              transition={{
                delay: index * 0.1,
              }}
              className="rounded-[2rem] bg-white p-8"
            >

              <div className="mb-10 text-[#9ebd00]">
                ★★★★★
              </div>

              <p className="font-display text-2xl font-medium leading-tight">
                “{quote}”
              </p>

              <footer className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Parent community
              </footer>

            </motion.blockquote>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;