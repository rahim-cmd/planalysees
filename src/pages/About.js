import Breadcrumb from "../components/Breadcrumb"

export default function About() {

  return (
    <>
        <Breadcrumb/>
      <div className="container-fluid about py-5">
            <div className="container py-5">
                <div className="row g-5 align-items-center">
                    <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.1s">
                        <div className="about-item-image d-flex">
                            <img src="img/about.jpg" className="img-1 img-fluid w-50"  alt=""/>
                            <img src="img/about-3.jpg" className="img-2 img-fluid w-50"  alt=""/>
                            <div className="about-item-image-content">
                                <img src="img/about-1.png" className="img-fluid w-100 h-100" style={{ objectFit :'cover' }}alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.1s">
                        <div className="about-item-content">
                            <p className="text-uppercase text-secondary fs-5 mb-0">WE ARE CONSTRUCTION COMPANY</p>
                            <h2 className="display-4 text-capitalize mb-3">Making your vision come true at the basics.</h2>
                            <p className="mb-4 fs-7">Planalyse is a Nagpur-based construction technology firm
founded in 2025. We specialize in BIM, Estimation, Quantity
Surveying, CAD Drafting, MEPF & Steel Shop Drawings, Steel
Detailing, and Interior Rendering.
Driven by the motto "Analyse your drawings, channelise your
work,
" we help contractors, architects, engineers, and
fabricators streamline their workflows using advanced digital
tools.
What sets us apart is our commitment to accuracy, innovation,
and industry transformation. A key highlight includes delivering
a full MEP model for a project in Sydney for DBS Consulting,
earning high client satisfaction.
At Planalyse, we’re shaping the future of construction—one
drawing at a time 
                            </p>
                            <div className="pb-4 mb-4 border-bottom">
                                <div className="row g-4">
                                    <div className="col-lg-4">
                                        <div className="about-item-content-img">
                                            <img src="img/about-2.jpg" className="img-fluid w-100" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="d-flex mb-4">
                                            <div className="text-secondary">
                                                <i className="fas fa-user-shield fa-3x"></i>
                                            </div>
                                            <h4 className="ms-3">Building quality standards</h4>
                                        </div>
                                        <div className="d-flex">
                                            <div className="text-secondary">
                                                <i className="fas fa-users-cog fa-3x"></i>
                                            </div>
                                            <h4 className="ms-3">Certified engineer’s team</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gy-0 gx-4 justify-content-between pb-4">
                                <div className="col-lg-6">
                                    <p className="text-dark"><i className="fas fa-check text-secondary me-1"></i> 100% Satisfaction</p>
                                    <p className="text-dark"><i className="fas fa-check text-secondary me-1"></i> Trained Employees</p>
                                </div>
                                <div className="col-lg-6">
                                    <p className="text-dark"><i className="fas fa-check text-secondary me-1"></i> Annual Pass Programs</p>
                                    <p className="text-dark mb-0"><i className="fas fa-check text-secondary me-1"></i> Flexible and cost effective</p>
                                </div>
                            </div>
                            <a className="btn btn-secondary d-inline-block py-3 px-5 me-2 flex-shrink-0 wow fadeInUp" data-wow-delay="0.1s" href="#">Discover More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
