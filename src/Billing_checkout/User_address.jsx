import React from 'react'
import Header2 from './Header2';
import PriceDetails from './PriceDetails'
import Billing_address from './Billing-address'
import Footer2 from './Footer2';
import '../css/index.css';


function User_address(){
    return(
        <>
        <Header2/>
        <section className="Cart customer-form">
                <div className="container2">
                    <div className="row">
                        <div className="col-lg-8">
                        <Billing_address/>
                        </div>
                        <div className='col-lg-4'>
                            <PriceDetails />
                        </div>
                    </div>
                </div>
            </section>
        <Footer2/>
        </>
    )
}
export default User_address;