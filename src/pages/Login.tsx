import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from './Login.module.scss';

function Login() {
    return (
        <>
            <Header />
            <Hero heroTitle="Login" bgHeight="300px" bgInnerHeight="300px" />
            <div className={styles.login}>
                <div className={styles.login__inner}>
                    <form className={styles.login__form}>
                        <div className="row">
                            <div className="form-group col-12 mx-auto mb-3">
                                <label htmlFor="phoneNumber" className="label-title form-label mb-1">Phone number</label>
                                <input type="number" id="phoneNumber" placeholder='Enter your phoneNumber' name='phoneNumber' className='form-control' />
                            </div>
                            <div className="form-group col-12 mx-auto mb-3">
                                <label htmlFor="email" className="label-title form-label mb-1">Set password</label>
                                <input type="text" id="email" placeholder='New password' name='email' className='form-control' />
                            </div>
                            <div className="form-group col-12 mx-auto mb-3">
                                <label htmlFor="confirmPassword" className="label-title form-label mb-1">Confirm password</label>
                                <input type="text" id="confirmPassword" placeholder='Confirm your new password' name='confirmPassword' className='form-control' />
                            </div>
                        </div>
                        <div className="w-100">
                            <button type="button" className={`${styles.login__loginBtn} btn btn-primary`}>Login</button>
                        </div>
                    </form>
                    <p className='my-4 text-center'>Or</p>
                    <div className="w-100">
                        <button type="button" className={`${styles.login__googleLoginBtn} btn btn-secondary w-100`}>Login with google</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login