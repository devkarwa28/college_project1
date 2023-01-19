import React, { useState } from 'react'
import img2 from '../images/verified.svg'

const Cart_Item = (props) => {
    const [count , Setcount] = useState(0);
    const IncreaseNumber = () =>{
        Setcount(count + 1)
    }
    const DecreaseNumber = () =>{
        Setcount(count - 1)
    }
    return (
        <>
            <div className="cart-item d-flex">
                <img src={props.imglink} alt="" />

                <div className="cart-item-content">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h1 className="font-16 jost fw-600 color-22222 mb-0">{props.productName}</h1>
                            <h2 className="font-13 color-767676 jost fw-normal">Bed Size: {props.bedSize} | Finish: {props.finishName}</h2>
                        </div>
                        <div className="">
                            <h3 className="font-14 fw-normal jost"><i className="fa-regular fa-heart"></i> Save For
                                Later</h3>
                        </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div className="cart-rate">
                            <strike className="font-14 color-767676 fw-500 jost">₹{props.productPrice}</strike>
                            <h4 className="jost font-18 color-22222 fw-600">₹{props.discountPrice}</h4>
                        </div>
                        <div className="d-flex savings">
                            <img src={img2} alt="" />
                            <div>
                                <h5 className="color-6 jost fw-600 font-14 mb-0">Save {props.savingPrice}</h5>
                                <p className="mb-0 font-13 color-767676 jost">After applying coupon "DIWALI20"</p>
                            </div>
                        </div>
                        <div className="qty">
                            <button className="qty-btn-minus" onClick={DecreaseNumber} type="button"><i
                                className="fa fa-minus"></i></button>
                            <h6 className='input-qty'>{count}</h6>
                            <button className="qty-btn-plus" onClick={IncreaseNumber} type="button"><i
                                className="fa fa-plus"></i></button>
                        </div>
                        <button className="delete">
                            <i className="fa-regular fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Cart_Item;