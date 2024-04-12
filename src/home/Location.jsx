import React from "react";
import Slider from "react-slick";
import img1 from "../images/chevron-right.svg"

function Location(){
    const settings = {
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };
    return(
        <>
        <section className="section-10 container-fluid">
        <div className="container">
            <h1>#Whimsical Woods</h1>
            <h2 >Offline Furniture Experience Store</h2>

            <div className="row">
            <Slider {...settings}>
          <div>
          <div className="sec10-box">
                        <div className="bg-sec10-1">

                        </div>
                        <h3 className="jost font-24 fw-500 color-22222">
                            Chokha
                        </h3>
                        <p className="jost font-15 fw-normal color-767676">
                            No.-65,Near Hariyali Hotel,Karthik nagar, Jodhpur  - 342006 
                            <br/>
                            ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                        </p>
                        <button className="btn-1 jost font-15 fw-500">
                            Get Directions<i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
          </div>
          <div>
          <div className="sec10-box">
                        <div className="bg-sec10-2">

                        </div>
                        <h3 className="jost font-24 fw-500 color-22222">
                            BASNI
                        </h3>
                        <p className="jost font-15 fw-normal color-767676">
                            No.-35,Sector-1, Basni , Jodhpur - 342001 ( Near Sony World Si , After Ejipura signal on 100 feet inner ring road towards sony signal )
                        </p>
                        <button className="btn-1 jost font-15 fw-500">
                            Get Directions<i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
          </div>
          <div>
          <div className="sec10-box">
                            <div className="bg-sec10-3">
    
                            </div>
                            <h3 className="jost font-24 fw-500 color-22222">
                                Marathalli
                        </h3>
                            <p className="jost font-15 fw-normal color-767676">
                                No.-65, LRDE Layout, Karthik nagar, O.R.R Bangalore - 560037 
                                <br/>
                                ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                            </p>
                            <a href="https://g.page/jodhpuri-furniture-bangalore?share">
                            <button className="btn-1 jost font-15 fw-500">
                                Get Directions<i className="fa-solid fa-angle-right"></i>
                            </button>
                        </a>
                        </div>
          </div>
          <div>
          <div className="sec10-box">
                        <div className="bg-sec10-1">

                        </div>
                        <h3 className="jost font-24 fw-500 color-22222">
                            Marathalli
                        </h3>
                        <p className="jost font-15 fw-normal color-767676">
                            No.-65, LRDE Layout, Karthik nagar, O.R.R Bangalore - 560037 
                            <br/>
                            ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                        </p>
                        <button className="btn-1 jost font-15 fw-500">
                            Get Directions<i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
          </div>
          <div>
          <div className="sec10-box">
                            <div className="bg-sec10-3">
    
                            </div>
                            <h3 className="jost font-24 fw-500 color-22222">
                                Marathalli
                        </h3>
                            <p className="jost font-15 fw-normal color-767676">
                                No.-65, LRDE Layout, Karthik nagar, O.R.R Bangalore - 560037 
                                <br/>
                                ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                            </p>
                            <a href="https://g.page/jodhpuri-furniture-bangalore?share">
                            <button className="btn-1 jost font-15 fw-500">
                                Get Directions<i className="fa-solid fa-angle-right"></i>
                            </button>
                        </a>
                        </div>
          </div>
          <div>
          <div className="sec10-box">
                            <div className="bg-sec10-3">
    
                            </div>
                            <h3 className="jost font-24 fw-500 color-22222">
                                Marathalli
                        </h3>
                            <p className="jost font-15 fw-normal color-767676">
                                No.-65, LRDE Layout, Karthik nagar, O.R.R Bangalore - 560037 
                                <br/>
                                ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                            </p>
                            <a href="https://g.page/jodhpuri-furniture-bangalore?share">
                            <button className="btn-1 jost font-15 fw-500">
                                Get Directions<i className="fa-solid fa-angle-right"></i>
                            </button>
                        </a>
                        </div>
          </div>
        </Slider>
        <div className="d-flex justify-content-center">
                            <button className="view-all-btn">
                            Find More Store<img src={img1} />
                            </button>
                        </div>


                
                
                
            </div>
            <div className="border sm-none"></div>
        </div>

    </section>

        </>
    )
}
export default Location;