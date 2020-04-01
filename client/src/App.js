import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./components/home/homepage";
import About from "./components/about/about";
import DoctorSignup from "./components/doctors/register/doctor-signup";
import DoctorRegister from "./components/doctors/register/doctor-register";
import DoctorLogin from "./components/doctors/login/doctor-login";
import DoctorProfileContainer from "./components/doctors/profile/doctor-profile-container";

import ClinicSignup from "./components/clinics/register/clinic-signup";
import ClinicLogin from "./components/clinics/login/clinic-login";
import ClinicProfileContainer from "./components/clinics/profile/clinic-profile-container";
import { Redirect } from "react-router-dom";
import ClinicRegister from "./components/clinics/register/clinic-register";


function App() {
  return (
    <Router>
      <Route path="/dent" exact component={Home} />
      <Route path="/dent/about" exact component={About} />
      <Route path="/dent/doctors/signup" exact component={DoctorSignup} />
      <Route path="/dent/doctors/register" exact component={DoctorRegister} />
      <Route path="/dent/doctors/login" exact component={DoctorLogin} />
      <Route path="/dent/doctors/profile" exact component={DoctorProfileContainer} />
      <Route
        path="/dent/doctors/profile"
        exact
        component={DoctorProfileContainer}
      />
      <Route path="/dent/clinics/signup" exact component={ClinicSignup} />
      <Route path="/dent/clinics/register" exact component={ClinicRegister} />
      <Route path="/dent/clinics/login" exact component={ClinicLogin} />
      <Route
        path="/dent/clinics/profile"
        exact
        component={ClinicProfileContainer}
      />

      <Redirect from="/" to="/dent" />
      <Redirect from="*" to="/dent" />
    </Router>
  );
}

export default App;
