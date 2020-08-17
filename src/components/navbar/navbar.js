import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button,
  Card,
  Row,
  Col,
} from "reactstrap";
import { Modal, ModalBody } from "reactstrap";
import { Form, FormGroup, Input } from "reactstrap";
import "./navbar.css";
import logo from "../../images/jasmin-logo-main.png";
import { Link } from "react-router-dom";

const Navb_ = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle1 = () => setIsOpen(!isOpen);

  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Navbar color="light" light expand="md" style={{ padding: "15px" }}>
        <NavbarBrand href="/">
          <img style={{ height: "3rem", width: "10rem" }} src={logo}></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle1} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto offset-1 text-center" navbar>
            <Link className="navItem-navlink-style" to="/">
              Home
            </Link>

            <Link className="navItem-navlink-style" to="/About">
              About
            </Link>

            <Link className="navItem-navlink-style" to="/RoomAndSuites">
              Room & suites
            </Link>

            <Link className="navItem-navlink-style" to="/Contact">
              Contact
            </Link>
          </Nav>
          <Button onClick={toggle} className="navbar_booking-button">
            {buttonLabel} Book a Room
          </Button>
          <Modal isOpen={modal} toggle={toggle} className={className}>
            <ModalBody>
              <Row>
                <Col md={{ offset: "1", size: "10" }}>
                  <h3 style={{ fontFamily: "merienda" }}>
                    <b>Book a Room</b>
                  </h3>
                  <Form>
                    <FormGroup>
                      <Input
                        type="text"
                        id="exampleEmail"
                        placeholder="Check in..."
                        style={{ borderRadius: "50px" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="text"
                        id="exampleEmail"
                        placeholder="Check out..."
                        style={{ borderRadius: "50px" }}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        type="number"
                        id="exampleEmail"
                        placeholder="Guests..."
                        style={{ borderRadius: "50px" }}
                      />
                    </FormGroup>
                  </Form>
                  <Link to="/RoomAndSuites">
                    <Button
                      onClick={toggle}
                      className=" navbar_booking-button_room"
                    >
                      Book a Room
                    </Button>
                  </Link>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        </Collapse>
      </Navbar>
    </div>
  );
};
export default Navb_;
