// Resume Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    initializeResume();
    setupEventListeners();
    animateOnScroll();
});

function initializeResume() {
    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize tooltips for skill tags
    initializeTooltips();
    
    // Add hover effects to project links
    addProjectHoverEffects();
    
    // Initialize progress bars for languages
    animateProgressBars();
}

function setupEventListeners() {
    // Download PDF button
    const downloadBtn = document.getElementById('downloadBtn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            downloadAsPDF();
        });
    }

    // Print button
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            printResume();
        });
    }

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + P for print
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            printResume();
        }
        
        // Ctrl/Cmd + S for download
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            downloadAsPDF();
        }
    });

    // Add click effects to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('click', function() {
            highlightSkill(this);
        });
    });

    // Add click effects to project items
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', function() {
            expandProject(this);
        });
    });
}

function initializeTooltips() {
    // Add tooltips to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            showTooltip(this, getSkillDescription(this.textContent));
        });
        
        tag.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
}

function getSkillDescription(skill) {
    const descriptions = {
        'Python': 'Proficient in Python programming with experience in web development, data analysis, and machine learning.',
        'JavaScript': 'Strong knowledge of JavaScript, ES6+, and modern frontend frameworks.',
        'React': 'Experience building dynamic user interfaces with React and React ecosystem.',
        'Node.js': 'Backend development using Node.js and Express framework.',
        'AWS': 'Cloud computing and deployment using Amazon Web Services.',
        'Git': 'Version control and collaboration using Git and GitHub.',
        'Docker': 'Containerization and deployment using Docker.',
        'MySQL': 'Database design and management with MySQL.',
        'MongoDB': 'NoSQL database development with MongoDB.',
        'TensorFlow': 'Machine learning and deep learning with TensorFlow.',
        'PyTorch': 'Deep learning framework for neural networks.',
        'Gradio': 'Building AI/ML applications with Gradio interface.'
    };
    
    return descriptions[skill] || `${skill} - Technical skill and expertise.`;
}

function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'skill-tooltip';
    tooltip.textContent = text;
    tooltip.style.cssText = `
        position: absolute;
        background: #333;
        color: white;
        padding: 0.5rem 0.75rem;
        border-radius: 4px;
        font-size: 0.8rem;
        z-index: 1000;
        max-width: 250px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        pointer-events: none;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    
    // Ensure tooltip stays within viewport
    if (tooltip.offsetLeft < 10) {
        tooltip.style.left = '10px';
    }
    if (tooltip.offsetLeft + tooltip.offsetWidth > window.innerWidth - 10) {
        tooltip.style.left = (window.innerWidth - tooltip.offsetWidth - 10) + 'px';
    }
}

function hideTooltip() {
    const tooltip = document.querySelector('.skill-tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

function addProjectHoverEffects() {
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });
    });
}

function highlightSkill(skillTag) {
    // Remove previous highlights
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.classList.remove('highlighted');
    });
    
    // Add highlight to clicked skill
    skillTag.classList.add('highlighted');
    
    // Add CSS for highlight effect
    if (!document.querySelector('#highlight-styles')) {
        const style = document.createElement('style');
        style.id = 'highlight-styles';
        style.textContent = `
            .skill-tag.highlighted {
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%) !important;
                transform: scale(1.1);
                box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Remove highlight after 2 seconds
    setTimeout(() => {
        skillTag.classList.remove('highlighted');
    }, 2000);
}

function expandProject(projectItem) {
    const description = projectItem.querySelector('.project-description');
    const techTags = projectItem.querySelector('.project-tech');
    
    if (description.style.maxHeight && description.style.maxHeight !== 'none') {
        // Collapse
        description.style.maxHeight = '3.6em'; // Approximately 2 lines
        techTags.style.opacity = '0.7';
        projectItem.classList.remove('expanded');
    } else {
        // Expand
        description.style.maxHeight = 'none';
        techTags.style.opacity = '1';
        projectItem.classList.add('expanded');
        
        // Add CSS for expanded state
        if (!document.querySelector('#expand-styles')) {
            const style = document.createElement('style');
            style.id = 'expand-styles';
            style.textContent = `
                .project-item .project-description {
                    transition: max-height 0.3s ease;
                    overflow: hidden;
                    max-height: 3.6em;
                }
                .project-item.expanded .project-description {
                    max-height: none;
                }
                .project-item .project-tech {
                    transition: opacity 0.3s ease;
                }
            `;
            document.head.appendChild(style);
        }
    }
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.level-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    progressBars.forEach(bar => {
        observer.observe(bar);
    });
}

function animateOnScroll() {
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

function downloadAsPDF() {
    // Show loading state
    const downloadBtn = document.getElementById('downloadBtn');
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
    downloadBtn.disabled = true;
    
    // Simulate PDF generation (in a real implementation, you'd use a library like jsPDF or Puppeteer)
    setTimeout(() => {
        // Create a simple PDF download simulation
        const element = document.createElement('a');
        const content = document.querySelector('.resume-container').innerHTML;
        
        // In a real implementation, you would:
        // 1. Use jsPDF to convert HTML to PDF
        // 2. Or use Puppeteer to generate PDF from HTML
        // 3. Or send the HTML to a server-side PDF generation service
        
        element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(content));
        element.setAttribute('download', 'Gaurav_Resume.html');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        
        // Reset button
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        
        // Show success message
        showNotification('Resume downloaded successfully!', 'success');
    }, 1500);
}

function printResume() {
    // Add print-specific styles
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            body * {
                visibility: hidden;
            }
            .resume-container, .resume-container * {
                visibility: visible;
            }
            .resume-container {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
            }
            .btn {
                display: none !important;
            }
        }
    `;
    document.head.appendChild(printStyles);
    
    // Trigger print
    window.print();
    
    // Remove print styles after printing
    setTimeout(() => {
        document.head.removeChild(printStyles);
    }, 1000);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#007bff'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add CSS for loading animation
    const loadingStyles = document.createElement('style');
    loadingStyles.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadingStyles);
});

// Add theme toggle functionality (bonus feature)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('resumeTheme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Load saved theme
const savedTheme = localStorage.getItem('resumeTheme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Add theme toggle button (optional)
function addThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.className = 'theme-toggle';
    themeToggle.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        background: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transition: all 0.3s ease;
    `;
    
    themeToggle.addEventListener('click', toggleTheme);
    document.body.appendChild(themeToggle);
}

// Uncomment the line below to add theme toggle
// addThemeToggle();
