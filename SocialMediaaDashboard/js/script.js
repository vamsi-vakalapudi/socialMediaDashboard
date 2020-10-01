document.addEventListener('DOMContentLoaded', () => {
  const themeStylesheet = document.getElementById('theme');
    const storedTheme = sessionStorage.getItem('theme');
    if(storedTheme){
        themeStylesheet.href = storedTheme;
    }
    const themeToggle = document.querySelector('input');
    themeToggle.addEventListener('click', () => {
        // if it's light -> go dark
        if(themeStylesheet.href.includes('css/style.css')){
            themeStylesheet.href = 'css/dark-style.css';
        } else {
            // if it's dark -> go light
            themeStylesheet.href = 'css/style.css';
        }
        // save the preference to sessionStorage
        sessionStorage.setItem('theme',themeStylesheet.href)  
    })
  
})