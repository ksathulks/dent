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
          const url = "http://localhost:1337/clinic-payments/";
          axios.post(url, values).then(response => {
            console.log(response);
          })
        }}
      >
        <Form>
        <MyTextInput
            label="Clinic"
            name="clinic"
            type="text"
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
export default (ClinicPayment);
  //End: of Clinic payment------------------------------------