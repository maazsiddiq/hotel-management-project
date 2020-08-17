import React from "react";
import { Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

const OurBestRoom = (props) => {
  return (
    <Col xs={12} md={4}>
      <Card style={{ border: "0" }}>
        <CardImg
          src={props.pics}
          alt=""
          className="img-fluid"
          style={{ borderRadius: "10px", width: "100%", height: "250px" }}
        />
        <CardBody>
          <CardTitle>
            {props.rooms}{" "}
            <span style={{ color: "#CA6F1E", float: "right" }}>{props.Rs}</span>
          </CardTitle>
        </CardBody>
      </Card>
    </Col>
  );
};
export default OurBestRoom;
