// Sample project data for each category with case study links
const projectTemplates = {
    'recent': [
        { description: '<b>Christianos Pizza:</b> Italian tradition and wood-fired essence in bold design', image: 'Christiano_thumb.jpg', link: 'case-study1.html' },
        { description: '<b>Pramila Jewellers:</b> Elegant branding for luxury custom gold and diamond jewellers.', image: 'Pramila Jewellers Mood Board-08-min.jpg', link: 'case-study2.html' },
        { description: '<b>Inqube:</b> Futuristic figure entering a portal, representing visionary leadership.', image: 'Time Travaller_Thumbnail-min.jpg', link: 'print_casestudy_2.html' },
        { description: '<b>LMD:</b> Hands assembling gears, symbolizing <br> 30 years of unity.', image: '30 years of LMD-min.jpg', link: 'print_casestudy_1.html' },
        { description: '<b>Book For You:</b> Professional Logo and Brand Guidelines Development for "Book for you" Visual Identity.', image: 'Book for you Mood Board 1-08-min.jpg', link: 'case-study3.html' },
        { description: '<b>LMD:</b> Employees collaborating, illustrating a dynamic workspace culture.', image: 'LMD_GPTW_Thumbnail-min.jpg', link: 'print_casestudy_4.html' },
    ],
    'brand-identity': [
        { description: '<b>Christianos Pizza:</b> Italian tradition and wood-fired essence in bold design', image: 'Christiano_thumb.jpg', link: 'case-study1.html' },
        { description: '<b>Pramila Jewellers:</b> Elegant branding for luxury custom gold and diamond jewellers.', image: 'Pramila Jewellers Mood Board-08-min.jpg', link: 'case-study2.html' },
        { description: '<b>Book For You:</b> Professional Logo and Brand Guidelines Development for "Book for you" Visual Identity.', image: 'Book for you Mood Board 1-08-min.jpg', link: 'case-study3.html' },
    ],
    'print': [
        { description: '<b>LMD:</b> Hands assembling gears, symbolizing <br> 30 years of unity.', image: '30 years of LMD-min.jpg', link: 'print_casestudy_1.html' },
        { description: '<b>Inqube:</b> Futuristic figure entering a portal, representing visionary leadership.', image: 'Time Travaller_Thumbnail-min.jpg', link: 'print_casestudy_2.html' },
        { description: '<b>LMD:</b> Trophy atop red stairs, symbolizing respect and achievement.', image: 'LMD_MR_Thumbnail-min.jpg', link: 'print_casestudy_3.html' },
        { description: '<b>LMD:</b> Employees collaborating, illustrating a dynamic workspace culture.', image: 'LMD_GPTW_Thumbnail-min.jpg', link: 'print_casestudy_4.html' },
        { description: '<b>Wonder:</b> Ocean-themed brochure for a coastal apartment project.', image: 'The Wonder_Thumbnail-min.jpg', link: 'print_casestudy_5.html' },
        { description: '<b>OSC:</b> Illustrative Basketball Court Banner - Home of the Geckos', image: 'OSC Mood Board-03-min.jpg', link: 'print_casestudy_6.html' }
    ],
    'campaigns': [
        { description: 'Campaign for a sustainable fashion brand.', image: 'project1.jpg', link: 'case-study1.html' },
        { description: 'Digital campaign for a fintech app.', image: 'project2.jpg', link: 'case-study2.html' },
        { description: 'Social media campaign for an NGO.', image: 'project3.jpg', link: 'case-study3.html' },
        { description: 'Integrated ad campaign for a tech product.', image: 'project4.jpg', link: 'case-study4.html' },
        { description: 'Event-based marketing campaign for a festival.', image: 'project5.jpg', link: 'case-study5.html' }
    ],
    'events': [
        { description: 'Event branding for a tech conference.', image: 'project1.jpg', link: 'case-study1.html' },
        { description: 'Design for a music festival stage and banners.', image: 'project2.jpg', link: 'case-study2.html' },
        { description: 'Invitations and marketing for a corporate gala.', image: 'project3.jpg', link: 'case-study3.html' },
        { description: 'Event branding for a wedding expo.', image: 'project4.jpg', link: 'case-study4.html' },
        { description: 'Promotional materials for a charity auction.', image: 'project5.jpg', link: 'case-study5.html' }
    ],
    'digital': [
        { description: '<b>Land Rover:</b> Social media strategy tailored to Sri Lankan holidays and cultural moments.', image: 'Digital Mood Board-02-min.jpg', link: 'Digital_case-study1.html' },
        { description: '<b>Jaguar:</b> Global strategy highlighting luxury, performance, and innovation.', image: 'Digital Mood Board-06-min.jpg', link: 'Digital_case-study2.html' },
        { description: '<b>Bela Beauty College:</b>Transforming Online Presence Together', image: 'Belabeauty_01.jpg', link: 'Digital_case-study3.html' },
        { description: '<b>Fancy Foods:</b> Boosting Social media Reach by 13.5% and Engagement by 4.2%', image: 'Fancyfoods_1.jpg', link: 'Digital_case-study4.html' },
    ],
    'UI/UX': [
        { description: 'Packaging design for a new snack product.', image: 'project1.jpg', link: 'case-study1.html' },
        { description: 'Eco-friendly packaging for a beauty brand.', image: 'project2.jpg', link: 'case-study2.html' },
        { description: 'Creative packaging for a holiday gift set.', image: 'project3.jpg', link: 'case-study3.html' },
        { description: 'Minimalist package design for a skincare line.', image: 'project4.jpg', link: 'case-study4.html' },
        { description: 'Packaging for a local brewery’s beer.', image: 'project5.jpg', link: 'case-study5.html' }
    ],
    'interior-design': [
        { description: 'Interior design for a modern coworking space.', image: 'project1.jpg', link: 'case-study1.html' },
        { description: 'Office space redesign for a tech company.', image: 'project2.jpg', link: 'case-study2.html' },
        { description: 'Home renovation with a minimalist theme.', image: 'project3.jpg', link: 'case-study3.html' },
        { description: 'Design for a boutique hotel interior.', image: 'project4.jpg', link: 'case-study4.html' },
        { description: 'Luxury apartment design in the city.', image: 'project5.jpg', link: 'case-study5.html' }
    ]
};

