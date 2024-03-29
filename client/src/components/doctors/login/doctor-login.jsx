import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

const DoctorLogin = props => {
  const history = useHistory();
  return (
    <Formik
      initialValues={{
        // name: '',
        email: "",
        password: ""
        //   confirmPassword: ""
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
          .required("Password is required")
      })}
      // onSubmit={fields => {
      //     alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
      // }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          axios
            .post("http://localhost:1337/auth/local", {
              // username: values.email,
              identifier: values.email,
              password: values.password
            })
            .then(response => {
              // Handle success.
              console.log("Well done!");
              console.log("User profile", response.data.user);
              console.log("User token", response.data.jwt);
              // this.setState({
              //     regSuccess: true,
              //     data: values
              // });
              // console.log(this.state)
              // if(response.data.status)
              if (response.status == 200) {
                alert("login status: success");
                console.log(response);
                //   this.setState({
                //     user: response.data
                //   });
                //   console.log("state profile", this.state.user.data.user);
                //   console.log("state token", this.state.user.data.jwt);
                //   this.render(<ClinicProfileContainer props={this.state} />);
                //   this.props.history.push("/dent/clinics/profile");
                sessionStorage.setItem("jwt", response.data.jwt);
                sessionStorage.setItem(
                  "user",
                  JSON.stringify(response.data.user)
                );
                history.push("/dent/doctors/profile");
              } else {
                alert("sign-up failed, try again later");
              }

              // this.props.history.push("/dent/clinics/login");
            })
            .catch(error => {
              // Handle error.
              console.log("An error occurred:", error);
              alert(JSON.parse(JSON.stringify(error)).message);
            });

          setSubmitting(false);
        }, 400);
      }}
      render={({ errors, status, touched }) => (
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              {/* <div className="col-md-6 offset-md-3"> */}
              {/* <h3>Login</h3> */}
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
                    <button type="submit" className="btn btn-primary mr-2">
                      Login
                    </button>
                    <button type="reset" className="btn btn-secondary">
                      Reset
                    </button>
                  </div>
                  Not yet registered?
                  <button
                    type="submit"
                    className="btn btn-success mr-2"
                    onClick={() => props.toggleLoginOrSignup()}
                  >
                    {" "}
                    Register!!!
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
};

export default DoctorLogin;
