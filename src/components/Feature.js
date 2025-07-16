import React from 'react'

export default function Feature() {
  return (
    <>
       <div className="container-fluid feature bg-light py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <p className="text-uppercase text-secondary fs-5 mb-0">WHy US</p>
                    <h2 className="display-4 text-capitalize mb-3">Why Choose Us</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="feature-item text-center border p-5">
                            <div className="feature-img bg-secondary d-inline-flex p-4">
                                <i className="fas fa-city text-primary fa-5x"></i>
                            </div>
                            <a href="#" className="h4 d-block my-4">Expert Engineer</a>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem provident incidunt obcaecati.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="feature-item text-center border p-5">
                            <div className="feature-img bg-secondary d-inline-flex p-4">
                                <i className="fas fa-funnel-dollar text-primary fa-5x"></i>
                            </div>
                            <a href="#" className="h4 d-block my-4">Free Estimates</a>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem provident incidunt obcaecati.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="feature-item text-center border p-5">
                            <div className="feature-img bg-secondary d-inline-flex p-4">
                                <i className="fas fa-tools text-primary fa-5x"></i>
                            </div>
                            <a href="#" className="h4 d-block my-4">Quality Materials</a>
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem provident incidunt obcaecati.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
