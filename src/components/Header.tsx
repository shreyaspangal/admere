import React from 'react';
import styles from './Header.module.scss';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

function Header() {

    const [toggleNavMenu, setToggleNavMenu] = React.useState(false);

    function handleToggleMenu() {
        setToggleNavMenu(true);
    }

    const currMenuIcon = toggleNavMenu ? 'opened' : '';

    return (
        <nav className={styles.nav}>
            <div className={styles.nav__inner}>
                <Logo className={styles.nav__logo} />
                <ul className={styles.nav__links}>
                    <li><a href="#">Who we are</a></li>
                    <li><a href="#">How it helps</a></li>
                    <li><a href="#">Contests</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Faq's</a></li>
                </ul>
                <button className={styles.nav__contactBtn}>
                    Contact us
                </button>
                <button className={`${styles.nav__hamburger} ${currMenuIcon}`} onClick={handleToggleMenu}>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Header