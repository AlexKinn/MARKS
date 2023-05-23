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
        <section classname="ProductSection">
          <div className="ProductHeader">
            <h2>Top selling products</h2>
            <button>View all top selling products</button>
          </div>
          <Products />
        </section>
        <section>
          <h2>About Us</h2>
          <p>Welcome to MARKS, We are a technology company based in London who strive to bring competitive prices to the market to ensure customers are getting the best deal possible! We take pride in providing the industry with a user-centered approach to our store, ensuring our users have the best experience shopping with us.
          </p>
        </section>
        <footer>
          <p>&copy; 2023 MARKS. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default FrontPage;