import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from './Homepage.module.scss';

function Homepage() {
  return (
    <div className={styles.homepage}>
      <Header />
      <Hero />
      <section className={styles.whoWeAre}>

      </section>
      <section className={styles.winCertificates}></section>
      <section className={styles.section4}></section>
      <section className={styles.section5}></section>
      <section className={styles.ourContest}></section>
      <section className={styles.recentParticipants}></section>
      <section className={styles.faq}></section>
      <section className={styles.contactus}></section>
      <Footer />
    </div>
  )
}

export default Homepage