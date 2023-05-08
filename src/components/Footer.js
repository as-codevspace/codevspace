import React from "react";
import { Container } from "react-bootstrap";

function MyFooter() {
  return (
    <footer className="text-white footer">
      <Container>
        <div className="row">
          <div className="col-md-6 col-lg-6 text-center text-md-left footer-links">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>USA: +1-682-593-2127</li>
              <li>Australia: +61-477-723-357</li>
              <li>India: +91-9860-114-900</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:hello@codevspace.com?subject=CodevSpace services query"
                  className="codevspace-color"
                >
                  hello@codevspace.com
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-lg-6 text-center footer-links">
            <h5>CodevSpace</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#about_us">About Us</a>
              </li>
              <li>
                <a href="#contact_us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center">© 2023 Startpitch. All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default MyFooter;
