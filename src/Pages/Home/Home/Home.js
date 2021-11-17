import React from 'react';
import Header from '../../Share/Header/Header';
import AppointmentBg from '../AppoinmentBg/AppoinmentBg';

import Banner from '../Banner/Banner';
import Services from '../Services/Services';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
           <AppointmentBg></AppointmentBg>
        </div>
    );
};

export default Home;