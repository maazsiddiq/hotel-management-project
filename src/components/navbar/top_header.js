import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faMapMarkerAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Col, Container, Row } from "reactstrap";
import "./top_header.css";

const TopHeader = () => {
  return (
    <div>
      <div
        style={{
          paddingTop: "13px",
          paddingBottom: "13px",
          background: "#171424",
        }}
      >
        <Container fluid>
          <Row>
            <Col md="8" sm="12">
              <div className="text-md-left text-xs-center">
                <FontAwesomeIcon
                  style={{ color: "#CA6F1E" }}
                  icon={faPhoneAlt}
                />
                <span className="left-icon-text"> 1-800-1234-567</span>
                <FontAwesomeIcon
                  style={{ color: "#CA6F1E" }}
                  icon={faMapMarkerAlt}
                />
                <span className="left-icon-text">
                  {" "}
                  2130 Fulton Street, San Diego, CA 94117-1080 USA{" "}
                </span>
                <FontAwesomeIcon
                  style={{ color: "#CA6F1E" }}
                  icon={faEnvelope}
                />
                <span className="left-icon-text"> info@demolink.org</span>
              </div>
            </Col>

            <Col md={{ offset: "1", size: "3" }} sm="12">
              <div className="text-md-right text-xs-center ">
                <a href="https://www.facebook.com/" target="_blank">
                  <FontAwesomeIcon
                    className="icons_right mr-3"
                    size="lg"
                    icon={faFacebookF}
                  />
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                  <FontAwesomeIcon
                    className="icons_right mr-3"
                    size="lg"
                    icon={faTwitter}
                  />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <FontAwesomeIcon
                    className="icons_right mr-3"
                    size="lg"
                    icon={faInstagram}
                  />
                </a>
                <a href="https://www.google.com/" target="_blank">
                  <FontAwesomeIcon
                    className="icons_right mr-3"
                    size="lg"
                    icon={faGoogle}
                  />
                </a>
                <a href="https://pk.linkedin.com/" target="_blank">
                  <FontAwesomeIcon
                    className="icons_right"
                    size="lg"
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
export default TopHeader;
