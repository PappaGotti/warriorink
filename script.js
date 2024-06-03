// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-to-Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Disable right-click
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Announcement Bar
const announcementText = document.getElementById('announcement-text');
const announcements = [
    'FREE U.S. SHIPPING ON ORDERS $75+',
    'EVERY PURCHASE HELPS THE FIGHT FOR FREEDOM!'
];
let announcementIndex = 0;

function changeAnnouncement() {
    announcementText.textContent = announcements[announcementIndex];
    announcementIndex = (announcementIndex + 1) % announcements.length;
}

setInterval(changeAnnouncement, 5000); // Change text every 5 seconds

// Redirect after 3 seconds
setTimeout(function() {
    window.location.href = "https://warrior-ink.square.site/";
}, 3000);
