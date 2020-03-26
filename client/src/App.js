import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Clinic from "./Clinic"
// import Patient from './Patient'
// import PatientPayment from './PatientPayment'
// import ClinicPayment from './ClinicPayment'
// import Profile from './Profile'
// import EmployeeList from './EmployeeList'
import Home from './components/home/homepage'
import About from './components/about/about'

import DoctorRegister from './components/doctors/register/doctor-register'
import DoctorLogin from './components/doctors/login/doctor-login'
import DoctorProfile from './components/doctors/profile/doctor-profile'

import ClinicRegister from './components/clinics/register/clinic-register'
import ClinicLogin from './components/clinics/login/clinic-login'
// import ClinicProfile from './components/clinics/profile/clinic-profile'
import ClinicProfileContainer from './components/clinics/profile/clinic-profile-container';




function App() {
  return (
    <Router>
      {/* <Route path="/" exact component={EmployeeList} />
      <Route path="/clinic" exact component={Clinic} />
      <Route path="/patient" exact component={Patient} />
      <Route path="/patient-payment" exact component={PatientPayment} />
      <Route path="/clinic-payment" exact component={ClinicPayment} /> */}
      {/* <Route path="/profile" exact component={Profile} /> */}

      <Route path="/" exact component={Home} />
      <Route path="/dent" exact component={Home} />
      <Route path="/dent/about" exact component={About} />

      <Route path="/dent/doctors/register" exact component={DoctorRegister} />
      <Route path="/dent/doctors/login" exact component={DoctorLogin} />
      <Route path="/dent/doctors/profile" exact component={DoctorProfile} />

      <Route path="/dent/clinics/register" exact component={ClinicRegister} />
      <Route path="/dent/clinics/login" exact component={ClinicLogin} />
      <Route path="/dent/clinics/profile" exact component={ClinicProfileContainer} />

    </Router>
  );
}

export default App;
