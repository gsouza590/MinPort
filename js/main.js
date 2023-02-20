
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