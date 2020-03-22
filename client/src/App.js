import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Clinic from "./Clinic"
import Patient from './Patient'
import PatientPayment from './PatientPayment'
import ClinicPayment from './ClinicPayment'
import Profile from './Profile'
import EmployeeList from './EmployeeList'
function App() {
  return (
    <Router>
      <Route path="/" exact component={EmployeeList} />
      <Route path="/clinic" exact component={Clinic} />
      <Route path="/patient" exact component={Patient} />
      <Route path="/patient-payment" exact component={PatientPayment} />
      <Route path="/clinic-payment" exact component={ClinicPayment} />
      <Route path="/profile" exact component={Profile} />
    </Router>
  );
}

export default App;
