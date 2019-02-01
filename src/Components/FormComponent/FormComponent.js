import React, { Component } from 'react';
import axios from 'axios';
import './formComponent.css';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            price: 0,
            img: ""
        };
        this.createProduct = this.createProduct.bind(this);
    }

    handleTheChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state);
    };

    cancelProduct = (e) => {
        this.setState({
            name: "",
            price: 0,
            img: "",
        })
    };

    createProduct() {
        const { name, price, img } = this.state;
        let newProduct = {
            name,
            price,
            img
        }

        axios.post('/api/product', newProduct)
            .then(response => {
                // console.log(this.props);
                this.props.getInventory();
                this.cancelProduct();
                // this.setState({
                //     name: "",
                //     price: 0,
                //     img: ""
                // })
            });
    }

    render() {
        return (
            <div className="add-form">
                <div className="new-information">

                    <img src="" alt="" />

                    <h4>Image URL</h4>
                    <input name='img' onChange={(e) => this.handleTheChange(e)} />

                    <h4>Product Name</h4>
                    <input name='name' onChange={(e) => this.handleTheChange(e)} />

                    <h4>Price</h4>
                    <input name='price' onChange={(e) => this.handleTheChange(e)} />
                </div>

                <div className="form-buttons">
                    <button onClick={(e) => this.cancelProduct(e)}>Cancel</button>

                    <button onClick={this.createProduct}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}