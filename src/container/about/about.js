import React from "react";
import { Container, Row, Col } from "reactstrap";
import TopImgMain from "../../components/about_components/top-img-main/top-img-main";
import FewWordsAbout from "../../components/about_components/few-words-about/few-words-about";
import Management from "../../components/about_components/management/management";
import AboutOurTeam from "../../components/about_components/about-our-team/about-our-team";
import OurHistory from "../../components/about_components/our-history/our-history";
import {
  faThumbsUp,
  faUserFriends,
  faMale,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

import team1 from "../../images/about-chef-team1.jpg";
import team2 from "../../images/about-chef-team2.jpg";
import team3 from "../../images/about-chef-team3.jpg";
import team4 from "../../images/about-chef-team4.jpg";
import team5 from "../../images/about-chef-team5.jpg";
import team6 from "../../images/about-chef-team6.jpg";
import team7 from "../../images/about-chef-team7.jpg";
import team8 from "../../images/about-chef-team8.jpg";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGoogle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div>
      <TopImgMain />
      <FewWordsAbout />

      <div
        style={{
          marginTop: "6%",
          background: "#F7F7F7",
          paddingTop: "32px",
          paddingBottom: "32px",
        }}
      >
        <Container fluid>
          <Row>
            <Management
              icons={faThumbsUp}
              heading="Stylish Accommodation"
              paragraph="Ei sumo eruditi sadipscing nec, scripta epicurei ut nec, scripta epicurei ut eam. Duo ut fastidii platonem, eu neglegentur est"
            />
            <Management
              icons={faUserFriends}
              heading="Qualified Employees"
              paragraph="Vel nihil percipitur ei. Fugit option oportere est. Fugit option oportere est in, te dignissim philosophia mea, duo ea. In eum porro"
            />
            <Management
              icons={faMale}
              heading="Happy Clients"
              paragraph="Te partem omnesque eligendi has, nam ex persius has, nam ex persius lobortis. His ex amet facilis, ne vix diceret. Veniam nonumes sit"
            />
            <Management
              icons={faCreditCard}
              heading="Payment Methods"
              paragraph="Ei tollit euismod cum, augue labore euripidis mel augue labore euripidis mel ex, ut corpora appellantur suscipiantur"
            />
          </Row>
        </Container>
      </div>

      <Container fluid>
        <Row>
          <Col>
            <h1 className="text-center mt-5" style={{ fontFamily: "poppin" }}>
              <b> Our Team</b>
            </h1>
            <hr
              className="mb-5"
              style={{
                border: "solid 1px #CA6F1E",
                width: "8rem",
              }}
            />
          </Col>
        </Row>

        <Row>
          <AboutOurTeam
            avatar={team1}
            ChefName="Sandra Ferguson"
            SubtitlePara="General Manager"
            teamicon1={faFacebookF}
            teamicon2={faTwitter}
            teamicon3={faInstagram}
            teamicon4={faGoogle}
            teamicon5={faLinkedinIn}
          />
          <AboutOurTeam
            avatar={team2}
            ChefName="Ronald Chen"
            SubtitlePara="Assistant Manager"
            teamicon1={faFacebookF}
            teamicon2={faTwitter}
            teamicon3={faInstagram}
            teamicon4={faGoogle}
            teamicon5={faLinkedinIn}
          />
          <AboutOurTeam
            avatar={team3}
            ChefName="Frances Watson"
            SubtitlePara="Front Office Manager"
            teamicon1={faFacebookF}
            teamicon2={faTwitter}
            teamicon3={faInstagram}
            teamicon4={faGoogle}
            teamicon5={faLinkedinIn}
          />
          <AboutOurTeam
            avatar={team4}
            ChefName="Joe Myers"
            SubtitlePara="Concierge"
            teamicon1={faFacebookF}
            teamicon2={faTwitter}
            teamicon3={faInstagram}
            teamicon4={faGoogle}
            teamicon5={faLinkedinIn}
          />
        </Row>
        <Row>
          <AboutOurTeam
            avatar={team5}
            ChefName="Brenda Lopez"
            SubtitlePara="Booking Manager"
            teamicon1={faFacebookF}
            teamicon2={faTwitter}
            teamicon3={faInstagram}
            teamicon4={faGoogle}
            teamicon5={faLinkedinIn}
          />
          <AboutOurTeam
            avatar={team6}
            ChefName="Deborah Stewart"
            SubtitlePara="Accountant"
            teamicon1={faFacebookF}
            teamicon2={faTwitter}
            teamicon3={faInstagram}
            teamicon4={faGoogle}
            teamicon5={faLinkedinIn}
          />
          <AboutOurTeam
            avatar={team7}
            ChefName="Patrick Douglas"
            SubtitlePara="Porter"
            teamicon1={faFacebookF}
            teamicon2={faTwitter}
            teamicon3={faInstagram}
            teamicon4={faGoogle}
            teamicon5={faLinkedinIn}
          />
          <AboutOurTeam
            avatar={team8}
            ChefName="Sam Marshall"
            SubtitlePara="Floor Manager"
            teamicon1={faFacebookF}
            teamicon2={faTwitter}
            teamicon3={faInstagram}
            teamicon4={faGoogle}
            teamicon5={faLinkedinIn}
          />
        </Row>
      </Container>

      <OurHistory />
    </div>
  );
};
export default About;
