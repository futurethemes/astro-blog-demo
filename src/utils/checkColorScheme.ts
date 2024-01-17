const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
    document.documentElement.classList.toggle('light')
    document.documentElement.classList.toggle('dark')
}