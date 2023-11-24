import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import RecentWork from "./components/RecentWork";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <div className="min-h-screen bg-zinc-800">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <RecentWork />
        <Footer />
      </div>
    </>
  );
}

export default App;
