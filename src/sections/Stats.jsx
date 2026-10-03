import { motion } from "framer-motion";

function Stats() {

  const stats = [
    ["22", "Acre campus"],
    ["16+", "Olympic sports"],
    ["24/7", "Medical assistance"],
    ["6:1", "Student-teacher ratio"],
  ];

  return (
    <section className="border-b border-slate-200 bg-white">

      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">

        {stats.map(([number, label], index) => (

          <motion.div
            key={label}
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
            className="border-r border-slate-200 px-5 py-9 last:border-r-0 lg:px-8 lg:py-12"
          >

            <div className="font-display text-4xl font-semibold sm:text-5xl">
              {number}
            </div>

            <div className="mt-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              {label}
            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Stats;