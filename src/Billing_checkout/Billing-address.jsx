import React from 'react'

const Billing_address = () =>{
    return(
        <>
        <h1 className="jost fw-600 color-22222 font-20">Delivery & Billing Address</h1>
                    <div className="login-signup d-flex justify-content-between">
                        <div>
                            <h2 className="jost fw-600 font-16 color-22222">Login or Signup</h2>
                            <h3 className="jost font-14 color-22222 fw-500 mb-0">Already have an account?</h3>
                        </div>
                        <button className="border-0 jost font-16 fw-500 text-uppercase">
                            Login
                        </button>
                    </div>
                    <div className="saved-address">
                        
                    </div>
                    <form action="" className="form">
                        <div className="d-flex">
                            <div className="w-50">
                                <div className="form-row">
                                    <label for="" className="jost font-14 color-22222 fw-600">Full Name</label>
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className="form-row">
                                    <label for="" className="jost font-14 color-22222 fw-600">Mobile No</label>
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className="form-row">
                                    <label for="" className="jost font-14 color-22222 fw-600">House No</label>
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className="form-row">
                                    <label for="" className="jost font-14 color-22222 fw-600">Street Address</label>
                                    <input type="text" placeholder="Name"/>
                                </div>

                            </div>
                            <div className="w-50">
                                <div className="form-row">
                                    <label for="" className="jost font-14 color-22222 fw-600">E-Mail</label>
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className="form-row">
                                    <label for="" className="jost font-14 color-22222 fw-600">Postal Code</label>
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className="form-row">
                                    <label for="" className="jost font-14 color-22222 fw-600">Society Name</label>
                                    <input type="text" placeholder="Name"/>
                                </div>
                                <div className="form-row">
                                    <label for="" className="jost font-14 color-22222 fw-600">City</label>
                                    <input type="text" placeholder="Name"/>
                                </div>
                            </div>
                        </div>
                        <div className="tc">
                            <div>
                                <input type="checkbox" name="" id=""/>
                                <label for="" className="font-16 jost color-22222">Billing address is same as the Shipping
                                    addres</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id=""/>
                                <label for="" className="font-16 jost color-22222">If you want create account with the same
                                    details ?</label>
                            </div>
                        </div>
                        <div className="form-btn">
                            <button className="submit border-0">
                                Save
                            </button>
                            <button className="cancel border-0 color-767676">
                                Cancel
                            </button>
                        </div>
                    </form>
                    <h1 className="jost fw-600 color-22222 font-20">Delivery & Billing Address</h1>

                    <form action="" className="form2">
                        <div className="d-flex">
                            <div className="w-50">
                                <div className="form-row">
                                    <label for="" className="jost font-14 color-22222 fw-600">GST Number</label>
                                    <input type="text" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="w-50">
                                <div className="form-row">
                                    <label for="" className="jost font-14 color-22222 fw-600">Company Name</label>
                                    <input type="text" placeholder="Name"/>
                                </div>
                            </div>
                        </div>
                        <textarea name="" id="" placeholder="Address"></textarea>
                        <button className="submit border-0">
                            Save
                        </button>
                    </form>
        </>
    )
}
export default Billing_address;