import React from "react";
import { Col } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import "./about-our-team.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
}));

const AboutOurTeam = (props) => {
  const classes = useStyles();
  return (
    <Col xs={12} sm={12} md={6} lg={3} className="text-center">
      <Avatar
        alt="Remy Sharp"
        src={props.avatar}
        className={classes.large}
        style={{ textAlign: "center", marginRight: "auto", marginLeft: "auto" }}
      />
      <CardTitle
        style={{ color: "#ca6f1e", fontSize: "18px", marginTop: "13px" }}
      >
        {props.ChefName}
      </CardTitle>
      <CardSubtitle style={{ fontFamily: "cursive", opacity: "0.6" }}>
        {props.SubtitlePara}
      </CardSubtitle>
      <a href="https://www.facebook.com/" target="_blank">
        <FontAwesomeIcon
          className="team-icons"
          size="lg"
          icon={props.teamicon1}
        />
      </a>
      <a href="https://www.twitter.com/" target="_blank">
        <FontAwesomeIcon
          className="team-icons"
          size="lg"
          icon={props.teamicon2}
        />
      </a>
      <a href="https://www.instagram.com/" target="_blank">
        <FontAwesomeIcon
          className="team-icons"
          size="lg"
          icon={props.teamicon3}
        />
      </a>
      <a href="https://www.google.com/" target="_blank">
        <FontAwesomeIcon
          className="team-icons"
          size="lg"
          icon={props.teamicon4}
        />
      </a>
      <a href="https://pk.linkedin.com/" target="_blank">
        <FontAwesomeIcon
          className="team-icons"
          size="lg"
          icon={props.teamicon5}
        />
      </a>
    </Col>
  );
};
export default AboutOurTeam;
