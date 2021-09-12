import React from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Content />
            <Footer positionFixed={true}/>
        </div>
    );
};

export default Home;