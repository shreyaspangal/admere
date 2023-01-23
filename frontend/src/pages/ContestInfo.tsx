import React from 'react';
import styles from './ContestInfo.module.scss';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import { ReactComponent as LocationPinIcon } from '../assets/images/icons/location-pin.svg';
import DeadlineCalenderIcon from '../assets/images/deadline-calender.png';
import ParticipationIcon from '../assets/images/participation-people.png';
import RegistrationFeeIcon from '../assets/images/registrationFee-rupee.png';
import GoldenTrophyIcon from '../assets/images/golden-trophy.png';
import EligibilityIcon from '../assets/images/eligibility.png';
import { useNavigate } from 'react-router-dom';


function ContestInfo() {

    const navigate = useNavigate();

    // For Accordion
    const [open, setOpen] = React.useState('1');
    const toggle = (id: string) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    const handlePayAndRegister = () => {
        navigate("/register");
        window.scrollTo(0, 0);
    }

    return (
        <Layout>
            <Hero
                heroTitle="Weekly/Monthly Contests"
                heroSubtitle=' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sed do eiusmod tempor incididunt ut labore et dolore magna'
                bgHeight='400px'
                bgInnerHeight='400px'
            />
            <div className={styles.contestInfo}>
                <div className={styles.contestInfo__inner}>
                    <div className={styles.contestInfo__registerNow}>
                        <div className={styles.contestInfo__registerNow_Col1}>
                            <div className={styles.registerNow__Col1Box}>
                                <div className={styles.registerNow__Col1Box__item}>
                                    <img src={DeadlineCalenderIcon} width={40} height={40} />
                                    <div>
                                        <p className='p mb-0'>Registration Deadline</p>
                                        <small className='small'>17 Dec, 22 , 3: 00 PM IST</small>
                                    </div>
                                </div>
                                <div className={styles.registerNow__Col1Box__item}>
                                    <img src={ParticipationIcon} width={40} height={40} />
                                    <div>
                                        <p className='p mb-0'>Participation</p>
                                        <small className='small'>Individuals</small>
                                    </div>
                                </div>
                                <div className={styles.registerNow__Col1Box__item}>
                                    <img src={RegistrationFeeIcon} width={40} height={40} />
                                    <div>
                                        <p className='p mb-0'>Registration Fee</p>
                                        <small className='small'>Have to pay ₹ 500</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.contestInfo__registerNow_Col2}>
                            <button type='button' className={`${styles.payAndRegisterBtn} ' btn btn-success w-100'`} onClick={handlePayAndRegister}>Participate Now</button>
                        </div>
                    </div>
                    <div className={styles.contestInfo__weeklyMonthlyContests}>
                        <div className={styles.contestInfo__weeklyMonthlyContests__row1}>
                            <img src={require('../assets/images/contestinfo-img.png')} alt="Contest banner" />
                            <div>
                                <h5 className='fs-3'>Weekly/Monthly Contests</h5>
                                <small className='small'>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sed do eiusmod tempor incididunt ut labore et dolore magna</small>
                                <p className='p mb-0 d-flex'>
                                    <div className="d-flex align-items-center">
                                        <LocationPinIcon /><div className='ms-1'>Location -</div>
                                    </div>
                                    <div className='text-success ms-1'>Online</div>
                                </p>
                            </div>
                        </div>
                        <div className={styles.contestInfo__weeklyMonthlyContests__row2}>
                            <div className='d-flex flex-column flex-sm-row justify-content-between'>
                                <div className={styles.weeklyMonthlyContests__row2___TopCol1}>
                                    <div>
                                        <p className='p mb-0'>Start Date</p>
                                        <p className='p mb-0'>17th Nov,2022</p>
                                    </div>
                                    <div>
                                        <p className='p mb-0'>End Date</p>
                                        <p className='p mb-0'>17th Dec,2022</p>
                                    </div>
                                </div>

                                <div className={styles.weeklyMonthlyContests__row2___TopCol2}>
                                    <p className='p mb-0'>Montly Competition</p>
                                </div>
                            </div>
                            <div>
                                <img src={EligibilityIcon} alt="Eligibility" width={40} height={40} /><span className='ms-2'>Eligibility:</span> Open to All
                            </div>
                        </div>
                    </div>
                    <div className={styles.contestInfo__guidelines}>
                        <h5 className='fs-3 mb-3 fw-semibold'>Weekly/Monthly Contests</h5>
                        <small className='small'>
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sed do eiusmod tempor incididunt ut labore et dolore magna
                        </small>
                        {/* Guidelines */}
                        <p className='fs-5 mb-1 mt-2 fw-bold'>Guidelines:</p>
                        <div className={styles.listItem}>
                            <div className={styles.listItem__dotContainer}>
                                <div className={styles.listItem__dot}></div>
                            </div>
                            <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listItem__dotContainer}>
                                <div className={styles.listItem__dot}></div>
                            </div>
                            <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listItem__dotContainer}>
                                <div className={styles.listItem__dot}></div>
                            </div>
                            <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                        </div>
                        {/* Rules */}
                        <p className='fs-5 mb-1 mt-2 fw-bold'>Rules:</p>
                        <div className={styles.listItem}>
                            <div className={styles.listItem__dotContainer}>
                                <div className={styles.listItem__dot}></div>
                            </div>
                            <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listItem__dotContainer}>
                                <div className={styles.listItem__dot}></div>
                            </div>
                            <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                        </div>
                        <div className={styles.listItem}>
                            <div className={styles.listItem__dotContainer}>
                                <div className={styles.listItem__dot}></div>
                            </div>
                            <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                        </div>
                        {/* Contact */}
                        <div className='my-4'>
                            <p className='fs-5 mb-1 mt-2 fw-bold'>Contact the Organisers:</p>
                            <small className='small text-gray d-block my-2'>Example@gmail.com</small>
                            <small className='small text-gray d-block'>+91 9222222222</small>
                        </div>
                        {/* Rewards and Prizes */}
                        <p className='fs-5 mb-1 mt-2 fw-bold'>Rewards and Prizes:</p>
                        <small className='text-gray d-block mb-3'>Certificates for top 20 participants</small>
                        <div className={styles.contestInfo__guidelines__rewards}>
                            <div className={styles.rewards__item1}>
                                <img src={GoldenTrophyIcon} width={50} height={50}/>
                                <p className='mb-0 fw-bold'>1st Prize</p>
                                <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                            </div>
                            <div className={styles.rewards__item2}>
                                <img src={GoldenTrophyIcon} width={50} height={50}/>
                                <p className='mb-0 fw-bold'>2nd Prize</p>
                                <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                            </div>
                            <div className={styles.rewards__item3}>
                                <img src={GoldenTrophyIcon} width={50} height={50}/>
                                <p className='mb-0 fw-bold'>3rd Prize</p>
                                <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                            </div>
                            <div className={styles.rewards__item4}>
                                <img src={GoldenTrophyIcon} width={50} height={50}/>
                                <p className='mb-0 fw-bold'>4th Prize</p>
                                <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                            </div>
                            <div className={styles.rewards__item5}>
                                <img src={GoldenTrophyIcon} width={50} height={50}/>
                                <p className='mb-0 fw-bold'>5th Prize</p>
                                <small className='small'>incididunt ut labore et dolore magna aliqua.</small>
                            </div>
                        </div>
                        <button className={`${styles.payAndRegisterBtn} btn btn-success btn-lg mt-3`} type='button' onClick={handlePayAndRegister}>Participate Now</button>
                    </div>
                    <div className={styles.contestInfo__faq}>
                        <p className='fs-3 mb-1 fw-bold'>Frequently asked questions</p>
                        <small className='d-block mb-3'>The most asked questions and answers by judges</small>
                        <div className={styles.carousel}>
                            {
                                // @ts-ignore
                                <Accordion open={open} toggle={toggle}>
                                    <AccordionItem className='mb-3 border-2 rounded'>
                                        <AccordionHeader targetId="1" className={styles.carousel__title}>How can I enroll for premium contest</AccordionHeader>
                                        <AccordionBody accordionId="1" className={styles.carousel__content}>
                                            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem className='mb-3 border-2 rounded'>
                                        <AccordionHeader targetId="2" className={styles.carousel__title}>What are requirements for the contests?</AccordionHeader>
                                        <AccordionBody accordionId="2" className={styles.carousel__content}>
                                            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem className='mb-3 border-2 rounded'>
                                        <AccordionHeader targetId="3" className={styles.carousel__title}>Are these judges certified? and experienced</AccordionHeader>
                                        <AccordionBody accordionId="3" className={styles.carousel__content}>
                                            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                        </AccordionBody>
                                    </AccordionItem>
                                    <AccordionItem className='mb-3 border-2 rounded'>
                                        <AccordionHeader targetId="4" className={styles.carousel__title}>Who can participate?</AccordionHeader>
                                        <AccordionBody accordionId="4" className={styles.carousel__content}>
                                            Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
                                        </AccordionBody>
                                    </AccordionItem>
                                </Accordion>
                            }
                        </div>
                    </div>
                    <div className={styles.contestInfo__previousEntries}>
                        <p className='fs-3 mb-3 fw-bold'>View Entries of Previous Competitions</p>
                        <div className={styles.contestInfo__previousEntriesImgs}>
                            <div className={styles.contestInfo__previousEntriesImg}>
                                {/* <button type='button' className={`${styles.contestInfo__previousEntriesImgBtn} btn btn-outline-secondary`}>Know more</button> */}
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="image 1" />
                            </div>
                            <div className={styles.contestInfo__previousEntriesImg}>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="image 2" />
                            </div>
                            <div className={styles.contestInfo__previousEntriesImg}>
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                    alt="image 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ContestInfo