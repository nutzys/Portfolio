import About from "./components/About";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="min-h-screen bg-zinc-800">
      <Hero />
      <About />
      <Timeline />
    </div>
  );
}

export default App;
