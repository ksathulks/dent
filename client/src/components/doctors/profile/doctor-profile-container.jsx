import React, { Component, useState, useEffect } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter
} from "mdbreact";
//import SideNavigation from "./clinin-sidenav";
import DoctorProfile from "./doctor-profile";
//import Nav from "../../shared/nav/nav";
import axios from "axios";
import { useHistory } from "react-router-dom";

const DoctorProfileContainer = () => {
  const history = useHistory();
  const [doctor, setDoctor] = useState(null);
  useEffect(() => {
    if (doctor === null) {
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
            .get("http://localhost:1337/doctors?email=" + user.email)
            .then(async response => {
              // handle success
              console.log(response);
              if (response.data.length === 0) {
                history.push("/dent/doctors/register");
              }
              p = await response.data;
              setDoctor(p);
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
  if (doctor != null) {
    return (
      <MDBContainer>
        {/* <Nav />
          <SideNavigation /> */}

        <DoctorProfile doctor={doctor} /> 
      
      
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

export default DoctorProfileContainer;

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
