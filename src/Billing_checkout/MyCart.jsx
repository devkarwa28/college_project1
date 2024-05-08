import React from 'react'
import cart_detail from './Cart-detail';
import Cart_Item from './Cart-Item'

const MyCart = () =>{
    return(
        <>
            <div className="d-flex justify-content-between">
                                <h1 className="jost font-20 fw-600 color-22222">My Cart</h1>
                                <h1 className="jost font-20 fw-600 color-22222">Step 1/3</h1>
                                <div className="d-lg-flex sm-none">
                                    <h2 className="jost fw-600 color-22222 font-16">Delivery</h2>
                                    <div className="pincode">
                                        <input type="text" placeholder="Pincode"/>
                                        <button type="submit" className="jost font-14 fw-500 color-6">
                                            APPLY
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="saved">
                                <h1 className="jost font-15 fw-500 text-center">Congratulations! You Saved 14,500 On This Order</h1>
                            </div>

                            <div className="items">
                            {cart_detail.map(function pCart(val){
                                return(
                                    <>
                                        <Cart_Item
                                        key={val.id}
                                        imglink={val.imglink}
                                        productName={val.productName}
                                        bedSize={val.bedSize}
                                        finishName={val.finishName}
                                        productPrice={val.productPrice}
                                        discountPrice={val.discountPrice}
                                        savingPrice={val.savingPrice}
                                        />
                                    </>
                                )
                            })}
                            </div>
        </>
    )
}
export default MyCart;