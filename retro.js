const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

if (localStorage.getItem('prefersDarkTheme') === 'true' || (localStorage.getItem('prefersDarkTheme') === null && prefersDarkTheme.matches)) {
    document.body.classList.add("dark");
    localStorage.setItem('prefersDarkTheme', 'true');
}

if (localStorage.getItem('prefersRetro') === null) {
    localStorage.setItem('prefersRetro', 'true');
}

if (localStorage.getItem('prefersRetro') === 'true') {
    document.body.classList.add('retro');
} else {
    document.body.classList.remove('retro');
}

if (localStorage.getItem('prefersDarkTheme') === 'true') {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}

document.getElementById("retro").addEventListener("click", () => {
    document.body.classList.toggle("retro");
    localStorage.setItem('prefersRetro', document.body.classList.contains("retro") ? "true" : "false");
});

document.getElementById("dark").addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem('prefersDarkTheme', document.body.classList.contains("dark") ? "true" : "false");
    updateModeButtonText();
});

function updateModeButtonText() {
    const darkModeButton = document.getElementById('dark');
    if (document.body.classList.contains("dark")) {
        darkModeButton.textContent = "Light Mode";
    } else {
        darkModeButton.textContent = "Dark Mode";
    }
}

// Update mode button text on page load
updateModeButtonText();
