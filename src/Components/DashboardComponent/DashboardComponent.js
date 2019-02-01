import React, { Component } from 'react';
import Product from '../ProductComponent/ProductComponent';
import axios from 'axios';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        };

        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id) {
        axios.delete(`/api/product/${id}`).then(response => {
            this.props.getInventory();
        })
    }


    render() {
        // console.log(this.props.products);
        const { products } = this.props;
        const mappedProducts = products.map((product, index) => {
            return <div key={index} >
                <Product product={product} deleteProduct={this.deleteProduct} />
            </div>
        })
        return (
            <div>
                <h1>Dashboard!</h1>
                {mappedProducts}
            </div>
        )
    }
}