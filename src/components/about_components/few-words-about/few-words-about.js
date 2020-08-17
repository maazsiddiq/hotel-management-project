import React from "react";
import { Col, Container, Row } from "reactstrap";
import fewaboutimg from "../../../images/A-few-words-about-img-main.jpg";
import "./few-words-about.css";

const FewWordsAbout = (props) => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col sm="12" md="6">
            <img
              style={{ width: "100%", height: "100%" }}
              src={fewaboutimg}
              className="img-fluid"
            />
          </Col>

          <Col sm={12} md={{ offset: "1", size: "5" }}>
            <div>
              <p className="few-words-heading-main">
                <b>A Few Words About Us</b>
              </p>

              <hr
                style={{
                  border: "solid 1px #CA6F1E",
                  width: "20%",
                  textAlign: "left",
                  marginLeft: 0,
                }}
              />

              <p style={{ fontSize: "17px" }}>
                Ei sumo eruditi sadipscing nec, scripta epicurei ut eam. Duo ut
                fastidii platonem, eu soleat salutandi neglegentur est. Erant
                harum malorum eum ne, his ut scaevola
              </p>
              <p className="mt-4" style={{ fontSize: "15px", opacity: "0.8" }}>
                Vel nihil percipitur ei. Fugit option oportere est in, te
                dignissim philosophia mea, duo diceret eruditi ea. In eum porro
                bonorum, ut stet partiendo efficiantur vis. No errem platonem
                consectetuer quo, legimus tincidunt percipitur pri id. No nec
                congue libris interpretaris
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FewWordsAbout;
