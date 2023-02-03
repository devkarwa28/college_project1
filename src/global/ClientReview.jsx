import React from "react";
import Slider from "react-slick";
import Client_Card from "./Client-Card";
import { review_detail } from "./P-data";

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

function ClientReview(){
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return(
        <>
            <section className="section-12 container-fluid">
        <div className="container">
            <h1>What Our Happy Client Say</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat viverra sed elit dignissim nibh in a. In mauris eget bibendum gravida</h2>
            <div className="row">
            <Slider {...settings}>
            {review_detail.map(function review_callback(val){
                return(
                    <>
                        <Client_Card
                            key={val.id}
                            imglink={val.imglink}
                            productName={val.productName}
                            review={val.review}
                            customerName={val.customerName}
                            customerLocation={val.customerLocation}
                        />
                    </>
                )
            })}
            </Slider>
            </div>
            <div className="d-flex justify-content-center">
                <button>
                    Veiw All <i className="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
        
    </section>
        </>
    )
}
export default ClientReview;