// Function to display projects for the selected category
function filterProjects(category) {
    const projectGrid = document.getElementById('projectGrid');
    
    projectGrid.classList.add('fade-out'); // Add fade-out class

    setTimeout(() => {
        projectGrid.innerHTML = ''; // Clear previous projects

        const selectedProjects = projectTemplates[category];
        if (!selectedProjects || selectedProjects.length === 0) {
            projectGrid.innerHTML = '<p>No projects available for this category.</p>';
        } else {
            selectedProjects.forEach(project => {
                const projectTile = document.createElement('div');
                projectTile.classList.add('project-tile');
                projectTile.innerHTML = `
                    <a href="${project.link}">
                        <img src="${project.image}" alt="Project Image" loading="lazy">
                        <div class="project-description">
                            <p>${project.description}</p>
                        </div>
                    </a>
                `;
                projectGrid.appendChild(projectTile);
            });
        }

        projectGrid.classList.remove('fade-out'); // Remove fade-out class after update
    }, 500);

    // Update active filter button
    document.querySelectorAll('.filters button').forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="filterProjects('${category}')"]`).classList.add('active');
}

// Trigger functions on page load
window.onload = function() {
    filterProjects('recent'); // Load recent projects by default
    updateGridLayout(); // Adjust grid layout based on screen size
    updateLocalTime(); // Set local time in the footer
    applyFirstScrollEffect(); // Apply smooth scroll effect on first scroll
    handleScroll(); // Update navigation active link on scroll
    handleAlert(); // Handle the display of the sticky alert on mobile
}

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");
    const paragraphs = document.querySelectorAll('.content-section p');

    paragraphs.forEach(paragraph => {
        console.log("Processing paragraph:", paragraph.innerText);
        const originalText = paragraph.innerText;
        const maxVisibleCharacters = 150; // Set character limit for truncation

        if (originalText.length > maxVisibleCharacters) {
            const truncatedText = originalText.substring(0, maxVisibleCharacters) + '...';
            paragraph.innerText = truncatedText;

            const readMoreLink = document.createElement('span');
            readMoreLink.classList.add('read-more-link');
            readMoreLink.innerText = ' Read More';

            paragraph.appendChild(readMoreLink);

            // Function to toggle text visibility
            function toggleText() {
                if (paragraph.classList.contains('expanded')) {
                    paragraph.innerText = truncatedText;
                    paragraph.appendChild(readMoreLink);
                    readMoreLink.innerText = ' Read More';
                    paragraph.classList.remove('expanded');
                } else {
                    paragraph.innerText = originalText;
                    paragraph.appendChild(readMoreLink);
                    readMoreLink.innerText = ' Show Less';
                    paragraph.classList.add('expanded');
                }
            }

            // Add event listeners for click and touchstart
            readMoreLink.addEventListener('click', toggleText);
            readMoreLink.addEventListener('touchstart', toggleText); // For touch devices
        }
    });
});



// Function to handle the sticky alert display based on screen size
function handleAlert() {
    const alertElement = document.querySelector('.sticky-alert');
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 767) {
        alertElement.style.display = 'flex'; // Show alert on mobile devices
    } else {
        alertElement.style.display = 'none'; // Hide alert on larger screens
    }
}

// Update local time in the footer
function updateLocalTime() {
    const localTimeElement = document.getElementById('localTime');
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    localTimeElement.textContent = now.toLocaleTimeString([], options);
}

// Update local time every minute
setInterval(updateLocalTime, 60000);

// Adjust project grid layout based on screen size
function updateGridLayout() {
    const screenWidth = window.innerWidth;
    const projectGrid = document.getElementById('projectGrid');
    
    if (screenWidth < 768) {
        projectGrid.style.gridTemplateColumns = '1fr'; // One column for small screens
    } else if (screenWidth < 1024) {
        projectGrid.style.gridTemplateColumns = '1fr 1fr'; // Two columns for tablets
    } else {
        projectGrid.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Four columns for larger screens
    }
}

// Listen to window resize and update grid layout and alert visibility
window.addEventListener('resize', () => {
    updateGridLayout();
    handleAlert(); // Also handle alert visibility on resize
});

// Trigger smooth scroll to the work section on the first scroll
let hasScrolled = false;
function applyFirstScrollEffect() {
    window.addEventListener('scroll', function () {
        if (!hasScrolled && window.scrollY > 0) {
            document.getElementById('work-section').scrollIntoView({ behavior: 'smooth' });
            hasScrolled = true;
        }
    });
}

// Handle scroll to update active navigation links
function handleScroll() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const observerOptions = {
        root: null,
        threshold: 0.5 // Trigger when 50% of the section is in view
    };

    let activeSectionId = ''; // Track the active section

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activeSectionId = entry.target.getAttribute('id'); // Set the active section
            }
        });

        // Update the active link in the navigation
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeSectionId}`) {
                link.classList.add('active');
            }
        });
    };

    // Create an observer to watch section visibility
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section)); // Observe each section
}

