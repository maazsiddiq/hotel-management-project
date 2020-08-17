import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "../../components/home_components/carousel/carousel";
import OurBestRoom from "../../components/home_components/our-best-room/our-best-room";
import OurServices from "../../components/home_components/our-services/our-services";

import {
  faSwimmingPool,
  faWifi,
  faHardHat,
  faCarSide,
} from "@fortawesome/free-solid-svg-icons";
import oBroomImg1 from "../../images/our-Best-Room-img1.jpg";
import oBroomImg2 from "../../images/our-Best-Room-img2.jpg";
import oBroomImg3 from "../../images/our-Best-Room-img3.jpg";
import oBroomImg4 from "../../images/our-Best-Room-img4.jpg";
import oBroomImg5 from "../../images/our-Best-Room-img5.jpg";
import oBroomImg6 from "../../images/our-Best-Room-img6.jpg";

const Home = () => {
  return (
    <div>
      <Slider />

      <Container fluid>
        <Row style={{ marginTop: "5rem" }}>
          <Col sm="12" className="text-center">
            <h1 style={{ fontFamily: "poppin" }}>
              <b>Our Best Rooms</b>
            </h1>
            <hr style={{ border: "solid 1px #CA6F1E", width: "12rem" }} />
          </Col>
        </Row>
        <Row className="mt-4">
          <OurBestRoom pics={oBroomImg1} rooms="Single Room" Rs="From $280" />
          <OurBestRoom pics={oBroomImg2} rooms="Double Room" Rs="From $480" />
          <OurBestRoom pics={oBroomImg3} rooms="Superior Room" Rs="From $550" />
        </Row>
        <Row>
          <OurBestRoom pics={oBroomImg4} rooms="Family Room" Rs="From $350" />
          <OurBestRoom
            pics={oBroomImg5}
            rooms="Executive Room"
            Rs="From $520"
          />
          <OurBestRoom pics={oBroomImg6} rooms="VIP Suite" Rs="From $600" />
        </Row>
      </Container>

      <div
        style={{
          marginTop: "6%",
          background: "#F7F7F7",
          paddingTop: "32px",
          paddingBottom: "50px",
        }}
      >
        <Container fluid>
          <Row>
            <Col sm="12" className="text-center">
              <h1 style={{ fontFamily: "poppin" }}>
                <b> Our Services</b>
              </h1>
              <hr
                className="mb-5"
                style={{ border: "solid 1px #CA6F1E", width: "10rem" }}
              />
            </Col>
          </Row>

          <Row>
            <OurServices
              icons={faSwimmingPool}
              heading="Swimming Pool"
              para="The recreation area of our hotel includes a customly designed swimming pool under a glass vault and a bath VIP-complex for six people."
            />
            <OurServices
              icons={faWifi}
              heading="Free Wi-Fi"
              para="Our free Wi-Fi internet service is available 24-hours in lobby, meeting room, facilities and guest rooms to hel you stay connected wherever you are."
            />
            <OurServices
              icons={faHardHat}
              heading="Restaurants"
              para="The restaurants of our hotel will gratify the taste of the most exacting guests. Here, you can taste some culinary masterpieces by our chef."
            />
            <OurServices
              icons={faCarSide}
              heading="Car Rentals"
              para="We work with the best car rental companies in United States of America, bringing you discount car rental rates and a wide variety of car rental classes."
            />
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Home;
