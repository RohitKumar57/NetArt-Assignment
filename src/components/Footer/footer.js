import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className='footer-div'>
        <footer className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <FaPhoneSquareAlt size={22}/>Toll Free 1800 200 1234
            </div>
            <div className="footer-section">
              <p>
                <FaFacebook size={22}/>
                www.facebook.com/cripumps
              </p>
            </div>
            <div className="footer-section">
              <p>
                <BsGlobe2 size={22}/> www.crigroups.com
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer
