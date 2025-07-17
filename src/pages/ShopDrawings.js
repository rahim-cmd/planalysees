import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function ShopDrawings() {
  return (
    <>
    <Breadcrumb/>
    <div className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10 text-center">
          <h2 className="display-5 fw-bold text-primary mb-3">Shop Drawing Services</h2>
          <p className="text-muted">
            Shop drawings are detailed drawings used for fabrication and installation of components like steel structures, HVAC systems, and cabinetry.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/fab1.jpg" height="200px" className="card-img-top" alt="Fabrication Details" />
            <div className="card-body">
              <h5 className="card-title">Fabrication-Ready Drawings</h5>
              <p className="card-text">
                Planalyse produces accurate, construction-ready shop drawings that align with both design intent and real-world site conditions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/mtc.jpg" height="200px" className="card-img-top" alt="Multi-Trade Coordination" />
            <div className="card-body">
              <h5 className="card-title">Multi-Trade Coordination</h5>
              <p className="card-text">
                Our team creates coordinated documentation across structural, MEP, and architectural disciplines to minimize clashes and reduce on-site delays.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/shop.jpg" height="200px" className="card-img-top" alt="Precise Installation" />
            <div className="card-body">
              <h5 className="card-title">Precise & Efficient Installation</h5>
              <p className="card-text">
                With exact dimensions, materials, and fabrication specs, our shop drawings ensure seamless collaboration between designers, fabricators, and on-site teams.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <p className="lead text-secondary">
            Whether you're a contractor or a fabricator, our shop drawings bridge the gap between design and construction—enhancing build quality and accelerating project delivery.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
