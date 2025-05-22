import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Copetances from "./components/Copetences"; // ou "Competences" ?
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-900 text-white w-full">
      <Home />
      <Navbar />
      <About />
      <Skills />
      <Services />
      <Copetances />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
