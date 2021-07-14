
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

        let randomText = ['%', '3', 'f', '$', '@', '!', 'p', 'a', 's']

        console.log(randomText.sort(() => Math.random()));
    }




    return { changeText }
}

export default UseCustomAnimation;
