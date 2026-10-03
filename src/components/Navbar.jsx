import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Academics",
      link: "#academics",
    },
    {
      name: "Campus",
      link: "#campus",
    },
    {
      name: "Admissions",
      link: "#admissions",
    },
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">

        <a
          href="#home"
          className="flex items-center gap-3 text-white"
          data-cursor
        >
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#d8ff3e] font-display text-lg font-black text-slate-950">
            T
          </div>

          <div>
            <div className="font-display text-lg font-bold">
              TULAS
            </div>

            <div className="text-[9px] tracking-[0.25em] text-white/60">
              INTERNATIONAL SCHOOL
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="text-sm text-white/75 transition hover:text-white"
              data-cursor
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950"
            data-cursor
          >
            Talk to TIS
          </a>
        </div>

        <button
          className="rounded-full border border-white/20 p-2 text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-4 rounded-3xl bg-slate-950/95 p-5 md:hidden">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-white/10 py-4 text-white"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-[#d8ff3e] px-5 py-3 text-center font-bold text-slate-950"
          >
            Talk to TIS
          </a>

        </div>
      )}
    </header>
  );
}

export default Navbar;