import React from "react";

function AppFooter(props) {
  return (
    <>
      <div className="footer-basic">
        <footer className="container">
          <div className="social">
            <a href="/">
              <i className="icon ion-social-instagram"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-snapchat"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-twitter"></i>
            </a>
            <a href="/">
              <i className="icon ion-social-facebook"></i>
            </a>
          </div>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="/">Services</a>
            </li>
            <li className="list-inline-item">
              <a href="/">About</a>
            </li>
            <li className="list-inline-item">
              <a href="/">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="/">Privacy Policy</a>
            </li>
            <li className="list-inline-item">
              <a href="mailto:email@findmyapt.uw.edu">
                <span className="material-icons"></span> email@findmyapt.uw.edu
              </a>
            </li>
            <li className="list-inline-item">
              <a href="tel:123-456-7890">
                <span className="material-icons">phone</span> 123-456-7890
              </a>
            </li>
          </ul>
          <p className="copyright">FindMyApartment © 2022</p>
        </footer>
      </div>
    </>
  );
}

export default AppFooter;
