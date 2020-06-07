import React, { Component } from 'react';
import MyContext  from './MyContext.js';

export class MyProvider extends Component {
    
    constructor() {
        super();
        this.state = {
            cars: "Benz"
        };
    }
    
    render() {
        return (
            <MyContext.Provider value={this.state.cars}>
                {this.props.children}
            </MyContext.Provider>
            );
    }
}