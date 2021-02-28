//select element
const selectElement = function(element) {
    return document.querySelector(element)
}

let menuToggler = selectElement('.menu-toggle')
let body = selectElement('body')

menuToggler.addEventListener('click', () => {
    body.classList.toggle('open')
})