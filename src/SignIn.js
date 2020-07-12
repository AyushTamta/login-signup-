import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link as RouterLink } from "react-router-dom";
import "./SignIn.css";
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
        <h1l>Already a member? Login</h1l>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberUser: false
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("No password provided.")
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <Field name="email">
              {({ field, form, meta }) => (
                <TextField
                className="text-box"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  inputProps={{ ...field }}
                  error={meta.touched && typeof meta.error !== "undefined"}
                />
                    )}
            </Field>

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



          
            <Field name="password" type="password">
              {({ field, form, meta }) => (
                <TextField
                className="text-box"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  inputProps={{ ...field }}
                  error={meta.touched && typeof meta.error !== "undefined"}
                />
              )}
            </Field>
            <Field name="rememberUser" type="checkbox">
              {({ field }) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      value="rememberUser"
                      color="primary"
                      inputProps={{ ...field }}
                      checked={field.value}
                    />
                  }
                  label="Remember me"
                />
              )}
            </Field>
            <Link href="#" className="forgot">
                  Forgot password?
                </Link>
            <button
              type="submit"
              fullWidth
              variant="contained"
          
              className="button"
            >
              Login
            </button>            
                < Link component={RouterLink} to="/signup" className="account">
                  {"Don't have an account? Sign Up"}
                </Link>
          </Form>
        </Formik>
      </div>
      
      <div >
                <img src={med} className="med"/>
               </div>
  
    </div>
  )};
    
