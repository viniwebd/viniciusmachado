import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Testimonials } from "@/components/sections/Testimonials";
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
        <Capabilities />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
