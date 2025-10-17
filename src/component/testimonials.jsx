import React from 'react';
import {TestimonialInfo} from "../base";

function Testimonials(props) {
    return (
        <div className="testimonials-box">


            <div className="testimonial">

                <h2 className="title">{TestimonialInfo.section1.title}</h2>

                <div className="testimonial-card">

                    <img src={TestimonialInfo.section1.image} alt="alan doe"
                         className="testimonial-banner" width="80" height="80"/>

                    <p className="testimonial-name">{TestimonialInfo.section1.name}</p>

                    <p className="testimonial-title">{TestimonialInfo.section1.position}</p>

                    <img
                        src="https://pub-141831e61e69445289222976a15b6fb3.r2.dev/1760704621734-9twywah6lek-1760704621416_ztpu3t_quotes.svg"
                        alt="quotation" className="quotation-img"
                        width="26"/>

                    <p className="testimonial-desc">
                        {TestimonialInfo.section1.text}
                    </p>

                </div>

            </div>


            <div className="cta-container">

                <img src={TestimonialInfo.section2.image} alt="summer collection" className="cta-banner"/>

                <a href="#" className="cta-content">

                    <p className="discount">{TestimonialInfo.section2.percent}</p>

                    <h2 className="cta-title">{TestimonialInfo.section2.title}</h2>

                    <p className="cta-text">{TestimonialInfo.section2.text}</p>

                    <button className="cta-btn">Shop now</button>

                </a>

            </div>


            <div className="service">

                <h2 className="title">Our Services</h2>

                <div className="service-container">
                    {TestimonialInfo.section3.map(res => (

                        <a href="#" className="service-item" key={res.id}>

                            <div className="service-icon">
                                <img
                                    src={res.icon}
                                    alt="quotation" className="quotation-img"
                                    width="26"/>
                            </div>

                            <div className="service-content">

                                <h3 className="service-title">{res.title}</h3>
                                <p className="service-desc">{res.desc}</p>

                            </div>

                        </a>

                    ))}


                </div>

            </div>

        </div>

    );
}

export default Testimonials;