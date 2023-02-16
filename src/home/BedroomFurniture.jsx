import React from "react";
import Slider from "react-slick";
import Card2 from "../global/Card2";
import { Card2_detail } from "../global/P-data";
import img1 from '../images/chevron-right.svg'

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 130 }}
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
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 130, right: 0 }}
            onClick={onClick}
        >
            <i class="fa-solid fa-angle-right text-center font-16 ms-2"></i>
        </div>
    );
}

function BedroomFurniture() {
    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false
              }
            },
            {
              breakpoint: 576,
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
            <section className="container-fluid section-6">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h1>Bedroom Furniture</h1>
                            <h2 className="font-16 jost color-767676">
                                Explore beds online and find the
                                one that's perfect for you
                            </h2>
                        </div>
                        <div className="sm-none">
                            <a href="" className="view-all">View All</a>
                        </div>
                    </div>

                    <div className="row">
                        <Slider {...settings}>
                        {Card2_detail.map(function card__2(val){
                            return(
                                <>
                                    <Card2
                                        key = {val.id}
                                        imglink = {val.imglink}
                                        productName = {val.productName}
                                        startingPrice = {val.startingPrice}
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
export default BedroomFurniture;