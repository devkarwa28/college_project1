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
import Sofa_furniture from './sofa_category/Sofa_furniture';
import Sofa_ranges from './sofa_category/Sofa_ranges';

const Sofa_category = () =>{
    return(
        <>
        <Discount/>
        <Header/>
        <Sofa_furniture/>
        <Sofa_ranges/>
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
export default Sofa_category;