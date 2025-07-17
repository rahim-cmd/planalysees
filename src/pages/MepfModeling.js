import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function MepfModeling() {
  return (
    <>
    <Breadcrumb/>
    <div className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10 text-center">
          <h2 className="display-5 fw-bold text-primary mb-3">MEPF Modeling Services</h2>
          <p className="text-muted">
            MEPF modeling involves creating detailed and coordinated 3D models of mechanical, electrical, plumbing, and firefighting systems within a building.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/mepf1.jpg" height="200px" className="card-img-top" alt="Clash-Free MEPF" />
            <div className="card-body">
              <h5 className="card-title">Clash-Free Coordination</h5>
              <p className="card-text">
                At Planalyse, we ensure all MEPF components are accurately represented and well-integrated with architectural and structural systems for error-free execution.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/mepf2.jpg" height="200px" className="card-img-top" alt="MEPF Collaboration" />
            <div className="card-body">
              <h5 className="card-title">Improved Collaboration</h5>
              <p className="card-text">
                Our MEPF models enhance collaboration among stakeholders, reduce on-site issues, and enable efficient installation of systems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/mepf3.jpg" height="200px" className="card-img-top" alt="Validated Models" />
            <div className="card-body">
              <h5 className="card-title">BIM-Compliant Deliverables</h5>
              <p className="card-text">
                We follow international BIM standards and deliver models ready for design validation, quantity take-offs, fabrication, and post-construction facility management.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <p className="lead text-secondary">
            By simulating real-world systems digitally, our MEPF services contribute to safer, more efficient buildings and streamlined facility operations after construction.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
