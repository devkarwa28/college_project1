import React from "react";
import Slider from "react-slick";
import { Card2_detail } from "../global/P-data";
import Card2 from "../global/Card2";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 95}}
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

function DinningRoom() {
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
            <section className="container-fluid section-7 px-0">
                <div className="container">
                    <h1>Dining Room Furniture</h1>
                    <p className="font-16 jost color-767676">
                        Explore dining table sets and find the one that's just right for you
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

                    </div>
                </div>
            </section>
        </>
    )
}
export default DinningRoom;