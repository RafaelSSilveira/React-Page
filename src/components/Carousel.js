import React, { Component } from 'react';
import img1 from '../assets/img/img1.png';
import Button from './shared/Button';
import arrowLeft from '../assets/img/arrow-left.svg';
import arrowRight from '../assets/img/arrow-right.svg';

export default class Carousel extends Component {
    render() {
        return (
            <div className="row">
                <div className="container-fluid container-default">
                    <div id="carouselCtrl" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src={img1} alt="Primeiro Slide"></img>
                                <div className="carousel-caption">
                                    <h2>Bom teste.</h2>
                                    <Button
                                        text={'Volta para o topo'}
                                        customClass={'btn-default btn-carousel'}
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src={img1} alt="Primeiro Slide"></img>
                                <div className="carousel-caption">
                                    <h2>Bom teste.</h2>
                                    <Button
                                        text={'Volta para o topo'}
                                        customClass={'btn-default btn-carousel'}
                                    />
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselCtrl" role="button" data-slide="prev">
                            <span aria-hidden="true">
                                <img className="d-block w-100" src={arrowLeft} alt="Img 1"></img>
                            </span>
                        </a>
                        <a className="carousel-control-next" href="#carouselCtrl" role="button" data-slide="next">
                            <span aria-hidden="true">
                                <img className="d-block w-100" src={arrowRight} alt="Img 1"></img>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
