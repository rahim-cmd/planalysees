import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function Services() {
    return (
        <>
            <Breadcrumb />
            <div className="container-fluid service bg-light pb-5">
                <div className="container pb-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{ maxWidth: '800px' }}
                    >
                        <p className="text-uppercase text-secondary fs-5 mb-0">Our Services</p>
                        <h2 className="display-4 text-capitalize mb-3">our service is creative, & decent</h2>
                    </div>

                    <div className="row g-4">
                        {/* Service 1 */}
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-1.jpg" className="img-fluid w-100" alt="service-1" />
                                </div>
                                <div className="service-content text-center p-4">
                                    <div className="bg-secondary btn-xl-square mx-auto" style={{ width: '120px', height: '120px' }}>
                                        <i className="fas fa-home text-primary fa-4x"></i>
                                    </div>
                                    <Link to="#" className="d-block fs-4 my-4">
                                        ESTIMATION / QUANTITY SURVEY
                                    </Link>
                                    <p className="text-white mb-4">
                                        We deliver fast, detailed, and accurate cost estimates using the latest software. From materials to contingencies, our service ensures transparent budgeting and smarter bids.
                                    </p>
                                    <Link className="btn btn-secondary py-2 px-4" to="#">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-2.jpg" className="img-fluid w-100" alt="service-2" />
                                </div>
                                <div className="service-content text-center p-4">
                                    <div className="bg-secondary btn-xl-square mx-auto" style={{ width: '120px', height: '120px' }}>
                                        <i className="fas fa-users-cog text-primary fa-4x"></i>
                                    </div>
                                    <Link to="#" className="d-block fs-4 my-4">
                                        BUILDING INFORMATION MODELING
                                    </Link>
                                    <p className="text-white mb-4">
                                        Planalyse uses smart 3D BIM models to integrate design, structure, and MEPF systems into one coordinated workflow. This reduces clashes, saves costs, and speeds up project delivery across all construction phases.
                                    </p>
                                    <Link className="btn btn-secondary py-2 px-4" to="#">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-3.jpg" className="img-fluid w-100" alt="service-3" />
                                </div>
                                <div className="service-content text-center p-4">
                                    <div className="bg-secondary btn-xl-square mx-auto" style={{ width: '120px', height: '120px' }}>
                                        <i className="fas fa-hospital-user text-primary fa-4x"></i>
                                    </div>
                                    <Link to="#" className="d-block fs-4 my-4">
                                        CAD DRAFTING
                                    </Link>
                                    <p className="text-white mb-4">
                                        We convert sketches, PDFs, or hand drawings into accurate 2D / 3D CAD drafts for planning, permits, and execution — tailored for architects, engineers, and contractors.
                                    </p>
                                    <Link className="btn btn-secondary py-2 px-4" to="#">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-4.jpg" className="img-fluid w-100" alt="service-4" />
                                </div>
                                <div className="service-content text-center p-4">
                                    <div className="bg-secondary btn-xl-square mx-auto" style={{ width: '100px', height: '100px' }}>
                                        <i className="fas fa-file-invoice-dollar text-primary fa-4x"></i>
                                    </div>
                                    <Link to="#" className="d-block fs-4 my-4">
                                        STEEL DETAILING
                                    </Link>
                                    <p className="text-white mb-4">
                                        Our steel detailing covers everything from GA drawings to
                                        fabrication-ready plans, ensuring smooth coordination
                                        between engineers, fabricators, and erectors.
                                    </p>
                                    <Link className="btn btn-secondary py-2 px-4" to="#">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-5.jpg" className="img-fluid w-100" alt="service-5" />
                                </div>
                                <div className="service-content text-center p-4">
                                    <div className="bg-secondary btn-xl-square mx-auto" style={{ width: '100px', height: '100px' }}>
                                        <i className="fas fa-cogs text-primary fa-4x"></i>
                                    </div>
                                    <Link to="#" className="d-block fs-4 my-4">
                                        INTERIOR RENDERING

                                    </Link>
                                    <p className="text-white mb-4">
                                        We create photorealistic 3D visuals to help clients visualize
                                        interiors before construction, aiding in faster approvals and
                                        better design decisions.
                                    </p>
                                    <Link className="btn btn-secondary py-2 px-4" to="#">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Service 6 */}
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-6.jpg" className="img-fluid w-100" alt="service-6" />
                                </div>
                                <div className="service-content text-center p-4">
                                    <div className="bg-secondary btn-xl-square mx-auto" style={{ width: '100px', height: '100px' }}>
                                        <i className="fas fa-sitemap text-primary fa-4x"></i>
                                    </div>
                                    <Link to="#" className="d-block fs-4 my-4">
                                        MEPF MODELING
                                    </Link>
                                    <p className="text-white mb-4">
                                        Our coordinated MEPF models ensure clash-free design and
                                        smooth integration with structural and architectural elements for
                                        efficient installation and facility management.
                                    </p>
                                    <Link className="btn btn-secondary py-2 px-4" to="#">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
}
