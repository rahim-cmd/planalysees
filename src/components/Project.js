import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb'

export default function Project() {
  return (
    <>
    <Breadcrumb/>
    <div className="container-fluid project py-5">
            <div className="container py-5">
                <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: '800px'}}>
                    <p className="text-uppercase text-secondary fs-5 mb-0">Our Projects</p>
                    <h2 className="display-4 text-capitalize mb-3">Recent Completed Projects</h2>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="project-item">
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="project-img">
                                        <img src="img/proj/img-1.png" className="img-fluid w-100 pt-3 ps-3" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="project-content mb-4">
                                        <p className="fs-5 text-secondary mb-2">Modeling</p>
                                        <Link to="#" className="h4">MEP MODEL</Link>
                                        <p className="mb-0 mt-3">SYDNEY, AUSTRALIA</p>
                                    </div>
                                    <Link className="btn btn-primary py-2 px-4" to="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="project-item">
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="project-img">
                                        <img src="img/proj/img-2.png" className="img-fluid w-100 pt-3 ps-3" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="project-content mb-4">
                                        <p className="fs-5 text-secondary mb-2">Estimation</p>
                                        <Link to="#" className="h4">ELECTRICAL ESTIMATION</Link>
                                        <p className="mb-0 mt-3">FLORIDA, USA</p>
                                    </div>
                                    <Link className="btn btn-primary py-2 px-4" to="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="project-item">
                            <div className="row g-4">
                                <div className="col-md-4">
                                    <div className="project-img">
                                        <img src="img/proj/img-3.png" className="img-fluid w-100 pt-3 ps-3" alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="project-content mb-4">
                                        <p className="fs-5 text-secondary mb-2">Rendering</p>
                                        <Link to="#" className="h4">3D RENDERS</Link>
                                        <p className="mb-0 mt-3">FLORIDA, USA</p>
                                    </div>
                                    <Link className="btn btn-primary py-2 px-4" to="#">Read More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
  )
}
