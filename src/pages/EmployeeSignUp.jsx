import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useEffect } from 'react'
import { Button, Container, Form } from 'semantic-ui-react'
import { EmployeeService } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'


export default function EmployeeSignUp() {
    const navigate = useNavigate();

    useEffect(

        () => {

        }, []

    )
    const formik = useFormik(
        {
            initialValues: {
                name: "",
                surname: "",
                birthyear: "",
                identityNumber: "",
                email: "",
                password: "",
                cpassword: ""
            },
            validationSchema: Yup.object({
                name: Yup.string().max(15, "Must be 15 character or less.").required("Required"),
                surname: Yup.string().max(15, "Must be 25 character or less.").required("Required"),
                birthyear: Yup.number().typeError("Invalid Birthday.").required("Required"),
                identityNumber: Yup.string().required("Required"),
                email: Yup.string().email("Invalid email adress.").required("Required"),
                password: Yup.string().required("Required"),
                cpassword: Yup.string().required("Required")
            }),
            onSubmit: (values) => {
                let employeeService = new EmployeeService();
                employeeService.add(values);
                navigate("/login")
                console.log(values);
                console.log("Salam")
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
                        <label>surname</label>
                        <input
                            id='surname'
                            placeholder='surname'
                            onChange={formik.handleChange}
                            value={formik.values.surname}
                            onBlur={formik.handleBlur}

                        />
                        {formik.touched.surname && formik.errors.surname ? <p>{formik.errors.surname}</p> : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Birth of year</label>
                        <input
                            id='birthyear'
                            placeholder='birth of year'
                            onChange={formik.handleChange}
                            value={formik.values.birthyear}
                            onBlur={formik.handleBlur}

                        />
                        {formik.touched.birthyear && formik.errors.birthyear ? <p>{formik.errors.birthyear}</p> : null}
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
                    <Button type='submit' primary>Submit</Button>
                </Form>

            </Container>

        </div>
    )
}
