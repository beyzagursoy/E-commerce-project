import React from 'react';
import { homeData } from '../mocks/data';
import contactarrow from '../assets/images/contact-arrow.png'; 

import ContactHero from '../components/ContactHero';
import ContactOfficeCards from '../components/ContactOfficeCards';
import ContactCTA from '../components/ContactCTA';

const ContactPage = () => {
    const contactImg = homeData.contactImg || homeData.shop.categories[1].img;
    const offices = homeData.contactOffices;

    return (
        <div className="w-full">
            <ContactHero contactImg={contactImg} offices={offices} />
            <ContactOfficeCards />
            <ContactCTA arrowImg={contactarrow} />
        </div>
    );
};

export default ContactPage;