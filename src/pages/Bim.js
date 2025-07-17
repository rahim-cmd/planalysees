import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function Bim() {
  return (
    <>
    <Breadcrumb/>
    <div className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10 text-center">
          <h2 className="display-5 fw-bold text-primary mb-3">Building Information Modeling (BIM)</h2>
          <p className="text-muted">
            Building Information Modeling (BIM) is a smart 3D model-based process that gives architecture,
            engineering, and construction professionals the insight and tools to plan, design, and manage buildings
            more efficiently.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/bim.jpg" height="200px" className="card-img-top" alt="Design Integration" />
            <div className="card-body">
              <h5 className="card-title">Design & Structure Integration</h5>
              <p className="card-text">
                At Planalyse, we use BIM to integrate design, structure, and MEPF systems into a single coordinated
                model, reducing errors and saving costs.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/clash.jpg" height="200px" className="card-img-top" alt="Clash Detection" />
            <div className="card-body">
              <h5 className="card-title">Visualization & Clash Detection</h5>
              <p className="card-text">
                Our BIM services improve visualization, support clash detection, and help streamline construction
                workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/pd.jpg" height="200px" className="card-img-top" alt="Project Delivery" />
            <div className="card-body">
              <h5 className="card-title">Efficient Project Delivery</h5>
              <p className="card-text">
                Whether it’s for design development, documentation, or facility management, our BIM models enable
                better decision-making and faster project delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <p className="lead text-secondary">
            We support a range of disciplines and platforms tailored to client-specific project needs.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
