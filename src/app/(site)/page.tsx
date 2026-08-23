import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Capabilities } from "@/components/sections/Capabilities";
import { Testimonials } from "@/components/sections/Testimonials";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <>
      <PageTransition>
        <Hero />
        <Projects />
        <About />
        <Capabilities />
        <Testimonials />
      </PageTransition>
      <Footer />
    </>
  );
}
