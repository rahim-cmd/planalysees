import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Bim from "./pages/Bim";
import Contact from "./pages/Contact";
import Project from "./components/Project";
import Footer from './components/Footer';
import Topbar from './components/Topbar';

import Estimation from './pages/Estimation';
import CadDrafting from './pages/CadDrafting';
import InteriorRendering from './pages/InteriorRendering';
import MepfModeling from './pages/MepfModeling';
import StructuralModeling from './pages/StructuralModeling';
import ShopDrawings from './pages/ShopDrawings';
import SteelDetailing from './pages/SteelDetailing';
import SteelEstimation from './pages/SteelEstimation';
import QuantitySurveying from './pages/QuantitySurveying';

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
        <Route path="building-information-modeling" element={<Bim/>}/>
        <Route path="estimation" element={<Estimation/>}/>
        <Route path="cad-drafting" element={<CadDrafting/>}/>
        <Route path="interior-rendering" element={<InteriorRendering/>}/>
        <Route path="mepf-modeling" element={<MepfModeling/>}/>
        <Route path="structural-designing" element={<StructuralModeling/>}/>
        <Route path="shop-drawings" element={<ShopDrawings/>}/>
        <Route path="steel-detailing" element={<SteelDetailing/>}/>
        <Route path="steel-estimation" element={<SteelEstimation/>}/>
        <Route path="quantity-surveying" element={<QuantitySurveying/>}/>
        <Route path="contact" element={<Contact/>}/>
       
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;
