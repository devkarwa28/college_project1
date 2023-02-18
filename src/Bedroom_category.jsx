import React from 'react'
import Header from './global/Header';
import Footer from './global/Footer';
import DealsOfDay from './home/DealsOfDay';
import BedroomFurniture from './home/BedroomFurniture';
import Essentials from './global/Essentials';
import BestSelling from './global/BestSelling';
import ClientReview from './global/ClientReview';
import MetaContent from './global/MetaContent';
import Testimonial from './global/Testimonial';
import NewsLetter from './global/NewsLetter';
import Disclaimer from './global/Disclaimer'
import Bedroom_furniture from './bedroom_category/Bedroom_furniture';
import Bedroom_ranges from './bedroom_category/Bedroom_ranges';



const Bedroom_category = () => {
    return (
        <>
            <Header />
            <Bedroom_furniture />
            <Bedroom_ranges />
            <DealsOfDay />
            <BedroomFurniture />
            <Essentials />
            <BestSelling />
            <ClientReview />
            <MetaContent />
            <Testimonial />
            <NewsLetter />
            <Footer />
            <Disclaimer />
        </>
    )
}
export default Bedroom_category;