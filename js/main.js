
/* filters tab*/

const tabs= document.querySelectorAll('[data-target]'),
tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab=>{
    tab.addEventListener('click', ()=>{
       const target = document.querySelector(tab.dataset.target)
       
       tabContents.forEach(tc => {
        //tc = tabcontent
        tc.classList.remove('filters-active')
       })
       target.classList.add('filters-active')

       tabs.forEach(t=>{
        t.classList.remove('filter-tab-active')
       })
       tab.classList.add('filter-tab-active')
    })
})


//dark theme

const themeButton = document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme='ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//obtendo o theme atual
const getCurrentTheme = ()=> documento.body.classList.contains(darkTheme)? 'dark':'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme)? 'ri-moon-line': 'ri-sun-line'

// Validando se o usurio escolheu um tópico anteriormente

if (selectedTheme){
    document.body.classList[selectedTheme==='dark'? 'add': "remove"](darkTheme)
    themeButton.classList[selectedIcon==='ri-moon-line'? 'add': "remove"](iconTheme)
}

// Ativa e desativa theme manualmente
 themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon)
 })

 // Scroll Reveal Animation

 const sr= ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
 })

 sr.reveal(`.profile-border`)
 sr.reveal(`.profile-name`,{delay:500})
 sr.reveal(`.profile-profession`,{delay:600})
 sr.reveal(`.profile-social`,{delay:700})
 sr.reveal(`.profile-info-group`,{interval:100, delay:700})
 sr.reveal(`.profile-buttons`,{delay:800})
 sr.reveal(`.profile-button-small`,{delay:800}) 
 sr.reveal(`.filters-content`,{delay:900})
 sr.reveal(`.filters`,{delay: 900})