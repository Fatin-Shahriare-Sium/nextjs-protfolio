import React, { useEffect } from 'react'

import Image from 'next/image.js'
let sium = require('../assets/ka.jpg')
import z from '../assets/ka.jpg'
const About = () => {
    useEffect(() => {
        let img = document.getElementById('imgx')
        // let urlx = URL.createObjectURL(z)
        img.src = sium
    }, [])
    return (
        <div className='about-container'>
            <p className='about-headline'>#About</p>
            <div className="about-wrapper">
                <div className="about-text">
                    <p>I am Fatin Shahriare Sium.I have abled to learn web design and development by the grace of Allah.I am professional developer specialized on JavaScript-based technologies.
                        I love to write clean and maintainable code for websites and passionate about learning and exploring new technologies.

                    </p>
                </div>
                <div className="about-img">
                    <img id='imgx' src={z} alt="" />

                </div>
            </div>
        </div>
    )
}

export default About
