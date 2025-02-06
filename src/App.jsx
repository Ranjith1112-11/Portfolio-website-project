import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Project from "./Components/Projects/Project";
import ContactForm from './Components/Contactform/Contactform';
function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />  
      <Skills/>          
      <Education/>    
      <Project/>      
      <ContactForm/>
    </div>
  );
  
}

export default App;