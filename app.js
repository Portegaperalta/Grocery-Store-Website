
//dropdown menu 
const dropDownMenuButton = document.querySelector('#dropDownMenuBtN')
const dropDownMenu = document.querySelector('.dropdown-menu-left')

dropDownMenuButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('dropdown-menu-left-show')
})