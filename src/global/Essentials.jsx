import React from "react";
import Slider from "react-slick";
import img1 from '../images/sec3-1.png';
import img2 from '../images/sec3-2.png';
import img3 from '../images/sec3-3.png';

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, opacity: 1, placeItems: "center", top: 220 ,left: -9 }}
            onClick={onClick}
        >
            <i class="fa-solid fa-angle-left text-center font-16 ms-2"></i>
        </div>
    );
}
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, opacity: 1, placeItems: "center", top: 220, right: 0 }}
            onClick={onClick}
        >
            <i class="fa-solid fa-angle-right text-center font-16 ms-2"></i>
        </div>
    );
}

function Essentials() {
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <section class="container-fluid section-3">
                <div class="container">
                    <h1>Furniture Essentials For Your Home</h1>
                    <p>
                        Buy Furniture Online in India, made in Solid Sheesham Wood, craft fully Treated and Seasoned. <a href="">Ream More</a>.
                    </p>

                    <div class="row">
                        <Slider {...settings}>
                            <div>
                                <div>
                                <div class="bg-sec3">
                                    <img src={img1} alt="" />
                                </div>
                                <div class="sec3-box">
                                    <span class="jost font-16 fw-500">#Bedroom</span>
                                    <h2 class="jost font-32 fw-500">Bedroom Furniture</h2>
                                    <h3 class="jost font-16 fw-500">Starting From ₹14,749</h3>
                                </div>
                                </div>


                            </div>
                            <div>

                                <div>
                                <div class="bg-sec3">
                                    <img src={img2} alt="" />
                                </div>
                                <div class="sec3-box">
                                    <span class="jost font-16 fw-500">#Diningroom</span>
                                    <h2 class="jost font-32 fw-500">Diningroom Furniture</h2>
                                    <h3 class="jost font-16 fw-500">Starting From ₹14,749</h3>
                                </div>
                                </div>

                            </div>
                            <div>

                                <div class="bg-sec3">
                                    <img src={img3} alt="" />
                                </div>
                                <div class="sec3-box">
                                    <span class="jost font-16 fw-500">#Bedroom</span>
                                    <h2 class="jost font-32 fw-500">Bedroom Furniture</h2>
                                    <h3 class="jost font-16 fw-500">Starting From ₹14,749</h3>
                                </div>

                            </div>
                            <div>

                                <div class="bg-sec3">
                                    <img src={img2} alt="" />
                                </div>
                                <div class="sec3-box">
                                    <span class="jost font-16 fw-500">#Diningroom</span>
                                    <h2 class="jost font-32 fw-500">Diningroom Furniture</h2>
                                    <h3 class="jost font-16 fw-500">Starting From ₹14,749</h3>
                                </div>

                            </div>
                            <div>

                                <div class="bg-sec3">
                                    <img src={img3} alt="" />
                                </div>
                                <div class="sec3-box">
                                    <span class="jost font-16 fw-500">#Bedroom</span>
                                    <h2 class="jost font-32 fw-500">Bedroom Furniture</h2>
                                    <h3 class="jost font-16 fw-500">Starting From ₹14,749</h3>
                                </div>
                            </div>
                            <div>

                                <div class="bg-sec3">
                                    <img src={img3} alt="" />
                                </div>
                                <div class="sec3-box">
                                    <span class="jost font-16 fw-500">#Bedroom</span>
                                    <h2 class="jost font-32 fw-500">Bedroom Furniture</h2>
                                    <h3 class="jost font-16 fw-500">Starting From ₹14,749</h3>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Essentials;