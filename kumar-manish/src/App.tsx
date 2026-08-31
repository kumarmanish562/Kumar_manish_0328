import Navbar from "./components/layout/Navbar";
import About from "./components/sections/About";
import Hero from "./components/sections/Hero";
import Project from "./components/sections/Projects";
import Skill from "./components/sections/Skills";

function App() {
  return (
    <div className="min-h-screen bg-[#05030d] text-white">
      <Navbar />
      <Hero />
      <About/>
      <Skill /> 
      <Project />
     
    </div>
  );
}

export default App;