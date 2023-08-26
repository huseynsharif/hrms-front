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
            validationSchema: Yup.object({
                name: Yup.string().max(15, "Must be 15 character or less.").required("Required"),
                surName: Yup.string().max(15, "Must be 25 character or less.").required("Required"),
                birthYear: Yup.string().required("Required"),
                identityNumber: Yup.string().required("Required"),
                email: Yup.string().email("Invalid email adress.").required("Required"),
                password: Yup.string().required("Required"),
                cpassword: Yup.string().required("Required")
            }),
        onSubmit: (values) => {
            console.log(values);
        }
        }
    )
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
                        onBlur={formik.handleBlur}

                    />
                    {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null} 
                </Form.Field>
                <Form.Field>
                    <label>Surname</label>
                    <input
                        id='surName'
                        placeholder='Surname'
                        onChange={formik.handleChange}
                        value={formik.values.surName}
                        onBlur={formik.handleBlur}

                    />
                    {formik.touched.surName && formik.errors.surName ? <p>{formik.errors.surName}</p> : null} 
                </Form.Field>
                <Form.Field>
                    <label>Birth of year</label>
                    <input
                        id='birthYear'
                        placeholder='birth of year'
                        onChange={formik.handleChange}
                        value={formik.values.birthYear}
                        onBlur={formik.handleBlur}

                    />
                    {formik.touched.birthYear && formik.errors.birthYear ? <p>{formik.errors.birthYear}</p> : null} 
                </Form.Field>
                <Form.Field>
                    <label>Identitiy number</label>
                    <input
                        id='identityNumber'
                        placeholder='identity namber'
                        onChange={formik.handleChange}
                        value={formik.values.identityNumber}
                        onBlur={formik.handleBlur}

                    />
                    {formik.touched.identityNumber && formik.errors.identityNumber ? <p>{formik.errors.identityNumber}</p> : null} 
                </Form.Field>
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
                <Form.Field>
                    <label>Confirm password</label>
                    <input
                        id='cpassword'
                        placeholder='cpassword'
                        type='password'
                        onChange={formik.handleChange}
                        value={formik.values.cpassword}
                        onBlur={formik.handleBlur}

                    />
                    {formik.touched.cpassword && formik.errors.cpassword ? <p>{formik.errors.cpassword}</p> : null} 
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>

        </Container>

    </div>
)
}
