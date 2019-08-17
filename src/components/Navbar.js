import React, { Component } from 'react';
import logo from '../assets/img/superlogica.svg';
import icon from '../assets/img/arrow-right-small.svg';
import Button from './shared/Button';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="col-4">
                    <img src={logo} alt="logo" />
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse row justify-content-between" id="navbarNav">
                    <ul className="navbar-nav col-md-6 d-flex align-items-center">
                        <li>Home</li>
                        <li>Serviços</li>
                        <li>Blog</li>
                        <li>Eventos</li>                        
                    </ul>
                    <ul className="navbar-nav col-md-6 d-flex justify-content-end align-items-center">
                        <li>Entrar</li>
                        <li><Button
                            text={'Experimente Gratis'}
                            customClass={'btn-outline-light btn-navbar'}
                            iconRight={icon}
                        /></li>                   
                    </ul>
                </div>
            </nav>
        )
    }
}
