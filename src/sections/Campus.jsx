import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    label: "01 / Sport",
    title: "Move with purpose.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
  },
  {
    label: "02 / Science",
    title: "Ask better questions.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    label: "03 / Community",
    title: "Find your people.",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=85",
  },
];

function Campus() {

  return (
    <section
      id="campus"
      className="bg-white px-5 py-24 lg:px-8 lg:py-32"
    >

      <div className="mx-auto max-w-7xl">

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-500">
          03 — Campus Life
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
          The classroom is only the beginning.
        </motion.h2>

        <p className="mt-6 max-w-2xl text-slate-600">
          Sport, science, arts and community give
          students opportunities to learn by doing.
        </p>

        <div className="mt-16 grid gap-5 md:grid-cols-2">

          {cards.map((card, index) => (

            <motion.article
              key={card.title}
              initial={{
                opacity: 0,
                y: 50,
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
              className={`group relative overflow-hidden rounded-[2rem] ${
                index === 2 ? "md:col-span-2" : ""
              }`}
              data-cursor
            >

              <div className="h-[360px] overflow-hidden">

                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">

                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8ff3e]">
                    {card.label}
                  </p>

                  <h3 className="mt-2 font-display text-3xl font-semibold">
                    {card.title}
                  </h3>

                </div>

                <div className="grid h-12 w-12 place-items-center rounded-full bg-white text-slate-950">

                  <ArrowUpRight size={18} />

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Campus;