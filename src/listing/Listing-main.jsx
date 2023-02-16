import React from 'react'
import pData from '../global/P-data';
import List_card1 from './List-card1';

const Listing_main = () => {
    return (
        <>
            <section className="container-fluid listing-section2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="filter-options">
                                <div className="product-categories">
                                    <h1 className="jost color-22222 fw-600 font-16">Product Categories</h1>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Living Room</h6>
                                        </div>
                                        <button className="font-16 color-767676">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Bedroom</h6>
                                        </div>
                                        <button className="font-16 color-767676">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Dining Room</h6>
                                        </div>
                                        <button className="font-16 color-767676">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Sofa Sets</h6>
                                        </div>
                                        <button className="font-16 color-767676">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Storage</h6>
                                        </div>
                                        <button className="font-16 color-767676">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Study</h6>
                                        </div>
                                        <button className="font-16 color-767676">
                                            <i className="fa-solid fa-plus"></i>
                                        </button>
                                    </div>

                                </div>





                                <div className="range-selector">
                                    <h1 className="jost color-22222 fw-600 font-16">Filter by price</h1>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Under ₹ 20,000</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">₹ 20,000 to ₹ 30,000</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">₹ 20,000 to ₹ 30,000</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">₹ 40,000 to ₹ 60,000</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Over ₹ 60,000</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                </div>



                                <div className="select-finish">
                                    <h1 className="jost color-22222 fw-600 font-16">Filter by Finish</h1>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src="images/honey.png" alt="" />
                                            <h6 className="font-15 color-22222 jost">Honey Finish</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src="images/walnut.png" alt="" />
                                            <h6 className="font-15 color-22222 jost">Walnut Finish</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src="images/flowery.png" alt="" />
                                            <h6 className="font-15 color-22222 jost">Flowery Wenge Finish</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src="images/exotic.png" alt="" />
                                            <h6 className="font-15 color-22222 jost">Exotic Teak Finish</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src="images/flowery.png" alt="" />
                                            <h6 className="font-15 color-22222 jost">Flowery Wenge Frosty</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src="images/white.png" alt="" />
                                            <h6 className="font-15 color-22222 jost">White Finish</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <img src="images/dual.png" alt="" />
                                            <h6 className="font-15 color-22222 jost">Dual Finish</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                </div>

                                <div className="select-storage">
                                    <h1 className="jost color-22222 fw-600 font-16">Storage</h1>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">With Storage</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Without Storage</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Drawer Sorage</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">Box Storage</h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">
                                                Hydraulic Storage
                                            </h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                </div>

                                <div className="select-storage">
                                    <h1 className="jost color-22222 fw-600 font-16">Material</h1>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">
                                                Sheesham Wood
                                            </h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                </div>


                                <div className="select-storage">
                                    <h1 className="jost color-22222 fw-600 font-16">Discount</h1>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">
                                                10% and Above
                                            </h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">
                                                20% and Above
                                            </h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">
                                                30% and Above
                                            </h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">
                                                40% and Above
                                            </h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                    <div className="filter-row d-flex justify-content-between">
                                        <div className="d-flex">
                                            <input type="checkbox" />
                                            <label></label>
                                            <h6 className="font-15 color-22222 jost">
                                                50% and Above
                                            </h6>
                                        </div>
                                        <button className="font-16 color-22222 font-16 jost">
                                            (69)
                                        </button>
                                    </div>
                                </div>


                            </div>
                        </div>




                        <div className="col-lg-9">
                            <div className="sorting-bar d-flex justify-content-between">
                                <div className="d-flex">
                                    <button>
                                        <img src="images/2.svg" alt="" />
                                    </button>
                                    <button>
                                        <img src="images/3.svg" alt="" />
                                    </button>
                                    <button>
                                        <img src="images/4.svg" alt="" />
                                    </button>
                                    <h6 className="font-24 color-767676 jost fw-normal">
                                        |
                                    </h6>
                                    <h2 className="jost color-767676 font-16 fw-normal">Showing 1–20 of 62 results</h2>
                                </div>
                                <div>
                                    <span className="">Sort By:</span>
                                    <select name="" id="">
                                        <option value="">Default sorting</option>
                                        <option value="">Lower To Higher</option>
                                        <option value=""></option>
                                        <option value=""></option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                {pData.map(function List_card1_callbck(val) {
                                    return (
                                        <>
                                            <List_card1
                                                key={val.id}
                                                imglink={val.imglink}
                                                pName={val.pName}
                                                dPrice={val.dPrice}
                                                sPrice={val.sPrice}
                                            />
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Listing_main;