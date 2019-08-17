import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <img src={this.props.icon}></img>
                    </span>
                </div>
                <input type="text" className="form-control" placeholder={this.props.placeholder}></input>
            </div>
        )
    }
}

