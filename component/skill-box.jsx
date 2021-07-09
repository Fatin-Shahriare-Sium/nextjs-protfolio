
import React from 'react'

const SkillBox = ({ header, textArray, icon, hasArray, currentStackArray }) => {
    return (
        <div style={hasArray ? { width: '100%!important', minHeight: '27vh!important' } : {}} className='skill-box'>
            <div className="skill-box__icon">
                <img style={{ height: '30px', width: "30px", objectFit: "contain" }} src={icon} alt="" />
            </div>
            <div className="skill-box__main">
                <p style={hasArray ? { fontSize: '3.3rem!important' } : {}} className='skill-box__header'>{header}</p>
                <div style={hasArray ? { marginTop: '1.7%!important' } : {}} className='skill-box__skillWrapper'>
                    {hasArray ? currentStackArray.map((sig, index) => <div key={index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1% 1%' }}>
                        <img style={{ width: '27px', height: '27px' }} src={sig.src} alt="" />
                        <p style={{ marginLeft: '1%' }}>{sig.skill}</p>
                    </div>)
                        :
                        <p>{textArray}</p>}
                </div>
            </div>
        </div>
    )
}

export default SkillBox
