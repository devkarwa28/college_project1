import React from 'react'
import Dinning_furniture from './Dinning_category/Dinning_furniture';
import Dinning_ranges from './Dinning_category/Dinning_ranges';
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



const Dinning_category = () =>{
    return(
        <>
        <Discount/>
        <Header/>
        <Dinning_furniture/>
        <Dinning_ranges/>
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
export default Dinning_category;