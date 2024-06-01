// Disable right-click on the entire document
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

// Contact form submission alert
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
});
