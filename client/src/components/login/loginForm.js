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
        handleReset // eslint-disable-line no-unused-vars
    } = props;
    const options = [ // eslint-disable-line no-unused-vars
        { key: 1, text: "Yes", value: true },
        { key: 2, text: "No", value: false }
    ];

  return (
        <Form inverted onSubmit={handleSubmit} >
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
            <Button type="submit" disabled={isSubmitting}>Submit</Button>
        </Form>
    );
};

const withSemanticUIFormik = props => WrappedComponent => {
    return withFormik(props)(
    class extends React.Component {
        handleSubmit = (values) => {
            console.log(values)
        };
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


const LogEnhancedForm = withSemanticUIFormik({
    mapPropsToValues: () => ({
        email: "",
        password: "",
    }),
    validationSchema: Yup.object().shape({
        email: Yup.string()
        .email("Invalid email address")
        .required("Email is required!"),
        password: Yup.string()
        .required('Password is required')
    }),
    handleSubmit: (values, { setSubmitting }) => {
        setTimeout(() => {
            console.log(values);
            //alert(JSON.stringify(values, null, 2)); <= this provides pop up of values
            setSubmitting(false);
        }, 1000);
    },
    displayName: "BasicForm" // helps with React DevTools
})(MyInnerForm);



export default LogEnhancedForm
