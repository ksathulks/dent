import React, { Component, useState, useEffect } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
import SideNavigation from "./clinin-sidenav";
import ClinicProfile from "./clinic-profile";
import Nav from "../../shared/nav/nav";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ClinicProfileContainer = () => {
  const history = useHistory();
  const [clinic, setClinic] = useState(null);
  useEffect(() => {
    if (clinic === null) {
      if (sessionStorage.getItem("jwt")) {
        if (sessionStorage.getItem("user")) {
          // send ajax calls
          let user = JSON.parse(sessionStorage.getItem("user"));
          console.log("-----------------------");
          console.log(user);
          console.log("-----------------------");
          alert(user.email);
          var p;
          axios
            .get("http://localhost:1337/clinics?email=" + user.email)
            .then(async response => {
              // handle success
              console.log(response);
              if (response.data.length === 0) {
                history.push("/dent/clinics/register");
              }
              p = await response.data;
              setClinic(p);
            })
            .catch(error => {
              // handle error

              console.log("************888");
              console.log(error);
              console.log("*****************");
              //   history.push("/dent/clinics/profile");
            })
            .finally(() => {
              // always executed
            });
        }
      }
    }
  }, []);

  // if (p.email) {
  if (clinic != null) {
    return (
      <MDBContainer>
        {/* <Nav />
          <SideNavigation /> */}

        <ClinicProfile clinic={clinic} />
        {/* <ClinicProfile clinic={clinic} /> */}
      </MDBContainer>
    );
  } else {
    return (
      <MDBContainer>{/* <Nav />
          <SideNavigation /> */}</MDBContainer>
    );
  }

  // } else {
  //   return <h1>user not found</h1>;
  // }
};

// function getClinicByEmail(email){
//   return axios.get("http://localhost:1337/clinics?email=" + email)
// }

export default ClinicProfileContainer;

// class ClinicProfileContainer extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("container  ");
//     console.log(props);
//     // this.state = {
//     //     modal: false
//     // }
//   }

//   render() {
//     return (
//       <MDBContainer>
//           <Nav />
//           <SideNavigation />
//           <ClinicProfile data={this.props} />
//       </MDBContainer>
//     );
//   }
// }

// export default ClinicProfileContainer;
