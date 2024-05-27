import React, { useEffect } from "react";
import './Navbar.css';
import {useNavigate, useLocation} from 'react-router-dom';

const Navbar = () => {
    // // To be used for to auto display/hide on scroll.
    // // Add this useEffect to any page that needs this effect, like the `<Home/>` page.
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const navbar = document.querySelector('.hamburger-menu');
    //         const navTitle = document.querySelector('.navbar-title');

    //         if (window.scrollY > window.innerHeight / 2) {
    //             navbar.classList.add('opaque-blue');
    //             navTitle.classList.add('active');
    //         } else {
    //             navbar.classList.remove('opaque-blue');
    //             navTitle.classList.remove('active');
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    const goTo = (path) => {
        // Wrapper to collapse the nav menu when an option is clicked on.
        // Navigates to `path`
        document.querySelector('#menu__toggle').checked = false;
        navigate(path);
    }

    const navigate = useNavigate()
    const loc = useLocation()
    return (
        <header>
            <nav className="hamburger-menu opaque-blue">
                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className="menu__box">
                    <li><p className={`menu__item ${ loc.pathname === '/' ? 'current-page' : ''}`} onClick={()=> goTo('/')}>Home</p></li>
                    <li><p className={`menu__item ${loc.pathname === '/menu' ? 'current-page':''}`} onClick={()=> goTo('/menu')}>Menu</p></li>
                    <li><p className={`menu__item ${loc.pathname === '/photos' ? 'current-page':''}`} onClick={()=> goTo('/photos')}>Photos</p></li>
                    <li><p className={`menu__item ${loc.pathname === '/contact' ? 'current-page':''}`} onClick={()=> goTo('/contact')}>Contact</p></li>
                </ul>
                <p className="navbar-title active">Le Fish Au Chocolat</p>
            </nav>
        </header>
    );
};

export default Navbar;