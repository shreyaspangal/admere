import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from './Homepage.module.scss';
import { ReactComponent as TrophyIcon } from '../assets/images/icons/trophy.svg';
import { ReactComponent as PeopleConversingIcon } from '../assets/images/icons/people-conversing.svg';
import { ReactComponent as CertificateIcon } from '../assets/images/icons/certificate.svg';
import { ReactComponent as CalenderIcon } from '../assets/images/icons/calender.svg';

function Homepage() {
  return (
    <div className={styles.homepage}>
      <Header />
      <Hero />
      <section className={styles.homepage__whoWeAre}>
        <h3>Who we are</h3>
        <p>We are community of experinced singers usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        <div className={styles.homepage__whoWeAre__cards}>
          <div className={styles.homepage__whoWeAre__card}>
            <TrophyIcon />
            <h4>Online Contests</h4>
            <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>
          <div className={styles.homepage__whoWeAre__card}>
            <PeopleConversingIcon />
            <h4>CertificateIcon</h4>
            <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>
          <div className={styles.homepage__whoWeAre__card}>
            <CertificateIcon />
            <h4>Win Certificates</h4>
            <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          </div>
        </div>
      </section>
      <section className={styles.homepage__winCertificates}>
        <h3>Win Certificates</h3>
        <div className={styles.homepage__winCertificates__leftImg}></div>
        <div className={styles.homepage__winCertificates__rightText}>
          <h5>Participate and improve your overall singing skills!</h5>
          <p>Particiate in online contests enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
      <section className={styles.homepage__section4}>
        <div className={styles.homepage__section4__leftText}>
          <h5>Participate and improve your overall singing skills!</h5>
          <p>Particiate in online contests enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={styles.homepage__section4__rightImg}></div>
      </section>
      <section className={styles.homepage__section5}>
        <div className={styles.homepage__section5__leftImg}></div>
        <div className={styles.homepage__section5__rightText}>
          <h5>Participate and improve your overall singing skills!</h5>
          <p>Particiate in online contests enim ad minim veniam, quis Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
      <section className={styles.homepage__ourContest}>
        <h3>Who we are</h3>
        <p>We are community of experinced singers usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        <div className={styles.homepage__ourContest__detailsCards}>
          <div className={styles.homepage__ourContest__detailsCard}>
            <img src="" alt="" />
            <h6>Weekly/Monthly Contests</h6>
            <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            <div> <CalenderIcon /> 17 Dec - 26 Jan</div>
            <button type='button'>More Details</button>
          </div>
        </div>
      </section>
      <section className={styles.homepage__recentParticipants}>
        <h3>Recent participants</h3>
        <p>eand their feedback from mentor, winners tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
        <div className="testimonials">
          <div className="testimonial">
            <div className="testimonialTop">
              <h6>Incredible Experience</h6>
              <p>We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.</p>
            </div>
            <div className="testimonialBottom">
              <img src="" alt="" />
              <div className="testimonialBottom-name">Jane Cooper</div>
              <div className="testimonialBottom-tag">Participant</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.homepage__faq}>
        <h3>Frequently asked questions</h3>
        <p>The most asked questions and answers by judges</p>
        <div className={styles.carousel}>
          <div className="carousel__title">How can I enroll for premium contest</div>
          <div className="carousel__content">Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.</div>
        </div>
        <div className={styles.carousel}>
          <div className="carousel__title">What are requirements for the contests?</div>
          <div className="carousel__content">Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.</div>
        </div>
        <div className={styles.carousel}>
          <div className="carousel__title">Are these judges certified? and experienced</div>
          <div className="carousel__content">Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.</div>
        </div>
        <div className={styles.carousel}>
          <div className="carousel__title">Who can participate?</div>
          <div className="carousel__content">Quisque rutrum. Aenean imperdi. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget.</div>
        </div>
      </section>
      <section className={styles.homepage__contactus}>
        <h3>Contact Us</h3>
        <div className="form-group col-sm-6">
          <label htmlFor="name" className="label-title">Name</label>
          <input type="text" id="name" placeholder='Enter your name' name='name' />
        </div>
        <div className="form-group col-sm-6">
          <label htmlFor="name" className="label-title">Name</label>
          <input type="text" id="name" placeholder='Enter your name' name='name' />
        </div>
        <div className="form-group col-sm-6">
          <label htmlFor="name" className="label-title">Name</label>
          <input type="text" id="name" placeholder='Enter your name' name='name' />
        </div>
        <div className="form-group col-sm-6">
          <label htmlFor="name" className="label-title">Name</label>
          <input type="text" id="name" placeholder='Enter your name' name='name' />
        </div>
        <div className="form-group col-12">
          <label htmlFor="message" className="label-title">Message</label>
          <textarea name="message" id="message" cols={30} rows={10}></textarea>
        </div>
        <button type="submit">Submit</button>
      </section>
      <Footer />
    </div>
  )
}

export default Homepage