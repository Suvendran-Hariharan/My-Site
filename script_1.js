// Sample project data for each category with case study links
const projectTemplates = {
    'recent': [
        { description: '<b>Christianos Pizza:</b> Italian tradition and wood-fired essence in bold design', image: 'Christiano_thumb.jpg', link: 'case-study1.html' },
        { description: '<b>Land Rover:</b> Over 15% of customers upgraded warranties via targeted email and leaflet campaign.', image: 'JLR Cover.jpg', link: 'campaign_case-study2.html' },
        { description: '<b>Charged:</b> Launch campaign for Coca-Cola Charged energy drink with bold branding and promotions.', image: 'Charged_Thumbnail.jpg', link: 'campaign_case-study3.html'},
        { description: '<b>LMD:</b> Hands assembling gears, symbolizing <br> 30 years of unity.', image: '30 years of LMD-min.jpg', link: 'print_casestudy_1.html' },
        { description: '<b>Inqube:</b> Bring It campaign, recruiting bold talent for sustainable apparel innovation.', image: 'Inqube mood board-02-min.jpg', link: 'campaign_case-study1.html' },
        { description: '<b>LMD:</b> Employees collaborating, illustrating a dynamic workspace culture.', image: 'LMD_GPTW_Thumbnail-min.jpg', link: 'print_casestudy_4.html' },
        { description: '<b>Bela Beauty College:</b>Transforming Online Presence Together', image: 'Belabeauty_01.jpg', link: 'Digital_case-study3.html' },
        { description: '<b>Inqube:</b> Futuristic figure entering a portal, representing visionary leadership.', image: 'Time Travaller_Thumbnail-min.jpg', link: 'print_casestudy_2.html' },
    ],
    'brand-identity': [
        { description: '<b>Christianos Pizza:</b> Italian tradition and wood-fired essence in bold design', image: 'Christiano_thumb.jpg', link: 'case-study1.html' },
        { description: '<b>Pramila Jewellers:</b> Elegant branding for luxury custom gold and diamond jewellers.', image: 'Pramila Jewellers Mood Board-08-min.jpg', link: 'case-study2.html' },
        { description: '<b>Book For You:</b> Professional Logo and Brand Guidelines Development for "Book for you" Visual Identity.', image: 'Book for you Mood Board 1-08-min.jpg', link: 'case-study3.html' },
        { description: '<b>Logofolio 2020 - 2022:</b> Brand Stories in Design', image: 'Logofolio cover-03-min.jpg', link: 'case-study4.html' },
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
        { description: '<b>Inqube:</b> Bring It campaign, recruiting bold talent for sustainable apparel innovation.', image: 'Inqube mood board-02-min.jpg', link: 'campaign_case-study1.html' },
        { description: '<b>Land Rover:</b> Over 15% of customers upgraded warranties via targeted email and leaflet campaign.', image: 'JLR Cover.jpg', link: 'campaign_case-study2.html' },
        { description: '<b>Charged:</b> Launch campaign for Coca-Cola Charged energy drink with bold branding and promotions.', image: 'Charged_Thumbnail.jpg', link: 'campaign_case-study3.html' }
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
    
    projectGrid.classList.add('fade-out');

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

        projectGrid.classList.remove('fade-out');
    }, 500);

    document.querySelectorAll('.filters button').forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="filterProjects('${category}')"]`).classList.add('active');
}

// Event handling for Read More functionality
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    const paragraphs = document.querySelectorAll('.content-section p');

    paragraphs.forEach(paragraph => {
        const originalText = paragraph.innerText;
        const maxVisibleCharacters = 150;

        if (originalText.length > maxVisibleCharacters) {
            const truncatedText = originalText.substring(0, maxVisibleCharacters) + '...';
            paragraph.innerHTML = truncatedText;

            const readMoreLink = document.createElement('span');
            readMoreLink.classList.add('read-more-link');
            readMoreLink.innerText = ' Read More';
            paragraph.appendChild(readMoreLink);

            function toggleText() {
                if (paragraph.classList.contains('expanded')) {
                    paragraph.innerHTML = truncatedText;
                    paragraph.appendChild(readMoreLink);
                    readMoreLink.innerText = ' Read More';
                    paragraph.classList.remove('expanded');
                } else {
                    paragraph.innerHTML = originalText;
                    paragraph.appendChild(readMoreLink);
                    readMoreLink.innerText = ' Show Less';
                    paragraph.classList.add('expanded');
                }
            }

            readMoreLink.addEventListener('pointerdown', toggleText); // pointerdown works for both click and touch
        }
    });
});

// Responsive design adjustments
function updateGridLayout() {
    const projectGrid = document.getElementById('projectGrid');
    const screenWidth = window.innerWidth;
    
    if (screenWidth < 768) {
        projectGrid.style.gridTemplateColumns = '1fr';
    } else if (screenWidth < 1024) {
        projectGrid.style.gridTemplateColumns = '1fr 1fr';
    } else {
        projectGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }
}

// Handle sticky alert visibility
function handleAlert() {
    const alertElement = document.querySelector('.sticky-alert');
    alertElement.style.display = window.innerWidth <= 767 ? 'flex' : 'none';
}

// Display and update local time in footer
function updateLocalTime() {
    const localTimeElement = document.getElementById('localTime');
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    localTimeElement.textContent = now.toLocaleTimeString([], options);
}

setInterval(updateLocalTime, 60000); // Update time every minute

// Initial page setup on load
window.onload = function() {
    filterProjects('recent');
    updateGridLayout();
    updateLocalTime();
    handleAlert();
    applyFirstScrollEffect();
    handleScroll();
};

// Adjust font size based on screen size
function adjustFontSize() {
    const emailElement = document.querySelector('.email');
    const socialIcons = document.querySelectorAll('.social-icon');
    const viewportWidth = window.innerWidth;

    emailElement.style.fontSize = viewportWidth < 768 ? '1.2rem' : viewportWidth < 1024 ? '1.6rem' : '2.5rem';
    socialIcons.forEach(icon => {
        icon.style.width = viewportWidth < 768 ? '30px' : viewportWidth < 1024 ? '40px' : '50px';
    });
}

window.addEventListener('resize', () => {
    updateGridLayout();
    handleAlert();
    adjustFontSize();
});

// Smooth scroll to "Work" section if URL contains 'scrollTo=work'
document.addEventListener('DOMContentLoaded', () => {
    const scrollToSection = new URLSearchParams(window.location.search).get('scrollTo');
    if (scrollToSection === 'work') {
        const workSection = document.getElementById('work-section');
        if (workSection) {
            setTimeout(() => workSection.scrollIntoView({ behavior: 'smooth' }), 500);
        }
    }
});

// Smooth scroll effect on first scroll
let hasScrolled = false;
function applyFirstScrollEffect() {
    window.addEventListener('scroll', function () {
        if (!hasScrolled && window.scrollY > 0) {
            document.getElementById('work-section').scrollIntoView({ behavior: 'smooth' });
            hasScrolled = true;
        }
    });
}

// Scroll-based active navigation link update
function handleScroll() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const observerOptions = { root: null, threshold: 0.5 };
    const observerCallback = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeSectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`nav a[href="#${activeSectionId}"]`).classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
}