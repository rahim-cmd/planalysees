import {Link} from 'react-router-dom'

export default function Topbar() {
  return (
    <div className="container-fluid topbar d-none d-xl-block w-100">
            <div className="row gx-0 align-items-center" style={{height: "45px"}}>
                <div className="col-lg-6 text-center text-lg-start mb-lg-0">
                    <div className="d-flex flex-wrap">
                        <Link to="#" className="text-muted me-4"><i className="fas fa-map-marker-alt text-secondary me-2"></i>Find A Location</Link>
                        <Link to="tel:+91 8551859755" className="text-muted me-4"><i className="fas fa-phone-alt text-secondary me-2"></i>+91- 8551859755</Link>
                        <Link to="#" className="text-muted me-0"><i className="fas fa-envelope text-secondary me-2"></i>anas@planalysees.com</Link>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-end">
                    <div className="d-flex align-items-center justify-content-end">
                        <Link to="#" className="text-muted me-3"><i className="fas fa-clock text-secondary me-2"></i>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</Link>
                        <Link to="https://facebook.com" className="btn btn-primary btn-square border border-white me-3"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="https://youtube.com" className="btn btn-primary btn-square border border-white me-3"><i className="fab fa-youtube"></i></Link>
                        <Link to="https://intagram.com" className="btn btn-primary btn-square border border-white me-3"><i className="fab fa-instagram"></i></Link>
                        <Link to="https://linkedin.com" className="btn btn-primary btn-square border border-white me-3"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
