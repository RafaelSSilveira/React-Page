import React, { Component } from 'react';
import Button from './shared/Button';
import cloud from '../assets/img/cloud.svg';
import cloudWhite from '../assets/img/cloud-white.svg';
import cart from '../assets/img/cart.svg';
import cartWhite from '../assets/img/cart-white.svg';

export default class CardOffers extends Component {
    render() {
        let cardOfferVisibility = this.props.selected ? "visible" : "hidden";
        return (
            <div className="offer">
                <div className="card-offer" style={{ visibility: cardOfferVisibility }} >
                    Melhor custo-beneficio
                </div>
                <div className={"card card-offer-content " + (this.props.selected && " card-offer-content-selected")}>
                    <div className="icon">
                        <img src={this.props.selected ? cloudWhite : cloud} alt="logo" />
                    </div>
                    <h1 className="offer-title">{this.props.plan}</h1>
                    <div className="value">
                        <div className="row justify-content-md-center">
                            <p>R$</p>
                            <h1>{this.props.value}</h1>
                        </div>
                        <span>+ Taxa de adesão</span>
                    </div>
                    <p className="offer-description">{this.props.desc}</p>
                    <Button
                        text={'Comprar'}
                        customClass={'btn-default btn-card-offer'}
                        iconLeft={this.props.selected ? cart : cartWhite}
                    />
                </div>
            </div>
        )
    }
}
