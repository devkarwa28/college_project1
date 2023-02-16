import React from 'react'

const Billing_Payment = () =>{
    return(
        <>
            <h1 class="jost fw-600 color-22222 font-20 mb-3">Confirm Order</h1>
                    <div class="billing-box2">
                         <h2 class="color-22222 jost fw-500 font-16">Shipping Address</h2>
                         <h3 class="jost fw-500 font-15 color-22222">
                            Akib Raja
                         </h3>
                         <h4 class="font-14 fw-500 color-22222 jost"><b>Address:</b> Jodhpuri Furniture, No.65, LRDE Layout, Marathahalli, Bengaluru, 560037</h4>
                         <h4 class="font-14 fw-500 color-22222 jost"><b>Mobile:</b> 987 654 3210</h4>
                         <div class="border-apply3"></div>
                         <div class="check">
                            <input type="checkbox"/>
                            <label for="" class="color-22222 jost font-14 fw-normal">Billing address is same as the Shipping addres</label>
                         </div>
                    </div>
                    <div class="billing-box2">
                        <div>
                            <input type="checkbox"/>
                            <label for="" class="color-22222 jost font-20 fw-500">Buying For Your Business?</label>
                        </div>
                    </div>
        </>
    )
}

export default Billing_Payment;