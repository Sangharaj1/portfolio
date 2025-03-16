// This file contains the JavaScript code for the portfolio. 
// It may include functionality for interactivity, animations, or dynamic content loading.

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Search functionality
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', function() {
        const query = searchBar.value.toLowerCase();
        const sections = document.querySelectorAll('.searchable');
        sections.forEach(section => {
            const text = section.textContent.toLowerCase();
            if (text.includes(query)) {
                section.style.display = '';
            } else {
                section.style.display = 'none';
            }
        });
    });

    // Dynamic content loading (placeholder)
    const loadContentButton = document.getElementById('load-content');
    if (loadContentButton) {
        loadContentButton.addEventListener('click', () => {
            const contentArea = document.getElementById('content-area');
            contentArea.innerHTML = '<p>New content loaded!</p>';
        });
    }
});