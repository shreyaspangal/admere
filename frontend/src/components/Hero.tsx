import React from 'react';
import styles from './Hero.module.scss';
import { Link } from "react-router-dom";

type Assets = {
  heroTitle?: string,
  heroSubtitle?: string,
  btnText?: any,
  btnIcon?: any,
  onClick?: any,
  bgHeight?: string,
  bgInnerHeight?: string,
}

function Hero({ heroTitle, heroSubtitle, btnText, onClick, btnIcon, bgHeight, bgInnerHeight }: Assets) {

  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  // const heroStyles = {
  //   height: '600px',
  //   backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.539), rgb(0, 0, 0)), url('../assets/images/hero-img.png')",
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: '0% top',
  //   backgroundSize: 'cover',
  // }

  return (
    <div className={styles.hero} style={{ height: bgHeight || '600px' }}>
      <div className={styles.hero__inner} style={{ height: bgInnerHeight || '600px' }}>
        {
          isLoggedIn &&
          <div className={styles.hero__toast}>
            <p>Your now logged in with admere and can submit your video or view your profile <Link to='/profile-upload'>here</Link>. If already submitted please ignore.</p>
            <button onClick={() => setIsLoggedIn(false)}>X</button>
          </div>
        }
        <div className={styles.hero__innerText}>
          {heroTitle && <h2 className='fs-1 mx-auto'>{heroTitle}</h2>}
          {heroSubtitle && <p className='fs-6 w-75 mx-auto my-5 my-lg-4'>{heroSubtitle}</p>}
          {btnText && <button type='button' onClick={onClick} className={styles.hero__submitBtn}>{btnText}</button>}
          {/* {btnIcon && <button type='button' onClick={onClick}>{btnText}</button>} */}
        </div>
      </div>
    </div>
  )
}

export default Hero