import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
            <button className={'btn ' + (this.props.customClass && this.props.customClass)} type="submit">
                {
                    this.props.iconLeft && <img className="bnt-icon" src={this.props.iconLeft} alt="logo" />
                }
                {this.props.text}
                {
                    this.props.iconRight && <img className="bnt-icon" src={this.props.iconRight} alt="logo" />
                }
            </button>
        )
    }
}