import React from 'react';
import Breadcrumb from '../components/Breadcrumb';


export default function SteelDetailing() {
  return (
    <>
    <Breadcrumb/>
    <div className="container py-5" id="steel-detailing">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
          <h5 className="text-primary text-uppercase mb-3">Steel Detailing</h5>
          <h1 className="display-5 mb-4">Precision Steel Detailing for Stronger Structures</h1>
          <p className="mb-3">
            Steel detailing involves creating detailed drawings and models for steel fabricators and erectors,
            covering everything from columns and beams to connections and bolt placements.
          </p>
          <p className="mb-3">
            At <strong>Planalyse</strong>, we provide precise steel detailing services using industry-standard
            tools like <strong>Tekla</strong> and <strong>AutoCAD</strong>. Our deliverables include GA
            (General Arrangement) drawings, erection plans, and fabrication drawings that are accurate,
            code-compliant, and fabrication-ready.
          </p>
          <p className="mb-3">
            We ensure clear communication between engineers, fabricators, and construction teams, reducing
            errors and delays. Our detailing services support <strong>residential</strong>, <strong>commercial</strong>,
            and <strong>industrial</strong> projects, enabling efficient steel fabrication and smoother on-site
            assembly.
          </p>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
          <img className="rounded shadow" width="100%" height="400px" src="img/services/steel-detailing.jpg" alt="Steel Detailing" />
        </div>
      </div>
    </div>
    </>
  );
}
