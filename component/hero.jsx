
import React from 'react'

const Hero = () => {
    return (
        <div id='home' className='hero-container'>
            <div className="hero-wrapper">
                <p className='hero-hello-text'>Hello,I am</p>
                <p className='hero-name-text'>Fatin Shahriare Sium</p>
                <p className='hero-name-rotating'>& <div className='hero-text-swapper'>
                    <p>Javascipt Developer</p>
                </div>

                    <div className="hero-btn">

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
                </p>
            </div>
        </div>
    )
}

export default Hero
