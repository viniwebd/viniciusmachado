import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { WorkHistory } from "@/components/sections/WorkHistory";
import { Courses } from "@/components/sections/Courses";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div
        className="relative z-10 bg-white"
        style={{ marginBottom: "var(--footer-height, 0px)" }}
      >
        <Hero />
        <Projects />
        <About />
        <Testimonials />
        <WorkHistory />
        <Courses />
      </div>
      <Footer />
    </>
  );
}
