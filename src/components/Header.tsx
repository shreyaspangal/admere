import React from 'react';
import './Header.scss';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

function Header() {

    const [toggleNavMenu, setToggleNavMenu] = React.useState(false);

    function handleToggleMenu() {
        setToggleNavMenu(!toggleNavMenu);
    }

    const currMenuIcon = toggleNavMenu ? 'opened' : '';

    return (
        <nav className='nav'>
            <div className='nav__inner'>
                <Logo className='nav__logo' />
                {!toggleNavMenu &&
                    <ul className='nav__links'>
                        <li><a href="#whoWeAre">Who we are</a></li>
                        <li><a href="#howItHelps">How it helps</a></li>
                        <li><a href="#contests">Contests</a></li>
                        <li><a href="#contactUs">Contact us</a></li>
                        <li><a href="#faqs">Faq's</a></li>
                    </ul>
                }
                {toggleNavMenu &&
                    <ul className='nav__links-mobile'>
                        <li><a href="#whoWeAre">Who we are</a></li>
                        <li><a href="#howItHelps">How it helps</a></li>
                        <li><a href="#contests">Contests</a></li>
                        <li><a href="#contactUs">Contact us</a></li>
                        <li><a href="#faqs">Faq's</a></li>
                    </ul>
                }
                <button className='nav__contactBtn'>
                    Contact us
                </button>
                <button className={`${'nav__hamburger'} ${currMenuIcon}`} onClick={handleToggleMenu}>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Header