import React from 'react'
import GithubIcon from './icon/githubIcon'

const ContactSingleBox = ({ Svg, link }) => {
    return (
        <a target='_blank' href={link.href}>
            <div style={{ borderRight: `3px solid ${link.color}` }} className='single-contact-box'>
                <div className="single-contact-box__img">
                    {Svg}
                </div>
                <div className="single-contact-box__details">
                    <p style={{ fontSize: '2rem', color: 'var(--head-color)', fontWeight: '700' }}>{link.topic}</p>
                    <p style={{ fontSize: '1.7rem', color: 'var(--text-color)', fontWeight: '500' }}>{link.cover}</p>
                </div>
            </div>
        </a>
    )
}

export default ContactSingleBox;
