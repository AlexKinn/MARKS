import React from "react";
import './FrontPage.css';
import Categories from "./Categories";
import Products from "./ProductGrid";
import SaleBanner from '../img/SaleBanner.jpg';

const FrontPage = () => {
  return (
    <div className="FrontPage">
      <div>
      <Categories />
      <div className="Banner">
        <img src={SaleBanner}></img>
      </div>
      <section>
        <div className="">
          <h2>Featured Products</h2>
          <button></button>
        </div>
        
        <Products />
      </section>
      <section>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur finibus mauris, vitae varius purus sollicitudin sit amet.</p>
      </section>
      <footer>
        <p>&copy; 2023 MARKS. All rights reserved.</p>
      </footer>
      </div>
    </div>
  );
};

export default FrontPage;