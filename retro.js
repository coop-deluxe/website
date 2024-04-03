// Check if user prefers dark theme
const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

// Function to toggle dark theme
function toggleDarkTheme() {
    document.body.classList.toggle("dark");
    localStorage.setItem('prefersDarkTheme', document.body.classList.contains("dark") ? "true" : "false");
    updateModeButtonText();
}

// Function to toggle retro mode
function toggleRetroMode() {
    document.body.classList.toggle("retro");
    localStorage.setItem('prefersRetro', document.body.classList.contains("retro") ? "true" : "false");
}

// Function to update mode button text
function updateModeButtonText() {
    const darkModeButton = document.getElementById('dark');
    if (document.body.classList.contains("dark")) {
        darkModeButton.textContent = "Light Mode";
    } else {
        darkModeButton.textContent = "Dark Mode";
    }
}

// Apply saved preferences on page load
window.addEventListener("load", () => {
    if (localStorage.getItem('prefersDarkTheme') === 'true' || (localStorage.getItem('prefersDarkTheme') === null && prefersDarkTheme.matches)) {
        document.body.classList.add("dark");
    }
    if (localStorage.getItem('prefersRetro') === 'true') {
        document.body.classList.add('retro');
    }
    updateModeButtonText(); // Update mode button text on page load
});

// Event listener for the Dark Mode button
document.getElementById("dark").addEventListener("click", toggleDarkTheme);
