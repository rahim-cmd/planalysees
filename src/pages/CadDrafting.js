import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function CadDrafting() {
  return (
    <>
    <Breadcrumb/>
    <div className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10 text-center">
          <h2 className="display-5 fw-bold text-primary mb-3">CAD Drafting Services</h2>
          <p className="text-muted">
            Computer-Aided Design (CAD) drafting is essential for creating accurate technical drawings and construction documentation.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/3dn2d.jpg" height="200px" className="card-img-top" alt="2D and 3D Drafting" />
            <div className="card-body">
              <h5 className="card-title">2D & 3D CAD Drafting</h5>
              <p className="card-text">
                Planalyse offers high-quality 2D and 3D CAD drafting services tailored for architects, engineers, and contractors across various project types.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/sketch.jpg" height="200px" className="card-img-top" alt="Sketch to CAD" />
            <div className="card-body">
              <h5 className="card-title">Sketch to CAD Conversion</h5>
              <p className="card-text">
                We convert hand-drawn sketches, PDFs, and concepts into precise CAD drawings used for planning, permits, and construction documentation.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/acd.jpg" height="200px" className="card-img-top" alt="Accurate Documentation" />
            <div className="card-body">
              <h5 className="card-title">Accurate & Compliant Drafting</h5>
              <p className="card-text">
                Our team is proficient in civil, architectural, MEP, and structural drafting, always aligning with international standards and project specs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <p className="lead text-secondary">
            With fast delivery and a focus on precision, our CAD drafting enhances efficiency and eliminates design inconsistencies for residential, commercial, and industrial projects.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
