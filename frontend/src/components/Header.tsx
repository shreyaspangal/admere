import React, { useState } from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

function Header() {

    const navigate = useNavigate();
    const [toggleNavMenu, setToggleNavMenu] = React.useState(false);

    function handleToggleMenu() {
        setToggleNavMenu(!toggleNavMenu);
    }

    const redirectTo = (route: string) => {
        navigate(route);
        window.scrollTo(0, 0);
    }

    function handleGoback() {
        navigate(-1);
    }

    function getPathName(path: string) {
        return window.location.pathname == path;
    }

    const handleClickScroll = (idName: string) => {
        let element = document.getElementById(idName);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const currMenuIcon = toggleNavMenu ? 'opened' : '';
    const showNavBarLinks = getPathName("/") || getPathName("/home");
    const userInfo = localStorage.getItem("userInfo");

    return (
        <nav className='nav'>
            <div className='nav__inner'>
                <Logo className='nav__logo' onClick={() => redirectTo("/home")} title="Go to home page" />
                {
                    (!toggleNavMenu && showNavBarLinks) &&
                    <ul className='nav__links'>
                        <li><a href="#whoWeAre">Who we are</a></li>
                        <li><a href="#winCertificates">How it helps</a></li>
                        <li><a href="#ourContest">Contests</a></li>
                        <li><a href="#faqs">Faq's</a></li>
                        <li><a href="#contactUs">Contact us</a></li>
                    </ul>
                }
                {
                    (toggleNavMenu && showNavBarLinks) &&
                    <ul className='nav__links-mobile'>
                        <li><a href="#whoWeAre">Who we are</a></li>
                        <li><a href="#winCertificates">How it helps</a></li>
                        <li><a href="#ourContest">Contests</a></li>
                        <li><a href="#faqs">Faq's</a></li>
                        <li><a href="#contactUs">Contact us</a></li>
                    </ul>
                }
                <div className='d-flex'>
                    {
                        !showNavBarLinks &&
                        (<button className='nav__gobackBtn' onClick={handleGoback}>
                            Go back
                        </button>)
                    }
                    {
                        (!userInfo && !getPathName('/register')) &&
                        <button className='nav__navBtn' onClick={() => redirectTo("/register")}>
                            Register
                        </button>
                    }
                    {
                        !userInfo && getPathName('/register') &&
                        <button className='nav__navBtn' onClick={() => redirectTo("/login")}>
                            Login
                        </button>
                    }
                    {
                        userInfo && !getPathName("/profile-upload") &&
                        <button className='nav__navBtn' onClick={() => redirectTo("/profile-upload")}>
                            My profile
                        </button>
                    }
                </div >
                {
                    showNavBarLinks &&
                    <button className={`${'nav__hamburger'} ${currMenuIcon}`} onClick={handleToggleMenu}>
                        <span></span>
                    </button>
                }
            </div >
        </nav >
    )
}

export default Header