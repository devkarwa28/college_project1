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
                            Banar
                        </h3>
                        <p className="jost font-15 fw-normal color-767676">
                            No.-190,Karthik nagar,Banar Road,Jodhpur  - 342006 
                            <br/>
                            ( Near Gattani Hospital ) 
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
                            Basni
                        </h3>
                        <p className="jost font-15 fw-normal color-767676">
                            No.-35,Sector-1, Basni , Jodhpur - 342001
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
                                Pal Road
                        </h3>
                            <p className="jost font-15 fw-normal color-767676">
                                No.-38,Mahadev Nagar,DPS circle,Jodhpur - 342006
                                <br/>
                                ( Near Kasturi Orchid ) 
                            </p>
                            <a href="">
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
                            Mata Ka Than
                        </h3>
                        <p className="jost font-15 fw-normal color-767676">
                            No.-15,Karthik nagar,Mata Ka Than,Jodhpur - 342006
                            <br/>
                            ( Near Rainbow Hospital ) 
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
                            B.J.S
                        </h3>
                            <p className="jost font-15 fw-normal color-767676">
                                No.-122,RTO Office Backside,BJS,Jodhpur - 342006
                                <br/>
                                ( Near RTO Office Banar Road ) 
                            </p>
                            <a href="">
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
                            Boranada
                        </h3>
                            <p className="jost font-15 fw-normal color-767676">
                                No.-65,Phase-3,Boranada,Jodhpur - 342006
                                <br/>
                                ( Near Rainbow Hospital After Bagmane Tech Park on Outer Ring Road ) 
                            </p>
                            <a href="">
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