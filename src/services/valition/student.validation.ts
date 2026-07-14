import * as yup from "yup";

export const studentSchema = yup.object({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),

  course: yup.string().required("Course is required"),

  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Age must be positive")
    .required("Age is required"),

  phone: yup.string().optional(),

  address: yup.string().optional(),
});