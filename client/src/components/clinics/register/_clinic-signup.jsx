import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./clinic-signup.css";

function _ClinicSignup(props) {
  let history = useHistory();
  return (
    <Formik
      initialValues={{
        // name: '',
        email: "",
        password: "",
        confirmPassword: ""
      }}
      validationSchema={Yup.object().shape({
        // name: Yup.string()
        //     .required('Name is required'),

        email: Yup.string()
          .email("Email is invalid")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .max(16, "Password must be max 16 characters")
          // .matches("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]$")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Passwords must match")
          .required("Confirm Password is required")
      })}
      // onSubmit={fields => {
      //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
      // }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          const affirm = window.confirm("Confirm?");
          if (affirm) {
            axios
              .post("http://localhost:1337/auth/local/register", {
                username: values.email,
                email: values.email,
                password: values.password
              })
              .then(response => {
                // Handle success.
                console.log("Well done!");
                console.log("User profile", response.data.user);
                console.log("kkkkkkkkkk", response);
                console.log("User token", response.data.jwt);
                // this.setState({
                //     regSuccess: true,
                //     data: values
                // });
                // console.log(this.state)
                // if(response.data.status)
                if (response.status == 200) {
                  alert("sign-up status: SUCCESFULL");
                  sessionStorage.setItem("jwt", response.data.jwt);
                  //   history.push("/dent/clinics/login");
                  {
                    props.toggleLoginOrSignup();
                  }
                } else {
                  alert("sign-up failed, try again later");
                }
              })
              .catch(error => {
                // Handle error.
                console.log("An error occurred:", error);
                alert(JSON.parse(JSON.stringify(error)).message);
              });
          }
          setSubmitting(false);
        }, 400);
      }}
      render={({ errors, status, touched }) => (
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-6 offset-md-3"> */}
              {/* <h3>Sign up</h3> */}
              <div>
                <Form>
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
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      name="password"
                      type="password"
                      className={
                        "form-control" +
                        (errors.password && touched.password
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className={
                        "form-control" +
                        (errors.confirmPassword && touched.confirmPassword
                          ? " is-invalid"
                          : "")
                      }
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary mr-2">
                      Register
                    </button>
                    <button type="reset" className="btn btn-secondary">
                      Reset
                    </button>
                  </div>
                  <span>already registered! click here to login</span>
                  <button
                    type="submit"
                    className="btn btn-success mr-2"
                    onClick={() => props.toggleLoginOrSignup()}
                  >
                    Login
                  </button>
                </Form>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      )}
    />
  );
}

export default _ClinicSignup;
