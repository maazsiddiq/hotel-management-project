import React from "react";
import { Col, Container, Row, CardImg } from "reactstrap";
import history1 from "../../../images/about-our-history-img1.jpg";
import history2 from "../../../images/about-our-history-img2.jpg";
import history3 from "../../../images/A-few-words-about-img-main.jpg";

const OurHistory = () => {
  return (
    <div>
      <div
        style={{
          background: "#29293A",
          paddingTop: "70px",
          paddingBottom: "70px",
        }}
      >
        <Container>
          <Row>
            <Col md="7" sm="12">
              <h1 style={{ color: "#ffffff", fontFamily: "poppin" }}>
                Our History
              </h1>
              <p style={{ color: "#C0C0C0" }} className="mt-4">
                Ei sumo eruditi sadipscing nec, scripta epicurei ut eam. Duo ut
                fastidii platonem, eu soleat salutandi neglegentur est. Erant
                harum malorum eum ne, his ut scaevola consectetuer, duo ex
                suavitate liberavisse. Has brute
              </p>

              <Row className="mt-5">
                <Col md={{ offset: "1", size: "2" }} sm={12}>
                  <p style={{ color: "#C0C0C0" }}> April 1999</p>
                </Col>
                <Col>
                  <h5 className="text-light">
                    We established Jasmine in Los Angeles in 1999 as a mini
                    hotel
                  </h5>
                  <p style={{ color: "#C0C0C0" }}>
                    Ei tollit euismod cum, augue labore euripidis mel ex, ut
                    corpora appellantur deterruisset mel. Quo et consulatu
                    suscipiantur. In sed homero habemus neglegentur, ipsum
                    putant periculis
                  </p>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col md={{ offset: "1", size: "2" }} sm={12}>
                  <p style={{ color: "#C0C0C0" }}>September 2005</p>
                </Col>
                <Col>
                  <h5 className="text-light">Expansion and developement</h5>
                  <p style={{ color: "#C0C0C0" }}>
                    Sea quod soleat dolorum id. Tale lobortis laboramus eum no,
                    ius vocibus pertinacia scribentur ex, qui consul semper no.
                    Ne dicunt ponderum maiestatis sea, vix tollit eripuit
                    scaevola
                  </p>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col md={{ offset: "1", size: "2" }} sm={12}>
                  <p style={{ color: "#C0C0C0" }}> March, 2019</p>
                </Col>
                <Col>
                  <h5 className="text-light">
                    Our 20-year anniversary and better amenities
                  </h5>
                  <p style={{ color: "#C0C0C0" }}>
                    Integre delenit luptatum ei has, usu graecis democritum ei,
                    eum ea iusto dictas concludaturque. Labore epicuri
                    reformidans ad vis, in his quot doctus eripuit. Sit nominati
                    senserit et
                  </p>
                </Col>
              </Row>
            </Col>

            <Col className="text-center" md="5" sm="12">
              <div>
                <CardImg
                  style={{ width: "300px", height: "200px" }}
                  src={history1}
                  className="img-fluid"
                  alt="Card image cap"
                />
              </div>
              <div className="mt-3">
                <CardImg
                  style={{ width: "300px", height: "200px" }}
                  src={history2}
                  className="img-fluid"
                  alt="Card image cap"
                />
              </div>

              <div className="mt-3">
                <CardImg
                  style={{ width: "300px", height: "200px" }}
                  src={history3}
                  className="img-fluid"
                  alt="Card image cap"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default OurHistory;
