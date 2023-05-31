import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Content from './Content';

const FrontEndLayout = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Content/>
            <Footer />
        </div>
    );
}

export default FrontEndLayout;