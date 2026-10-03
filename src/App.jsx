import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Academics from "./sections/Academics";
import Campus from "./sections/Campus";
import Admissions from "./sections/Admissions";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <ScrollProgress />

      <CustomCursor />

      <Navbar />

      <main>
        <Hero />
        <Stats />
        <About />
        <Academics />
        <Campus />
        <Admissions />
        <Testimonials />
        <Contact />
      </main>
    </>
  );
}

export default App;