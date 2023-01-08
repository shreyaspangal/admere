import React from 'react';
import styles from './RegisterForm.module.scss';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactComponent as ArrowDownIcon } from '../assets/images/icons/arrow-down.svg';
import Layout from '../components/Layout';
import { Spinner } from 'reactstrap';

type formDataType = {
    firstName: string,
    lastName: string,
    phone: any,
    email: string,
    musicTrack: any,
}

const InitialFormState: formDataType = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    musicTrack: '',
}

function RegisterForm() {

    const [formData, setFormData] = React.useState(InitialFormState);

    const handleOnChange = (e: any) => {
        // Extract name & value attributes values & update/override form data
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleOnSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
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
                        <form>
                            <div className="row">
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
                                <div className="form-group col-md-6 mb-3">
                                    <label htmlFor="musicTrack" className="label-title form-label mb-1">Upload your Music Track (you can upload later too)</label>
                                    <input type="file" id="musicTrack" placeholder='Upload your music' name='musicTrack' className='form-control' value={formData.musicTrack} onChange={handleOnChange} />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center justify-content-md-end">
                                <button type="submit" className='contactus__submitBtn' onClick={handleOnSubmit}>
                                    <span>Submit & pay</span>

                                    {/* <Spinner size="sm" color="light">
                                        Loading...
                                    </Spinner> */}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default RegisterForm;