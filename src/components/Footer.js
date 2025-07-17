import {Link} from 'react-router-dom'

export default function Footer() {
    const scrollToTop = () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          };
  return (
     <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <div className="footer-item">
                                <h4 className="text-white mb-4">Our Services</h4>
                            <p style={{fontSize:"14px"}}><Link to="/estimation" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> ESTIMATION</Link></p>
                            <p style={{fontSize:"14px"}}><Link to="/building-information-modeling" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> BIM</Link></p>
                            <p style={{fontSize:"14px"}}><Link to="/cad-drafting" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> CAD DRAFTING</Link></p>
                            <p style={{fontSize:"14px"}}><Link to="/steel-detailing" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> STEEL DETAILING</Link></p>
                            <p style={{fontSize:"14px"}}><Link to="/interior-rendering" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> INTERIOR RENDERING
</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Our Services</h4>
                            
                            <p style={{fontSize:"14px"}}><Link to="/mepf-modeling" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> MEPF MODELING</Link></p>
                            <p style={{fontSize:"14px"}}><Link to="/shop-drawing" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> SHOP DRAWINGS</Link></p>
                            <p style={{fontSize:"14px"}}><Link to="/quantity-surveying" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> QUANTITY SURVEYING</Link></p>
                            <p style={{fontSize:"14px"}}><Link to="/steel-estimation" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> STEEL ESTIMATION</Link></p>
                            <p style={{fontSize:"14px"}}><Link to="/structural-designing" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> STRUCTURAL DESIGNING
</Link></p>
                            
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Explore</h4>
                            <Link to="/" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> Home</Link>
                            <Link to="services" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> Services</Link>
                            <Link to="about" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> About Us</Link>
                            <Link to="project" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> Latest Projects</Link>
                           
                            <Link to="contact" onClick={scrollToTop}><i className="fas fa-angle-right me-2"></i> Contact Us</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                        <div className="footer-item d-flex flex-column">
                            <h4 className="text-white mb-4">Contact Info</h4>
                            <Link to=""><i className="fa fa-map-marker-alt me-2"></i>Plot no. 89, Adarsh Gruh Nirman Society, Near Hanuman Mandir, Anant Nagar, Nagpur, Maharashtra, India</Link>
                            <Link to="mailto:anas@planalysees.com"><i className="fas fa-envelope me-2"></i> anas@planalysees.com</Link>
                            <Link to="mailto:anas@planalysees.com"><i className="fas fa-envelope me-2"></i> anas@planalysees.com</Link>
                            <Link to="tel:+918551859755"><i className="fas fa-phone me-2"></i> +91-8551859755</Link>
                            <Link to="" className="mb-3"><i className="fas fa-print me-2"></i> +91-8551859755</Link>
                            <div className="footer-btn d-flex align-items-center">
                                <Link className="btn btn-secondary btn-md-square me-2" to="https://facebook.com"><i className="fab fa-facebook-f text-white"></i></Link>
                                <Link className="btn btn-secondary btn-md-square me-2" to="https://youtube.com"><i className="fab fa-youtube text-white"></i></Link>
                                <Link className="btn btn-secondary btn-md-square me-2" to="https://instagram.com"><i className="fab fa-instagram text-white"></i></Link>
                                <Link className="btn btn-secondary btn-md-square me-0" to="https://instagram.com"><i className="fab fa-linkedin-in text-white"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
