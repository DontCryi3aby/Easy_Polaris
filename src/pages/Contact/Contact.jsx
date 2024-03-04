import {
  Box,
  Button,
  Divider,
  Form,
  FormLayout,
  LegacyCard,
  Page,
  Text,
  TextField,
} from "@shopify/polaris";
import { useFormik } from "formik";
import ContactSchema from "./ContactSchema";
import React, { useState } from "react";
import axiosClient from "../../utils/httpRequest";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleFormSubmit = (values) => {
    (async () => {
      setIsSubmitting(true);
      try {
        const { msg } = await axiosClient.post(
          "https://testapi.io/api/anhez/contact-us",
          values
        );

        setIsSubmitting(false);
        setIsSubmitSuccess(true);
        setSuccessMsg(msg);
      } catch (error) {
        setIsSubmitSuccess(false);
      }
    })();
    console.log(values);
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
        subject: "",
        message: "",
      },
      validationSchema: ContactSchema,
      onSubmit: handleFormSubmit,
    });

  const customHandleChange = (value, id) => {
    handleChange({ target: { id, value } });
  };

  return (
    <Page title="Contact">
      <LegacyCard sectioned>
        <Box style={{ padding: "0 20px" }}>
          {isSubmitSuccess ? (
            <Text variant="headingXl" as="h2" tone="success">
              {successMsg}
            </Text>
          ) : (
            <>
              <p className="custom-contact-helptext">
                Don't hesitate to contact us if you face any problem or have any
                question about the app. We are happy to help you.
              </p>
              <p className="custom-contact-helptext">
                Please give us permisstion to access your Shopify Admin. So we
                could support you quickly. We need to access <b>Apps</b> and{" "}
                <b>Online Store</b> → <b>Themes</b>. Our email address for
                creating staff account is: <b>contact@globosoftware.net</b>
              </p>
            </>
          )}

          <Box style={{ margin: "20px 0" }}>
            <Divider borderColor="border" />
          </Box>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                id="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={customHandleChange}
                label="Your Email"
                type="email"
                autoComplete="email"
                error={touched.email && errors.email}
              />

              <TextField
                id="subject"
                value={values.subject}
                onBlur={handleBlur}
                onChange={customHandleChange}
                label="Subject"
                type="text"
                error={touched.subject && errors.subject}
              />

              <TextField
                id="message"
                label="Message"
                value={values.message}
                onBlur={handleBlur}
                onChange={customHandleChange}
                multiline={4}
                autoComplete="off"
                error={touched.message && errors.message}
              />

              <Button
                submit
                variant="primary"
                size="large"
                loading={isSubmitting}
              >
                Send
              </Button>
            </FormLayout>
          </Form>
        </Box>
      </LegacyCard>
    </Page>
  );
}
