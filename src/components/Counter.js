import React from 'react'

export default function Counter() {
  return (
   <div className="container-fluid counter py-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="counter-box">
                            <div className="counter-item">
                                <div className="counter-item-style"></div>
                                <div className="counter-item-inner p-5">
                                    <i className="fas fa-thumbs-up fa-4x text-secondary"></i>
                                    <h4 className="text-dark my-4">Completed Projects</h4>
                                    <div className="counter-counting">
                                        <span className="text-secondary fs-2 fw-bold" data-toggle="counter-up">456</span>
                                        <span className="h1 fw-bold text-secondary">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="counter-box">
                            <div className="counter-item">
                                <div className="counter-item-style"></div>
                                <div className="counter-item-inner p-5">
                                    <i className="fas fa-users fa-4x text-secondary"></i>
                                    <h4 className="text-dark my-4">Happy Customers</h4>
                                    <div className="counter-counting">
                                        <span className="text-secondary fs-2 fw-bold" data-toggle="counter-up">513</span>
                                        <span className="h1 fw-bold text-secondary">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="counter-box">
                            <div className="counter-item">
                                <div className="counter-item-style"></div>
                                <div className="counter-item-inner p-5">
                                    <i className="fas fa-user fa-4x text-secondary"></i>
                                    <h4 className="text-dark my-4">Qualified Engineers</h4>
                                    <div className="counter-counting">
                                        <span className="text-secondary fs-2 fw-bold" data-toggle="counter-up">53</span>
                                        <span className="h1 fw-bold text-secondary">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
                        <div className="counter-box">
                            <div className="counter-item">
                                <div className="counter-item-style"></div>
                                <div className="counter-item-inner p-5">
                                    <i className="fas fa-heart fa-4x text-secondary"></i>
                                    <h4 className="text-dark my-4">Years Experiance</h4>
                                    <div className="counter-counting">
                                        <span className="text-secondary fs-2 fw-bold" data-toggle="counter-up">17</span>
                                        <span className="h1 fw-bold text-secondary">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center pt-4 wow fadeInUp" data-wow-delay="0.9s">
                        <a className="counter-btn btn btn-secondary py-3 px-5" href="#">Join With Us</a>
                    </div>
                </div>
            </div>
        </div>
  )
}
