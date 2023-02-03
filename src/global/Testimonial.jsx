import React from "react";
import img1 from '../images/star.svg'
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
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div>
                            <div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div><div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div><div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div><div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div><div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div><div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div><div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div><div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div><div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div><div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
                                </div>
                            </div><div>
                                <div className="star d-flex">
                                    <img src={img1} alt="" />
                                    <h1 className="jost fw-700">Lorem ipsum</h1>
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