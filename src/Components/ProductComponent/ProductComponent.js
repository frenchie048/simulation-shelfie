import React from 'react';
import './productComponent.css';


function Product(props) {
    const { id, name, price, img } = props.product;

    return (
        <div className="product-card">
            <div className="product-pictures">
                {/* default image if none exists */}
                <img src={img} alt="product!" />
            </div>
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p className="product-price">{price}</p>
            </div>
            <div className="product-buttons">
                <button className="delete-button"
                // onClick={this.deleteProduct(id)}
                >
                    Delete
                </button>
                <button className="edit-button">
                    Edit
                </button>
            </div>
        </div>
    )
}
export default Product;