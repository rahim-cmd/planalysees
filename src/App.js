import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Project from "./components/Project";
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Testimonial from './components/Testimonial';

function App() {
  return (
    <>
    <Router>
      <Topbar/>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="project" element={<Project/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="testimonial" element={<Testimonial/>}/>
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
