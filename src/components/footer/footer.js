import React from "react";
import { Col, Container, Row } from "reactstrap";
import footerImg from "../../images/jasmin-logo-footer-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div
        style={{
          background: "#0F0C1D",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <Container fluid>
          <Row>
            <Col md="3" sm="12">
              <div className="text-md-left-f text-xs-center-f">
                <img
                  style={{ height: "3rem", width: "10rem" }}
                  src={footerImg}
                />
              </div>
            </Col>

            <Col md="6" sm="12">
              <div className="text-xs-center-f" style={{ color: "	#808080" }}>
                <p>
                  © 2020. All Rights Reserved.
                  <span className="center-text-span"> Privacy Policy.</span>
                </p>
              </div>
            </Col>

            <Col md="3" sm="12">
              <div className=" text-xs-center-f text-md-right-f">
                <a href="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon
                    size="lg"
                    className="mr-3 font-style"
                    icon={faFacebookF}
                  />
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                  <FontAwesomeIcon
                    size="lg"
                    className="mr-3 font-style"
                    icon={faTwitter}
                  />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <FontAwesomeIcon
                    size="lg"
                    className="mr-3 font-style"
                    icon={faInstagram}
                  />
                </a>
                <a href="https://www.google.com/" target="_blank">
                  <FontAwesomeIcon
                    size="lg"
                    className="mr-3 font-style"
                    icon={faGoogle}
                  />
                </a>
                <a href="https://pk.linkedin.com/" target="_blank">
                  <FontAwesomeIcon
                    size="lg"
                    className="font-style"
                    icon={faLinkedinIn}
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Footer;
