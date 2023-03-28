import { Button } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { loginFormInitialValues, loginValidationSchema } from "../../consts/LoginRegConst";
import { TextField } from "formik-mui";
import styled from "styled-components";
import axios from "axios";
import HomeNavBar from "../../components/HomeNavBar/HomeNavBar";

const Add = () => {

  const onSubmit = (values: any, { setSubmitting, resetForm }:{setSubmitting: any; resetForm: any}) => {
    setSubmitting(true);
    try {
      const add = axios.get(
        `https://react-test-sejo6.ondigitalocean.app/v1/content/skills/?id=${process.env.REACT_APP_UNSPLASH_KEY}`, values
        );
      alert("Sucess!");
      console.log(add)
      resetForm();
    } catch (error) {
      alert(`${error}, Sorry`);
    }
    setSubmitting(false);
  };

  return (
    <div>
      <HomeNavBar />
      <AddForm>
        <AddTitle>Add</AddTitle>
        <Formik
          initialValues={loginFormInitialValues}
          onSubmit={onSubmit}
          validationSchema={loginValidationSchema}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                name="title"
                label="Title"
                sx={{ mb: 2 }}
                fullWidth
                required
              />
              <Field
                component={TextField}
                name="description"
                label="Description"
                sx={{ mb: 2 }}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{ mb: 2 }}
                fullWidth
              >
                Add
              </Button>
            </Form>
          )}
        </Formik>
      </AddForm>
    </div>
  )
};

const AddForm = styled.div`
  margin: 20px auto,
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddTitle = styled.p`
  margin-top: 100px;
  font-size: 36px;
  font-weight: 500;
`;

export default Add;