import React, { Component } from "react";
import axios from "axios";

import "./clinic-profile-container.css";
import Footer from "../../shared/footer/footer";
import TopNavigation from "./topNavigation";
import SideNavigation from "./sideNavigation";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import DoctorPage from "./pages/DoctorPage";
import PatientsPage from "./pages/PatientsPage";
import NotFoundPage from "./pages/NotFoundPage";

class ClinicProfileContainer extends Component {
  // constructor() {
  //   super();
  // }

  state = {
    childName: "Dashboard",
    isLoading: true,
    clinic: {},
    patient: {},
    showeditProfileModel: false,
    showeditPatientModel: false,
    showaddPatientModel: false,
    docEmail: "",
  };
  componentDidMount() {
    this.getClinic();
  }

  handleModelToggle = (modelName) => {
    let model = "show" + modelName;
    this.setState((prevState) => ({
      ...prevState,
      [model]: !this.state[model],
      isLoading: false,
    }));
  };

  handleEditPatient = (_patient) => {
    let model = "showeditPatientModel";
    this.setState((prevState) => ({
      ...prevState,
      patient: _patient,
      [model]: !this.state[model],
      isLoading: false,
    }));
  };

  handleChildChange = (_childName) => {
    this.setState((prevState) => ({
      ...prevState,
      isLoading: false,
      childName: _childName,
    }));
  };
  updatedClinic = async () => {
    await this.getClinic();
    // axios.put();
  };

  handleClinicChange = (_clinic) => {
    this.setState((prevState) => ({
      ...prevState,
      clinic: _clinic,
      isLoading: false,
    }));
  };

  viewPatientsWRTDoctor = (_docEmail) => {
    this.setState((prevState) => ({
      ...prevState,
      childName: "Patients",
      docEmail: _docEmail,
    }));
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div className="flexible-content">
        <TopNavigation />

        <SideNavigation handleChildChange={this.handleChildChange} />
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <main id="content" className="p-5">
            {this.state.childName === "Dashboard" && <DashboardPage />}
            {this.state.childName === "Profile" && (
              <ProfilePage
                clinic={this.state.clinic}
                handleChildChange={this.handleChildChange}
                handleModelToggle={this.handleModelToggle}
                updatedClinic={this.updatedClinic}
                showeditProfileModel={this.state.showeditProfileModel}
                showaddPatientModel={this.state.showaddPatientModel}
              />
            )}
            {this.state.childName === "Doctors" && (
              <DoctorPage
                doctors={this.state.clinic.doctors}
                viewPatientsWRTDoctor={this.viewPatientsWRTDoctor}
              />
            )}
            {/* {this.state.childName === "Patients" &&
              this.state.docEmail === "false" && (
                <PatientsPage
                  patients={this.state.clinic.patients}
                  editPatient={this.editPatient}
                  viewPatientsWRTDoctor={this.viewPatientsWRTDoctor}
                />
              )} */}
            {this.state.childName === "Patients" && (
              <PatientsPage
                docEmail={this.state.docEmail}
                patients={this.state.clinic.patients}
                patient={this.state.patient}
                doctors={this.state.clinic.doctors}
                showeditPatientModel={this.state.showeditPatientModel}
                showaddPatientModel={this.state.showaddPatientModel}
                handleModelToggle={this.handleModelToggle}
                handleEditPatient={this.handleEditPatient}
                updatedClinic={this.updatedClinic}
                clinic={this.state.clinic}
                viewPatientsWRTDoctor={this.viewPatientsWRTDoctor}
              />
            )}
            {this.state.childName == "Ledger" && <NotFoundPage />}
            {this.state.childName == "AddPatient" && <NotFoundPage />}
            {this.state.childName == "404" && <NotFoundPage />}
          </main>
        )}
        <Footer />
      </div>
    );
  }

  getClinic = async () => {
    if (sessionStorage.getItem("user")) {
      if (sessionStorage.getItem("jwt")) {
        let user = JSON.parse(sessionStorage.getItem("user"));
        let _clinic;
        axios
          .get("http://localhost:1337/clinics?email=" + user.email)
          .then(async (response) => {
            if (response.data.length === 0) {
              this.props.history.push("/dent/clinics/register");
            }
            console.log(response.data[0]);
            _clinic = await response.data[0];
            console.log("cc", _clinic);
            this.handleClinicChange(_clinic);
          })
          .catch((error) => {
            // alert("Error occured, Please try again later!!!");
          });

        return _clinic;
      }
    } else {
      alert("please sign in again");
      this.props.history.push("/dent");
    }
  };
}

export default ClinicProfileContainer;
