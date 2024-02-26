import React from "react";
import './header.css'
import logo from "../../utils/mylogo.png";

const Header = () => {
  return (
    <>
        <div className="header">
          <div>
            <img
              className="header-img"
              src={logo}
              alt="Logo for My Company"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
    </>
  );
};

export default Header;
