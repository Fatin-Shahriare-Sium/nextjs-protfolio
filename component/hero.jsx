
import React from 'react'

const Hero = () => {
    return (
        <div id='home' className='hero-container'>
            <div className="hero-wrapper">
                <p className='hero-hello-text'>Hello,I am</p>
                <p className='hero-name-text'>Fatin Shahriare Sium</p>
                <div className='hero-name-rotating__container'>
                    <p style={{ fontSize: '2rem', color: 'var(--head-color)' }}>& </p>

                    <div className='hero-text-swapper'>
                        <p></p>
                        {/* <p>Javascipt Developer</p>
                        <p>MERN Stack Developer</p>
                        <p>Freelancer</p> */}
                    </div>

                </div>

                <div style={{ marginTop: '1%' }} className="hero-btn">

                    <button>
                        <a href="">
                            Get In Touch
                        </a>
                    </button>


                    <button style={{ marginLeft: '7%' }}>
                        <a href="">
                            Resume
                        </a>
                    </button>

                    {/* <a href="mailto:sium1206@gmail.com">Mail</a> */}
                </div>
            </div>
        </div>
    )
}

export default Hero
