
import {Link} from 'react-router-dom';

export default function Navbar() {

    
    
  return (
    <div>
       
        <div className="container-fluid sticky-top px-0">
            <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
               <Link to="/" className="navbar-brand p-0">
                    <h1 className="text-secondary display-6">
                     <img src="img/logo.png" alt="Logo"/> </h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto pt-2 pt-lg-0">
                       <Link to="/" className="nav-item nav-link active">Home</Link>
                       <Link to="about" className="nav-item nav-link ">About</Link>
                       <Link to="services" className="nav-item nav-link">Services</Link>
                       <Link to="project" className="nav-item nav-link">Projects</Link>
                       <Link to="contact" className="nav-item nav-link">Contact</Link>
                    </div>
                    <div className="d-flex align-items-center flex-nowrap pt-3  pt-lg-0 ms-lg-2">
                       
                       <Link to="#" className="btn btn-secondary py-2 px-4 ms-3 flex-wrap flex-sm-shrink-0">Get a Quate</Link>
                    </div>
                </div>
            </nav>
        </div>
       
    </div>
  )
}
