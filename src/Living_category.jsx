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
import Living_furniture from './living_category/Living_furniture';
import Living_ranges from './living_category/Living_ranges';


const Living_category = () =>{
    return(
        <>
        <Discount/>
        <Header/>
        <Living_furniture/>
        <Living_ranges/>
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
export default Living_category;