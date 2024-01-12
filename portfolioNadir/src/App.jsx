import "./App.css";
import { Nav } from "./components/nav/Nav";
import { Routes, Route } from "react-router-dom";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Projects } from "./components/myprojects/Projects";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
