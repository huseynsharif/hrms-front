import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { Button, Container, Form } from 'semantic-ui-react'

export default function EmployeeSignUp() {

    const formik = useFormik(
        {
            initialValues: {
                name: "",
                surName: "",
                birthYear: "",
                identityNumber: "",
                email: "",
                password: "",
                cpassword: ""
            },
            validationSchema:
        onSubmit: (values) => {
            console.log(values);
        }
        }
    )
// console.log(formik.values);
return (
    <div >
        <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "200px" }}>
            <Form onSubmit={formik.handleSubmit} style={{ width: "400px" }} >
                <Form.Field>
                    <label>Name</label>
                    <input
                        id='name'
                        placeholder='Name'
                        type='text'
                        onChange={formik.handleChange}
                        value={formik.values.name}


                    />
                </Form.Field>
                <Form.Field>
                    <label>Surname</label>
                    <input
                        id='surName'
                        placeholder='Surname'
                        onChange={formik.handleChange}
                        value={formik.values.surName}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Birth of year</label>
                    <input
                        id='birthYear'
                        placeholder='birth of year'
                        onChange={formik.handleChange}
                        value={formik.values.birthYear}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Identitiy number</label>
                    <input
                        id='identityNumber'
                        placeholder='identity namber'
                        onChange={formik.handleChange}
                        value={formik.values.identityNumber}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <input
                        id='email'
                        placeholder='email'
                        type='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Password</label>
                    <input
                        id='password'
                        placeholder='password'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Confirm password</label>
                    <input
                        id='cpassword'
                        placeholder='cpassword'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.cpassword}
                    />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>

        </Container>

    </div>
)
}
