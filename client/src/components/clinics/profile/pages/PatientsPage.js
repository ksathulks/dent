import React from "react";
import { MDBDataTable } from "mdbreact";
import PatientEditModel from "../pages/sections/PatientEditModel";
import PatientAddModel from "../pages/sections/PatientAddModel";

const PatientsPage = (props) => {
  var rows = [];
  if (props.docEmail != "") {
    var filteredPatients = props.patients.filter((p) => {
      return p.docEmail === props.docEmail;
    });
  } else {
    filteredPatients = props.patients;
  }
  filteredPatients.map((p) => {
    rows.push({
      ...p,
      button: (
        <a>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => {
              props.handleEditPatient(p);
            }}
          >
            Modify
          </button>
        </a>
      ),
    });
  });
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Phone",
        field: "phone",
        sort: "asc",
        width: 270,
      },
      {
        label: "Email",
        field: "email",
        sort: "asc",
        width: 200,
      },
      {
        label: "TreatmentPlan",
        field: "treatmentPlan",
        sort: "asc",
        width: 150,
      },
      {
        label: "RegDate",
        field: "regDate",
        sort: "asc",
        width: 270,
      },
      {
        label: "DocEmail",
        field: "docEmail",
        sort: "asc",
        width: 200,
      },
      {
        label: "Balance",
        field: "balance",
        sort: "asc",
        width: 200,
      },
      {
        label: "Modify",
        field: "button",
        sort: "asc",
        width: 150,
      },
    ],
    rows: rows,
    // [
    // {
    //   name: "Tiger Nixon",
    //   position: "System Architect",
    //   office: "Edinburgh",
    //   age: "61",
    //   date: "2011/04/25",
    //   salary: "$320",
    // },
    // {
    //   name: "Garrett Winters",
    //   position: "Accountant",
    //   office: "Tokyo",
    //   age: "63",
    //   date: "2011/07/25",
    //   salary: "$170",
    // },
    // ],
  };

  // return <MDBDataTable striped bordered hover data={data} />;
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => {
          props.viewPatientsWRTDoctor("");
        }}
      >
        Reset
      </button>
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={() => {
          console.log(props);
          // props.viewPatientsWRTDoctor("");
          props.handleModelToggle("addPatientModel");
          console.log(props);
        }}
      >
        Add New
      </button>
      <MDBDataTable
        striped
        hover
        data={data}
        // getTdProps={(rows, column, instance) => {
        //   // if (rows && rows.row) {
        //   return {
        //     onClick: (e) => {
        //       console.log(rows.row);
        //     },
        //   };
        //   // } else {
        //   //   return {};
        //   // }
        // }}
      />
      {props.showaddPatientModel && props.clinic ? (
        <PatientAddModel
          handleModelToggle={props.handleModelToggle}
          clinicId={props.clinic._id}
          showModel={props.showaddPatientModel}
          doctors={props.doctors}
          updatedClinic={props.updatedClinic}
          patients={props.clinic.patients}
        />
      ) : null}
      {props.showeditPatientModel && props.patient ? (
        <PatientEditModel
          handleEditPatient={props.handleEditPatient}
          handleModelToggle={props.handleModelToggle}
          clinicId={props.clinic._id}
          showModel={props.showeditPatientModel}
          doctors={props.doctors}
          updatedClinic={props.updatedClinic}
          patient={props.patient}
        />
      ) : null}
    </React.Fragment>
  );
};

export default PatientsPage;
