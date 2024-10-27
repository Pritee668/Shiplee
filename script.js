let isDarkMode = false;
function toggleDarkMode() {
    isDarkMode = !isDarkMode; 
    document.body.classList.toggle('dark-mode', isDarkMode);

    const icon = document.getElementById('toggle-icon');
    if (isDarkMode) {
        icon.classList.remove('fa-moon'); 
        icon.classList.add('fa-sun'); 
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon'); 
    }
}

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

window.onscroll = function() {
    const scrollButton = document.getElementById("scroll-to-top");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
