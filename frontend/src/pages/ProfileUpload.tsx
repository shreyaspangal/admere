import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Progress } from 'reactstrap';
import styles from './ProfileUpload.module.scss';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Layout from '../components/Layout';
import PlusIcon from "../assets/images/icons/plus-filled-blue.svg";
import { ReactComponent as TickIcon } from "../assets/images/icons/tick-filled-green.svg";
import LoginIcon from "../assets/images/icons/login-details.svg";
import UploadIcon from "../assets/images/icons/upload-music.svg";

function ProfileUpload() {
    const navigate = useNavigate();

    const userInfo = JSON.parse(localStorage.getItem("userInfo") || '{}');

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    function handleLogout() {
        localStorage.removeItem("userInfo");
        navigate("/home");
    }

    function routeTo(pathName: string) {
        navigate(pathName);
        window.scrollTo(0, 0);
    }

    const firstLetter = userInfo.hasOwnProperty("firstName") ? userInfo.firstName[0].toUpperCase() : '';
    const secondLetter = userInfo.hasOwnProperty("lastName") ? userInfo.lastName[0].toUpperCase() : '';

    return (
        <Layout>
            <div className={styles.profileUpload}>
                <div className={styles.profileUpload__inner}>
                    <div className='profileUpload__sidebarWrapper'>
                        <div className={styles.profileUpload__sidebar}>
                            <div className={styles.profileUpload__sidebarImg}>{firstLetter}{secondLetter}</div>
                            <div className={styles.profileUpload__sidebarProfileName}>
                                <p className='fs-5 mb-0'>{userInfo?.firstName || ''} {userInfo?.lastName || ''}</p>
                                <small className='small'>Personal profile</small>
                            </div>
                            <div className={styles.profileUpload__sidebarLoginBtn}>
                                <button type='button'>
                                    <span className="d-flex align-items-center">
                                        <img src={LoginIcon} className="me-2" style={{ transform: "rotate(90deg)" }} />
                                        Login Details
                                    </span>
                                </button>
                            </div>
                            <div className={styles.profileUpload__sidebarUploadVideoBtn}>
                                <button type='button'>
                                    <span className="d-flex align-items-center">
                                        <img src={UploadIcon} className="me-2" />
                                        Upload Video
                                    </span>
                                </button>
                            </div>
                            <div className={styles.profileUpload__sidebarLogoutBtn}>
                                <button type='button' onClick={toggle}>
                                    <span className="d-flex align-items-center">
                                        <img src={LoginIcon} className="me-2" />
                                        Logout
                                    </span>
                                </button>
                                <Modal isOpen={modal} toggle={toggle}>
                                    <ModalHeader toggle={toggle}>Are you sure?</ModalHeader>
                                    <ModalBody>
                                        Do you want to logout?
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={toggle}>
                                            No
                                        </Button>{' '}
                                        <Button color="danger" onClick={handleLogout}>
                                            Yes, logout
                                        </Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
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
                                    <span className="d-flex align-items-center">
                                        <img src={PlusIcon} className='me-2' />
                                        Verify Email
                                    </span>
                                </button>
                                <button type='button' className='btn btn-link p-0 text-decoration-none'>
                                    <span className="d-flex align-items-center">
                                        <TickIcon className='me-2' />
                                        Verify Phone Number
                                    </span>
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
                                <p className='p mb-0'>{userInfo?.phone || ''}</p>
                            </div>
                            <div className={styles.main__card2Row2}>
                                <p className='p mb-0'>Email ID</p>
                                <div className={styles.main__card2Row2_emailBlock}>
                                    <p className='p mb-0'>{userInfo?.email || ''}</p>
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
        </Layout>
    )
}
export default ProfileUpload;