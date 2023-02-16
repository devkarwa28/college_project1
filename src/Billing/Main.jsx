import React from 'react'
import Billing_address from './Billing-address';
import Billing_Payment from './Billing-Payment';
import MyCart from './MyCart';
import PriceDetails from './PriceDetails'

function Main() {
    return (
        <>
            <section className="Cart customer-form">
                <div className="container2">
                    <div className="row">
                        <div className="col-lg-8">
                        <MyCart/>
                        <Billing_address/>
                        <Billing_Payment/>
                        </div>
                        <div className='col-lg-4'>
                            <PriceDetails />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Main;