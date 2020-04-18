import React from "react";
import { MDBDataTable } from "mdbreact";

const DoctorPage = (props) => {
  var rows = [];
  props.doctors.map((d) => {
    rows.push({
      name: d.name,
      phone: d.phone,
      email: d.email,
      button: (
        <a>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => {
              props.viewPatientsWRTDoctor(d.email);
            }}
          >
            View
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
        label: "Patients",
        field: "button",
        sort: "asc",
        width: 150,
      },
      // {
      //   label: "Age",
      //   field: "age",
      //   sort: "asc",
      //   width: 100,
      // },
      // {
      //   label: "Start date",
      //   field: "date",
      //   sort: "asc",
      //   width: 150,
      // },
      // {
      //   label: "Salary",
      //   field: "salary",
      //   sort: "asc",
      //   width: 100,
      // },
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
  );
};

export default DoctorPage;
