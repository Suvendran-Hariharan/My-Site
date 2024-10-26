document.addEventListener('DOMContentLoaded', function () {
    const paragraphs = document.querySelectorAll('.content-section p');

    paragraphs.forEach(paragraph => {
        const originalText = paragraph.innerText;
        const maxVisibleCharacters = 150; // Set character limit for truncation

        if (originalText.length > maxVisibleCharacters) {
            const truncatedText = originalText.substring(0, maxVisibleCharacters) + '...';
            paragraph.innerText = truncatedText;

            // Create 'Read More' link and append it directly inside the paragraph text
            const readMoreLink = document.createElement('span');
            readMoreLink.classList.add('read-more-link');
            readMoreLink.innerText = ' Read More';  // Add a space before "Read More"

            // Append 'Read More' inside the paragraph without breaking the line
            paragraph.appendChild(readMoreLink);

            // Toggle functionality
            readMoreLink.addEventListener('click', () => {
                if (paragraph.classList.contains('expanded')) {
                    paragraph.innerText = truncatedText;
                    paragraph.appendChild(readMoreLink);  // Re-append the 'Read More' link
                    readMoreLink.innerText = ' Read More';
                    paragraph.classList.remove('expanded');
                } else {
                    paragraph.innerText = originalText;
                    paragraph.appendChild(readMoreLink);  // Keep 'Show Less' in paragraph
                    readMoreLink.innerText = ' Show Less';
                    paragraph.classList.add('expanded');
                }
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

