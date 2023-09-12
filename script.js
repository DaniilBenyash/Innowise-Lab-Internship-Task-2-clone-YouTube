const switchTheme = document.getElementById("switchTheme")

switchTheme.addEventListener('click', () => {
    if(localStorage.getItem('theme') === 'light'){
        applyTheme('dark-theme')
        localStorage.setItem('theme', 'dark')
        switchLogo('dark')
    } else {
        applyTheme('#')
        localStorage.setItem('theme', 'light')
        switchLogo('light')
    }
        
})

function applyTheme(themeName){
    let themeUrl = `/styles/${themeName}.css`
    document.querySelector('[title="theme"]').setAttribute('href', themeUrl)
}

if(localStorage.getItem('theme') === 'light' || localStorage.getItem('theme') === null){
    applyTheme('#')
    localStorage.setItem('theme', 'light')
    switchLogo('light')
} else {
    applyTheme('dark-theme')
    localStorage.setItem('theme', 'dark')
    switchLogo('dark')
}

function switchLogo(themeName){
    const logoLight = document.querySelector(`[data-theme="light"]`)
    const logoDark = document.querySelector(`[data-theme="dark"]`)
    
    if(themeName === 'dark'){
        logoLight.style.display = 'none'
        logoDark.style.display = 'block'
    }else{
        logoDark.style.display = 'none'
        logoLight.style.display = 'block'
    }
}