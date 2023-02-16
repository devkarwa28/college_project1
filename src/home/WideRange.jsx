import React from "react";
import img1 from '../images/sofa.png';
import img2 from '../images/beds.png';
import img3 from '../images/dinning.png';
import img4 from "../images/chevron-right.svg"

function WideRange() {
    return (
        <>
            <section className="container-fluid section-2">
                <div className="container">
                    <h1>Explore Our Wide Range</h1>
                    <p className="">
                        Visit our shop to see amazing creations from our designers.
                    </p>
                    <div className="row m-b31">
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img1} alt="" />
                                </div>
                                <h6>Sofa Sets</h6>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img2} alt="" />
                                </div>
                                <h6>Beds</h6>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img3} alt="" />
                                </div>
                                <h6>Dinning Sets</h6>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img1} alt="" />
                                </div>
                                <h6>TV Units</h6>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img1} alt="" />
                                </div>
                                <h6>Book Shelves</h6>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img1} alt="" />
                                </div>
                                <h6>Study Tables</h6>
                            </div>
                        </div>

                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img1} alt="" />
                                </div>
                                <h6>Shoe Racks</h6>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img2} alt="" />
                                </div>
                                <h6>Wardrobes</h6>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img3} alt="" />
                                </div>
                                <h6>Sofa Cum Beds</h6>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img1} alt="" />
                                </div>
                                <h6>Chest Of Drawers</h6>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img2} alt="" />
                                </div>
                                <h6>Cabinets & Sideboards</h6>
                            </div>
                        </div>
                        <div className="col-4 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={img3} alt="" />
                                </div>
                                <h6>Book Shelves</h6>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="view-all-btn">
                        Explore All Categories <img src={img4} />
                        </button>
                    </div>
                    <div className="border sm-none"></div>
                </div>
            </section>
        </>
    )
}
export default WideRange;