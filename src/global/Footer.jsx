import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
            <footer className="">
        <div className="footer-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-1-1">
                            <a href=""><img src='' alt="Your Company's Logo"/></a>
                            <h1 className="jost font-16 color-767676"> 
                                Buy all solid sheesham wood furniture online in Jodhpur at best price only on (Your Company Name) store.
                            </h1>
                            <div>
                            <a href="" className="jost font-16 color-767676"> info@yourcompanyname.com</a> |
                            <a href="tel:7611077344" className="jost font-16 color-767676"> +91 7611077344</a>
                            </div>
                            <div className="social-media">
                                <a href=""><i className="fa-brands fa-square-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-square-instagram"></i></a>
                                
                            </div>

                        </div>
                    </div>
                    <div className="sm-none col-6 col-lg-2">
                        <div className="footer1-2">
                            <h2 className="font-20 fw-600 jost color-22222">Top Categories</h2>
                            <ul className="p-0">
                                <li><a href="listing.html">Sofas</a></li>
                                <li><a href="">Living</a></li>
                                <li><a href="">Bedroom</a></li>
                                <li><a href="">Dining & Kitchen</a></li>
                                <li><a href="">Storage</a></li>
                                <li><a href=""> Study</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-6 col-lg-3">
                        <div className="footer1-3">
                            <h2 className="font-20 fw-600 jost color-22222">Customer Services</h2>
                            <ul className="p-0">
                                <li><a href="">Sell On (Your Company Name)</a></li>
                                <li><a href="">Security & Privacy</a></li>
                                <li><a href="">Return & Refund</a></li>
                                <li><a href="">Payment Policy</a></li>
                                <li><a href="">Track Order</a></li>
                                <li><a href="">Type Of Wood</a></li>
                                <li><a href="">Customer Stories</a></li>
                                <li><a href="">Grievance Contact</a></li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-6 col-lg-3">
                        <div className="footer1-4">
                            <h2 className="font-20 fw-600 jost color-22222">Our Company</h2>
                            <ul className="p-0">
                                <li><Link to='/about'>About Us</Link> </li>
                                <li><a href="">Media</a></li>
                                <li><a href="">Custom Furniture</a></li>
                                <li><a href="">Coupon Partners</a></li>
                                <li><a href="">Furniture Exporters</a></li>
                                <li><a href="">Terms Of Use</a></li>
                                <li><a href="">Contact Us</a></li>                                
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="border"></div>
                <div className="loctaion d-flex">
                    <div className="location-box d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="jost color-767676 font-16 mb-0">
                        (Your Company Name), No.23, Devdutt Nagar, CHB, Jodhpur, 342006
                        </p>
                    </div>
                    <div className="location-box d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="jost color-767676 font-16 mb-0">
                            (Your Company Name), No.65,Viswakarma NAgar, Mata ka Than, Jodhpur, 342006
                        </p>
                    </div>
                    <div className="location-box d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="jost color-767676 font-16 mb-0">
                            (Your Company Name), No.86,Dadhich Nagar,9 mile, Jodhpur, 342006
                        </p>
                    </div>
                    
                    
                </div>
                <div className="loctaion d-flex">
                    <div className="location-box d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="jost color-767676 font-16 mb-0">
                            (Your Company Name), No.65, LRDE Layout, , Jodhpur, 560037
                        </p>
                    </div>
                    <div className="location-box d-flex">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="jost color-767676 font-16 mb-0">
                            (Your Company Name), No.65, LRDE Layout, Marathahalli, Jodhpur, 560037
                        </p>
                    </div>
                </div>
                <div className="border2"></div>
            </div>
        </div>
     </footer>
        </>
    )
}
export default Footer;