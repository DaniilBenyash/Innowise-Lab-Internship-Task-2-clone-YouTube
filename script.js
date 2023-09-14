const switcherTheme = document.getElementById("switchTheme")

const THEME = {
    DARK: 'dark',
    LIGHT: 'light',
}

function switchTheme(theme){
    localStorage.setItem('theme', theme)

    const logoLight = document.querySelector('#light-logo')
    const logoDark = document.querySelector('#dark-logo')

    theme === THEME.DARK ? 
    (logoLight.style.display = 'none', 
    logoDark.style.display = 'block') 
    : 
    (logoDark.style.display = 'none',
    logoLight.style.display = 'block')

    const body = document.getElementById('theme')

    body.setAttribute("data-theme", theme)
}

function checkTheme(){
    const currentTheme = localStorage.getItem('theme')

    currentTheme === THEME.LIGHT || currentTheme === null ? switchTheme(THEME.LIGHT) : switchTheme(THEME.DARK) 
}
checkTheme()

function setTheme(){
    const currentTheme = localStorage.getItem('theme')

    currentTheme === THEME.LIGHT ? switchTheme(THEME.DARK) : switchTheme(THEME.LIGHT)
}

switcherTheme.addEventListener('click', setTheme)