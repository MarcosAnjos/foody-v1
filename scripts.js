// selecionado a classe modaloverlay
const modalOverlay = document.querySelector('.modal-overlay')

// selecionando os card
const cards = document.querySelectorAll('.cards')

// cada card um click
for (let card of cards) {
    card.addEventListener('click', function(){
        // deixar modal ativo
        modalOverlay.classList.add('active')

        const cardImg = card.querySelector('.cards-img img')
        const cardInfo = card.querySelector('.cards-info')

        const modalImg = modalOverlay.querySelector('.modal-content img')
        const modalInfo = modalOverlay.querySelector('.card-info ')

        modalImg.src = cardImg.src
        modalImg.alt = cardImg.alt

        modalInfo.querySelector('h1').innerHTML = cardInfo.querySelector('h1').innerHTML
        modalInfo.querySelector('p').innerHTML = cardInfo.querySelector('p').innerHTML
        
    })
}

// fechar o modal
document.querySelector('.close-modal').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
})
