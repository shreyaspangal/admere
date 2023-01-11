import React from 'react';
import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/social/twitter.svg';
import { ReactComponent as InstagramIcon } from '../assets/images/social/instagram.svg';
// import { ReactComponent as LinkedinIcon } from '../assets/images/social/instagram.svg';
// import { ReactComponent as TelegramIcon } from '../assets/images/social/twitter.svg';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <div className={styles.footer__top}>
                    <Logo className={styles.nav__logo} />
                    <div className={styles.footer__linksCol}>
                        <div><a href="#">Who we are</a></div>
                        <div><a href="#">How it works</a></div>
                        <div><a href="#">Testimonials</a></div>
                    </div>
                    <div className={styles.footer__linksCol}>
                        <div><a href="#">Weekly/monthly Contest</a></div>
                        <div><a href="#">Premium Contest</a></div>
                    </div>
                    <div className={styles.footer__linksCol}>
                        <div><a href="#">Contact us</a></div>
                        <div><a href="#">Faq's</a></div>
                    </div>
                    <div className={styles.footer__socialCol}>
                        <div>Follow us</div>
                        <div className={styles.footer__socialIcons}>
                            <a href="#">
                                <TwitterIcon color='blue'/>
                            </a>
                            <a href="#">
                                <InstagramIcon color='blue'/>
                            </a>
                            <a href="#">
                                <TwitterIcon color='blue'/>
                            </a>
                            <a href="#">
                                <InstagramIcon color='blue'/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.footer__bottom}>
                    <div className={styles.footer__bottomLeft}>
                        <p>@Copyright</p>
                    </div>
                    <div className={styles.footer__bottomRight}>
                        <div><a href="">Privacy Policy</a></div>
                        <div><a href="">Terms and Conditions</a></div>
                        <div><a href="">Disclaimer</a></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer