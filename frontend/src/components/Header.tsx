import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import { getTokenSourceMapRange } from 'typescript';

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

    function handleLogout() {
        localStorage.removeItem("userInfo");
        navigate("/home");
    }

    function handleRegister() {
        navigate("/register");
    }

    function handleLogin() {
        navigate("/login");
    }

    function getPathName(path: string) {
        return window.location.pathname == path;
    }

    const currMenuIcon = toggleNavMenu ? 'opened' : '';
    const showNavBarLinks = getPathName("/") || getPathName("/home");
    const userInfo = localStorage.getItem("userInfo");

    return (
        <nav className='nav'>
            <div className='nav__inner'>
                <Logo className='nav__logo' />
                {
                    (!toggleNavMenu && showNavBarLinks) &&
                    <ul className='nav__links'>
                        <li><a href="#whoWeAre">Who we are</a></li>
                        <li><a href="#howItHelps">How it helps</a></li>
                        <li><a href="#contests">Contests</a></li>
                        <li><a href="#contactUs">Contact us</a></li>
                        <li><a href="#faqs">Faq's</a></li>
                    </ul>
                }
                {
                    (toggleNavMenu && showNavBarLinks) &&
                    <ul className='nav__links-mobile'>
                        <li><a href="#whoWeAre">Who we are</a></li>
                        <li><a href="#howItHelps">How it helps</a></li>
                        <li><a href="#contests">Contests</a></li>
                        <li><a href="#contactUs">Contact us</a></li>
                        <li><a href="#faqs">Faq's</a></li>
                    </ul>
                }
                <div>
                    {
                        !showNavBarLinks &&
                        (<button className='nav__gobackBtn' onClick={handleGoback}>
                            Go back
                        </button>)
                    }
                    {
                        userInfo && !getPathName("/register") && !getPathName("/login") &&
                        <button className='nav__navBtn' onClick={handleLogout}>
                            Logout
                        </button>
                    }
                    {
                        (!userInfo && !getPathName('/register')) &&
                        <button className='nav__navBtn' onClick={handleRegister}>
                            Register
                        </button>
                    }
                    {
                        getPathName('/register') &&
                        <button className='nav__navBtn' onClick={handleLogin}>
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