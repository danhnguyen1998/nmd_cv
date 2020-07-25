import TopNavComponent from "containers/components/layout/client-top-nav";
import config from "containers/config";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { IProps } from "./propState";
class HomeComponent extends React.Component<any> {
  async componentDidMount() {}

  render() {
    return (
      <MDBContainer fluid>
        <TopNavComponent />
      </MDBContainer>
    );
  }
}
// const mapStateToProps = () => {
//   // return {};
// };

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(HomeComponent);
