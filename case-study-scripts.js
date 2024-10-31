document.addEventListener('DOMContentLoaded', () => {
    const paragraphs = document.querySelectorAll('.expandable-text');

    paragraphs.forEach(paragraph => {
        const fullText = paragraph.innerHTML;
        const maxVisibleCharacters = 150;
        const truncatedText = fullText.substring(0, maxVisibleCharacters) + '... ';

        // Initialize paragraph with truncated text and Read More link
        paragraph.innerHTML = `${truncatedText}<span class="read-more-link" style="color: blue; cursor: pointer;">Read More</span>`;

        const readMoreLink = paragraph.querySelector('.read-more-link');

        // Function to toggle between truncated and full text
        readMoreLink.addEventListener('click', function toggleText() {
            if (paragraph.classList.contains('expanded')) {
                paragraph.innerHTML = `${truncatedText}<span class="read-more-link" style="color: blue; cursor: pointer;">Read More</span>`;
            } else {
                paragraph.innerHTML = `${fullText}<span class="read-more-link" style="color: blue; cursor: pointer;">Show Less</span>`;
            }

            paragraph.classList.toggle('expanded');
            paragraph.querySelector('.read-more-link').addEventListener('click', toggleText);
        });
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


