import React from 'react';
import payment from '../images/upi.svg'

function Footer2(){
    return(
        <>
        <div className="disclaimer2 container-fluid">
        <div className="container2 d-flex justify-content-between">

            <h1 className="color-767676 fw-normal jost font-16">Copyright 2024 © Your Company Name - All Rights Reserved.</h1>
            <img src={payment} alt=""/>
        </div>
     </div>
        </>
    )
}
export default Footer2;