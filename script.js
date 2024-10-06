// Sample project data for each category with 6 to 7 projects
const projectTemplates = {
    'recent': [
        { description: 'Website redesign for a modern e-commerce platform.', image: 'project1.jpg' },
        { description: 'Mobile app development for a food delivery startup.', image: 'project2.jpg' },
        { description: 'Landing page for a product launch campaign.', image: 'project3.jpg' },
        { description: 'Responsive redesign for a personal portfolio website.', image: 'project4.jpg' },
        { description: 'Custom WordPress theme for a travel blog.', image: 'project5.jpg' },
        { description: 'Interactive dashboard for a financial services app.', image: 'project6.jpg' },
        { description: 'UX/UI improvements for a healthcare app.', image: 'project7.jpg' }
    ]
};

// Function to display projects for the selected category
function filterProjects(category) {
    const projectGrid = document.getElementById('projectGrid');
    
    projectGrid.classList.add('fade-out');

    setTimeout(() => {
        projectGrid.innerHTML = '';

        const selectedProjects = projectTemplates[category];
        if (!selectedProjects || selectedProjects.length === 0) {
            projectGrid.innerHTML = '<p>No projects available for this category.</p>';
        } else {
            selectedProjects.forEach(project => {
                const projectTile = document.createElement('div');
                projectTile.classList.add('project-tile');
                projectTile.innerHTML = `
                    <img src="${project.image}" alt="Project Image" loading="lazy">
                    <div class="project-description">
                        <p>${project.description}</p>
                    </div>
                `;
                projectGrid.appendChild(projectTile);
            });
        }

        projectGrid.classList.remove('fade-out');
    }, 500);

    document.querySelectorAll('.filters button').forEach(button => button.classList.remove('active'));
    document.querySelector(`button[onclick="filterProjects('${category}')"]`).classList.add('active');
}

window.onload = function() {
    filterProjects('recent');
    updateGridLayout();
    updateLocalTime();
    applyFirstScrollEffect();
    handleScroll();
}

// Update local time in the footer
function updateLocalTime() {
    const localTimeElement = document.getElementById('localTime');
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    localTimeElement.textContent = now.toLocaleTimeString([], options);
}

setInterval(updateLocalTime, 60000);

function updateGridLayout() {
    const screenWidth = window.innerWidth;
    const projectGrid = document.getElementById('projectGrid');
    
    if (screenWidth < 768) {
        projectGrid.style.gridTemplateColumns = '1fr';
    } else if (screenWidth < 1024) {
        projectGrid.style.gridTemplateColumns = '1fr 1fr';
    } else {
        projectGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    }
}

window.addEventListener('resize', updateGridLayout);

let hasScrolled = false;
function applyFirstScrollEffect() {
    window.addEventListener('scroll', function () {
        if (!hasScrolled && window.scrollY > 0) {
            document.getElementById('work-section').scrollIntoView({ behavior: 'smooth' });
            hasScrolled = true;
        }
    });
}

function handleScroll() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const observerOptions = {
        root: null,
        threshold: 0.5
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            const sectionId = entry.target.getAttribute('id');
            const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);

            if (entry.isIntersecting) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => observer.observe(section));
}
