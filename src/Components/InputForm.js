import React from "react";
import "./InputForm.css";
import { Formik } from "formik";
import * as Yup from "yup";

const InputForm = () => {
  const userSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("*Please enter firstname")
      .min(2, "*Minimum of 2 characters")
      .matches("[a-zA-Z]+"),
    lastName: Yup.string()
      .required("*Please enter lastname")
      .min(2, "*Minimum of 2 characters"),
    email: Yup.string()
      .required("*Please enter valid email")
      .email("*Invalid email format"),
    eid: Yup.number().required("*Please enter your EID"),
    birthdate: Yup.date().required("Please enter your birthdate"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        eid: "",
        birthdate: "",
      }}
      validationSchema={userSchema}
      onSubmit={async (values, actions) => {
        const { firstName, lastName, email, eid, birthdate } = values;
        try {
          //json server
          const response = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              eid,
              birthdate,
            }),
          });
          const parsedResponse = await response.json();

          if (!response.ok) {
            throw new Error(
              `Server returned a response of ${parsedResponse.message} with status code of ${parsedResponse.status}.`
            );
          }
          alert("Data successfully save!");
          window.location.reload(false);
          actions.resetForm();
        } catch (error) {
          console.error(error.message);
          actions.resetForm();
        }
      }}
    >
      {(formik) => (
        <div className="card">
          <div className="form">
            <input
              placeholder="Enterprise ID"
              name="eid"
              type="number"
              onChange={formik.handleChange("eid")}
              onBlur={formik.handleBlur("eid")}
              value={formik.values.eid}
              required
              disabled={formik.isSubmitting}
              style={{
                borderColor:
                  formik.errors.eid && formik.touched.eid ? "red" : "black",
                border: "1px",
                borderStyle: "solid",
                borderRadius: "5px",
                padding: "10px",
                outline: "none",
              }}
            />
            <small className="validation">
              {formik.errors.eid && formik.touched.eid
                ? formik.errors.eid
                : null}
            </small>
          </div>

          <div className="form">
            <input
              placeholder="First Name"
              name="firstname"
              type="text"
              onChange={formik.handleChange("firstName")}
              value={formik.values.firstName}
              onBlur={formik.handleBlur("firstName")}
              required
              disabled={formik.isSubmitting}
              pattern={"[a-zA-Z]"}
              style={{
                borderColor:
                  formik.errors.firstName && formik.touched.firstName
                    ? "red"
                    : "black",
                border: "1px",
                borderStyle: "solid",
                borderRadius: "5px",
                padding: "10px",
                outline: "none",
              }}
            />
            <small className="validation">
              {formik.errors.firstName && formik.touched.firstName
                ? formik.errors.firstName
                : null}
            </small>
          </div>
          <div className="form">
            <input
              placeholder="Last Name"
              name="lastname"
              onChange={formik.handleChange("lastName")}
              value={formik.values.lastName}
              onBlur={formik.handleBlur("lastName")}
              type="text"
              required
              disabled={formik.isSubmitting}
              style={{
                borderColor:
                  formik.errors.lastName && formik.touched.lastName
                    ? "red"
                    : "black",
                border: "1px",
                borderStyle: "solid",
                borderRadius: "5px",
                padding: "10px",
                outline: "none",
              }}
            />
            <small style={{ color: "red" }}>
              {formik.errors.lastName && formik.touched.lastName
                ? formik.errors.lastName
                : null}
            </small>
          </div>
          <div className="form">
            <input
              placeholder="Email"
              name="email"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
              disabled={formik.isSubmitting}
              onBlur={formik.handleBlur("email")}
              type="email"
              required
              style={{
                borderColor:
                  formik.errors.email && formik.touched.email ? "red" : "black",
                border: "1px",
                borderStyle: "solid",
                borderRadius: "5px",
                padding: "10px",
                outline: "none",
              }}
            />
            <small className="validation">
              {formik.errors.email && formik.touched.email
                ? formik.errors.email
                : null}
            </small>
          </div>

          <div className="form">
            <input
              name="birthdate"
              type="date"
              onChange={formik.handleChange("birthdate")}
              value={formik.values.birthdate}
              disabled={formik.isSubmitting}
              onBlur={formik.handleBlur("birthdate")}
              style={{
                borderColor:
                  formik.errors.birthdate && formik.touched.birthdate
                    ? "red"
                    : "black",
                border: "1px",
                borderStyle: "solid",
                borderRadius: "5px",
                padding: "10px",

                outline: "none",
              }}
              required
              className="inputText"
            />
            <small className="validation">
              {formik.errors.birthdate && formik.touched.birthdate
                ? formik.errors.birthdate
                : null}
            </small>
          </div>
          <button
            type="submit"
            className="buttonSave"
            onClick={formik.handleSubmit}
            disabled={formik.isSubmitting || !formik.isValid}
          >
            Save
          </button>
        </div>
      )}
    </Formik>
  );
};

export default InputForm;
