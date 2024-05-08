import React from "react";
import sofa_set from '../images/sofa_set.jpg';
import beds3 from '../images/beds3.jpg';
import dinning_set from '../images/dinning_set.jpg';
import tv_units from '../images/tv_units.jpg';
import dressing_table from '../images/dressing_table.jpg';
import study_table from '../images/study_table.jpg';
import shoe_rack from '../images/shoe_rack.jpg';
import console_table from '../images/console_table.jpg';
import sofa_cum_bed from '../images/sofa_cum_bed.jpg';
import chest_drawer from '../images/chest_drawer.jpg';
import sideboards from '../images/sideboards.jpg';
import bar_cabinets from '../images/bar_cabinets.jpg';
import right from '../images/chevron-right.svg';
import { Link } from "react-router-dom";

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
                        <div className="col-6 col-lg-2">
                            <Link to='/list'>
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={sofa_set} alt="" />
                                </div>
                                <h6>Sofa Sets</h6>
                            </div>
                            </Link>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={beds3} alt="" />
                                </div>
                                <h6>Beds</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={dinning_set} alt="" />
                                </div>
                                <h6>Dinning Sets</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={tv_units} alt="" />
                                </div>
                                <h6>TV Units</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={dressing_table} alt="" />
                                </div>
                                <h6>Book Shelves</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={study_table} alt="" />
                                </div>
                                <h6>Study Tables</h6>
                            </div>
                        </div>

                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={shoe_rack} alt="" />
                                </div>
                                <h6>Shoe Racks</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={console_table} alt="" />
                                </div>
                                <h6>Wardrobes</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={sofa_cum_bed} alt="" />
                                </div>
                                <h6>Sofa Cum Beds</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={chest_drawer} alt="" />
                                </div>
                                <h6>Chest Of Drawers</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={sideboards} alt="" />
                                </div>
                                <h6>Cabinets & Sideboards</h6>
                            </div>
                        </div>
                        <div className="col-6 col-lg-2">
                            <div className="wide-range-box">
                                <div className="cat-box">
                                    <img src={bar_cabinets} alt="" />
                                </div>
                                <h6>Book Shelves</h6>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="view-all-btn">
                        Explore All Categories <img src={right} />
                        </button>
                    </div>
                    <div className="border sm-none"></div>
                </div>
            </section>
        </>
    )
}
export default WideRange;