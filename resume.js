// Theme toggle
const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    const icon = themeBtn.querySelector('i');
    if (icon) icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
  });
}

// Print
const printBtn = document.getElementById('printBtn');
if (printBtn) {
  printBtn.addEventListener('click', () => window.print());
}

// Download as PDF (uses browser print-to-PDF)
const downloadBtn = document.getElementById('downloadBtn');
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    window.print();
  });
}

// Enhance external links
document.querySelectorAll('a[target="_blank"]').forEach(a => {
  a.setAttribute('rel', 'noopener noreferrer');
});
