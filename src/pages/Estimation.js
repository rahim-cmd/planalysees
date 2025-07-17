import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function Estimation() {
  return (
    <>
    <Breadcrumb/>
    <div className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10 text-center">
          <h2 className="display-5 fw-bold text-primary mb-3">Estimation Services</h2>
          <p className="text-muted">
            Estimation is a crucial part of project planning, helping stakeholders understand the probable cost and resource requirements before construction begins.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/cb.png" height="200px" className="card-img-top" alt="Cost Breakdown" />
            <div className="card-body">
              <h5 className="card-title">Detailed Cost Breakdown</h5>
              <p className="card-text">
                Planalyse provides highly accurate and detailed cost estimation services based on architectural and engineering drawings, ensuring transparency and budget control.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/tools.jpg" height="200px" className="card-img-top" alt="Estimation Tools" />
            <div className="card-body">
              <h5 className="card-title">Modern Estimation Tools</h5>
              <p className="card-text">
                Our team uses the latest estimation software to deliver quick turnarounds with minimal error margins, enhancing accuracy and speed.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/bnp.jpg" height="200px" className="card-img-top" alt="Smart Bidding" />
            <div className="card-body">
              <h5 className="card-title">Smarter Bidding & Planning</h5>
              <p className="card-text">
                Whether it’s preliminary budgeting or detailed cost planning, our estimations support smarter bidding, reduce risk, and improve financial planning.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <p className="lead text-secondary">
            Suitable for both residential and commercial projects, our estimation services keep your financial goals aligned with project outcomes.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
