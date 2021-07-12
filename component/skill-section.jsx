
import React from 'react'
import SkillBox from './skill-box'
import atomW from '../assets/atomW.svg'
import terminalW from '../assets/terminalW.svg'
import databaseW from '../assets/databaseW.svg'
import colorPalet from '../assets/colorW.svg'
import missW from '../assets/missW.svg'
import bootstrap from '../assets/bootstrap.svg'
import nextjs from '../assets/nextjs.svg'
import reactjs from '../assets/react.svg'
import nodejs from '../assets/nodejs.svg'
import figma from '../assets/figma.svg'
import javascript from '../assets/javascript.svg'
import expressJs from '../assets/expressjs.svg'
import current from '../assets/current.svg'
import sass from '../assets/sass.svg'
//Skill Section css in skill-box.css
const SkillSection = () => {
    let currentStack = [

        {
            src: javascript,
            skill: 'JavaScript'
        },
        {
            src: reactjs,
            skill: 'ReactJs'
        },
        {
            src: nextjs,
            skill: 'Nextjs'
        },
        {
            src: sass,
            skill: 'Sass'
        },
        {
            src: bootstrap,
            skill: 'Bootstrap'
        },
        {
            src: nodejs,
            skill: 'Nodejs'
        },
        {
            src: expressJs,
            skill: 'Expressjs'
        },
        {
            src: figma,
            skill: 'Figma'
        }
    ]
    return (
        <div id='skill' className='skill-section'>
            <p className='skill-section__header'>#Skills</p>
            <p className='skill-section__subHeader'>In my career of coding/programming,i have learned these technologies :</p>

            <div className="skill-container">
                <SkillBox icon={terminalW} header='Programming Languages' textArray={'Javascript,Java.'} />
                <SkillBox icon={atomW} header='Libraries & Frameworks' textArray={'Reactjs,Nextjs,Redux,Expressjs,Mongoose,Bootstrap,Jest etc.'} />
                <SkillBox icon={databaseW} header='Databases' textArray='MongoDB,Firebase,SQLite.' />
                <SkillBox icon={colorPalet} header='Designing Tools' textArray='Figma,Photoshop,Adobe Illustrator.' />
                <SkillBox icon={missW} header='miscellaneous' textArray='Cli,Git,Github,Sass,Markdown etc.' />

            </div>
            <div className='skill-container'>
                <SkillBox icon={current} header='My Current Stack' hasArray={true} currentStackArray={currentStack} />
            </div>
        </div>
    )
}

export default SkillSection;
