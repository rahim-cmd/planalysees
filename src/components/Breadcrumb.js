import React from 'react';
import { useLocation, Link } from "react-router-dom";

export default function Breadcrumb() {
    const location = useLocation();
    const path = location.pathname; // e.g., "/about"

    if (path === '/about') {
        return (
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">About Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                        <li className="breadcrumb-item active text-secondary">About</li>
                    </ol>
                </div>
            </div>
        );
    } else if (path === '/contact') {
        return (
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Contact Us</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                        <li className="breadcrumb-item active text-secondary">Contact</li>
                    </ol>
                </div>
            </div>
        );
    } else if (path === '/services') {
        return (
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Services</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                        <li className="breadcrumb-item active text-secondary">Services</li>
                    </ol>
                </div>
            </div>
        );
    } else if (path === '/project') {
        return (
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Projects</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                        <li className="breadcrumb-item active text-secondary">Projects</li>
                    </ol>
                </div>
            </div>
        );
    }else if(path === '/building-information-modeling'){

        return (
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Services</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                        <li className="breadcrumb-item active text-secondary">Building-information-modeling</li>
                    </ol>
                </div>
            </div>
        );

    } else if(path === '/estimation'){

         return (
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Services</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                        <li className="breadcrumb-item active text-secondary">Estimation</li>
                    </ol>
                </div>
            </div>
        );

    }else if(path === '/cad-drafting'){

        return (
            <div className="container-fluid bg-breadcrumb">
                <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
                    <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">Services</h4>
                    <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item"><Link to="#">Pages</Link></li>
                        <li className="breadcrumb-item active text-secondary">CAD Drafting</li>
                    </ol>
                </div>
            </div>
        );

    } else {
        return null;
    }
}
