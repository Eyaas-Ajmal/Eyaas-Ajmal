import { motion, useScroll } from "framer-motion";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import MLJourney from "@/components/sections/MLJourney";
import Courses from "@/components/sections/Courses";
import Contact from "@/components/sections/Contact";
import Header from "@/components/sections/Header";
import CursorGlow from "@/components/effects/CursorGlow";

const Index = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-primary to-accent z-50"
        style={{ scaleX: scrollYProgress }}
      />
      <main className="pt-14">
        <Hero />
        <About />
        <Projects />
        <MLJourney />
        <Courses />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Eyaas. All rights reserved.</footer>
      <CursorGlow />
    </div>
  );
};

export default Index;
