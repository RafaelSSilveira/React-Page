import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Offers from './components/Offers';
import Carousel from './components/Carousel';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
    return (
        <div className="App">
            <div className="bk-main"></div>
            <div className="container-fluid container-main">
                <Navbar></Navbar>
                <Intro></Intro>
                <Offers></Offers>
                <Carousel></Carousel>
            </div>
        </div>
    );
}

export default App;
