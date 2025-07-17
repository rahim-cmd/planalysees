import React from 'react';
import Breadcrumb from '../components/Breadcrumb';

export default function InteriorRendering() {
  return (
    <>
    <Breadcrumb/>
    <div className="container py-5">
      <div className="row justify-content-center mb-4">
        <div className="col-lg-10 text-center">
          <h2 className="display-5 fw-bold text-primary mb-3">Interior Rendering Services</h2>
          <p className="text-muted">
            Interior rendering brings design concepts to life through photorealistic visuals that showcase how spaces will look before they’re built.
          </p>
        </div>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/frv.jpg" height="200px" className="card-img-top" alt="Photorealistic Views" />
            <div className="card-body">
              <h5 className="card-title">Photorealistic 3D Visuals</h5>
              <p className="card-text">
                At Planalyse, we create stunning interior renderings that capture lighting, textures, furniture, and finishes in exceptional detail.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/decision.jpg" height="200px" className="card-img-top" alt="Client Decision Making" />
            <div className="card-body">
              <h5 className="card-title">Better Design Decisions</h5>
              <p className="card-text">
                These renderings help designers, architects, and clients understand spatial relationships and make faster, more informed design decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow h-100">
            <img src="img/services/mna.jpg" height="200px" className="card-img-top" alt="Marketing and Approvals" />
            <div className="card-body">
              <h5 className="card-title">Marketing & Approvals</h5>
              <p className="card-text">
                Our visuals support confident approvals, help with marketing, and ensure smooth design execution—bridging imagination and reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <p className="lead text-secondary">
            Whether it's for homes, offices, or retail spaces, we work closely with clients to ensure every rendering reflects their unique vision.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
