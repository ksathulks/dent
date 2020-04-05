import React, { Component, useState, useEffect } from "react";
import axios from "axios";

import "./clinic-profile-container.css";
import Footer from "../../shared/footer/footer";
import TopNavigation from "./topNavigation";
import SideNavigation from "./sideNavigation";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import TablesPage from "./pages/TablesPage";
import MapsPage from "./pages/MapsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ModalSection from "../profile/pages/sections/ModalSection";

class ClinicProfileContainer extends Component {
  constructor() {
    super();
  }

  state = {
    childName: "Dashboard",
    isLoading: true,
    clinic: {},
    showModel: false,
  };
  componentDidMount() {
    this.getClinic();
  }

  handleModelToggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      showModel: !this.state.showModel,
    }));
  };

  handleChildChange = (_childName) => {
    this.setState((prevState) => ({
      ...prevState,
      isLoading: false,
      childName: _childName,
    }));
  };

  handleClinicChange = (_clinic) => {
    this.setState((prevState) => ({
      ...prevState,
      isLoading: false,
      clinic: _clinic,
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
            {this.state.childName == "Dashboard" && <DashboardPage />}
            {this.state.childName == "Profile" && (
              <ProfilePage
                handleClinicChange={this.handleClinicChange}
                clinic={this.state.clinic}
                handleChildChange={this.handleChildChange}
                handleModelToggle={this.handleModelToggle}
              />
            )}
            {this.state.showModel && (
              <ModalSection
                handleModelToggle={this.handleModelToggle}
                showModel={this.state.showModel}
                updateClinic={this.updateClinic}
                clinic={this.state.clinic}
              />
            )}
            {this.state.childName == "Doctors" && <TablesPage />}
            {this.state.childName == "Patients" && <MapsPage />}
            {this.state.childName == "Ledger" && <NotFoundPage />}
            {this.state.childName == "AddPatient" && <NotFoundPage />}
            {this.state.childName == "404" && <NotFoundPage />}
          </main>
        )}
        <Footer />
      </div>
    );
  }

  updateClinic = async (newClinic) => {
    // axios.put();
  };

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
