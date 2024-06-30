document.body.classList.add('dark'); 

const prefersDark = localStorage.getItem('prefersDarkTheme');

if (prefersDark === 'false') {
  document.body.classList.remove('dark');
}

document.getElementById('dark').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('prefersDarkTheme', isDark);
});
