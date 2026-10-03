import { ArrowRight } from "lucide-react";

function Admissions() {

  return (
    <section
      id="admissions"
      className="bg-[#d8ff3e] px-5 py-24 lg:px-8 lg:py-32"
    >

      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_420px] lg:items-end">

        <div>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-700">
            04 — Admissions
          </p>

          <h2 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-slate-950 sm:text-7xl lg:text-8xl">
            Ready for the next chapter?
          </h2>

        </div>

        <div className="rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9">

          <p className="text-sm leading-6 text-white/60">
            Connect with the admissions team to
            understand the process, availability and
            next steps.
          </p>

          <a
            href="#contact"
            className="mt-7 flex w-full items-center justify-between rounded-full bg-white px-5 py-4 text-sm font-bold text-slate-950"
            data-cursor
          >

            Start a conversation

            <ArrowRight size={17} />

          </a>

        </div>

      </div>

    </section>
  );
}

export default Admissions;