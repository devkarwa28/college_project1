import React from "react";
import img1 from '../images/star.svg';
import ani from '../images/ANI.jpg';
import asia from '../images/asian_news.jpg';
import blunt from '../images/the_blunt.jpg';
import google from '../images/google_news.jpg';
import daliy from '../images/daliy.jpg';
import business_line from '../images/business_line.jpg';
import big_news from '../images/big_news.jpg';
import startup_story from '../images/startup_story.jpg';
import last from '../images/last.jpg';
import sagri from '../images/sagri.jpg';
import lokmat_times from '../images/lokmat_times.jpg'
import Slider from "react-slick";

function Testimonial() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section className="section-14">
                <div className="container">
                    <div className="row">
                        <Slider {...settings}>
                            <div>
                                <div className="star d-flex">
                                    <img src={ani} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={asia} alt="" /> 
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={blunt} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={google} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={daliy} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={startup_story} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={big_news} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={business_line} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={last} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={lokmat_times} alt="" />
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={sagri} alt="" />
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Testimonial;