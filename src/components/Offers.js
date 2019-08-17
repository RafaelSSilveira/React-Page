import React, { Component } from 'react';
import CardOffers from './CardOffers';

export default class Offers extends Component {
    render() {
        return (
            <div className="row offers">
                <div className="container-fluid container-default">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 d-flex justify-content-end">
                            <CardOffers
                                plan={'Plan A'}
                                value={134}
                                desc={'Lorem ipsum dolor sit amet Consectetur adipiscing elit. Maecenas varius tortor nibh'}
                                selected={false}
                            />
                        </div>
                        <div className="col-lg-4 col-sm-12 d-flex justify-content-end">
                            <CardOffers
                                plan={'Plan A'}
                                value={134}
                                desc={'Lorem ipsum dolor sit amet Consectetur adipiscing elit. Maecenas varius tortor nibh'}
                                selected={false}
                            />
                        </div>
                        <div className="col-lg-4 col-sm-12 d-flex justify-content-end">
                            <CardOffers
                                plan={'Plan A'}
                                value={134}
                                desc={'Lorem ipsum dolor sit amet Consectetur adipiscing elit. Maecenas varius tortor nibh'}
                                selected={true}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}