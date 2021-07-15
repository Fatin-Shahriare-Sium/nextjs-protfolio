
import React from 'react'

const UseCustomAnimation = () => {

    function changeText(textDom) {
        let randomText = ['法', '廷', '沙', '裡', '亞', '爾', '錫', '子', '以', '去', '小', '天', '然', '杰', '錫', '子', '艾', '儿', '子', '沙']

        let textArray = textDom.textContent.split('')
        textDom.textContent = ''

        for (let i = 0; i < randomText.length; i++) {
            let spanx = document.createElement('span')
            spanx.style.marginLeft = randomText[i] == ' ' ? '1%' : {}
            spanx.className = 'rotate-span'
            spanx.innerText = randomText[i]

            textDom.appendChild(spanx)
        }


        let completeChanging = setInterval(changeTextFun, 50)

        let index = 0

        function changeTextFun() {
            textDom.childNodes[index].textContent = textArray[index]
            textDom.childNodes[index].className = 'red'
            index++
            if (index == textArray.length) {
                clearInterval(completeChanging)
            }
        }


    }


    function decodeText(textDom) {

        let randomText = ['%', '3', 'f', '$', '@', '!', 'p', 'a', 's', '*', '^', '0', '艾', '天', '小', '子', '錫', '杰', '&', '/']

        let textArray = textDom.textContent.split('')

        textDom.textContent = ''

        for (var i = 0; i < randomText.length; i++) {
            textDom.innerHTML += `<span>${randomText[i]}</span>`
        }
        let index = 0

        let decodeCleaner = setInterval(decodeTextFun, 55)



        const sleep = (milliseconds) => {
            return new Promise(resolve => setTimeout(resolve, milliseconds))
        }

        console.log(textDom.childNodes[textArray.length - 1]);
        async function decodeTextFun() {
            let suffledRandomText = randomText.sort(() => Math.random() - 0.5)

            for (var i = 0; i < suffledRandomText.length; i++) {
                await sleep(10)
                textDom.childNodes[index].textContent = i == suffledRandomText.length - 1 ? textArray[index] : suffledRandomText[i]
                // textDom.childNodes[index].className = 'decode-text'



                if (i == suffledRandomText.length - 1 && index < 19) {

                    index++
                }
                else if (index == '19') {

                    console.log('cleadrinterval', index);
                    textDom.childNodes[textArray.length - 1].textContent = 'm'

                    setTimeout(() => {
                        textDom.textContent = 'Fatin Shahriare Sium'
                        textDom.className = 'decode-text'
                    }, 500)
                    return clearInterval(decodeCleaner)



                }

            }
        }



    }




    return { changeText, decodeText }
}

export default UseCustomAnimation;
