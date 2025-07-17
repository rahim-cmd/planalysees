import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function StructuralModeling() {
  return (
    <>
    <Breadcrumb/>
    <div className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10 text-center">
          <h2 className="display-5 fw-bold text-primary mb-3">Structural Modeling Services</h2>
          <p className="text-muted">
            Structural modeling is the backbone of any construction project, providing detailed representations of load-bearing elements such as beams, columns, foundations, and slabs.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/sd.jpg" height="200px" className="card-img-top" alt="3D Structural Models" />
            <div className="card-body">
              <h5 className="card-title">Accurate 3D Modeling</h5>
              <p className="card-text">
                Planalyse creates precise 3D structural models that ensure project integrity, coordination with other systems, and overall constructability.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/clashdetection.jpg" height="200px" className="card-img-top" alt="Clash Detection" />
            <div className="card-body">
              <h5 className="card-title">Clash Detection & Coordination</h5>
              <p className="card-text">
                Our models help detect clashes with MEP and architectural elements early on, minimizing rework, project delays, and cost overruns.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/pf.jpg" height="200px" className="card-img-top" alt="Prefabrication Support" />
            <div className="card-body">
              <h5 className="card-title">Prefabrication & Documentation</h5>
              <p className="card-text">
                Our structural models support quantity take-offs, technical documentation, prefabrication planning, and code compliance—ensuring smooth project execution.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <p className="lead text-secondary">
            We work closely with structural engineers and contractors to deliver safe, efficient, and standards-compliant designs tailored to your project.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
