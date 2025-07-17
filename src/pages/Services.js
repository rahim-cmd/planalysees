import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function Services() {
     const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      };
    const services = [
  {
    title: "BIM (Building Information Modeling)",
    description: "Coordinated 3D modeling and data management for efficient, clash-free construction planning and execution.",
    link: "/building-information-modeling",
    icon: "🏗️",
  },
  {
    title: "Estimation",
    description: "Accurate cost and material forecasting for effective budgeting, bidding, and resource planning.",
    link: "/estimation",
    icon: "📊",
  },
  {
    title: "Quantity Surveying",
    description: "Cost planning, BOQs, and contract advice to ensure your project stays within budget without sacrificing quality.",
    link: "/quantity-surveying",
    icon: "📋",
  },
  {
    title: "CAD Drafting",
    description: "Precise 2D and 3D technical drawings tailored to architectural, structural, and MEP needs.",
    link: "/cad-drafting",
    icon: "📐",
  },
  {
    title: "Interior Rendering",
    description: "Photorealistic interior visuals that help clients visualize space, design, and materials before execution.",
    link: "/interior-rendering",
    icon: "🛋️",
  },
  {
    title: "MEPF Modeling (Mechanical, Electrical, Plumbing & Firefighting)",
    description: "Detailed MEPF coordination models for seamless integration in building systems.",
    link: "/mepf-modeling",
    icon: "⚙️",
  },
  {
    title: "Structural Modeling",
    description: "3D models for structural integrity, analysis, and collaboration across design teams.",
    link: "/structural-modeling",
    icon: "🏢",
  },
  {
    title: "Shop Drawings",
    description: "Detailed fabrication and installation drawings that support accurate construction execution.",
    link: "/shop-drawings",
    icon: "📎",
  },
  {
    title: "Steel Detailing",
    description: "Fabrication-ready steel drawings using tools like Tekla and AutoCAD for residential to industrial projects.",
    link: "/steel-detailing",
    icon: "🔩",
  },
  {
    title: "Steel Estimation",
    description: "Precise material, weight, and cost breakdowns for bidding and procurement in steel construction.",
    link: "/steel-estimation",
    icon: "📏",
  },
];


  return (
    <>
    <Breadcrumb/>
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Our Services</h2>
        <p className="text-muted">Explore our range of BIM and construction support services</p>
      </div>
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <Link to={service.link} className="text-decoration-none text-dark" onclick={scrollToTop}>
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div className="mb-3 fs-1">{service.icon}</div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
                <style>
                    .lm:hover{`
                        background-color:"rgba(255, 94, 21, 1)";
                    `}
                </style>
                <div className="card-footer bg-white border-0 text-center">
                  <button className="btn btn-outline-primary lm" onclick={scrollToTop}>Learn More</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

