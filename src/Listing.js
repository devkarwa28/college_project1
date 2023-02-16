import React from 'react'
import Header from './global/Header';
import Footer from './global/Footer';
import ExploreWideRange from './listing/ExploreWiderange';
import Listing_main from './listing/Listing-main';

const Listing = () =>{
    return(
        <>
        <Header/>
        <ExploreWideRange/>
        <Listing_main/>
        <Footer/>
        </>
    )
}
export default Listing;