import React, {Component} from 'react';
import Product from '../Product/Product.jsx'

export default class Dashboard extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                Dashboard
                <Product />
            </div>
        )
    }
}