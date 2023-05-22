import React from "react";
import './ProductGrid.css';
import Product from "./Product";
import headsetIMG from '../img/Products/headset.png'
import switchIMG from '../img/Products/switch.png'
import vacuumIMG from '../img/Products/vacuum.png'
import bikeIMG from '../img/Products/bike.png'
import mixerIMG from '../img/Products/mixer.png'
import washingmachineIMG from '../img/Products/washingmachine.png'
import laptopIMG from '../img/Products/laptop.png'
import keyboardIMG from '../img/Products/keyboard.png'

const Products = () => {
    return(
        <div className="product-list">
          <Product link={headsetIMG} name="Sony WH-1000XM4 Over-Ear Wireless NC Headphones - Black"
          description = "Nice switch,"/> 
          <Product link={switchIMG} name="Nintendo Switch Console - Neon with improved battery"
          description = "Nice switch,"/>
          <Product link={vacuumIMG} name="Henry Bagged Corded Cylinder Vacuum Cleaner - Blue"
          description = "Nice switch,"/>
          <Product link={bikeIMG} name="Pazzaz Diamond 24 inch Wheel Size Kids Mountain Bike"
          description = ""/>
          <Product link={mixerIMG} name="Breville VFM034 Flow Hand Mixer - Grey"
          description = ""/>
          <Product link={washingmachineIMG} name="Bush WMSAE712EW 7KG 1200 Spin Washing Machine - White"
          description = ""/>
          <Product link={laptopIMG} name="Acer Aspire 3 15.6in AMD Athlon 8GB 128GB Laptop - Silver"
          description = ""/>
          <Product link={keyboardIMG} name="Trust GXT 834 CALLAZ TKL Wired Gaming Keyboard - Black"
          description = ""/>        
        </div>
    )
}

export default Products;