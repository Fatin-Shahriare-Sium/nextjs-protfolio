import React, { useEffect, useState } from 'react'
import GithubIcon from './icon/githubIcon'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
const ContactSingleBox = ({ Svg, link }) => {
    let { ref, inView, entries } = useInView()
    let [contactBox, setContactBox] = useState(false)

    useEffect(() => {
        setContactBox(inView)
    }, [inView])

    return (
        <motion.a
            initial={{ scale: .3, rotate: 360 }}
            animate={contactBox ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, ease: 'easeInOut' }}
            ref={ref} target='_blank' href={link.href}>
            <div style={{ borderRight: `3px solid ${link.color}` }} className='single-contact-box'>
                <div className="single-contact-box__img">
                    {Svg}
                </div>
                <div className="single-contact-box__details">
                    <p style={{ fontSize: '2rem', color: 'var(--head-color)', fontWeight: '700' }}>{link.topic}</p>
                    <p style={{ fontSize: '1.7rem', color: 'var(--text-color)', fontWeight: '500' }}>{link.cover}</p>
                </div>
            </div>
        </motion.a>
    )
}

export default ContactSingleBox;
