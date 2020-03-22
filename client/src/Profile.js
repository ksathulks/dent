

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
export default (Profile);