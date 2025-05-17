//dropdown menu variables
const dropDownMenuButton = document.querySelector('#dropDownMenuBtN')
const dropDownMenu = document.querySelector('.dropdown-menu-left')

//main content variables
const mainContentAdd = document.querySelector('#mainContentAdd')
const addMoreBtn = document.querySelector('#addMoreBtn')
const quitaddBtn = document.querySelector('#AddQuitBtn')

const addToCartButtons = document.querySelectorAll('button')

//dropdown menu events
dropDownMenuButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('dropdown-menu-left-show')
  mainContent.classList.toggle('main-content-dropdown')
})

// main content events

quitaddBtn.addEventListener('click', () => {
  mainContentAdd.style.display = 'none'
})