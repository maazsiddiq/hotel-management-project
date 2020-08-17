import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardText, CardBody, Col } from "reactstrap";

const Management = (props) => {
  return (
    <Col sm="12" md="6" lg="3">
      <Card style={{ height: "100%", border: "none", background: "none" }}>
        <CardBody>
          <div>
            <FontAwesomeIcon
              style={{ color: "#CA6F1E" }}
              size="2x"
              icon={props.icons}
              className="mr-3"
            />
            <b style={{ fontFamily: "poppin", fontSize: "18px" }}>
              {props.heading}
            </b>
          </div>

          <CardText
            className="mt-3"
            style={{ fontSize: "14px", opacity: "0.7" }}
          >
            {" "}
            {props.paragraph}{" "}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Management;
