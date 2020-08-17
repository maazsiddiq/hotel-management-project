import React from "react";
import { Container, Row, Col } from "reactstrap";
import OurSuites from "../../components/room-and-suites_components/our-suites/our-suites";
import TopRoomImgMain from "../../components/room-and-suites_components/top-room-img-main/top-room-img-main";
import ourRooms1 from "../../images/our-Best-Room-img1.jpg";
import ourRooms2 from "../../images/our-Best-Room-img2.jpg";
import ourRooms3 from "../../images/our-Best-Room-img3.jpg";
import ourRooms4 from "../../images/our-Best-Room-img4.jpg";
import ourRooms5 from "../../images/our-Best-Room-img5.jpg";
import ourRooms6 from "../../images/our-Best-Room-img6.jpg";

const RoomAndSuites = () => {
  return (
    <div>
      <TopRoomImgMain />

      <Container fluid>
        <Row>
          <Col md={{ offset: "3", size: "6" }} xs="12" className="text-center">
            <h1 style={{ fontFamily: "merianda" }}>
              <b>Our Best Rooms</b>
              <hr
                style={{
                  width: "12rem",
                  border: "solid 1px #CA6F1E ",
                }}
              ></hr>
            </h1>
            <p className="mb-5 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
              adipisci aspernatur beatae, delectus dolorem eveniet fuga id,
              impedit itaque nemo nesciunt nihil nobis odit quas quis quo sunt
              suscipit tempora
            </p>
          </Col>
        </Row>
        <Row>
          <OurSuites
            pics={ourRooms1}
            roomsId="singleRoom"
            rooms="Single Room"
            Rs="From $280"
          />
          <OurSuites
            pics={ourRooms2}
            roomsId="doubleRoom"
            rooms="Double Room"
            Rs="From $480"
          />
          <OurSuites
            pics={ourRooms3}
            roomsId="superiorRoom"
            rooms="Superior Room"
            Rs="From $550"
          />
        </Row>
        <Row>
          <OurSuites
            pics={ourRooms4}
            roomsId="familyRoom"
            rooms="Family Room"
            Rs="From $350"
          />
          <OurSuites
            pics={ourRooms5}
            roomsId="executiveRoom"
            rooms="Executive Room"
            Rs="From $520"
          />
          <OurSuites
            pics={ourRooms6}
            roomsId="vipSuite"
            rooms="VIP Suite"
            Rs="From $600"
          />
        </Row>
      </Container>
    </div>
  );
};
export default RoomAndSuites;
