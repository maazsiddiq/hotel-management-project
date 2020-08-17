import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FormGroup, Label, Input, Form, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelopeOpen,
  faBusinessTime,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./contact-form.css";

const ContactForm = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md="7">
            <Row>
              <Col sm="12">
                <h1
                  style={{
                    fontFamily: "poppin",
                    marginBottom: "4%",
                  }}
                >
                  <b>Contact Us</b>
                </h1>
                <p
                  style={{
                    fontSize: "19px",
                    marginBottom: "3%",
                    fontFamily: "merianda",
                    opacity: "0.9",
                  }}
                >
                  Lorem ipsum dolor sit amet, ei his simul saperet, qui vivendum
                  recusabo an. Vix dicam tacimates.
                </p>
              </Col>
            </Row>

            <Form>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">First name</Label>
                    <Input
                      style={{ borderRadius: "50px" }}
                      type="text"
                      name="email"
                      id="exampleEmail"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Last name</Label>
                    <Input
                      style={{ borderRadius: "50px" }}
                      type="text"
                      name="password"
                      id="examplePassword"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="exampleEmail">E-mail</Label>
                    <Input
                      style={{ borderRadius: "50px" }}
                      type="email"
                      name="email"
                      id="exampleEmail"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="examplePassword">Phone</Label>
                    <Input
                      style={{ borderRadius: "50px" }}
                      type="number"
                      name="password"
                      id="examplePassword"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleText">Message</Label>
                <Input
                  style={{
                    borderRadius: "50px",
                    paddingTop: "50px",
                    paddingBottom: "50px",
                  }}
                  type="textarea"
                  name="text"
                  id="exampleText"
                />
              </FormGroup>
              <Button
                type="submit"
                className="contact-send-button mt-4 mb-5"
                style={{ width: "50%" }}
              >
                Send Message
              </Button>
            </Form>
          </Col>

          <Col md={{ offset: "1", size: "4" }} sm={12}>
            <Row>
              <Col sm="12">
                <h4 style={{ fontFamily: "poppin" }}>
                  <b>Address</b>
                </h4>
                <hr></hr>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <FontAwesomeIcon
                  style={{ color: "#CA6F1E" }}
                  icon={faMapMarkerAlt}
                />{" "}
                <span className="icon-right-text-hover">
                  2130 Fulton Street, Chicago, IL 94117-1080 USA
                </span>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col sm="12">
                <h4 style={{ fontFamily: "poppin" }}>
                  <b>Phones</b>
                </h4>
                <hr></hr>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <FontAwesomeIcon
                  style={{ color: "#CA6F1E" }}
                  icon={faPhoneAlt}
                />{" "}
                <span className="icon-right-text-hover">
                  {" "}
                  1-800-6543-765 1-800-3434-876
                </span>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col sm="12">
                <h4 style={{ fontFamily: "poppin" }}>
                  <b>E-mail</b>
                </h4>
                <hr></hr>
              </Col>
            </Row>
            <Row>
              <Col>
                <FontAwesomeIcon
                  style={{ color: "#CA6F1E" }}
                  icon={faEnvelopeOpen}
                />{" "}
                <span className="icon-right-text-hover">
                  {" "}
                  mail@demolink.org
                </span>
              </Col>
            </Row>

            <Row className="mt-5">
              <Col sm="12">
                <h4 style={{ fontFamily: "poppin" }}>
                  <b>Opening hours</b>
                </h4>
                <hr></hr>
              </Col>
            </Row>
            <Row className="bottom-space">
              <Col>
                <FontAwesomeIcon
                  style={{ color: "#CA6F1E" }}
                  icon={faBusinessTime}
                />{" "}
                <span className="icon-right-text-hover ">
                  Mon–Fri: 9:00 am–6:00 pm <br /> Sat–Sun: 11:00 am–4:00 pm
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactForm;
