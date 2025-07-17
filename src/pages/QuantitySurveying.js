import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function QuantitySurveying() {
  return (
    <>
    <Breadcrumb/>
    <div className="container py-5" id="quantity-surveying">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
          <h5 className="text-primary text-uppercase mb-3">Quantity Surveying</h5>
          <h1 className="display-5 mb-4">Cost-Efficient Construction with Expert Quantity Surveying</h1>
          <p className="mb-3">
            Quantity surveying ensures that construction projects remain cost-effective and within budget
            without compromising on quality. At <strong>Planalyse</strong>, our quantity surveyors prepare
            detailed Bills of Quantities (BOQ), manage costs, track material usage, and offer expert advice
            on contracts and procurement.
          </p>
          <p className="mb-3">
            We support our clients through every project phase—from feasibility studies to post-completion
            cost control. Our meticulous attention to detail helps avoid budget overruns and reduces
            financial risk.
          </p>
          <p className="mb-3">
            By combining industry experience with advanced software tools, we provide efficient quantity
            take-offs and real-time cost updates, allowing clients to make informed financial decisions and
            maintain control throughout the project lifecycle.
          </p>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
          <img className="img-fluid rounded shadow" width='100%' height="700px" src="img/services/qs.jpg" alt="Quantity Surveying" />
        </div>
      </div>
    </div>
    </>
  );
}
