import {
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

function Contact() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 px-5 pb-8 pt-24 text-white lg:px-8 lg:pt-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Main Contact */}

        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Left */}

          <div>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#d8ff3e]">
              Visit TIS
            </p>

            <h2 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-none sm:text-7xl">
              Come see what learning can feel like.
            </h2>

            <div className="mt-10 flex flex-wrap gap-3">

              <a
                href="mailto:info@tis.edu.in"
                className="rounded-full bg-[#d8ff3e] px-6 py-4 text-sm font-bold text-slate-950"
                data-cursor
              >
                Email admissions
              </a>

              <a
                href="tel:+919837983791"
                className="rounded-full border border-white/15 px-6 py-4 text-sm font-bold text-white"
                data-cursor
              >
                Call admissions
              </a>

            </div>

          </div>

          {/* Right */}

          <div className="space-y-7 text-sm text-white/60">

            {/* Address */}

            <div className="flex gap-4">

              <MapPin
                size={19}
                className="mt-1 shrink-0 text-[#d8ff3e]"
              />

              <p>
                Dhoolkot, P.O. Selaqui,
                <br />
                Chakrata Road,
                <br />
                Dehradun,
                <br />
                Uttarakhand 248011
              </p>

            </div>

            {/* Phone */}

            <div className="flex gap-4">

              <Phone
                size={19}
                className="shrink-0 text-[#d8ff3e]"
              />

              <p>
                +91 98379 83791
              </p>

            </div>

            {/* Email */}

            <div className="flex gap-4">

              <Mail
                size={19}
                className="shrink-0 text-[#d8ff3e]"
              />

              <p>
                info@tis.edu.in
              </p>

            </div>

          </div>

        </div>

        {/* Footer Bottom */}

        <div className="mt-24 flex flex-col justify-between gap-6 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row">

          <p>
            © {new Date().getFullYear()} Tulas International School.
          </p>

          {/* Social Links */}

          <div className="flex gap-5">

            <a
              href="#"
              className="transition hover:text-white"
              data-cursor
            >
              Instagram
            </a>

            <a
              href="#"
              className="transition hover:text-white"
              data-cursor
            >
              Facebook
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Contact;