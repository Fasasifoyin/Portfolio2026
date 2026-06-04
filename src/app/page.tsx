import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Container from "@/components/Container";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/nav/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skil;s/Skills";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Container>
        <About />
        <Skills />
        <Experience />
        <Projects />
      </Container>
      <Contact />
      <Footer />
    </main>
  );
}
