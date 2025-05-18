//header variables
const headerSearchBar = document.querySelector('#headerSearchInput')
const headerSearchMore = document.querySelector('.header-search-more')
const shoppingCartIcon = document.querySelector('.header-shopping-cart-icon')
const headerShoppingCart = document.querySelector('.header-shopping-cart')

//dropdown menu variables
const dropDownMenuButton = document.querySelector('#dropDownMenuBtN')
const dropDownMenu = document.querySelector('.dropdown-menu-left')

//main content variables
const main = document.querySelector('main')
const mainContentAdd = document.querySelector('#mainContentAdd')
const addMoreBtn = document.querySelector('#addMoreBtn')
const quitaddBtn = document.querySelector('#AddQuitBtn')

const mainContentAddDetails = document.querySelector('.main-content-add-details')
const quitDetailsBtn = document.querySelector('#quitDetailsBtn')

const addToCartButtons = document.querySelectorAll('button')

//header events

headerSearchBar.addEventListener('click', () => {
  headerSearchMore.classList.remove('header-search-more-hidden')
  headerSearchMore.classList.toggle('header-search-more-show')
})

main.addEventListener('click', () => {
  headerSearchMore.classList.remove('header-search-more-show')
  headerSearchMore.classList.add('header-search-more-hidden')
})

shoppingCartIcon.addEventListener('click', () => {
  headerShoppingCart.style.display = 'flex'
})

main.addEventListener('click', () => {
  headerShoppingCart.style.display = 'none'
})

//dropdown menu events

dropDownMenuButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('dropdown-menu-left-show')
  mainContent.classList.toggle('main-content-dropdown')
})

// main content events

quitaddBtn.addEventListener('click', () => {
  mainContentAdd.style.display = 'none'
})

addMoreBtn.addEventListener('click', () => {
  mainContentAddDetails.style.display = 'flex'
})

quitDetailsBtn.addEventListener('click', () => {
  mainContentAddDetails.style.display = 'none'
})