import About from "./components/About";
import Hero from "./components/Hero";
import RecentWork from "./components/RecentWork";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="min-h-screen bg-zinc-800">
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <RecentWork />
    </div>
  );
}

export default App;
