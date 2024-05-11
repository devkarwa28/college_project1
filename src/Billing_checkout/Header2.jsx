import React from 'react'
import img1 from '../images/active-cart.svg'
import img2 from '../images/map-pin.svg'
import img3 from '../images/payment.svg'
import { Link } from 'react-router-dom'
import MyCart from './MyCart';

function Header2(){
    return(
        <>
            <div className="header-2 container-fluid">
        <div className="container2">
            <div className="d-flex">
                <Link to='/'><img src='' alt="Your Company's Logo" className="img1"/></Link>
                <div className="progress-bar-cart d-flex">
                    <div className="d-flex">
                        <img src={img1} alt=""/>
                        <Link to='/billing'><h2 className="inter font-16 fw-normal color-6">Cart</h2></Link>
                    </div>
                    <div className="border3"></div>
                    <div className="d-flex">
                        <img src={img2} alt=""/>
                        <Link to='/User_address'><h2 className="inter font-16 fw-normal color-767676">Address</h2></Link>
                    </div>
                    <div className="border3"></div>
                    <div className="d-flex">
                        <img src={img3} alt=""/>
                        <h2 className="inter font-16 fw-normal color-767676">Payments</h2>
                    </div>
                </div>
                <div className="ms-auto mt-2">
                    <h1 className="jost font-15 color-767676">Have Questions? We're here to help</h1>
                    <h3 className="jost font-18  text-end"><a href='tel:7611077344' className='color-22222' >Call : +91 76110 77344</a></h3>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}
export default Header2;