import React from "react";
import { Col, Button } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import "./our-suites.css";

const OurSuites = (props) => {
  let path = "/FullRoom/" + props.roomsId;
  return (
    <Col xs={12} sm={12} md={4}>
      <Link to={path} style={{ textDecoration: "none" }}>
        <Card style={{ border: `0` }}>
          <div className="inner">
            <CardImg
              src={props.pics}
              alt=""
              className="img-fluid"
              style={{ borderRadius: "10px", width: "100%", height: "250px" }}
            />
          </div>

          <CardBody>
            <CardTitle className="room-name">
              {props.rooms}{" "}
              <span style={{ color: "#CA6F1E", float: "right" }}>
                {props.Rs}
              </span>
            </CardTitle>
          </CardBody>
        </Card>
      </Link>
    </Col>
  );
};
export default OurSuites;
