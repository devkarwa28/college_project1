import React from 'react'
import BestSelling from './global/BestSelling';
import ClientReview from './global/ClientReview';
import Disclaimer from './global/Disclaimer';
import Discount from './global/Discount';
import Essentials from './global/Essentials';
import Footer from './global/Footer';
import Header from './global/Header';
import MetaContent from './global/MetaContent';
import NewsLetter from './global/NewsLetter';
import Testimonial from './global/Testimonial';
import DealsOfDay from './home/DealsOfDay';
import Storage_furniture from './storage_category/Storage_furniture'
import Storage_ranges from './storage_category/Storage_ranges'

const Storage_category = () =>{
    return(
        <>
        <Discount/>
        <Header/>
        <Storage_furniture/>
        <Storage_ranges/>
        <DealsOfDay/>
        <Essentials/>
        <BestSelling/>
        <ClientReview/>
        <MetaContent/>
        <Testimonial/>
        <NewsLetter/>
        <Footer/>
        <Disclaimer/>
        </>
    )
}
export default Storage_category;