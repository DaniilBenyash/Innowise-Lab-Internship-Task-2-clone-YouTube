const switcherTheme = document.getElementById("switchTheme")

const THEME = {
    DARK: 'dark',
    LIGHT: 'light',
}

function switchTheme(theme){
    localStorage.setItem('theme', theme)

    const logoLight = document.querySelector('#light-logo')
    const logoDark = document.querySelector('#dark-logo')

    logoLight.style.display = theme === 'dark' ? 'none' : 'block'
    logoDark.style.display = theme === 'dark' ? 'block' : 'none'

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