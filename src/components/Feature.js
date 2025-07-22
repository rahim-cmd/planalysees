import React from 'react'
import {Link} from 'react-router-dom';
export default function Feature() {
  return (
    <>
       <div className="container-fluid feature bg-light py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <p className="text-uppercase text-secondary fs-5 mb-0">Why US</p>
                    <h2 className="display-4 text-capitalize mb-3">Why Choose Us</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="feature-item text-center border p-5">
                            <div className="feature-img bg-secondary d-inline-flex p-4">
                                <i className="fas fa-city text-primary fa-5x"></i>
                            </div>
                            <Link to="#" className="h4 d-block my-4">Expert Engineer</Link>
                            <p className="mb-0">We have the team of expert and experienced engineers.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="feature-item text-center border p-5">
                            <div className="feature-img bg-secondary d-inline-flex p-4">
                                <i className="fas fa-funnel-dollar text-primary fa-5x"></i>
                            </div>
                            <Link to="#" className="h4 d-block my-4">Free Estimates</Link>
                            <p className="mb-0">On some models we provide free estimates as well.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="feature-item text-center border p-5">
                            <div className="feature-img bg-secondary d-inline-flex p-4">
                                <i className="fas fa-tools text-primary fa-5x"></i>
                            </div>
                            <Link to="#" className="h4 d-block my-4">Quality Materials</Link>
                            <p className="mb-0">We know cost effectiveness but we don't compromise & provide quality material.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
