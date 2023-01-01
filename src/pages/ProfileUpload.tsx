import React from 'react';
import { Progress } from 'reactstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import styles from './ProfileUpload.module.scss';

function ProfileUpload() {
    return (
        <>
            <Header />
            <div className={styles.profileUpload}>
                <div className={styles.profileUpload__inner}>
                    <div className={styles.profileUpload__sidebar}>
                        <div className={styles.profileUpload__sidebarImg}>SS</div>
                        <div className={styles.profileUpload__sidebarProfileName}>
                            <p className='fs-5 mb-0'>Shreyas Pangal</p>
                            <small className='small'>Personal profile</small>
                        </div>
                        <div className={styles.profileUpload__sidebarLoginBtn}>
                            <button type='button'>Login Details</button>
                        </div>
                        <div className={styles.profileUpload__sidebarUploadVideoBtn}>
                            <button type='button'>Upload Video</button>
                        </div>
                    </div>
                    <div className={styles.profileUpload__main}>
                        <div className={styles.main__card1}>
                            <div className={styles.main__card1Top}>
                                <div>
                                    <p className='p mb-0'>Complete your profile</p>
                                    <p className='p mb-0 text-light'>40% Completed</p>
                                </div>
                                <Progress
                                    className="my-2"
                                    value={40}
                                    style={{ height: "0.5rem" }}
                                />
                                <p>Add all your details for better experience </p>
                            </div>
                            <div className={styles.main__card1Bottom}>
                                <button type='button' className='btn btn-link p-0 text-decoration-none'>
                                    Verify Email
                                </button>
                                <button type='button' className='btn btn-link p-0 text-decoration-none'>
                                    Verified Phone Number
                                </button>
                                <button type='button' className='btn btn-link p-0 text-decoration-none'>
                                    Complete Bank Basic Info
                                </button>
                            </div>
                        </div>
                        <div className={styles.main__card2}>
                            <div className={styles.main__card2Header}>
                                <p className='mb-0 fs-4 fw-semibold'>Login Details</p>
                                <small className='small'>Manage your email address mobile number and password</small>
                            </div>
                            <div className={styles.main__card2Row1}>
                                <p className='p mb-0'>Mobile Number</p>
                                <p className='p mb-0'>+91 9222222222</p>
                            </div>
                            <div className={styles.main__card2Row2}>
                                <p className='p mb-0'>Email ID</p>
                                <div className={styles.main__card2Row2_emailBlock}>
                                    <p className='p mb-0'>sarfarazalisyed2001@gmail.com</p>
                                    <button className='btn btn-link p-0 text-decoration-none'>Verify your email</button>
                                </div>
                            </div>
                            <div className={styles.main__card2Row3}>
                                <p className='p mb-0'>Password</p>
                                <div className={styles.main__card2Row3_passwordBlock}>
                                    <p className='p mb-0'>******</p>
                                    <button className='btn btn-link p-0 text-decoration-none'>Change Password?</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.main__card3}>
                            <div className={styles.main__card3Header}>
                                <p className='mb-0 fs-4 fw-semibold'>Upload video</p>
                                <small className='small'>Upload your video</small>
                            </div>
                            <div className="form-group col-12 my-3">
                                <label htmlFor="uploadMusic" className="label-title form-label mb-1">Upload your Music Track (you can upload later too)</label>
                                <input type="file" id="uploadMusic" placeholder='Upload your music' name='uploadMusic' className='form-control' />
                            </div>
                            <small>Audio or video files in fortmats wav,mp3,mp4,mpeg,mov are accepted</small>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ProfileUpload