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
