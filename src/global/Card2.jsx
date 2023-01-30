import React from 'react'

const Card2 = (props) =>{
    return(
        <>
            <div>
                                <div className="card2">
                                    <div className="sec6-bg1">
                                    <img src={props.imglink}/>
                                    </div>
                                    <h3 className="font-16 jost color-22222">{props.productName}</h3>
                                    <span className="jost font-15 color-767676">Starting from {props.startingPrice}</span>

                                </div>
                            </div>
        </>
    )
}
export default Card2;