import { useFormik } from 'formik'
import * as Yup from 'yup'
import React, { useEffect } from 'react'
import { Button, Container, Form } from 'semantic-ui-react'
import { EmployerService } from '../services/EmployerService'
import { useNavigate } from 'react-router-dom'


export default function EmployerSignUp() {
    const navigate = useNavigate();
    useEffect(

        () => {

        }, []

    )
    const formik = useFormik(
        {
            initialValues: {
                companyName: "",
                website: "",
                phoneNumber: "",
                identityNumber: "",
                email: "",
                password: "",
                cpassword: ""
            },
            validationSchema: Yup.object({
                companyName: Yup.string().max(15, "Must be 15 character or less.").required("Required"),
                website: Yup.string().max(15, "Must be 25 character or less.").required("Required"),
                phoneNumber: Yup.string().required("Required"),
                identityNumber: Yup.string().required("Required"),
                email: Yup.string().email("Invalid email adress.").required("Required"),
                password: Yup.string().required("Required"),
                cpassword: Yup.string().required("Required")
            }),
            onSubmit: (values) => {
                console.log("salam");
                let employerService = new EmployerService();
                employerService.add(values);
                navigate("/login")
                console.log(values);

            }
        }
    )
    return (
        <div >
            <Container style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "200px" }}>
                <Form onSubmit={formik.handleSubmit} style={{ width: "400px" }} >
                    <Form.Field>
                        <label>Company name</label>
                        <input
                            id='companyName'
                            placeholder='Company name'
                            type='text'
                            onChange={formik.handleChange}
                            value={formik.values.companyName}
                            onBlur={formik.handleBlur}

                        />
                        {formik.touched.companyName && formik.errors.companyName ? <p>{formik.errors.companyName}</p> : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Website</label>
                        <input
                            id='website'
                            placeholder='Website'
                            onChange={formik.handleChange}
                            value={formik.values.website}
                            onBlur={formik.handleBlur}

                        />
                        {formik.touched.website && formik.errors.website ? <p>{formik.errors.website}</p> : null}
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <input
                            id='phoneNumber'
                            placeholder='Phone Number'
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            onBlur={formik.handleBlur}

                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p>{formik.errors.phoneNumber}</p> : null}
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
