import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from './Login.module.scss';

type formDataType = {
    phone: string,
    password: string,
    confirmPassword: string,
}

const InitialFormState: formDataType = {
    phone: '',
    password: '',
    confirmPassword: '',
}

function Login() {

    const [formData, setFormData] = React.useState(InitialFormState);

    const handleOnChange = (e: any) => {
        // Extract name & value attributes values & update/override form data
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleOnLogin = (e: any) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <>
            <Header />
            <Hero heroTitle="Login" bgHeight="300px" bgInnerHeight="300px" />
            <div className={styles.login}>
                <div className={styles.login__inner}>
                    <form className={styles.login__form}>
                        <div className="row">
                            <div className="form-group col-12 mx-auto mb-3">
                                <label htmlFor="phoneNumber" className="label-title form-label mb-1">Phone number <span className='text-danger'>*</span></label>
                                <input type="number" id="phoneNumber" placeholder='Enter your phoneNumber' name='phoneNumber' className='form-control' value={formData.phone} onChange={handleOnChange} />
                            </div>
                            <div className="form-group col-12 mx-auto mb-3">
                                <label htmlFor="email" className="label-title form-label mb-1">Set password <span className='text-danger'>*</span></label>
                                <input type="text" id="email" placeholder='New password' name='email' className='form-control' value={formData.password} onChange={handleOnChange} />
                            </div>
                            <div className="form-group col-12 mx-auto mb-3">
                                <label htmlFor="confirmPassword" className="label-title form-label mb-1">Confirm password <span className='text-danger'>*</span></label>
                                <input type="text" id="confirmPassword" placeholder='Confirm your new password' name='confirmPassword' className='form-control' value={formData.confirmPassword} onChange={handleOnChange} />
                            </div>
                        </div>
                        <div className="w-100">
                            <button type="button" className={`${styles.login__loginBtn} btn btn-primary`} onClick={handleOnLogin}>Login</button>
                        </div>
                    </form>
                    <div className={`${styles.login__orSeparator} my-4 text-center`}>
                        <p>OR</p>
                    </div>
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