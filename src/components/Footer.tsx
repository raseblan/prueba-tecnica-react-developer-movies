import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Collection Statement</a></li>
          <li><a href="#">Help</a></li>
          <li><a href="#">Manage Account</a></li>
        </ul>


        <p className="footer-copyright">
          Copyright © 2016 DEMO Streaming. All Rights Reserved.
        </p>

        <div className="footer-social">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>

        <div className="footer-downloads">
          <a href="#"><img src="/images/appstore.png" alt="App Store" /></a>
          <a href="#"><img src="/images/googleplay.png" alt="Google Play" /></a>
          <a href="#"><img src="/images/microsoft.png" alt="Microsoft Store" /></a>
        </div>
      </div>
    </footer>
  );
};

