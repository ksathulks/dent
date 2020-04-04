import React from "react";
import {BrowserRouter as Router, useHistory} from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

 const DoctorInvite = (props)=>{
    const history = useHistory();
    return(
        
        <Formik
        initialValues={{
            email:""
        }}
        validationSchema = {Yup.object().shape({
            email: Yup.string()
            .email("Email is invalid")
            .required("Email is required")
        })}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              axios
              .post("http://localhost:1337/invitations",
               {clinic:values.email,
              doctor:props.doctormail
            })
              
              .then(response => {
                  
                  if(response.status ==200){
                      alert("Invitation send")
                    console.log("invitation send",response);
                    console.log(props)
                     console.log(props.doctormail)
                     
                    
                  }else{
                      alert("Invitation failed")
                  }
              })
              .catch(error =>{
                console.log("An error occurred:", error);
                alert(JSON.parse(JSON.stringify(error)).message);
              })
              setSubmitting(false);
            }, 400);
          }}
          >
          <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <button type="submit">Submit</button>
          </Form>
          </Formik>
        
    )
} 
export default DoctorInvite;