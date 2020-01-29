import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column1*/}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Lorem ipsum dolore</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum dolore</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum dolore</a>
                </li>
                <li>
                  <a href="/">Lorem ipsum dolore</a>
                </li>
              </ul>
            </div>
            {/* Column2*/}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolore</li>
                <li>Lorem ipsu m dolore</li>
                <li>Lorem ipsum dolore</li>
                <li>Lorem ipsum dolore</li>
              </ul>
            </div>
            {/* Column3*/}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolore</li>
                <li>Lorem ipsu m dolore</li>
                <li>Lorem ipsum dolore</li>
                <li>Lorem ipsum dolore</li>
              </ul>
            </div>
            {/* Column4*/}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>Lorem ipsum dolore</li>
                <li>Lorem ipsu m dolore</li>
                <li>Lorem ipsum dolore</li>
                <li>Lorem ipsum dolore</li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Demo site - Tüm Hakları Saklıdır
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
    text-decoration: none;
  }
`;

export default Footer;
