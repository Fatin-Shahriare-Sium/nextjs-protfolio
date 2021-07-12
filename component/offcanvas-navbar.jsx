

import React from 'react'
import GithubIcon from './icon/githubIcon'
import figma from '../assets/figma.svg'
const OffcanvasNavbar = ({ off, togglehandler }) => {
    return (
        <div className={off ? 'offcanvas offcanvas-shower' : 'offcanvas'}>
            <div className="offcanvas-wrapper">
                <div className="offcanvas-header">
                    <img src={figma} alt="" />
                    <p onClick={togglehandler} style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--head-color)', marginRight: '13px', cursor: 'pointer' }}>X</p>
                </div>
                <div className="offcanvas-body">


                    <p>Home</p>
                    <p>About</p>
                    <p>Skills</p>
                    <p>Projects</p>
                    <p>Contact</p>


                </div>
                <div className="offcanvas-footer">

                </div>
            </div>
        </div>
    )
}

export default OffcanvasNavbar
