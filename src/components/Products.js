import React from "react";
import './Products.css';

const Products = () => {
    return(
        <div className="product-list">
          <div className="product">
            <img src="product1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Description of Product 1</p>
            {/* <a href="/products/product1">View Details</a> */}
          </div>
          <div className="product">
            <img src="product2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Description of Product 2</p>
            {/* <a href="/products/product2">View Details</a> */}
          </div>
          <div className="product">
            <img src="product3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>Description of Product 3</p>
            {/* <a href="/products/product3">View Details</a> */}
          </div>
        </div>
    )
}

export default Products;