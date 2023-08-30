import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <>
            <footer className='footer'>
                <div className='line'></div>
                <div className='footer-wrap'>
                    <div className='footer-text'>©2022 Bookstore</div>
                    <div className='footer-text'>All rights reserved</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;