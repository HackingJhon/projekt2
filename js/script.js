const nav = document.querySelector('.navLinks')
const skidor = document.querySelector('.skidor')
    
function toggleMeny() {
    nav.classList.toggle('navActive')
    skidor.classList.toggle('toggle')

}

skidor.addEventListener('click', toggleMeny)