import React from 'react';
import styles from './RegisterForm.module.scss';
import Hero from '../components/Hero';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ReactComponent as ArrowDownIcon } from '../assets/images/icons/arrow-down.svg';

function RegisterForm() {
    return (
        <>
            <Header />
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
                                    <label htmlFor="name" className="label-title form-label mb-1">First Name</label>
                                    <input type="text" id="name" placeholder='Joe' name='name' className='form-control' />
                                </div>
                                <div className="form-group col-md-6 mx-auto mb-3">
                                    <label htmlFor="email" className="label-title form-label mb-1">Last Name</label>
                                    <input type="text" id="email" placeholder='Rogan' name='email' className='form-control' />
                                </div>
                                <div className="form-group col-md-6 mx-auto mb-3">
                                    <label htmlFor="phone" className="label-title form-label mb-1">Phone Number</label>
                                    <input type="number" id="phone" placeholder='+91 ...' name='phone' className='form-control' />
                                </div>
                                <div className="form-group col-md-6 mx-auto mb-3">
                                    <label htmlFor="email" className="label-title form-label mb-1">Email</label>
                                    <input type="email" id="email" placeholder='example@gmail.com' name='email' className='form-control' />
                                </div>
                                <div className="form-group col-md-6 mb-3">
                                    <label htmlFor="uploadMusic" className="label-title form-label mb-1">Upload your Music Track (you can upload later too)</label>
                                    <input type="file" id="uploadMusic" placeholder='Upload your music' name='uploadMusic' className='form-control' />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center justify-content-md-end">
                                <button type="submit" className='contactus__submitBtn'>Submit & pay</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RegisterForm;