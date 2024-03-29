import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { useNavigate } from "react-router-dom";
import Layout from '../components/Layout';

// Styles & assets
import styles from './Homepage.module.scss';
import TrophyIcon from '../assets/images/icons/trophy.svg';
import PeopleConversingIcon from '../assets/images/icons/people-conversing.svg';
import CertificateIcon from '../assets/images/icons/certificate.svg';
import CalenderIcon from '../assets/images/icons/calender.svg';
import contest1 from '../assets/images/contest1.png';
import contest2 from '../assets/images/contest2.png';
import contest3 from '../assets/images/contest3.png';
import { Card, CardText, CardTitle, CardBody, Button, Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';

function Homepage() {

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

  const handleContactFormSubmit = (e: any) => {
    e.preventDefault();
  }

  const redirectTo = (route: string) => {
    navigate(route);
    window.scrollTo(0, 0);
  }

  const isLoggedIn = localStorage.getItem("userInfo");

  return (
    <Layout>
      <Hero heroTitle="We help individuals/bands represent their singing talent" heroSubtitle="This is a subheadline usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis" btnText={isLoggedIn ? "View profile" : "Join Now"} onClick={() => isLoggedIn ? redirectTo("/profile-upload") : redirectTo("/register")} />
      <div className={styles.homepage}>
        <div className={styles.homepage__inner}>
          <section id='whoWeAre' className={styles.homepage__whoWeAre}>
            <h3>Who we are</h3>
            <p>We are community of experinced singers usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
            <div className={styles.homepage__whoWeAre__cards}>
              <div className={styles.homepage__whoWeAre__card}>
                <img src={TrophyIcon} alt="Trophy" />
                <h4>Online Contests</h4>
                <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
              </div>
              <div className={styles.homepage__whoWeAre__card}>
                <img src={PeopleConversingIcon} alt="People Conversing" />
                <h4>Mentorship</h4>
                <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
              </div>
              <div className={styles.homepage__whoWeAre__card}>
                <img src={CertificateIcon} alt="Certificate" />
                <h4>Win Certificates</h4>
                <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
              </div>
            </div>
          </section>
          <section id='winCertificates' className={styles.homepage__winCertificates}>
            <h3>Win Certificates</h3>
            <div className={styles.homepage__winCertificates__wrapper}>
              <div className={styles.homepage__winCertificates__leftImg}>
              </div>
              <div className={styles.homepage__winCertificates__rightText}>
                <h5>Participate and improve your overall singing skills!</h5>
                <p>Particiate in online contests enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </section>
          <section id='section4' className={styles.homepage__section4}>
            <div className={styles.homepage__section4__leftText}>
              <h5>Participate and improve your overall singing skills!</h5>
              <p>Particiate in online contests enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className={styles.homepage__section4__rightImg}></div>
          </section>
          <section id='section5' className={styles.homepage__section5}>
            <div className={styles.homepage__section5__leftImg}></div>
            <div className={styles.homepage__section5__rightText}>
              <h5>Participate and improve your overall singing skills!</h5>
              <p>Particiate in online contests enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </section>
          <section id='ourContest' className={styles.homepage__ourContest}>
            <h3 className={styles.ourContest__title}>Our Contest</h3>
            <p className={styles.ourContest__subtitle}>We provide different online contests according to your convenience usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna al</p>
            <div className={styles.homepage__ourContest__detailsCards}>
              <div className={styles.homepage__ourContest__detailsCard}>
                <Card className="my-2" style={{ backgroundColor: '#222222' }}>
                  <CardBody>
                    <img src={contest1} alt="Card image" className={styles.detailsCard__img} />
                    <CardTitle tag="h5" className={styles.detailsCard__title}>
                      Weekly/Monthly Contests
                    </CardTitle>
                    <CardText className={styles.detailsCard__description}>
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </CardText>
                    <CardText className={styles.detailsCard__date}>
                      <small className='d-flex align-items-center fw-bold fs-6'>
                        <img src={CalenderIcon} alt="Calender" /> <span className='ms-1'>17 Dec - 26 Jan</span>
                      </small>
                    </CardText>
                    <Button color="primary" className={styles.detailsCard__button} onClick={() => redirectTo("/contest-info")}>
                      More Details
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div className={styles.homepage__ourContest__detailsCard}>
                <Card className="my-2" style={{ backgroundColor: '#222222' }}>
                  <CardBody>
                    <img src={contest2} alt="Card image" className={styles.detailsCard__img} />
                    <CardTitle tag="h5" className={styles.detailsCard__title}>
                      Weekly/Monthly Contests
                    </CardTitle>
                    <CardText className={styles.detailsCard__description}>
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </CardText>
                    <CardText className={styles.detailsCard__date}>
                      <small className='d-flex align-items-center fw-bold fs-6'>
                        <img src={CalenderIcon} alt="Calender" /> <span className='ms-1'>17 Dec - 26 Jan</span>
                      </small>
                    </CardText>
                    <Button color="primary" className={styles.detailsCard__button} onClick={() => redirectTo("/contest-info")}>
                      More Details
                    </Button>
                  </CardBody>
                </Card>
              </div>
              <div className={styles.homepage__ourContest__detailsCard}>
                <Card className="my-2" style={{ backgroundColor: '#222222' }}>
                  <CardBody>
                    <img src={contest3} alt="Card image" className={styles.detailsCard__img} />
                    <CardTitle tag="h5" className={styles.detailsCard__title}>
                      Weekly/Monthly Contests
                    </CardTitle>
                    <CardText className={styles.detailsCard__description}>
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </CardText>
                    <CardText className={styles.detailsCard__date}>
                      <small className='d-flex align-items-center fw-bold fs-6'>
                        <img src={CalenderIcon} alt="Calender" /> <span className='ms-1'>17 Dec - 26 Jan</span>
                      </small>
                    </CardText>
                    <Button color="primary" className={styles.detailsCard__button} onClick={() => redirectTo("/contest-info")}>
                      More Details
                    </Button>
                  </CardBody>
                </Card>
              </div>
            </div>
          </section>
          <section id='recentParticipants' className={styles.homepage__recentParticipants}>
            <div className={styles.homepage__recentParticipants__wrapper}>
              <h3 className={styles.homepage__recentParticipants__title}>Recent participants</h3>
              <p className={styles.homepage__recentParticipants__subtitle}>eand their feedback from mentor, winners tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
              <div className={styles.testimonials}>
                <div className={styles.testimonial}>
                  <div className={styles.testimonialTop}>
                    <h6>Incredible Experience</h6>
                    <p>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</p>
                  </div>
                  <div className={styles.testimonialBottom}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcv-0Rc4j0NJu4ZPavthyr_Rs3MrjiEsY-aIIuKNg&s" alt="profiel image" />
                    <div>
                      <div className={styles.testimonialBottom__name}>Jane Cooper</div>
                      <div className={styles.testimonialBottom__tag}>Participant</div>
                    </div>
                  </div>
                </div>
                <div className={styles.testimonial}>
                  <div className={styles.testimonialTop}>
                    <h6>Incredible Experience</h6>
                    <p>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</p>
                  </div>
                  <div className={styles.testimonialBottom}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcv-0Rc4j0NJu4ZPavthyr_Rs3MrjiEsY-aIIuKNg&s" alt="profiel image" />
                    <div>
                      <div className={styles.testimonialBottom__name}>Jane Cooper</div>
                      <div className={styles.testimonialBottom__tag}>Participant</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id='faqs' className={styles.homepage__faq}>
            <h3>Frequently asked questions</h3>
            <p>The most asked questions and answers by judges</p>
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
          </section>
          <section id='contactUs' className={styles.homepage__contactus}>
            <div className={styles.homepage__contactus__formWrapper}>
              <h3>Contact Us</h3>
              <form className={styles.homepage__contactus__form}>
                <div className="row">
                  <div className="form-group col-md-6 mx-auto mb-3">
                    <label htmlFor="name" className="label-title form-label mb-1">Name</label>
                    <input type="text" id="name" placeholder='Enter your name' name='name' className='form-control' />
                  </div>
                  <div className="form-group col-md-6 mx-auto mb-3">
                    <label htmlFor="email" className="label-title form-label mb-1">Email</label>
                    <input type="text" id="email" placeholder='example@gmail.com' name='email' className='form-control' />
                  </div>
                  <div className="form-group col-md-6 mx-auto mb-3">
                    <label htmlFor="subject" className="label-title form-label mb-1">Subject</label>
                    <input type="text" id="subject" placeholder='Would love to connect with you for ...' name='subject' className='form-control' />
                  </div>
                  <div className="form-group col-md-6 mx-auto mb-3">
                    <label htmlFor="phone" className="label-title form-label mb-1">Phone (optional)</label>
                    <input type="text" id="phone" placeholder='Enter your phone' name='phone' className='form-control' />
                  </div>
                  <div className="form-group col-12 mx-auto mb-3">
                    <label htmlFor="message" className="label-title form-label mb-1">Message</label>
                    <textarea name="message" id="message" cols={30} rows={5} className='form-control' placeholder='Enter your message'></textarea>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className='contactus__submitBtn' onClick={handleContactFormSubmit}>Submit</button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Homepage