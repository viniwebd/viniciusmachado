import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { Projects } from "@/components/sections/Projects";
import { WorkHistory } from "@/components/sections/WorkHistory";
import { Courses } from "@/components/sections/Courses";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Projects />
      <WorkHistory />
      <Courses />
      <Contact />
      <Footer />
    </>
  );
}
