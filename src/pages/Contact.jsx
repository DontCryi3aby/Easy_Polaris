import {
  Box,
  Button,
  Divider,
  Form,
  FormLayout,
  LegacyCard,
  Page,
  TextField,
} from "@shopify/polaris";
import React, { useCallback, useState } from "react";
export function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = useCallback(() => {
    console.log("Submit successfully!");
    console.log({ email, subject, message });
  }, [email, subject, message]);

  const handleEmailChange = (value) => setEmail(value);
  const handleSubjectChange = (value) => setSubject(value);
  const handleMessageChange = (value) => setMessage(value);

  return (
    <Page title="Contact">
      <LegacyCard sectioned>
        <Box style={{ padding: "0 20px" }}>
          <p className="custom-contact-helptext">
            Don't hesitate to contact us if you face any problem or have any
            question about the app. We are happy to help you.
          </p>
          <p className="custom-contact-helptext">
            Please give us permisstion to access your Shopify Admin. So we could
            support you quickly. We need to access <b>Apps</b> and{" "}
            <b>Online Store</b> → <b>Themes</b>. Our email address for creating
            staff account is: <b>contact@globosoftware.net</b>
          </p>
          <Box style={{ margin: "20px 0" }}>
            <Divider borderColor="border" />
          </Box>
          <Form onSubmit={handleSubmit}>
            <FormLayout>
              <TextField
                value={email}
                onChange={handleEmailChange}
                label="Your Email"
                type="email"
                autoComplete="email"
              />

              <TextField
                value={subject}
                onChange={handleSubjectChange}
                label="Subject"
                type="text"
              />

              <TextField
                label="Message"
                value={message}
                onChange={handleMessageChange}
                multiline={4}
                autoComplete="off"
              />

              <Button submit variant="primary" size="large">
                Send
              </Button>
            </FormLayout>
          </Form>
        </Box>
      </LegacyCard>
    </Page>
  );
}
