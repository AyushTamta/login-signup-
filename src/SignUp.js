import React from "react";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import "./SignIn.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import med from "./Assets/logini.png";
import { FormTextInput as TextInput } from "./VisualComponents/Inputs";


const useStyles = makeStyles(theme => ({
  paper: {},
  form: {},
  avatar: {},
  submit: {}
}));

export default function SignUp() {
  const classes = useStyles();

  return (

    <div className="wrapper">
      <div className="form-wrapper">
        <h1>New Member?</h1>
       
        <Formik 
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            mailerConsent: false
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string(),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .required("Required")
              .matches(
                /^(?=.*[a-z])(?=.{8,})/,
                "too short"
              )
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form  noValidate>
            <TextInput
            className="text-box"
              variant="outlined"
            
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
            />
            <TextInput
             className="text-box"
              variant="outlined"
              margin="normal"
              
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
            />

            <TextInput
            className="text-box"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Field"
              label="Feild"
              name="Feild"
              autoComplete="Feild"
              autoFocus
            />





            <TextInput
             className="text-box"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextInput
             className="text-box"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
            />

            
            <Link component={RouterLink} to="/signin" className="account">
              {"Already have an account? Sign In"}
            </Link>
            <button
               type="submit"
               className="button"
            >
              Sign Up
            </button>
          </Form>
        </Formik>
      </div>

                <div >
                <img src={med} className="med"/>
               </div>
  

    </div>
  );
}
