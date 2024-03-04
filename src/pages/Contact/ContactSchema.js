import * as Yup from "yup";

const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email!")
    .required("Please enter email!"),
  subject: Yup.string()
    .min(2, "Please enter subject between 2 to 50 characters!")
    .max(50, "Please enter subject between 2 to 50 characters!")
    .required("Please enter subject!"),
  message: Yup.string()
    .min(10, "Please enter message at least 10 characters!")
    .required("Please enter message!"),
});

export default ContactSchema;
