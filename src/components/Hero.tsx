import React from 'react';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__innerText}>
          <h2 className='fs-1 mx-auto'>We help individuals/bands represent their singing talent</h2>
          <p className='fs-6 w-75 mx-auto my-5 my-lg-4'>This is a subheadline usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          <button type='button'>Join now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero