import React from "react";
import './Product.css';

const Product = (props) => {
    return(
        <a href="">
            <div className="product">
                <img src={props.link} alt={props.name} />
                <h3>{props.name}</h3>
                <h4>{props.price}</h4>
                <div className="discount">
                    <p className="sale">{props.sale}</p>
                    <p className="originalPrice">{props.originalPrice}</p>
                </div>
                <button>Shop Now</button>
            </div>
        </a>
    )
}

export default Product;