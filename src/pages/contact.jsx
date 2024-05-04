import React from 'react';

const ContactPage = () => {
    return (
        <div className="contact-area d-flex align-items-center">
            <div className="container">
                <section className="mb-4">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
                    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>

                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" method="POST">
                                {/* CSRF Token */}
                                <input type="hidden" name="csrfmiddlewaretoken" value="{% csrf_token %}" />

                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="name" name="name" className="form-control" />
                                            <label htmlFor="name">Your name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="email" name="email" className="form-control" />
                                            <label htmlFor="email">Your email</label>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Remaining form fields */}

                                <div className="text-center text-md-left">
                                    <button type="button" className="btn btn-primary" onClick={() => document.getElementById('contact-form').submit()}>Send</button>
                                </div>
                                <div className="status"></div>
                            </form>
                        </div>
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-map-marker-alt fa-2x">&#xf3c5;</i>
                                    <p>32/2 MONMOHAN GHOSH STREET KRISHNAGAR, NADIA, WEST BENGAL, INDIA</p>
                                </li>
                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+91 953 170 7495</p>
                                </li>
                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contact@bestglobeshop.com</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <center>
                <div className="google-map">
                    <div id="googleMap">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35052.44640009473!2d88.48081815333711!3d23.40171756033127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f920440311b935%3A0x9cda677e2c6a67af!2sKrishnanagar%2C%20West%20Bengal!5e1!3m2!1sen!2sin!4v1680944860880!5m2!1sen!2sin"
                            width="800" height="600" style={{border: '10%', borderColor: 'darkblue', borderRadius: '25px'}}
                            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default ContactPage;
