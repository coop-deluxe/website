// Check if user prefers dark theme
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

// Function to toggle dark theme
function toggleDarkTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem('prefersDarkTheme', document.body.classList.contains("dark"));
}

// Function to toggle retro mode
function toggleRetroMode() {
    document.body.classList.toggle("retro");
    localStorage.setItem('prefersRetro', document.body.classList.contains("retro"));
}

// Apply saved preferences on page load
window.addEventListener("load", () => {
    if (localStorage.getItem('prefersDarkTheme') === 'true' || (localStorage.getItem('prefersDarkTheme') === null && prefersDarkTheme.matches)) {
        document.body.classList.add("dark");
    }
    if (localStorage.getItem('prefersRetro') === 'true') {
        document.body.classList.add('retro');
    }
});

// Event listeners for theme and retro mode buttons
document.getElementById("retro").addEventListener("click", toggleRetroMode);
document.getElementById("dark").addEventListener("click", toggleDarkTheme);
