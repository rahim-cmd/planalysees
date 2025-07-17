import React,{ useRef } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import emailjs from "@emailjs/browser";
export default function Contact() {
      const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm(
              "service_j7zxk6f",
              "template_x5qsowb",
              form.current,
              "ET1I6lsZFuKMM2xCf"
            )
            .then(
              (result) => {
                console.log("Email Sent:", result.text);
                alert("Email sent successfully!");
                form.current.reset();
              },
              (error) => {
                console.error("Error:", error.text);
              }
            );
        };
    
  return (
    <div>
      
        <Breadcrumb/>
       
        <div class="container-fluid contact bg-light py-5">
            <div class="container py-5">
                <div class="row g-5 mb-5">
                    <div class="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div class="text-center mx-auto pb-5" style={{maxWidth: "800px"}}>
                            <p class="text-uppercase text-secondary fs-5 mb-0">Let’s Connect</p>
                            <h2 class="display-4 text-capitalize mb-3">Send Your Message</h2>
                            
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div class="row g-3">
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating border border-secondary">
                                        <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating border border-secondary">
                                        <input type="email" name="email" class="form-control" id="email" placeholder="Your Email" required/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating border border-secondary">
                                        <input type="phone" name="phone" class="form-control" id="phone" placeholder="Phone" required/>
                                        <label for="phone">Your Phone</label>
                                    </div>
                                </div>
                                <div class="col-lg-12 col-xl-6">
                                    <div class="form-floating border border-secondary">
                                        <select type="text" name="project" class="form-control" id="project" placeholder="Project" required>
                                            <option value="">Choose ...</option>
                                            <option value="Building-information-modeling">Building Information Modeling</option>
                                            <option value="Project Estimation">Project Estimation</option>
                                            <option value="CAD Drafting">CAD Drafting</option>
                                            <option value="Steel Detailing">Steel Detailing</option>
                                            <option value="Interior Rendering">Interior Rendering</option>
                                            <option value="MEPF Modeling">MEPF MODELING</option>
                                            <option value="Shop Drawing">Shop Drawing</option>
                                            <option value="Quantiry Surveying">Quantity Surveying</option>
                                            <option value="Steel Estimation"> Steel Estimation</option>
                                            <option value="Structural Designing">Structural Designing</option>

                                        </select>
                                        <label for="project">Your Project</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating border border-secondary">
                                        <input type="text" name="subject" class="form-control" id="subject" placeholder="Subject" required/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating border border-secondary">
                                        <textarea class="form-control" name="message" placeholder="Leave a message here" id="message" style={{height: "160px"}}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-6 wow fadeInRight" data-wow-delay="0.4s">
                        <div class="contact-map h-100 w-100">
                            <iframe className="h-100 w-100" 
                            style={{height: "500px"}} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d119026.36747871128!2d79.09403655865388!3d21.20907605237095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sPlot%20no.%2089%2C%20Adarsh%20Gruh%20Nirman%20Society%2C%20Near%20Hanuman%20Mandir%2C%20Anant%20Nagar%2C%20Nagpur%2C%20Maharashtra%2C%20India%20-%20440013!5e0!3m2!1sen!2sin!4v1752769032041!5m2!1sen!2sin"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="d-inline-flex bg-white w-100 border border-secondary p-4">
                            <i class="fas fa-map-marker-alt fa-2x text-secondary me-4"></i>
                            <div>
                                <h4>Address</h4>
                                <p class="mb-0">Plot no. 89, Adarsh Gruh Nirman Society, Near Hanuman Mandir, Anant Nagar, Nagpur, Maharashtra, India - 440013</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.4s">
                        <div class="d-inline-flex bg-white w-100 border border-secondary p-4">
                            <i class="fas fa-envelope fa-2x text-secondary me-4"></i>
                            <div>
                                <h4>Mail Us</h4>
                                <p class="mb-0">anas@planalysees.com</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="0.6s">
                        <div class="d-inline-flex bg-white w-100 border border-secondary p-4">
                            <i class="fa fa-phone-alt fa-2x text-secondary me-4"></i>
                            <div>
                                <h4>Telephone</h4>
                                <p class="mb-0">(+91)8551859755</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
