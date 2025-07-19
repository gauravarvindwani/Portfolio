import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorTrail from './components/CursorTrail';
import PageJourney from './components/PageJourney';
import ThemeChanger from './components/ThemeChanger';
import DynamicBackground from './components/DynamicBackground';
// import SectionIndicator from './components/SectionIndicator';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <DynamicBackground />
      <ThemeChanger />
      <PageJourney />
      <CursorTrail />
      {/* <SectionIndicator /> */}
      <Navbar />
      <div className="w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
