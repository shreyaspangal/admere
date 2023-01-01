import React from 'react';
import styles from './Hero.module.scss';

type Assets = {
  heroTitle: string,
  heroSubtitle: string,
  btnText?: any,
  btnIcon?: any,
  onClick?: any,
}

function Hero({ heroTitle, heroSubtitle, btnText, onClick, btnIcon }: Assets) {

  // const heroStyles = {
  //   height: '600px',
  //   backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.539), rgb(0, 0, 0)), url('../assets/images/hero-img.png')",
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: '0% top',
  //   backgroundSize: 'cover',
  // }

  return (
    <div className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__innerText}>
          <h2 className='fs-1 mx-auto'>{heroTitle}</h2>
          <p className='fs-6 w-75 mx-auto my-5 my-lg-4'>{heroSubtitle}</p>
          {btnText && <button type='button' onClick={onClick} className={styles.hero__submitBtn}>{btnText}</button>}
          {/* {btnIcon && <button type='button' onClick={onClick}>{btnText}</button>} */}
        </div>
      </div>
    </div>
  )
}

export default Hero