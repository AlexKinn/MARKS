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
            price = "£290.00"
            sale="Save 10%" 
            originalPrice="Was £322.00"/> 
          <Product link={switchIMG} name="Nintendo Switch Console - Neon with improved battery"
            price = "£249.99"
            sale="Save 5%"
            originalPrice="£265.00"/>
          <Product link={vacuumIMG} name="Henry Bagged Corded Cylinder Vacuum Cleaner - Blue"
            price = "£149.99"
            sale="Save 30%"
            originalPrice="£215.00"/>
          <Product link={bikeIMG} name="Pazzaz Diamond 24 inch Wheel Size Kids Mountain Bike"
            price = "£350.00"
            sale="Save 20%"
            originalPrice="£437.5"/>
          <Product link={mixerIMG} name="Breville VFM034 Flow Hand Mixer - Grey"
            price = "£19.99"
            sale="Save 80%"
            originalPrice="£99.95"/>
          <Product link={washingmachineIMG} name="Bush WMSAE712EW 7KG 1200 Spin Washing Machine - White"
            price = "£199.99"
            sale="Save 15%"
            originalPrice="£235.00"/>
          <Product link={laptopIMG} name="Acer Aspire 3 15.6in AMD Athlon 8GB 128GB Laptop - Silver"
            price = "£629.00"
            sale="Save 25%"
            originalPrice="£840.00"/>
          <Product link={keyboardIMG} name="Trust GXT 834 CALLAZ TKL Wired Gaming Keyboard - Black"
            price = "£49.00"
            sale="Save 30%"
            originalPrice="£70.00"/>        
        </div>
    )
}

export default Products;