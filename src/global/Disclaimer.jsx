import React from "react";
import img1 from '../images/upi.svg'
import img2 from "../images/chevron-right.svg"

function Disclaimer(){
    return(
        <>
            <div class="disclaimer container-fluid">
        <div class="container2 d-lg-flex justify-content-between mb-4">

            <h1 class="color-767676 fw-normal jost font-16">Copyright 2022 ©  Whimsical Woods - All Rights Reserved.</h1>
            <img src={img1} alt="" className="sm-none"/>
            <div className="d-flex d-lg-none justify-content-center">
                            <button className="view-all-btn">
                            Show More <img src={img2} />
                            </button>
            </div>
        </div>
        {/* <div class="ddkr">
            Designed & Developed By DDKR
        </div> */}
     </div>
        </>
    )
}
export default Disclaimer;