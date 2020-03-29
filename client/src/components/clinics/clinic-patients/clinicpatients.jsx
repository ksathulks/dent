import React, { Component } from "react";

const ClinicPatients = props => {
  console.log(props.patients[0]);
  const {
    name,
    email,
    phone,
    address,
    regDate,
    treatmentPlan,
    treatmentStatus,
    balance
  } = props.patients[0];
  return (
    <div>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{address}</p>
      <p>{regDate}</p>
      <p>{treatmentPlan}</p>
      <p>{treatmentStatus}</p>
      <p>{balance}</p>
    </div>
  );
};

export default ClinicPatients;
