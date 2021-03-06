import React from "react";
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>

      <div className="searchBar">
        <div className="searchIconContainer">
          <img src={searchIcon} alt="" />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>
    </div>
  );
}

export default Header;
