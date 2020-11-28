import React, { Component } from "react";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Facility from "../components/Common/Facility";
import Breadcrumb from "../components/Common/Breadcrumb";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitting: false,
      submitted: false,
    };
  }
  submitForm(data) {
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.status === 200 ? this.setState({ submitted: true }) : "";
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Breadcrumb title="Contact Us" />
        <section className="contact-area ptb-60">
          <div className="container">
            <div className="section-title">
              <h2>
                <span className="dot"></span> Contact Us
              </h2>
            </div>

            <div className="row">
              <div className="col-lg-5 col-md-12">
                <div className="contact-info">
                  <h3>Here to Help</h3>
                  <p>
                    Have a question? You may find an answer in our FAQs. But you
                    can also contact us.
                  </p>

                  <ul className="contact-list">
                    <li>
                      <i className="fas fa-phone"></i> Call Us/Whatsapp:{" "}
                      <a href="#">(+161) 932-43574</a>
                    </li>
                    <li>
                      <i className="far fa-envelope"></i> Email Us:{" "}
                      <a href="#">support@strapsessions.com</a>
                    </li>
                  </ul>

                  <h3>Opening Hours:</h3>
                  <ul className="opening-hours">
                    <li>
                      <span>Monday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Tuesday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Wednesday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Thursday - Friday:</span> 8AM - 6AM
                    </li>
                    <li>
                      <span>Sunday:</span> Closed
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <div className="contact-form">
                  <h3>Drop Us A Line</h3>
                  <p>
                    We’re happy to answer any questions you have or provide you
                    with an estimate. Just send us a message in the form below
                    with any questions you may have.
                  </p>

                  <form
                    id="contactForm"
                    name="contact"
                    onSubmit={(e) => {
                      e.preventDefault();
                      this.submitForm();
                    }}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <div className="row">
                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Name <span>(required)*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="form-control"
                            required={true}
                            data-error="Please enter your name"
                            placeholder="Enter your name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Email <span>(required)*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            required={true}
                            data-error="Please enter your email"
                            placeholder="Enter your Email Address"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Phone Number <span>(required)*</span>
                          </label>
                          <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            className="form-control"
                            required={true}
                            data-error="Please enter your phone number"
                            placeholder="Enter your Phone Number"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>
                            Your Message <span>(required)*</span>
                          </label>
                          <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="8"
                            required={true}
                            data-error="Please enter your message"
                            className="form-control"
                            placeholder="Enter your Message"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <button type="submit" className="btn btn-primary">
                          Send Message
                        </button>
                        <div
                          id="msgSubmit"
                          className="h3 text-center hidden"
                        ></div>
                        <div className="clearfix"></div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Facility />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Index;
