const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem('prefersDarkTheme', document.body.classList.contains("dark"));
}

function toggleRetroMode() {
    document.body.classList.toggle("retro");
    localStorage.setItem('prefersRetro', document.body.classList.contains("retro"));
}

window.addEventListener("load", () => {
    if (localStorage.getItem('prefersDarkTheme') === 'true' || (localStorage.getItem('prefersDarkTheme') === null && prefersDarkTheme.matches)) {
        document.body.classList.add("dark");
    }
    if (localStorage.getItem('prefersRetro') === 'true') {
        document.body.classList.add('retro');
    }
});

document.getElementById("retro").addEventListener("click", toggleRetroMode);
document.getElementById("dark").addEventListener("click", toggleDarkTheme);
