document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.content-section p');

    paragraphs.forEach(paragraph => {
        const originalText = paragraph.innerText;
        const maxVisibleCharacters = 150;

        if (originalText.length > maxVisibleCharacters) {
            const truncatedText = originalText.substring(0, maxVisibleCharacters) + '...';
            paragraph.innerHTML = truncatedText;

            // Create 'Read More' link
            const readMoreLink = document.createElement('span');
            readMoreLink.classList.add('read-more-link');
            readMoreLink.innerText = ' Read More';
            paragraph.appendChild(readMoreLink);

            // Toggle CSS class only for visibility
            readMoreLink.addEventListener('click', () => {
                paragraph.classList.toggle('expanded');
                readMoreLink.innerText = paragraph.classList.contains('expanded') ? ' Show Less' : ' Read More';
            });
        }
    });
});


// Function to auto-scroll to the 'Work' section if the URL contains 'scrollTo=work'
document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const scrollToSection = urlParams.get('scrollTo');

    if (scrollToSection === 'work') {
        const workSection = document.getElementById('work-section');
        if (workSection) {
            setTimeout(function() {
                workSection.scrollIntoView({ behavior: 'smooth' });
            }, 500);  // Delay to ensure full page load before scrolling
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
        // Function to center the gallery based on the screen width
        function centerGallery() {
            const gallery = document.querySelector('.gallery');
            const viewportWidth = window.innerWidth;
            const galleryWidth = gallery.offsetWidth;

            // Only set margin if the viewport is wider than the gallery
            if (viewportWidth > galleryWidth) {
                gallery.style.marginLeft = 'auto';
                gallery.style.marginRight = 'auto';
            } else {
                gallery.style.marginLeft = '0';
                gallery.style.marginRight = '0';
            }
        }

        // Initial call to center the gallery
        centerGallery();

        // Re-center the gallery on window resize
        window.addEventListener('resize', centerGallery);
    });


