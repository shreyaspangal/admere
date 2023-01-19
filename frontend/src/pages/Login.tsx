import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Col, Row, Spinner } from 'reactstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from './Login.module.scss';
import axios from 'axios';

type formDataType = {
    email: string,
    password: string,
}

const InitialFormState: formDataType = {
    email: '',
    password: '',
}

function Login() {

    const navigate = useNavigate();
    const [formData, setFormData] = useState(InitialFormState);
    const [error, setError] = useState<any | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const redirectTo = (route: string) => {
        navigate(route);
        window.scrollTo(0, 0);
    }

    const handleOnChange = (e: any) => {
        // Extract name & value attributes values & update/override form data
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleOnSubmit = async (e: any) => {
        try {
            e.preventDefault();

            // Frontend validation
            if (!formData.email || !formData.password) {
                return setError("Email & Password are required!");
            }

            const config = {
                headers: {
                    "Content-Type": "application/json"
                },
            }
            // Start loading
            setIsLoading(true);
            // Extract data object from response object we get from api endpoint
            const { data } = await axios.post("http://localhost:5000/api/auth/login", formData, config);
            // Save data in local storage
            localStorage.setItem("userInfo", JSON.stringify(data));
            // Stop loading
            setIsLoading(false);
            redirectTo("/home");
        } catch (error: any) {
            // Set error state with data
            setError(error.response.data.message);
            // Stop loading
            setIsLoading(false);
        }
    }

    return (
        <>
            <Header />
            <Hero heroTitle="Login" bgHeight="300px" bgInnerHeight="300px" />
            <div className={styles.login}>
                <div className={styles.login__inner}>
                    <form className={styles.login__form}>
                        <div className="row">
                            {error && <Alert color='danger' toggle={() => setError(null)}>{error}</Alert>}
                            <div className="form-group col-12 mx-auto mb-3">
                                <label htmlFor="email" className="label-title form-label mb-1">Email <span className='text-danger'>*</span></label>
                                <input type="email" id="email" placeholder='Enter your email' name='email' className='form-control' value={formData.email} onChange={handleOnChange} />
                            </div>
                            <div className="form-group col-12 mx-auto mb-3">
                                <label htmlFor="password" className="label-title form-label mb-1">Password <span className='text-danger'>*</span></label>
                                <input type="password" id="password" placeholder='Enter your password' name='password' className='form-control' value={formData.password} onChange={handleOnChange} />
                            </div>
                        </div>
                        <div className="w-100">
                            <button type="button" className={`${styles.login__loginBtn} btn btn-primary`} onClick={handleOnSubmit}>
                                {!isLoading && <span>Login</span>}
                                {
                                    isLoading &&
                                    <Spinner size="sm" color="light">
                                        Loading...
                                    </Spinner>
                                }
                            </button>
                        </div>
                        <Row>
                            <Col className='mt-3'>New User? <Link to="/register" className='ms-1'>Register here</Link></Col>
                        </Row>
                    </form>
                    {/* <div className={`${styles.login__orSeparator} my-4 text-center`}>
                        <p>OR</p>
                    </div>
                    <div className="w-100">
                        <button type="button" className={`${styles.login__googleLoginBtn} btn btn-secondary w-100`}>Login with google</button>
                    </div> */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login