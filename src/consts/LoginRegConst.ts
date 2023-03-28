import * as Yup from "yup";

import { emailValidation, requiredField } from "./validation";

import { RegisterAndLoginSchema } from "../types/RegisterAndLoginSchema";

export const loginFormInitialValues: RegisterAndLoginSchema = {
  email: "",
  password: "",
};

export const loginValidationSchema: Yup.ObjectSchema<RegisterAndLoginSchema> = Yup.object().shape(
  {
    email: Yup.string().email(emailValidation).required(requiredField),
    password: Yup.string().required(requiredField),
  }
);