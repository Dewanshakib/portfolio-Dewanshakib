import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="w-full h-full max-w-3xl mx-auto">
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}
