import React from 'react'

const Client_Card = (props) => {
    return (
        <>
            <div>
                <div className='clilet-review'>
                    <img src={props.imglink} alt="" />
                    <h3 className="jost fw-600 color-22222">{props.productName}</h3>
                    <p className="font-15 jost color-767676">
                        {props.review}
                    </p>
                    <div className="customer-name d-flex justify-content-between">
                        <div>
                            <h4 className="jost font-16 fw-600 color-22222 mb-0">{props.customerName}</h4>
                            <h5 className="jost font-14 color-767676 fw-normal">{props.customerLocation}</h5>
                        </div>

                        <div className="rating font-14 fw-500 jost">
                            4.5 <i className="fa-solid fa-star"></i>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Client_Card;