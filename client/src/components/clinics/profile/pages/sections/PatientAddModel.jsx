import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import {
  Formik,
  Field,
  Form,
  ErrorMessage,
  useField,
  useFormikContext,
} from "formik";

import styled from "@emotion/styled";
import * as Yup from "yup";
import axios from "axios";

class PatientAddModel extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    modal8: this.props.showModel,
  };

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
    this.props.handleModelToggle("addPatientModel");
  };

  render() {
    // Styled components ....
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
    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.state.modal8}
          toggle={this.toggle(8)}
          fullHeight
          position="right"
        >
          <MDBModalHeader toggle={this.toggle(8)}>
            Add New Patient
          </MDBModalHeader>
          <MDBModalBody>
            <Formik
              initialValues={{
                name: "",
                address: "",
                phone: "",
                treatmentPlan: "",
                regDate: "",
                balance: "",
                email: "",
                docEmail: "",
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Name is required"),
                address: Yup.string().required("Address is required"),
                phone: Yup.number().required("Phone number is required"),
                treatmentPlan: Yup.number().required(
                  "treatmentPlan  is required"
                ),
                regDate: Yup.date().required("date is required"),
                balance: Yup.number().required("balance  is required"),
                // .min(6000000000, "Invalid number")
                // .max(9999999999, "Invalid number"),
                // drFee: Yup.number()
                //     .required('Is required'),
                email: Yup.string()
                  .email("Email is invalid")
                  .required("Email is required"),
                docEmail: Yup.string()
                  .email("Assigned Doctor is invalid")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  const url = "http://localhost:1337/patients";
                  axios
                    .post(url, values)
                    .then((response) => {
                      if (response.status == 200) {
                        alert("patient registered successfully");
                        const _patients = this.props.patients;
                        _patients.push(response.data);
                        const _clinic = {
                          patients: _patients,
                        };
                        axios
                          .put(
                            "http://localhost:1337/clinics/" +
                              this.props.clinicId,
                            _clinic
                          )
                          .then((response) => {
                            if (response.status == 200) {
                              alert("patient added successfully");
                              this.props.handleModelToggle("addPatientModel");
                              this.props.updatedClinic();
                            }
                          })
                          .catch((e) => {
                            alert(JSON.parse(JSON.stringify(e)).message);
                          });
                      }
                    })
                    .catch((e) => {
                      alert(JSON.parse(JSON.stringify(e)).message);
                    });
                  setSubmitting(false);
                }, 400);
              }}
              render={({ errors, status, touched }) => (
                <div className="jumbotron">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-12">
                        <Form>
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <Field
                              name="name"
                              type="text"
                              className={
                                "form-control" +
                                (errors.name && touched.name
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <Field
                              name="address"
                              type="text"
                              className={
                                "form-control" +
                                (errors.address && touched.address
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="address"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <Field
                              name="phone"
                              type="number"
                              className={
                                "form-control" +
                                (errors.phone && touched.phone
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="treatmentPlan">
                              Treatment Plan
                            </label>
                            <Field
                              name="treatmentPlan"
                              type="number"
                              className={
                                "form-control" +
                                (errors.treatmentPlan && touched.treatmentPlan
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="treatmentPlan"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="balance">Balance</label>
                            <Field
                              name="balance"
                              type="number"
                              className={
                                "form-control" +
                                (errors.balance && touched.balance
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="balance"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="regDate">Date</label>
                            <Field
                              name="regDate"
                              type="date"
                              className={
                                "form-control" +
                                (errors.regDate && touched.regDate
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="regDate"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field
                              name="email"
                              type="email"
                              className={
                                "form-control" +
                                (errors.email && touched.email
                                  ? " is-invalid"
                                  : "")
                              }
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="docEmail"></label>
                            <MySelect label="Assigned Doctor" name="docEmail">
                              <option value="">Select a doctor</option>
                              {this.props.doctors.map((doc) => {
                                return (
                                  <option value={doc.email}>{doc.name}</option>
                                );
                              })}
                            </MySelect>
                            <ErrorMessage
                              name="docEmail"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          <div className="form-group">
                            <MDBBtn type="submit" color="primary">
                              Save changes
                            </MDBBtn>
                            <button type="reset" className="btn btn-secondary">
                              Reset
                            </button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={this.toggle(8)}>
              Close
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default PatientAddModel;
