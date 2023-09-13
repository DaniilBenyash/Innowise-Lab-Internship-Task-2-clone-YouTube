const switcherTheme = document.getElementById("switchTheme")

function switchTheme(theme){
    localStorage.setItem('theme', theme)

    const logoLight = document.querySelector('#light-logo')
    const logoDark = document.querySelector('#dark-logo')

    if(theme === 'dark') {
        logoLight.style.display = 'none'
        logoDark.style.display = 'block'
    } else {
        logoDark.style.display = 'none'
        logoLight.style.display = 'block'
    }

    const elements = document.querySelectorAll('#theme')

    for(el of elements) el.setAttribute("data-theme", theme)
}

function checkTheme(){
    const currentTheme = localStorage.getItem('theme')

    currentTheme === 'light' || currentTheme === null ? switchTheme('light') : switchTheme('dark') 
}
checkTheme()

function setTheme(){
    const currentTheme = localStorage.getItem('theme')

    currentTheme === 'light' ? switchTheme('dark') : switchTheme('light')
}

switcherTheme.addEventListener('click', setTheme)