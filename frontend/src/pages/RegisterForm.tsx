import React, { useState } from 'react';
import styles from './RegisterForm.module.scss';
import Hero from '../components/Hero';
import { ReactComponent as ArrowDownIcon } from '../assets/images/icons/arrow-down.svg';
import Layout from '../components/Layout';
import { Alert, Col, Row, Spinner } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

type formDataType = {
    firstName: string,
    lastName: string,
    phone: any,
    email: string,
    password: string,
    confirmPassword: string,
    musicTrack?: any,
}

type errorType = {
    prevState: null
}

const InitialFormState: formDataType = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    musicTrack: '',
}

function RegisterForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(InitialFormState);
    const [error, setError] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleOnChange = (e: any) => {
        // Extract name & value attributes values & update/override form data
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleOnSubmit = async (e: any) => {
        try {
            e.preventDefault();

            if (!formData.firstName || !formData.lastName) {
                return setError("First name & Last name are required!");
            }

            if (!formData.email || !formData.password) {
                return setError("Email & Phone number are required!");
            }

            if (!formData.password || !formData.confirmPassword) {
                return setError("Password & Confirm password are required!");
            }

            if (formData.password !== formData.confirmPassword) {
                return setError("Password & Confirm password should match!");
            }
            setError(null);

            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
            }

            setIsLoading(true);

            const { data } = await axios.post("http://localhost:5000/api/auth/register", formData, config);

            localStorage.setItem("userInfo", JSON.stringify(data));
            setIsLoading(false);
            navigate("/login");
        } catch (error: any) {
            setError(error.response.data.message);
            setIsLoading(false);
        }
    }

    return (
        <Layout>
            <Hero heroTitle="Submit your entry"
                heroSubtitle="incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sed do eiusmod tempor incididunt ut labore et dolore magna"
                btnIcon={<ArrowDownIcon />}
                bgHeight="400px"
                bgInnerHeight="400px" />
            <div className={styles.registerForm}>
                <div className={styles.registerForm__inner}>
                    <div className={styles.registerForm__infoText}>
                        <p className='fs-5'>
                            To submit your entry, enter your details below correctly and upload your track.
                            If you face any difficulty, click the Chat button at the bottom-right of the screen or
                            mail us at support@machanmusic.com.
                        </p>
                    </div>
                    <div className={styles.registerForm__form}>
                        <form onSubmit={handleOnSubmit}>
                            <div className="row">
                                {error && <Alert color='danger' toggle={() => setError(null)}>{error}</Alert>}
                                <div className="form-group col-md-6 mx-auto mb-3">
                                    <label htmlFor="firstName" className="label-title form-label mb-1">First Name <span className='text-danger'>*</span></label>
                                    <input type="text" id="firstName" placeholder='Joe' name='firstName' className='form-control' value={formData.firstName} onChange={handleOnChange} />
                                </div>
                                <div className="form-group col-md-6 mx-auto mb-3">
                                    <label htmlFor="lastName" className="label-title form-label mb-1">Last Name <span className='text-danger'>*</span></label>
                                    <input type="text" id="lastName" placeholder='Rogan' name='lastName' className='form-control' value={formData.lastName} onChange={handleOnChange} />
                                </div>
                                <div className="form-group col-md-6 mx-auto mb-3">
                                    <label htmlFor="phone" className="label-title form-label mb-1">Phone Number <span className='text-danger'>*</span></label>
                                    <input type="number" id="phone" placeholder='+91 ...' name='phone' className='form-control' value={formData.phone} onChange={handleOnChange} />
                                </div>
                                <div className="form-group col-md-6 mx-auto mb-3">
                                    <label htmlFor="email" className="label-title form-label mb-1">Email <span className='text-danger'>*</span></label>
                                    <input type="email" id="email" placeholder='example@gmail.com' name='email' className='form-control' value={formData.email} onChange={handleOnChange} />
                                </div>
                                <div className="form-group col-md-6 mx-auto mb-3">
                                    <label htmlFor="password" className="label-title form-label mb-1">Password <span className='text-danger'>*</span></label>
                                    <input type="password" id="password" placeholder='New password' name='password' className='form-control' value={formData.password} onChange={handleOnChange} />
                                </div>
                                <div className="form-group col-md-6 mx-auto mb-3">
                                    <label htmlFor="confirmPassword" className="label-title form-label mb-1">Confirm password <span className='text-danger'>*</span></label>
                                    <input type="password" id="confirmPassword" placeholder='Confirm your new password' name='confirmPassword' className='form-control' value={formData.confirmPassword} onChange={handleOnChange} />
                                </div>
                                <div className="form-group col-md-6 mb-3">
                                    <label htmlFor="musicTrack" className="label-title form-label mb-1">Upload your Music Track (you can upload later too)</label>
                                    <input type="file" id="musicTrack" placeholder='Upload your music' name='musicTrack' className='form-control' value={formData.musicTrack} onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center justify-content-md-end">
                                <button type="submit" className={styles.registerForm__submitAndPayBtn}>
                                    {!isLoading && <span>Submit & pay</span>}
                                    {
                                        isLoading &&
                                        <Spinner size="sm" color="light">
                                            Loading...
                                        </Spinner>
                                    }
                                </button>
                            </div>
                            <Row>
                                <Col className='col d-flex justify-content-end mt-3'>Already an User? <Link to="/login" className='ms-1'>Login here</Link></Col>
                            </Row>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RegisterForm;