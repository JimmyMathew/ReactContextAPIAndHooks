import React, { Component } from 'react';
import { Cars } from './Cars';
export class ProductList extends Component {


    render() {
        return (
            <div>
                <h2>Product list:</h2>
                <Cars />
            </div>

        );
    }
}
