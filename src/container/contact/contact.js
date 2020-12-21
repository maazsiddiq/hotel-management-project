import React from "react";
import ContactForm from "../../components/contact_components/contact-form/contact-form";
import TopContactImgMain from "../../components/contact_components/top-contact-img-main/top-contact-img-main";
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/A-contact';

const Contact = (props) => {
  console.log("form data", props.SW);

  return (
    
    <div>
      <TopContactImgMain />
      <ContactForm Clicked={props.AnyValue}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    SW: state.show
  };
};

const mapDispatchToProps = dispatch => {
  return {
    AnyValue : (a) => dispatch(actionCreators.AnyValue(a)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
