// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Formik, Form, useField } from 'formik';
// import styled from '@emotion/styled';
// import * as Yup from 'yup';
// import "./clinic-register.css";

// const MyTextInput = ({ label, ...props }) => {
//     // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
//     // which we can spread on <input> and also replace ErrorMessage entirely.
//     const [field, meta] = useField(props);
//     return (
//         <>
//             <label htmlFor={props.id || props.name}>{label}</label>
//             <input className="text-input" {...field} {...props} />
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </>
//     );
// };

// const MyCheckbox = ({ children, ...props }) => {
//     // We need to tell useField what type of input this is
//     // since React treats radios and checkboxes differently
//     // than inputs/select/textarea.
//     const [field, meta] = useField({ ...props, type: 'checkbox' });
//     return (
//         <>
//             <label className="checkbox">
//                 <input type="checkbox" {...field} {...props} />
//                 {children}
//             </label>
//             {meta.touched && meta.error ? (
//                 <div className="error">{meta.error}</div>
//             ) : null}
//         </>
//     );
// };

// // // Styled components ....
// // const StyledSelect = styled.select`
// //   /** ... * /
// // `;

// // const StyledErrorMessage = styled.div`
// //   /** ... * /
// // `;

// // const StyledLabel = styled.label`
// //  /** ...* /
// // `;

// // const MySelect = ({ label, ...props }) => {
// //     const [field, meta] = useField(props);
// //     return (
// //         <>
// //             <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
// //             <StyledSelect {...field} {...props} />
// //             {meta.touched && meta.error ? (
// //                 <StyledErrorMessage>{meta.error}</StyledErrorMessage>
// //             ) : null}
// //         </>
// //     );
// // };

// // And now we can use these
// const ClinicRegister = () => {
//     return (
//         <>
//             <h1>Register!</h1>
//             <Formik
//                 initialValues={{
//                     firstName: '',
//                     lastName: '',
//                     email: '',
//                     acceptedTerms: false, // added for our checkbox
//                     // jobType: '', // added for our select
//                 }}
//                 validationSchema={Yup.object({
//                     firstName: Yup.string()
//                         .max(15, 'Must be 15 characters or less')
//                         .required('Required'),
//                     lastName: Yup.string()
//                         .max(20, 'Must be 20 characters or less')
//                         .required('Required'),
//                     email: Yup.string()
//                         .email('Invalid email address')
//                         .required('Required'),
//                     acceptedTerms: Yup.boolean()
//                         .required('Required')
//                         .oneOf([true], 'You must accept the terms and conditions.'),
//                     // jobType: Yup.string()
//                     //     .oneOf(
//                     //         ['designer', 'development', 'product', 'other'],
//                     //         'Invalid Job Type'
//                     //     )
//                     //     .required('Required'),
//                 })}
//                 onSubmit={(values, { setSubmitting }) => {
//                     setTimeout(() => {
//                         alert(JSON.stringify(values, null, 2));
//                         setSubmitting(false);
//                     }, 400);
//                 }}
//             >
//                 <Form>
//                     <MyTextInput
//                         label="First Name"
//                         name="firstName"
//                         type="text"
//                         placeholder="Jane"
//                     />
//                     <MyTextInput
//                         label="Last Name"
//                         name="lastName"
//                         type="text"
//                         placeholder="Doe"
//                     />
//                     <MyTextInput
//                         label="Email Address"
//                         name="email"
//                         type="email"
//                         placeholder="jane@formik.com"
//                     />
//                     {/* <MySelect label="Job Type" name="jobType">
//                         <option value="">Select a job type</option>
//                         <option value="designer">Designer</option>
//                         <option value="development">Developer</option>
//                         <option value="product">Product Manager</option>
//                         <option value="other">Other</option>
//                     </MySelect> */}
//                     <MyCheckbox name="acceptedTerms">
//                         I accept the terms and conditions
//           </MyCheckbox>

//                     <button type="submit">Submit</button>
//                 </Form>
//             </Formik>
//         </>
//     );
// }

// export default (ClinicRegister)

import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Model from "../../shared/model/model";
import { useHistory } from "react-router-dom";
// import { Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

const DoctorRegister = () => {
  let _email = JSON.parse(sessionStorage.getItem("user")).email;
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        name: "",
        // lastName: '',
        address: "",
        phone: "",
        // drFee: '',

        email: _email
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
          .required("Email is required")
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
          // alert(JSON.stringify(values, null, 2));
          const url = "http://localhost:1337/doctors/";
          axios
            .post(url, values)
            .then(response => {
              console.log(response);
              if (response.status == 200) {
                alert("added successfully");
                // this.setState(state => ({
                //   regSuccess: true,
                //   data: values
                // }));
                // this.setState({
                //     regSuccess: true,
                //     data: values
                // });

                history.push("/dent/doctors/profile");
              }
            })
            .catch(e => {
              console.log(e);
              alert(JSON.parse(JSON.stringify(e)).message);
            });
          setSubmitting(false);
        }, 400);
      }}
      render={({ errors, status, touched }) => (
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <h3>Registration</h3>
                <div>
                  <Form>
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <Field
                        name="name"
                        type="text"
                        className={
                          "form-control" +
                          (errors.name && touched.name ? " is-invalid" : "")
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
                          (errors.phone && touched.phone ? " is-invalid" : "")
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
                          (errors.email && touched.email ? " is-invalid" : "")
                        }
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
                      <button type="submit" className="btn btn-primary mr-2">
                        Register
                      </button>
                      <button type="reset" className="btn btn-secondary">
                        Reset
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  );
};

export default DoctorRegister;
