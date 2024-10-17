// Sample project data for each category with case study links
const projectTemplates = {
    'recent': [
        { description: 'Italian tradition and wood-fired essence in bold design', image: 'Christiano_thumb.jpg', link: 'case-study1.html' },
        { description: 'Elegant branding for luxury custom gold and diamond jewellers.', image: 'Pramila Jewellers Mood Board-08-min.jpg', link: 'case-study2.html' },
        { description: 'Futuristic figure entering a portal, representing visionary leadership.', image: 'Time Travaller_Thumbnail-min.jpg', link: 'print_casestudy_2.html' },
        { description: 'Hands assembling gears, symbolizing <br> 30 years of unity.', image: '30 years of LMD-min.jpg', link: 'print_casestudy_1.html' },
        { description: 'Custom WordPress theme for a travel blog.', image: 'project5.jpg', link: 'case-study5.html' },
        { description: 'Employees collaborating, illustrating a dynamic workspace culture.', image: 'LMD_GPTW_Thumbnail-min.jpg', link: 'print_casestudy_4.html' },
    ],
    'brand-identity': [
        { description: 'Italian tradition and wood-fired essence in bold design', image: 'Christiano_thumb.jpg', link: 'case-study1.html' },
        { description: 'Elegant branding for luxury custom gold and diamond jewellers.', image: 'Pramila Jewellers Mood Board-08-min.jpg', link: 'case-study2.html' },
        { description: 'Logo and visual identity for a sports team.', image: 'project3.jpg', link: 'case-study3.html' },
        { description: 'New identity for a corporate law firm.', image: 'project4.jpg', link: 'case-study4.html' },
        { description: 'Rebranding for a luxury fashion brand.', image: 'project5.jpg', link: 'case-study5.html' }
    ],
    'print': [
        { description: 'Hands assembling gears, symbolizing <br> 30 years of unity.', image: '30 years of LMD-min.jpg', link: 'print_casestudy_1.html' },
        { description: 'Futuristic figure entering a portal, representing visionary leadership.', image: 'Time Travaller_Thumbnail-min.jpg', link: 'print_casestudy_2.html' },
        { description: 'LMD trophy atop red stairs, symbolizing respect and achievement.', image: 'LMD_MR_Thumbnail-min.jpg', link: 'print_casestudy_3.html' },
        { description: 'Employees collaborating, illustrating a dynamic workspace culture.', image: 'LMD_GPTW_Thumbnail-min.jpg', link: 'print_casestudy_4.html' },
        { description: 'Ocean-themed brochure for a coastal apartment project.', image: 'The Wonder_Thumbnail-min.jpg', link: 'print_casestudy_5.html' }
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
        { description: 'Website design for a fintech startup.', image: 'project1.jpg', link: 'case-study1.html' },
        { description: 'Mobile app UI for a fitness tracking app.', image: 'project2.jpg', link: 'case-study2.html' },
        { description: 'Dashboard design for an enterprise software.', image: 'project3.jpg', link: 'case-study3.html' },
        { description: 'Website for a digital artist portfolio.', image: 'project4.jpg', link: 'case-study4.html' },
        { description: 'E-commerce platform for a retail clothing store.', image: 'project5.jpg', link: 'case-study5.html' }
    ],
    'package-design': [
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

// Function to dismiss the sticky alert
function dismissAlert() {
    document.querySelector('.sticky-alert').style.display = 'none';
}

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
                    <a href="${project.link}" target="_blank" rel="noopener noreferrer">
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
