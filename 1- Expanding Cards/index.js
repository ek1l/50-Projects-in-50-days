const getImg = document.querySelectorAll('.getimg')


getImg.forEach((e) => {

    e.addEventListener('click', () => {
            e.classList.toggle('active')
    })
})