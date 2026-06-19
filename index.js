// 1. Resume Button click karne par ek message dikhane ke liye
const resumeButton = document.querySelector('.btn');

resumeButton.addEventListener('click', function(event) {
    event.preventDefault(); // Page ko refresh hone se rokne ke liye
    alert("Thank you! Resume downloading is starting soon...");
});

// Project Links par click karne par ek simple alert box
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        alert("Opening project details...");
    });
});