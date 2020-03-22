

//Start: Common to all forms
import React from "react";
import ReactDOM from "react-dom";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./styles.css";
import "./styles-custom.css";
import axios from "axios";
const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


//End: common to all forms


// Profile Section
const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <Formik
        initialValues={{
          name: "",
          address: "",
          email: "",
          phone: "",
          qualification: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          address: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),

        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          const url = "http://localhost:1337/profiles/";
          axios.post(url, values).then(response => {
            console.log(response);
          })
        }}

      >
        <Form >
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Address"
            name="address"
            type="text"
            placeholder="Kochi"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <MyTextInput
            label="Phone"
            name="phone"
            type="number"
            placeholder="+91 8281453832"
          />
          <MyTextInput
            label="Qualification"
            name="qualification"
            type="text"
            placeholder="BDS"
          />
          <br />
          <button type="submit">Submit</button>
        </Form>

      </Formik>
    </>
  );
};
//End: of Profile section------------------------------------

// start: of Add Clinic form
const Clinic = () => {
  return (
    <>
      <h1>Add Clinic</h1>
      <Formik
        initialValues={{
          name: "",
          address: "",
          email: "",
          phone: "",
          doctorFees: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          address: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss")
            .required("Required"),
          doctorFees: Yup.number()
            .max(100, " % Must be less than 100 ")
            .required("Required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Address"
            name="address"
            type="text"
            placeholder="Kochi"
          />
          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="jane@formik.com"
          />
          <MyTextInput
            label="Phone"
            name="phone"
            type="number"
            placeholder="+91 8281453832"
          />
          <MyTextInput
            label="Doctor Fees"
            name="doctorFees"
            type="number"
            placeholder="Doctor fees in percentage"
          />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
//End: of Clinic section------------------------------------

//Start: Patient Section
const StyledSelect = styled.select`
  color: var(--blue);
`;
const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;
const StyledLabel = styled.label`
  margin-top: 1rem;
`;
const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};
const Patient = () => {
  return (
    <>
      <h1>Add Patient</h1>
      <Formik
        initialValues={{
          name: "",
          address: "",
          phone: "",
          clinic: "",
          treatmentStatus: "",
          date: "",
          treatmentPlan: ""

        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          address: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          //list of  clinics should be Validated here.
          /* clinic: Yup.string()
           // specify the set of valid values for job type
           // @see http://bit.ly/yup-mixed-oneOf
           .oneOf(
             ["designer", "development", "product", "other"],
             "Invalid Job Type"
           )
           .required("Required")*/
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MyTextInput
            label="Name"
            name="name"
            type="text"
            placeholder="Jane"
          />
          <MySelect label="Clinic" name="clinic">
            <option value="">Select a Clinic</option>
            <option value="Drteeth">DrTeeth</option>
            <option value="other">Other</option>
          </MySelect>
          <MyTextInput
            label="Address"
            name="address"
            type="text"
            placeholder="Kochi"
          />
          <MyTextInput
            label="Phone"
            name="phone"
            type="number"
            placeholder="+91 8281453832"
          />
          <MyTextInput
            label="Date"
            name="date"
            type="date"
          />
          <MyTextInput
            label="Treatment Plan"
            name="treatmentPlan"
            type="number"
          />
          <MySelect label="Treatment Status" name="treatmentStatus">
            <option value="">Select treatment status of patient</option>
            <option value="onTreatment">On Treatment</option>
            <option value="treatmentCompleted">Treatment Completed</option>
          </MySelect>

          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
//End: of Patient section------------------------------------

//Start: of PAtient payment
/*const StyledSelect = styled.select`
  color: var(--blue);
`;
const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;
const StyledLabel = styled.label`
  margin-top: 1rem;
`;
const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};*/
const PatientPayment = () => {
  return (
    <>
      <h1>Patient Payment</h1>
      <Formik
        initialValues={{
          patient: "",
          clinic: "",
          date: "",
          amountPaid: ""
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          address: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          //list of  clinics should be Validated here.
          /* clinic: Yup.string()
           // specify the set of valid values for job type
           // @see http://bit.ly/yup-mixed-oneOf
           .oneOf(
             ["designer", "development", "product", "other"],
             "Invalid Job Type"
           )
           .required("Required")*/
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MySelect label="Clinic" name="clinic">
            <option value="">Select a Clinic</option>
            <option value="Drteeth">DrTeeth</option>
            <option value="other">Other</option>
          </MySelect>
          <MyTextInput
            label="Patient"
            name="patient"
            type="text"
            placeholder="Jane"
          />
          <MyTextInput
            label="Date"
            name="date"
            type="date"
          />
          <MyTextInput
            label="Amount Paid"
            name="amountPaid"
            type="number"
          />


          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
//End: of Patient payment------------------------------------

//Start: Clinic Payment
/*const StyledSelect = styled.select`
  color: var(--blue);
`;
const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;
const StyledLabel = styled.label`
  margin-top: 1rem;
`;
const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};*/
const ClinicPayment = () => {
  return (
    <>
      <h1>Clinic Payment</h1>
      <Formik
        initialValues={{
          clinic: "",
          date: "",
          amountPaid: ""
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          address: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          //list of  clinics should be Validated here.
          /* clinic: Yup.string()
           // specify the set of valid values for job type
           // @see http://bit.ly/yup-mixed-oneOf
           .oneOf(
             ["designer", "development", "product", "other"],
             "Invalid Job Type"
           )
           .required("Required")*/
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <MySelect label="Clinic" name="clinic">
            <option value="">Select a Clinic</option>
            <option value="Drteeth">DrTeeth</option>
            <option value="other">Other</option>
          </MySelect>
          <MyTextInput
            label="Date"
            name="date"
            type="date"
          />
          <MyTextInput
            label="Amount Paid"
            name="amountPaid"
            type="number"
          />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};
//End: of Clinic payment------------------------------------
export default ({ Patient, Clinic, PatientPayment, ClinicPayment, Profile })