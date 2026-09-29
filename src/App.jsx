import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ResumeSection from "./components/Resume/ResumeSection";
import "./styles/global.css";

export default function App() {
  return (
    <ThemeProvider>
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <ResumeSection />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}
