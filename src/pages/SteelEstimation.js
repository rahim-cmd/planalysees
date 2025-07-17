import React from 'react';
import Breadcrumb from '../components/Breadcrumb';


export default function SteelEstimation() {
  return (
    <>
    <Breadcrumb/>
    <div className="container py-5" id="steel-estimation">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
          <h5 className="text-primary text-uppercase mb-3">Steel Estimation</h5>
          <h1 className="display-5 mb-4">Accurate Steel Estimation for Smarter Planning</h1>
          <p className="mb-3">
            Steel estimation is vital for budgeting and planning in steel-intensive construction projects.
            <strong> Planalyse</strong> offers comprehensive steel estimation services that calculate material
            quantities, weights, and costs based on structural drawings.
          </p>
          <p className="mb-3">
            We break down steel requirements by type, size, and fabrication complexity to provide detailed
            and accurate estimates. Our service supports contractors and fabricators during bidding,
            procurement, and budgeting processes.
          </p>
          <p className="mb-3">
            By reducing guesswork and ensuring material efficiency, our steel estimates contribute to cost
            control, minimized waste, and better resource planning. Whether for high-rise buildings or
            industrial sheds, our estimation supports strategic decision-making.
          </p>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
          <img className="img-fluid rounded shadow" width="100%" height="500px" src="img/services/steel-estimation.jpg" alt="Steel Estimation" />
        </div>
      </div>
    </div>
    </>
  );
}
