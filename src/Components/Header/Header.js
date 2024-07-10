import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { AiFillYoutube } from 'react-icons/ai'
import { FaBandcamp, FaSoundcloud } from 'react-icons/fa'
import BgAudio from '../BackgroundAudio/BgAudio'
import {GiHamburgerMenu, GiCancel} from 'react-icons/gi'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    }
    return (
        <div className="Header">
            <div className="container">
                <div className="logo">
                    <h2>Studio Mercy</h2>
                </div>
                <ul className="navbar">
                    <Link to='/' className='BigLinks'><li>Home</li></Link>
                    <Link to='/albums' className='BigLinks'><li>Albums</li></Link>
                    <Link to='/videos' className='BigLinks'><li>Videos</li></Link>
                    <Link to='/blogs' className='BigLinks'><li>Blogs</li></Link>
                    <li><a href="https://studio-mercy-apparel.creator-spring.com/" target='_blank' rel='noreferrer'>Merch</a></li>
                    <Link to='/contact' className='BigLinks'><li>Contact Us</li></Link>
                </ul>


                {/* Mobile Stuff */}
                <div className={`mobile-menu-bar ${isOpen ? 'active' : ''}`}>
                    <div className="cross">
                        <GiCancel className='cross-icon' onClick={toggleMenu}/>
                    </div>
                    <div className="mobile">
                        <Link to='/' className='BigLinks'><li>Home</li></Link>
                        <Link to='/albums' className='BigLinks'><li>Albums</li></Link>
                        <Link to='/videos' className='BigLinks'><li>Videos</li></Link>
                        <Link to='/blogs' className='BigLinks'><li>Blogs</li></Link> 
                        <li><a href="https://studio-mercy-apparel.creator-spring.com/" target='_blank' rel='noreferrer'>Merch</a></li>
                        <Link to='/contact' className='BigLinks'><li>Contact Us</li></Link>
                    </div>
                    <div className="icons">
                        <a href="https://www.youtube.com/channel/UCGdC267vaPQCaKd6kDv6CjA" target='_blank' rel='noreferrer'><AiFillYoutube className="header-icon yt" /></a>
                        <a href="https://studiomercyofficial.bandcamp.com/" target='_blank' rel='noreferrer'><FaBandcamp className="header-icon bc" /></a>
                        <a href="https://soundcloud.com/studiomercy" target='_blank' rel='noreferrer'><FaSoundcloud className="header-icon sc" /></a>
                        <BgAudio />
                    </div>
                </div>
                <div className="hamburger">
                    <GiHamburgerMenu className='burger-icon' onClick={toggleMenu}  />
                </div>
            </div>
        </div>
    )
}

export default Header