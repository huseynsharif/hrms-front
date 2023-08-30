import React from 'react'
import { Button, Container, Form } from 'semantic-ui-react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { BaseUserService } from '../services/BaseUserService'


export default function LogIn() {

  const formik = useFormik(
    {
      initialValues: {

        email: "",
        password: "",
      },
      validationSchema: Yup.object({

        email: Yup.string().email("Invalid email adress.").required("Required"),
        password: Yup.string().required("Required"),
      }),
      onSubmit: (values) => {
        console.log(values);
        let baseUserService = new BaseUserService();
        baseUserService.findByEmail(values.email, values.password);
      }
    }
  )

  return (
    <div style={{ marginTop: "80px" }}>
      <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "200px" }}>
        <Form onSubmit={formik.handleSubmit} style={{ width: "400px" }} >

          <Form.Field>
            <label>Email</label>
            <input
              id='email'
              placeholder='email'
              type='email'
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}

            />
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              id='password'
              placeholder='password'
              type='password'
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}

            />
            {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
          </Form.Field>

          <Button type='submit' primary>Submit</Button>
        </Form>

      </Container>

    </div>
  )
}