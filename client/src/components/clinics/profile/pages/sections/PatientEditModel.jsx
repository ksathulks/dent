import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { useHistory } from "react-router-dom";

class PatientEditModel extends Component {
  constructor(props) {
    super(props);
    // const clinic = this.props.clinic;
    // var _name = clinic.name;
    // console.log(this.props.clinic.name);
  }
  state = {
    modal8: this.props.showModel,
    clinic: {
      name: "",
      address: "",
      phone: "",
    },
  };

  componentDidMount() {
    if (this.props.clinic) this.setState({ clinic: this.props.clinic });
  }

  toggle = (nr) => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber],
    });
    this.props.handleModelToggle();
  };

  render() {
    const { name, address, phone, email, _id } = this.state.clinic;
    return (
      <MDBContainer>
        <MDBModal
          isOpen={this.state.modal8}
          toggle={this.toggle(8)}
          fullHeight
          position="right"
        >
          <MDBModalHeader toggle={this.toggle(8)}>Update</MDBModalHeader>
          <MDBModalBody>
            <Formik
              initialValues={{
                name: name,
                // lastName: '',
                address: address,
                phone: phone,
                // drFee: '',

                email: email,
                // password: '',
                // confirmPassword: ''
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required("Name is required"),
                // lastName: Yup.string()
                //     .required('Last Name is required'),
                address: Yup.string().required("Address is required"),
                phone: Yup.number().required("Phone number is required"),
                // .min(6000000000, "Invalid number")
                // .max(9999999999, "Invalid number"),
                // drFee: Yup.number()
                //     .required('Is required'),
                email: Yup.string()
                  .email("Email is invalid")
                  .required("Email is required"),
                // password: Yup.string()
                //     .min(6, 'Password must be at least 6 characters')
                //     .max(16, 'Password must be max 16 characters')
                //     .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
                //     .required('Password is required'),
                // confirmPassword: Yup.string()
                //     .oneOf([Yup.ref('password'), null], 'Passwords must match')
                //     .required('Confirm Password is required')
              })}
              // onSubmit={fields => {
              //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
              // }}

              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  // let _clinic = this.state.clinic;
                  // _clinic.name = values.name;
                  // _clinic.address = values.address;
                  // _clinic.phone = values.phone;
                  // alert(JSON.stringify(values, null, 2));
                  const url = "http://localhost:1337/clinics/" + _id;
                  axios
                    .put(url, values)
                    .then((response) => {
                      console.log(response);
                      if (response.status == 200) {
                        alert("updated successfully");
                        this.props.handleModelToggle();
                        this.props.updatedClinic();
                        // this.setState(state => ({
                        //   regSuccess: true,
                        //   data: values
                        // }));
                        // this.setState({
                        //     regSuccess: true,
                        //     data: values
                        // });

                        // history.push("/dent/clinics/profile");
                      }
                    })
                    .catch((e) => {
                      console.log(e);
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
                          {/* <div className="form-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                        <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                                    </div> */}
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
                              disabled
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="invalid-feedback"
                            />
                          </div>
                          {/* <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                        <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                                        <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                                    </div> */}
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

export default PatientEditModel;
