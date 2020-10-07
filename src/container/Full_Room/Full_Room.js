import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { Card, CardImg, CardText, CardBody, CardImgOverlay } from "reactstrap";
import fullroom1 from "../../images/our-Best-Room-img1.jpg";
import fullroom2 from "../../images/our-Best-Room-img2.jpg";
import fullroom3 from "../../images/our-Best-Room-img3.jpg";
import fullroom4 from "../../images/our-Best-Room-img4.jpg";
import fullroom5 from "../../images/our-Best-Room-img5.jpg";
import fullroom6 from "../../images/our-Best-Room-img6.jpg";
import mainfullImg from "../../images/t.jpg";
import "./full_room.css";

const FullRoom = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [selectedRoom, setSelectedRoom] = useState();


  var singleRoom = [
    { Room_no: 101, isBooked: true, Rooms_Img: fullroom1 },
    { Room_no: 102, isBooked: false, Rooms_Img: fullroom1 },
    { Room_no: 103, isBooked: true, Rooms_Img: fullroom1 },
    { Room_no: 104, isBooked: false, Rooms_Img: fullroom1 },
    { Room_no: 105, isBooked: true, Rooms_Img: fullroom1 },
    { Room_no: 106, isBooked: true, Rooms_Img: fullroom1 },
  ];
  var doubleRoom = [
    { Room_no: 201, isBooked: true, Rooms_Img: fullroom2 },
    { Room_no: 202, isBooked: true, Rooms_Img: fullroom2 },
    { Room_no: 203, isBooked: false, Rooms_Img: fullroom2 },
    { Room_no: 204, isBooked: false, Rooms_Img: fullroom2 },
    { Room_no: 205, isBooked: false, Rooms_Img: fullroom2 },
    { Room_no: 206, isBooked: true, Rooms_Img: fullroom2 },
  ];
  var superiorRoom = [
    { Room_no: 301, isBooked: true, Rooms_Img: fullroom3 },
    { Room_no: 302, isBooked: true, Rooms_Img: fullroom3 },
    { Room_no: 303, isBooked: false, Rooms_Img: fullroom3 },
    { Room_no: 304, isBooked: false, Rooms_Img: fullroom3 },
    { Room_no: 305, isBooked: true, Rooms_Img: fullroom3 },
    { Room_no: 306, isBooked: false, Rooms_Img: fullroom3 },
  ];

  var familyRoom = [
    { Room_no: 401, isBooked: true, Rooms_Img: fullroom4 },
    { Room_no: 402, isBooked: false, Rooms_Img: fullroom4 },
    { Room_no: 403, isBooked: false, Rooms_Img: fullroom4 },
    { Room_no: 404, isBooked: true, Rooms_Img: fullroom4 },
    { Room_no: 405, isBooked: false, Rooms_Img: fullroom4 },
    { Room_no: 406, isBooked: true, Rooms_Img: fullroom4 },
  ];

  var executiveRoom = [
    { Room_no: 501, isBooked: true, Rooms_Img: fullroom5 },
    { Room_no: 502, isBooked: false, Rooms_Img: fullroom5 },
    { Room_no: 503, isBooked: true, Rooms_Img: fullroom5 },
    { Room_no: 504, isBooked: false, Rooms_Img: fullroom5 },
    { Room_no: 505, isBooked: true, Rooms_Img: fullroom5 },
    { Room_no: 506, isBooked: true, Rooms_Img: fullroom5 },
  ];
  var vipSuite = [
    { Room_no: 601, isBooked: false, Rooms_Img: fullroom6 },
    { Room_no: 602, isBooked: true, Rooms_Img: fullroom6 },
    { Room_no: 603, isBooked: false, Rooms_Img: fullroom6 },
    { Room_no: 604, isBooked: true, Rooms_Img: fullroom6 },
    { Room_no: 605, isBooked: false, Rooms_Img: fullroom6 },
    { Room_no: 606, isBooked: true, Rooms_Img: fullroom6 },
  ];

  var details;
  var roomType = props.match.params.roomType;
  var imageText = "";

  console.log(roomType);
  switch (roomType) {
    case "singleRoom":
      details = singleRoom;
      imageText = "Single Room";
      break;
    case "doubleRoom":
      details = doubleRoom;
      imageText = "Double Room";
      break;
    case "superiorRoom":
      details = superiorRoom;
      imageText = "Superior Room";
      break;
    case "familyRoom":
      details = familyRoom;
      imageText = "Family Room";
      break;
    case "executiveRoom":
      details = executiveRoom;
      imageText = "Executive Room";
      break;
    case "vipSuite":
      details = vipSuite;
      imageText = "Vip Suite";
      break;
  }

  var detailsroom;
  console.log(details);

  detailsroom = details.map((cards) => {
    return (
      <Col sm={12} md={4}>
        <Card style={{ border: "none", textAlign: "center" }}>
          <CardImg
            top
            width="100%"
            className="room-image"
            src={cards.Rooms_Img}
            alt="Card image cap"
            style={{ borderRadius: "10px", width: "100%", height: "250px" }}
          />
          {cards.isBooked === true ? (
            <p className="book-stamp"> BOOKED </p>
          ) : (
            ""
          )}
          <CardBody>
            <CardText
              className={cards.isBooked === true ? "isbook" : "notbook"}
            >
              
              {cards.Room_no}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  });

  return (
    <div>
      <Card inverse>
        <CardImg src={mainfullImg} className="top-img-overlay img-fluid" />
        <CardImgOverlay className="top-img-text-overlay">
          <CardText> {imageText}</CardText>
        </CardImgOverlay>
      </Card>
      <Container fluid>
        <Row className="mt-5 mb-4">{detailsroom}</Row>
      </Container>
    </div>
  );
};
export default FullRoom;
