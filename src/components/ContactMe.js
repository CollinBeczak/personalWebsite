import React from "react";
import { Formik, Field, Form } from "formik";

const ContactMe = () => {
  return (
    <div className="contactContainer ">
      <div>
        <h1 className="contactHeader col-6 flex">Contact</h1>
      </div>
      <div>
        <Formik
          initialValues={{
            Name: "",
            email: "",
            description: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form className="formContainer ">
            <Field
              className="fields"
              id="name"
              name="name"
              placeholder="Name"
            />

            <Field
              className="fields"
              id="email"
              name="email"
              placeholder="Email"
              type="email"
            />

            <Field
              className="descriptionField fields"
              id="description"
              name="description"
              placeholder="Description"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ContactMe;
