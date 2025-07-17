import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };
  const location = useLocation();

  // Function to close navbar collapse on nav link click (for mobile)
  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav-link");
    const navCollapse = document.getElementById("navbarCollapse");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        const bsCollapse = new window.bootstrap.Collapse(navCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      });
    });

    // Clean up to avoid duplicate listeners
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  // Function to set active class
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <div className="container-fluid sticky-top px-0">
      <nav className="navbar navbar-expand-lg navbar-dark bg-white py-3 px-4">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-secondary display-6">
            <img src="img/logo.png" alt="Logo" />
          </h1>
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto pt-2 pt-lg-0">
            <Link to="/" className={`nav-item nav-link ${isActive("/")}`}>Home</Link>
            <Link to="/about" className={`nav-item nav-link ${isActive("/about")}`} onClick={scrollToTop}>About</Link>
            <Link to="/services" className={`nav-item nav-link ${isActive("/services")}`} onClick={scrollToTop}>Services</Link>
            <Link to="/project" className={`nav-item nav-link ${isActive("/project")}`} onClick={scrollToTop}>Projects</Link>
            <Link to="/contact" className={`nav-item nav-link ${isActive("/contact")}`} onClick={scrollToTop}>Contact</Link>
          </div>
          <div className="d-flex align-items-center flex-nowrap pt-3 pt-lg-0 ms-lg-2">
            <Link to="tel:+918551859755" className="btn btn-secondary py-2 px-4 ms-3 flex-wrap flex-sm-shrink-0">Call Now</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
