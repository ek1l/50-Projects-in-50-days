const applause = document.querySelector('#applause')
const boo = document.querySelector('#boo')

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



