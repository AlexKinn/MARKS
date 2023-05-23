import React, { useEffect, useState } from "react";
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "./img/Logo.PNG";
import SearchBar from "./components/SearchBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header>
        <nav className="bar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="HamburgerMenu">
                <div>
                    {!menuOpen ? (
                        <GiHamburgerMenu onClick={menuToggleHandler} />
                    ) : (
                        <AiOutlineClose onClick={menuToggleHandler} />
                    )}
                </div>
                <p>Categories</p>
            </div>
            <SearchBar />
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
        
    </header>
  );
};

export default Navbar;