import React from 'react'

const List_card1 = (props) =>{
    return(
        <>
            <div className='col-lg-4 cols-shi'>
            <div className="list-box">
                <div className='list-box-img'>
                <img src={props.imglink} alt='loading' />
                <div className="d-flex justify-content-between ">
                                        <div className="discount-tag text-center jost font-14">
                                            33% off
                                        </div>
                                        <button className="wishlist-btn">
                                            
                                        </button>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button className="add-to-cart">
                                            <i className="fa-solid fa-cart-shopping"></i>
                                            Add to Cart
                                        </button>
                                    </div>
                </div>
                <h5 className="font-16 jost fw-normal">{props.pName}</h5>
                <b className="font-16 jost">₹{props.dPrice}</b> <strike className="font-14 color-767676 jost">₹{props.sPrice}</strike>
            </div>
            </div>
        </>
    )
}
export default List_card1;