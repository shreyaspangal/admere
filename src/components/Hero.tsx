import React from 'react';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__innerText}>
          <h2>We help individuals/bands represent their singing talent</h2>
          <p>This is a subheadline usmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
          <button type='button'>Join now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero