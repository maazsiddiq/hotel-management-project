import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col } from "reactstrap";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import "./our-services.css";

const OurServices = (props) => {
  return (
    <Col xs={12} md={3}>
      <Card
        style={{ height: "100%", background: "none" }}
        className="main-cards-services"
      >
        <CardBody>
          <FontAwesomeIcon
            style={{ color: "#CA6F1E", marginBottom: "1rem" }}
            size="3x"
            icon={props.icons}
          />
          <hr />
          <CardTitle style={{ fontSize: "20px" }}>{props.heading}</CardTitle>
          <CardText style={{ opacity: "0.7" }}>{props.para}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default OurServices;
