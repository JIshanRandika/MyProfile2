import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Col, Row} from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './testimonial.css';
// import './tm';

export default class TestimonialComponent extends Component {

    render() {

        AOS.init({
            duration: 2000,
        })
        let resumeData = this.props.resumeData;
        return (
            <section style={{background:"white", marginTop:"200px"}}>
                <div className="customer-feedback">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-sm-offset-2 col-sm-8">
                                <div>
                                    <h2 className="section-title">What Clients Say</h2>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-offset-3 col-md-6 col-sm-offset-2 col-sm-8">
                                <div className="owl-carousel feedback-slider">

                                    <div className="feedback-slider-item">
                                        <img src="//c2.staticflickr.com/8/7310/buddyicons/24846422@N06_r.jpg"
                                             className="center-block img-circle" alt="Customer Feedback"/>
                                            <h3 className="customer-name">Lisa Redfern</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. It is a long established fact that a reader will be distracted
                                                by the readable its layout.</p>
                                            <span className="light-bg customer-rating" data-rating="5">
								5
								{/*<i className="fa fa-star"></i>*/}
							                </span>
                                    </div>

                                    <div className="feedback-slider-item">
                                        <img
                                            src="https://res.cloudinary.com/hnmqik4yn/image/upload/c_fill,fl_force_strip,h_128,q_100,w_128/v1493982718/ah57hnfnwxkmsciwivve.jpg"
                                            className="center-block img-circle" alt="Customer Feedback"/>
                                            <h3 className="customer-name">Cassi</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. It is a long established fact that a reader will be distracted
                                                by the readable its layout.</p>
                                            <span className="light-bg customer-rating" data-rating="4">
								4
								{/*<i className="fa fa-star"></i>*/}
							</span>
                                    </div>

                                    <div className="feedback-slider-item">
                                        <img
                                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg"
                                            className="center-block img-circle" alt="Customer Feedback"/>
                                            <h3 className="customer-name">Md Nahidul</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. It is a long established fact that a reader will be distracted
                                                by the readable its layout.</p>
                                            <span className="light-bg customer-rating" data-rating="5">
								5
								{/*<i className="fa fa-star"></i>*/}
							</span>
                                    </div>

                                </div>

                                <div className="feedback-slider-thumb hidden-xs">
                                    <div className="thumb-prev">
							<span>
								<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451270/profile/profile-80.jpg"
                                     alt="Customer Feedback"/>
							</span>
                                        <span className="light-bg customer-rating">
								5
								{/*<i className="fa fa-star"></i>*/}
							</span>
                                    </div>

                                    <div className="thumb-next">
							<span>
								<img
                                    src="https://res.cloudinary.com/hnmqik4yn/image/upload/c_fill,fl_force_strip,h_128,q_100,w_128/v1493982718/ah57hnfnwxkmsciwivve.jpg"
                                    alt="Customer Feedback"/>
							</span>
                                        <span className="light-bg customer-rating">
								4
								{/*<i className="fa fa-star"></i>*/}
							</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}