// Function to display projects for the selected category
function filterProjects(category) {
    const projectGrid = document.getElementById('projectGrid');
    
    projectGrid.classList.add('fade-out'); // Add fade-out class

    setTimeout(() => {
        projectGrid.innerHTML = ''; // Clear previous projects

        const selectedProjects = projectTemplates[category];
        if (!selectedProjects || selectedProjects.length === 0) {
            projectGrid.innerHTML = '<p>No projects available for this category.</p>';
        } else {
            selectedProjects.forEach(project => {
                const projectTile = document.createElement('div');
                projectTile.classList.add('project-tile');
                projectTile.innerHTML = `
                    <a href="${project.link}" rel="noopener noreferrer">
                        <img src="${project.image}" alt="Project Image" loading="lazy">
                        <div class="project-description">
                            <p>${project.description}</p>
                        </div>
                    </a>
                `;
                projectGrid.appendChild(projectTile);
            });
        }

        projectGrid.classList.remove('fade-out'); // Remove fade-out class after update
    }, 500);

    // Update active filter button
    document.querySelectorAll('.filters button').forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="filterProjects('${category}')"]`).classList.add('active');
}

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

function adjustFontSize() {
    const emailElement = document.querySelector('.email');
    const socialIcons = document.querySelectorAll('.social-icon');
    const viewportWidth = window.innerWidth;

    if (viewportWidth < 768) {
        emailElement.style.fontSize = '1.2rem';
        socialIcons.forEach(icon => {
            icon.style.width = '30px';
        });
    } else if (viewportWidth < 1024) {
        emailElement.style.fontSize = '1.6rem';
        socialIcons.forEach(icon => {
            icon.style.width = '40px';
        });
    } else {
        emailElement.style.fontSize = '2.5rem';
        socialIcons.forEach(icon => {
            icon.style.width = '50px';
        });
    }
}

window.addEventListener('load', adjustFontSize);
window.addEventListener('resize', adjustFontSize);
