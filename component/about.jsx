
import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const About = () => {

    let { ref, inView, entry } = useInView()


    let [aboutScetion, setAboutSection] = useState(false)

    useEffect(() => {
        setAboutSection(inView)
        // console.log(useInView);
    }, [inView])


    return (
        <div id='about' className='about-container'>
            <p className='about-headline'>#About</p>
            <div ref={ref} className="about-wrapper">
                <motion.div
                    initial={{ x: -1000 }}
                    animate={aboutScetion ? { x: 0 } : {}}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="about-text">
                    <p>I am <b>Fatin Shahriare Sium</b>.I have been able to learn web design and development by the grace of <b>Allah</b>.I am professional developer specialized on JavaScript-based technologies.
                        I love to write clean and maintainable code for websites and passionate about learning and exploring new technologies.

                    </p>
                </motion.div>
                <motion.div
                    initial={{ scale: .3 }}
                    animate={aboutScetion ? { opacity: 1, scale: 1 } : { opacity: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="about-img">

                    <img src="./siumx.jpg" alt="" />


                </motion.div>
            </div>
        </div>
    )
}

export default About
