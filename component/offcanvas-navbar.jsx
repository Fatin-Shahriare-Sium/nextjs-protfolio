

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


                    <a onClick={togglehandler} href="#home">
                        <p>Home</p>
                    </a>

                    <a onClick={togglehandler} href="#about">
                        <p>About</p>
                    </a>

                    <a onClick={togglehandler} href="#skill">
                        <p>Skills</p>
                    </a>

                    <a onClick={togglehandler} href="#project">
                        <p>Projects</p>
                    </a>

                    <a onClick={togglehandler} href="#contact">
                        <p>Contact</p>
                    </a>


                </div>
                <div className="offcanvas-footer">

                </div>
            </div>
        </div>
    )
}

export default OffcanvasNavbar
