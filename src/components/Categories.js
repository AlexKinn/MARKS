import React from "react";
import './Categories.css';

import sales from '../img/Categories/Sales.PNG';
import computers from '../img/Categories/Computers.PNG';
import homeAppliances from '../img/Categories/HomeAppliances.PNG';
import phones from '../img/Categories/Phones.PNG';
import tvs from '../img/Categories/TVs.PNG';
import kitchenware from '../img/Categories/Kitchenware.PNG';
import beauty from '../img/Categories/Beauty.PNG';
import gaming from '../img/Categories/Gaming.PNG';
import kitchen from '../img/Categories/Kitchen.PNG';

const Categories = () => {
    return (
      <div className="categories">
        
          <li className="category-item">
            <img src={sales}/>
            <p>Sales</p>
          </li>
          <li className="category-item">
            <img src={computers}/>
            <p>Computers</p>
          </li>
          <li className="category-item">
            <img src={homeAppliances}/>
            <p>Home Appliances</p>
          </li>
          <li className="category-item">
            <img src={phones}/>
            <p>Phones</p>
          </li>
          <li className="category-item">
            <img src={tvs}/>
            <p>TVs</p>
          </li>
          <li className="category-item">
            <img src={kitchenware}/>
            <p>Kitchenware</p>
          </li>
          <li className="category-item">
            <img src={beauty}/>
            <p>Beauty</p>
          </li>
          <li className="category-item">
            <img src={gaming}/>
            <p>Gaming</p>
          </li>
          <li className="category-item">
            <img src={kitchen}/>
            <p>Kitchen</p>
          </li>
      </div>
    )
}

export default Categories;