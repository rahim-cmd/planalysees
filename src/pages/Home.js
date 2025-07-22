import Feature from "../components/Feature";
import Counter from "../components/Counter";
import Project from "../components/Project";
import Services from "./Services";
import About from "./About";
import { Link } from "react-router-dom";
export default function Home() {
   
  return (
    <>
       
        
       
        <div className="container-fluid overflow-hidden px-0">
            <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
                <ol className="carousel-indicators fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1s' style={{animationDelay: '1s'}}>
                    <li data-bs-target="#carouselId" data-bs-slide-to="0" className="active" aria-current="true" aria-label="First slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img src="img/carousel-1.jpg" className="img-fluid w-100" alt="First slide"/>
                        <div className="carousel-caption">
                            <p className="text-uppercase text-secondary fs-4 mb-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1s' style={{animationDelay: '1s'}}>PLANALYSE</p>
                            <h1 className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.3s' style={{animationDelay: '1s'}}>Building Dreams with Precision & Passion.</h1>
                            <p className="mb-5 fs-5 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.5s' style={{animationDelay: '1.5s'}}>Your vision, our foundation — crafting structures that last a lifetime. 
                            </p>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-primary d-flex py-3 px-5 me-2 flex-shrink-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.5s' style={{animationDelay: '1.7s'}} to="/contact">Request Services</Link>
                                <Link className="btn btn-secondary d-inline-block py-3 px-5 ms-2 flex-shrink-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.5s' style={{animationDelay: '1.7s'}} to="/services">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/carousel-2.jpg" className="img-fluid w-100" alt="Second slide"/>
                        <div className="carousel-caption">
                            <p className="text-uppercase text-secondary fs-4 mb-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1s' style={{animationDelay: '1s'}}>Construction Business</p>
                            <h1 className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.3s' style={{animationDelay: '1.3s'}}>Smart Construction for a Stronger Tomorrow.</h1>
                            <p className="mb-5 fs-5 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.5s' style={{animationDelay: '1.5s'}}>Blending technology and craftsmanship to deliver future-ready infrastructure.
                            </p>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-primary d-flex py-3 px-5 me-2 flex-shrink-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.5s' style={{animationDelay: '1.7s'}} to="/contact">Request Services</Link>
                                <Link className="btn btn-secondary d-inline-block py-3 px-5 ms-2 flex-shrink-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.5s' style={{animationDelay: '1.7s'}} to="/services">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/carousel-3.jpg" className="img-fluid w-100" alt="Third slide"/>
                        <div className="carousel-caption">
                            <p className="text-uppercase text-secondary fs-4 mb-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1s' style={{animationDelay: '1s'}}>PLANALYSE</p>
                            <h1 className="display-1 text-capitalize text-white mb-4 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.3s' style={{animationDelay: '1.3s'}}>On Time. On Budget. Beyond Expectations.</h1>
                            <p className="mb-5 fs-5 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.5s' style={{animationDelay: '1.5s'}}>From blueprint to build — we deliver with speed, safety, and integrity. 
                            </p>
                            <div className="d-flex justify-content-center">
                                <Link className="btn btn-primary d-flex py-3 px-5 me-2 flex-shrink-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.5s' style={{animationDelay: '1.7s'}} to="/contact">Request Services</Link>
                                <Link className="btn btn-secondary d-inline-block py-3 px-5 ms-2 flex-shrink-0 fadeInUp animate__animated" data-animation="fadeInUp" data-delay='1.5s' style={{animationDelay: '1.7s'}}to="/services">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon btn-lg-square fadeInLeft animate__animated" aria-hidden="true" data-animation="fadeInLeft" data-delay="1.1s" style={{animationDelay: '1.3s'}}><i className="fas fa-chevron-left fa-2x"></i></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                    <span className="carousel-control-next-icon btn-lg-square fadeInRight animate__animated" aria-hidden="true" data-animation="fadeInRight" data-delay="1.1s" style={{animationDelay: '1.3s'}}><i className="fas fa-chevron-right fa-2x"></i></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>    

          <About/>
          <Feature/>
          <Services/>
          <Counter/>
          <Project/>
          
         

    </>
  )
}
