import React, { Component, useState, useEffect } from "react";
import {
  MDBCard,
  MDBCol,
  MDBRow,
  MDBView,
  MDBMask,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import src1 from "../../../assets/img-1.jpg";
//import SideNavigation from "./clinin-sidenav";
// import ClinicPatient from "../../clinics/clinic-patients/clinicpatients";
import DoctorInvite from "../invite/doctor-invite";

const DoctorProfile = (props) => {
  var x;
  const [showPatients, setShowPatients] = useState(false);
  //   const [patientsDiv, setPatientsDiv] = useState(<div></div>);
  useEffect(() => {
    x = showPatients;
  }, [showPatients]);

  console.log("kkkkkkkkkkkkkkkkkkkkkk component");
  //   if (props.clinic) {
  console.log(props.doctor[0].name);
  const {
    name,
    email,
    phone,
    address,
    patients,
    doctor_payments,
    patient_payments,
    clinics,
  } = props.doctor[0];
  //   }

  console.log("kkkkkkkkkkkkkkkkkkkkkk component");
  //
  return (
    <React.Fragment>
      {/* <SideNavigation /> */}
      {/* <Nav /> */}
      <MDBRow className="justify-content-center">
        <MDBCol sm="12" md="6" lg="3" className="mb-5">
          <MDBCard>
            <MDBCardImage className="img-fluid" src={src1} />
            <MDBCardBody>
              <MDBCardTitle className="text-center mb-2 font-bold">
                {/* Alice Mayer */}
                {name}
              </MDBCardTitle>
              <MDBCardTitle
                sub
                className="text-center indigo-text mb-2 font-bold"
              >
                {email}
              </MDBCardTitle>
              <MDBCardText>
                <strong className="mb-2">About:</strong>
                {address}
                {phone}
              </MDBCardText>
              <div className="row justify-content-end pr-1">
                <MDBBtn size="sm" outline color="primary">
                  More...
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle className="text-center mb-2 font-bold">
                {/* Alice Mayer */}
                {"Invite Clinic "}
              </MDBCardTitle>
              <DoctorInvite doctormail={email} />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="9">
          <section className="text-center pb-3">
            {clinics.map((d) => {
              return (
                <MDBCol lg="6" xl="5" className="mb-3">
                  <MDBCard className="d-flex mb-5">
                    <MDBView>
                      <img
                        src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg"
                        alt="Project"
                        className="img-fluid"
                      />
                      <MDBMask overlay="white-slight" />
                    </MDBView>
                    <MDBCardBody>
                      <MDBCardTitle className="font-bold mb-3">
                        <strong>{d.name}</strong>
                      </MDBCardTitle>
                      <MDBCardText>{d.email}</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className="links-light profile-card-footer">
                      <span className="right">
                        <a className="p-2">
                          <button
                            onClick={() => {
                              setShowPatients(!showPatients);
                              {
                                console.log(showPatients);
                              }
                            }}
                          >
                            view patients
                          </button>
                          <MDBIcon icon="image" className="ml-1" />
                        </a>
                      </span>
                    </MDBCardFooter>
                  </MDBCard>
                </MDBCol>
              );
            })}

            <MDBRow className="d-flex justify-content-center">
              {/* {showPatients && <ClinicPatient patients={patients} />} */}
            </MDBRow>

            {/* <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="6" xl="5" className="mb-3">
                <MDBCard className="d-flex mb-5">
                  <MDBView>
                    <img
                      src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg"
                      alt="Project"
                      className="img-fluid"
                    />
                    <MDBMask overlay="white-slight" />
                  </MDBView>
                  <MDBCardBody>
                    <MDBCardTitle className="font-bold mb-3">
                      <strong>Project name</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className="links-light profile-card-footer">
                    <span className="right">
                      <a className="p-2" href="#profile">
                        Live Preview
                        <MDBIcon icon="image" className="ml-1" />
                      </a>
                    </span>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
              <MDBCol lg="6" xl="5" className="mb-3">
                <MDBCard className="d-flex mb-5">
                  <view-wrapper>
                    <img
                      src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-signup.jpg"
                      alt="Project"
                      className="img-fluid"
                    />
                    <MDBMask overlay="white-slight" />
                  </view-wrapper>
                  <MDBCardBody>
                    <MDBCardTitle className="font-bold mb-3">
                      <strong>Project name</strong>
                    </MDBCardTitle>
                    <MDBCardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter className="links-light profile-card-footer">
                    <span className="right">
                      <a className="p-2" href="#profile">
                        Live Preview
                        <MDBIcon icon="image" className="ml-1" />
                      </a>
                    </span>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow> */}
          </section>
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
};

export default DoctorProfile;
