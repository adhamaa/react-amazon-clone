import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon logo"
        />
      </Link>

      {/* ------------------------------------------------------Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        {/* ----------------------------------------------------Auth link */}
        <Link to="/login" className="header__link ">
          <div onClick={handleAuth} className="header__option signIn">
            <span className="header__optionLineOne">
              Hello, {!user ? "Guest" : user.email}
              {/* user?.email || "Guest" */}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/* ----------------------------------------------------Returns order link */}
        <Link to="/" className="header__link ">
          <div className="header__option returnOrder">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* ----------------------------------------------------Prime link */}
        <Link to="/" className="header__link ">
          <div className="header__option yourPrime">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* ----------------------------------------------------Basket link */}
        <Link to="/checkout" className="header__link ">
          <div className="header__optionBasket">
            {/* Basket icon with number */}
            <ShoppingBasketIcon />
            {/* number of items in the basket*/}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
