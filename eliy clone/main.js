const togglebtn = document.querySelector('.toglebtn')
const menu = document.querySelector('.navbar_menu')
const links = document.querySelector('.navbar_links')

togglebtn.addEventListener('click',()=>{
    menu.classList.toggle('active')
    links.classList.toggle('active')
})