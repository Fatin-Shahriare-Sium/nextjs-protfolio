
import React, { useEffect } from 'react'
import UseCustomAnimation from './hooks/useCustomAnimation'

const Hero = () => {

    let { changeText } = UseCustomAnimation()


    useEffect(() => {
        // changeText(document.getElementById('hero-text'))

        let textDom = document.getElementById('hero-text')
        let textArray = textDom.textContent.split('')
        textDom.textContent = ''
        let randomText = ['%', '3', 'f', '$', '@', '!', 'p', 'a', 's', '*', '^', '0', '艾', '天', '小', '子', '錫', '杰', '&', '/']


        for (var i = 0; i < randomText.length; i++) {
            textDom.innerHTML += `<span>${randomText[i]}</span>`
        }

        let decodeTextInterval = setInterval(decodeTextFun, 50)
        let index = 0

        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }

        console.log(textArray.length);
        console.log(randomText.length);


        async function decodeTextFun() {
            let suffledRandomText = randomText.sort(() => Math.random() - .5)

            for (var i = 0; i < suffledRandomText.length; i++) {
                await sleep(10)

                textDom.childNodes[index].textContent = i == suffledRandomText.length - 1 ? textArray[index] : suffledRandomText[i]
                textDom.childNodes[index].className = 'decode-text'

                if (i == suffledRandomText.length - 1 && index < 19) {
                    index++
                    console.log(suffledRandomText[19]);
                } else if (index == '19') {
                    console.log('clearinterval');
                    clearInterval(decodeTextInterval)
                }

            }


            // console.log(index);
            // await sleep(11)
            // index++;


        }



    }, [])




    return (
        <div id='home' className='hero-container'>
            <div className="hero-wrapper">
                <p className='hero-hello-text'>Hello,I am</p>
                <p id='hero-text' className='hero-name-text'>Fatin Shahriare Sium</p>
                <div className='hero-name-rotating__container'>
                    <p style={{ fontSize: '2rem', color: 'var(--head-color)' }}>& </p>

                    <div className='hero-text-swapper'>

                        <p>Javascipt Developer .</p>
                        <p>MERN Stack Developer .</p>
                        <p>Freelancer .</p>
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
