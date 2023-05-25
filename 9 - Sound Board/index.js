const applause = document.querySelector('#applause')
const boo = document.querySelector('#boo')
const gasp = document.querySelector("#gasp")

applause.addEventListener('click', () => {
    const audio = document.querySelector('#tocarApplause')
    audio.currentTime = 0.2
    audio.play()
})


boo.addEventListener('click', () => {
    const audio = document.querySelector('#tocarBoo')
    audio.currentTime = 0.2
    audio.play()
})


gasp.addEventListener('click', () => {
    const audio = document.querySelector('#tocarGasp')
    audio.currentTime = 0.2
    audio.play()
})



