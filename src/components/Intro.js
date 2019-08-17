import React, { Component } from 'react';
import Input from './shared/Input';
import Button from './shared/Button';
import letter from '../assets/img/letter-black.svg';
import phone from '../assets/img/phone.svg';

export default class Intro extends Component {
    render() {
        return (
            <div className="row intro">
                <div className="intro-text col-lg-8 col-md-6 col-sm-12">
                    <h1>Uma nova forma de fazer negócios.</h1>
                    <p className="col-8">A Superlógica oferece um sistema completo para sua empresa escalar na era digital.</p>
                    <Button
                        text={'Saiba Mais'}
                        customClass={'btn-default btn-intro'}
                    />
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-end">
                    <div className="card">
                        <span className="text-form">Preencha o formulário e receba um kit exclusivo</span>
                        <Input 
                            icon={letter}
                            placeholder={'Nome'}/>
                        <Input 
                            icon={letter}
                            placeholder={'E-mail'}/>
                        <Input 
                            icon={phone}
                            placeholder={'Telefone'}/>
                        <Button
                            text={'Enviar'}
                            customClass={'btn btn-primary btn-lg btn-block'}
                        />
                    </div>
                </div>
            </div>
        )
    }
}