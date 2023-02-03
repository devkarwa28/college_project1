import React from "react";
import Slider from "react-slick";
import Card2 from "../global/Card2";
import { Card2_detail } from "../global/P-data";
import img1 from "../images/chevron-right.svg"

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 130}}
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

function LivingRoom() {
    const settings = {
        infinite: true,
        speed: 4000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
            <section className="container-fluid section-6">
                <div className="container">
                    <h1 >Living Room Furniture</h1>
                    <p>
                    Explore a variety of sofa set designs and bring something extra special to your living area
                    </p>

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
export default LivingRoom;