import React from "react";
import { Form, Button } from "semantic-ui-react";
import { withFormik, ErrorMessage } from "formik";
import * as Yup from "yup";

// Our inner form component. Will be wrapped with Formik({..})
const MyInnerForm = props => {
  const {
    values,
    touched, // eslint-disable-line no-unused-vars
    errors, // eslint-disable-line no-unused-vars
    dirty, // eslint-disable-line no-unused-vars
    isSubmitting,
    handleChange,
    handleBlur, // eslint-disable-line no-unused-vars
    handleSubmit,
    handleReset, // eslint-disable-line no-unused-vars
  } = props;
  const options = [
    { key: 1, text: "Yes", value: true },
    { key: 2, text: "No", value: false }
  ];
  const titleType = [
    { 
      key: 1, 
      text: 'New Student', 
      value: { 
        newStudent:true, 
        returningStudent: false, 
        landlord: false } 
    },
    { 
      key: 2, 
      text: 'Returning Student', 
      value: {
        newStudent: false, 
        returningStudent: true, 
        landlord: false} },
    { 
      key: 3, 
      text: 'Landlord', 
      value: {newStudent: false, 
        returningStudent: false, 
        landlord: true} }
  ]

  return (
    <Form inverted onSubmit={handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Input fluid
          onChange={handleChange}
          label="First Name"
          name="firstName"
          values={values.firstName}
          placeholder="First Name"
        /> 
        <p style={{color: 'red'}}><ErrorMessage name='firstName'/></p>
        <Form.Input fluid
          onChange={handleChange}
          label="Last Name"
          name="lastName"
          values={values.lastName}
          placeholder="Last Name"
        />
        <p style={{color: 'red'}}><ErrorMessage name='lastName'/></p>
      </Form.Group>
      <Form.Input
        onChange={handleChange}
        label="Email"
        name="email"
        values={values.email}
        placeholder="Email address"
      />
      <p style={{color: 'red'}}><ErrorMessage name='email'/></p>
      <Form.Input
        onChange={handleChange}
        label="Password"
        name="password"
        type="password"
        values={values.password}
        placeholder="Password"
      />
      <p style={{color: 'red'}}><ErrorMessage name='password'/></p>
      <Form.Input
        onChange={handleChange}
        label="Confirm Password"
        name="confirm"
        type="password"
        values={values.confirm}
        placeholder="Confirm Password"
      />
      <p style={{color: 'red'}}><ErrorMessage name='confirm'/></p>
      <Form.Dropdown
        inline
        style={{color: 'white'}}
        onChange={handleChange}
        name="type"
        label="Who are You?"
        placeholder='Select'
        values={values.type}
        options={titleType}
      />
      <p style={{color: 'red'}}><ErrorMessage name='type'/></p>
      <Form.Dropdown 
        inline
        style={{color: 'white'}}
        onChange={handleChange}
        name="agree"
        label="I agree to the Terms and Conditions"
        placeholder='Select'
        values={values.agree.toString()}
        options={options}
      />
      <p style={{color: 'red'}}><ErrorMessage name='agree'/></p>
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </Form>
  );
};

const withSemanticUIFormik = props => WrappedComponent => {
  return withFormik(props)(
    class extends React.Component {
      handleBlur = (e, data) => {
        if (data && data.name) {
          this.props.setFieldValue(data.name, data.value);
          this.props.setFieldTouched(data.name);
        }
      };
      handleChange = (e, data) => {
        if (data && data.name) {
          this.props.setFieldValue(data.name, data.value);
        }
      };
      render() {
        return (
          <WrappedComponent
            {...this.props}
            handleBlur={this.handleBlur}
            handleChange={this.handleChange}
          />
        );
      }
    }
  );
};


const SignEnhancedForm = withSemanticUIFormik({
  mapPropsToValues: () => ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
    agree: false,
    type: '',
  }),
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .required("Name is required!"),
    lastName: Yup.string()
      .required('Password is required'),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required!"),
    password: Yup.string()
      .oneOf([Yup.ref('confirm'), null],"")
      .required('Password is required'),
    confirm: Yup.string()
      .oneOf([Yup.ref('password'), null],"Passwords don't match!")
      .required('Password confirm is required'),

    type: Yup.mixed()
      .required('Selection is required'),

    agree: Yup.bool()
      .oneOf([true], "You must accept terms of agreement!")
      .required('You must agree to terms of agreement!')
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      //alert(JSON.stringify(values, null, 2)); <= provides pop up of values instead of console log
      console.log(values);
      alert("Sign Up Complete!")
      setSubmitting(false);
    }, 1000);
  },
  displayName: "BasicForm" // helps with React DevTools
})(MyInnerForm);



export default SignEnhancedForm
