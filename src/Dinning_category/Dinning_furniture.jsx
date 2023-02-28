import React from 'react'
import Slider from 'react-slick';

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 246 , opacity: 0.5 }}
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
            style={{ ...style, display: "flex", background: "white", height: 36, width: 27, placeItems: "center", top: 246, right: 0 , opacity: 0.5 }}
            onClick={onClick}
        >
            <i class="fa-solid fa-angle-right text-center font-16 ms-2"></i>
        </div>
    );
}

const Dinning_furniture = () =>{
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }
    return(
        <div className='bedroom-category'>
         <div className='container2'>
         <h1 className='font-36 fw-600 jost'>Dinning Furniture</h1>
        <h2 className='font-16 jost fw-normal'>Create the Dinning room of your dreams with the perfect Furniture</h2>
        <Slider {...settings}>

        <div>
            <img src='./images/bedroom-slide1.jpg'/>
        </div>

        <div>
             <img src='./images/bedroom-slide1.jpg'/>
        </div>
        
        </Slider>
         </div>
        </div>
    )
}

export default Dinning_furniture;
