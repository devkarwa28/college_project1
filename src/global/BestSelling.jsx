import React from "react";
import Slider from "react-slick";
import Card1 from "./Card1";
import pData from "./P-data";
import img1 from "../images/chevron-right.svg"

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 95 }}
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
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 95, right: 0 }}
            onClick={onClick}
        >
            <i class="fa-solid fa-angle-right text-center font-16 ms-2"></i>
        </div>
    );
}

function BestSelling() {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
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
                rows: 2,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <>
            <section className="container-fluid section-4">
                <div className="container">
                    <h1>Best Selling Products</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat viverra sed elit dignissim nibh in a. In mauris eget bibendum gravida
                    </p>
                    <div className="row">
                        <Slider {...settings}>
                            {pData.map(function pCard(val) {
                                return (
                                    <>
                                        <Card1
                                            key={val.id}
                                            imglink={val.imglink}
                                            pName={val.pName}
                                            dPrice={val.dPrice}
                                            sPrice={val.sPrice}
                                        />
                                    </>
                                )
                            })}
                        </Slider>
                        <div className="d-flex justify-content-center">
                            <button className="view-all-btn">
                            View More <img src={img1} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default BestSelling;