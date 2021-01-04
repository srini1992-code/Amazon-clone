import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      {/* get to know this */}
      <div className="footer__containerOne">
        <h4>Get To Know Us</h4>
        <div className="footer__subContainerOne">
          <p>careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Sustainability</p>
          <p>Press Center</p>
          <p>Investor Relations</p>
          <p>Amazon Devices</p>
          <p>Amazon Tours</p>
        </div>
      </div>
      <div className="footer__conatinerTwo">
        <h4>Make Money With Us</h4>
        <div className="footer__subContainerTwo">
          <p>Sell on Amazon</p>
          <p>Sell Under Amazon Acceleartor</p>
          <p>Sell on Amazon Homemade</p>
          <p>Sell on Amazon Businesses</p>
          <p>Sell your Apps on Amazon</p>
          <p>Become an Affiliate</p>
          <p>Advertise your product</p>
          <p>Self-Publish with us</p>
          <p>Host on Amazon Hub</p>
        </div>
      </div>
      <div className="footer__containerThree">
        <h4>Amazon Payment Products</h4>
        <div className="footer__subContainerThree">
          <p>Amazon rewrads visa Signature Cards</p>
          <p>Amazon.com Store Card</p>
          <p>Amazon Business Card</p>
          <p>Amazon Business Line or Credit</p>
          <p>Shop with Points</p>
          <p>Credit card Market place</p>
          <p>Reload your Balance</p>
          <p>Amazon currency converter</p>
        </div>
      </div>
      <div className="footer__containerFour">
        <h4>Let Us Help You</h4>
        <div className="footer__subContainerFour">
          <p>Amazon and Covid-19</p>
          <p>Your Account</p>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Amazon prime</p>
          <p>Returns and Relacements</p>
          <p>Manage your Content & Devices</p>
          <p>Amazon Assistance</p>
          <p>Help</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
