import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Holistic learning",
    text: "Academics work alongside sports, arts, leadership and experiences that help students discover what they can become.",
  },
  {
    number: "02",
    title: "Residential community",
    text: "A residential environment designed around belonging, discipline, independence and meaningful relationships.",
  },
  {
    number: "03",
    title: "Future-ready thinking",
    text: "Curiosity, creativity and practical problem solving are treated as important parts of modern education.",
  },
];

function About() {

  return (
    <section
      id="about"
      className="bg-[#f3f2ed] px-5 py-24 lg:px-8 lg:py-32"
    >

      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
          01 — About TIS
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
          className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
        >
          A school built for the whole person.
        </motion.h2>

        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
          TIS brings together academics, athletics,
          arts, social development and residential
          life in one connected experience.
        </p>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Image */}

          <motion.div
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
            className="relative min-h-[480px] overflow-hidden rounded-[2rem]"
          >

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85"
              alt="Students learning"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">

              <p className="text-2xl font-semibold">
                Curiosity is the starting point.
              </p>

              <p className="mt-2 text-sm text-white/65">
                Question. Create. Compete. Collaborate.
              </p>

            </div>

          </motion.div>

          {/* Cards */}

          <div className="grid gap-4">

            {features.map((item, index) => (

              <motion.article
                key={item.number}
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
                  delay: index * 0.12,
                }}
                className="group rounded-[2rem] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl sm:p-9"
                data-cursor
              >

                <div className="flex justify-between">

                  <span className="text-xs font-bold text-slate-400">
                    {item.number}
                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 group-hover:text-slate-950"
                  />

                </div>

                <h3 className="mt-12 font-display text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

              </motion.article>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;