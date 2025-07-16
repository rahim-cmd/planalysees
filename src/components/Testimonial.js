import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonial() {
  return (
    <div className="container-fluid testimonial pb-5">
      <div className="container pb-5">
        <div
          className="text-center mx-auto pb-5"
          style={{ maxWidth: '800px' }}
        >
          <p className="text-uppercase text-secondary fs-5 mb-0">Testimonials</p>
          <h2 className="display-4 text-capitalize mb-3">Our clients reviews.</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="mySwiper"
        >
          {/* Testimonial Slide 1 */}
          <SwiperSlide>
            <div className="testimonial-item bg-light p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-primary position-absolute"
                  style={{ bottom: '30px', right: '0' }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="me-4">
                    <img
                      src="img/testimonial-1.jpg"
                      className="img-fluid"
                      style={{ width: '100px', height: '100px' }}
                      alt="Client 1"
                    />
                  </div>
                  <div>
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex text-secondary pe-5">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star text-muted"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial Slide 2 */}
          <SwiperSlide>
            <div className="testimonial-item bg-light p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-primary position-absolute"
                  style={{ bottom: '30px', right: '0' }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Another testimonial text here. Their experience with us was great and beneficial for their business.
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="me-4">
                    <img
                      src="img/testimonial-2.jpg"
                      className="img-fluid"
                      style={{ width: '100px', height: '100px' }}
                      alt="Client 2"
                    />
                  </div>
                  <div>
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex text-secondary pe-5">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star text-muted"></i>
                      <i className="fas fa-star text-muted"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Testimonial Slide 3 */}
          <SwiperSlide>
            <div className="testimonial-item bg-light p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-primary position-absolute"
                  style={{ bottom: '30px', right: '0' }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">
                    Last review - very happy with the support and quality. Definitely recommend their services.
                  </p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="me-4">
                    <img
                      src="img/testimonial-3.jpg"
                      className="img-fluid"
                      style={{ width: '100px', height: '100px' }}
                      alt="Client 3"
                    />
                  </div>
                  <div>
                    <h4 className="text-dark">Client Name</h4>
                    <p className="m-0 pb-3">Profession</p>
                    <div className="d-flex text-secondary pe-5">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
