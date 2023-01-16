import React from 'react';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo.svg';

function Header() {

    const navigate = useNavigate();
    const [toggleNavMenu, setToggleNavMenu] = React.useState(false);

    function handleToggleMenu() {
        setToggleNavMenu(!toggleNavMenu);
    }

    function handleGoback() {
        navigate(-1);
    }

    const currMenuIcon = toggleNavMenu ? 'opened' : '';
    const showNavBarLinks = window.location.pathname == '/' || window.location.pathname == '/home';

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
                {
                    !showNavBarLinks &&
                    (<button className='nav__gobackBtn' onClick={handleGoback}>
                        Go back
                    </button>)
                }
                {
                    showNavBarLinks &&
                    (<button className='nav__contactBtn'>
                        Contact us
                    </button>)
                }
                {
                    showNavBarLinks &&
                    <button className={`${'nav__hamburger'} ${currMenuIcon}`} onClick={handleToggleMenu}>
                        <span></span>
                    </button>
                }
            </div>
        </nav>
    )
}

export default Header