import React from "react";

const Product = (props) => {
    return(
        <a href="">
        <div className="product">
            <img src={props.link} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href="/products/product1">View Details</a>
        </div>
        </a>
    )
}

export default Product;