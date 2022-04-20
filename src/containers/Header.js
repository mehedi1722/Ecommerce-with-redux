import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary   menu">
      <div className="ui container">
        <Link to="/" className="active item">
          Home
        </Link>
        <Link to="/about" className="item">
          About
        </Link>
        <Link to="/products" className="item">
          Products
        </Link>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <Link to="/logout" className="ui item">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
