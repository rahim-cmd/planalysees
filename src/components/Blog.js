import React from 'react'

export default function Blog() {
  return (
     <div className="container-fluid blog pb-5">
            <div className="container pb-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <p className="text-uppercase text-secondary fs-5 mb-0">News & Blog</p>
                    <h2 className="display-4 text-capitalize mb-3">Our latest news post and articles?</h2>
                </div>
                <div className="row g-4">
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="blog-item h-100">
                            <div className="blog-img">
                                <img src="img/blog-1.jpg" className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="blog-content p-4">
                                <div className="d-flex justify-content-between mb-3">
                                    <p className="mb-0"><i className="fa fa-calendar-check text-secondary me-1"></i> 26 April 2025</p>
                                    <p className="mb-0"><i className="fa fa-user text-secondary me-1"></i> Admin</p>
                                </div>
                                <a href="#" className="h4 d-block mb-4">Emerging Tech Trends What to in the Next Decade</a>
                                <a className="btn btn-secondary py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="blog-item h-100">
                            <div className="blog-img">
                                <img src="img/blog-2.jpg" className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="blog-content p-4">
                                <div className="d-flex justify-content-between mb-3">
                                    <p className="mb-0"><i className="fa fa-calendar-check text-secondary me-1"></i> 26 April 2025</p>
                                    <p className="mb-0"><i className="fa fa-user text-secondary me-1"></i> Admin</p>
                                </div>
                                <a href="#" className="h4 d-block mb-4">Emerging Tech Trends What to in the Next Decade</a>
                                <a className="btn btn-secondary py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div className="blog-item h-100">
                            <div className="blog-img">
                                <img src="img/blog-3.jpg" className="img-fluid w-100" alt=""/>
                            </div>
                            <div className="blog-content p-4">
                                <div className="d-flex justify-content-between mb-3">
                                    <p className="mb-0"><i className="fa fa-calendar-check text-secondary me-1"></i> 26 April 2025</p>
                                    <p className="mb-0"><i className="fa fa-user text-secondary me-1"></i> Admin</p>
                                </div>
                                <a href="#" className="h4 d-block mb-4">Emerging Tech Trends What to in the Next Decade</a>
                                <a className="btn btn-secondary py-2 px-4" href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
