import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Learning from "@/components/Learning";
import GitHub from "@/components/GitHub";
import Now from "@/components/Now";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorTrail from "@/components/CursorTrail";
import CursorDot from "@/components/CursorDot";


export default function Home() {
  return (
    <>
      <CursorTrail />
      <CursorDot />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Learning />
        <GitHub />
        <Now />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
