// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add a simple animation when the page loads
window.addEventListener('load', () => {
    document.querySelector('h1').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('h1').style.transition = 'opacity 1s';
        document.querySelector('h1').style.opacity = '1';
    }, 100);
});

// Simple appointment booking function
function bookAppointment() {
    alert("Redirecting to appointment form...");
    document.getElementById('appointments').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('appointment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        date: document.getElementById('date').value
    };

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
        alert('Please fill in all fields');
        return;
    }

    // In a real application, you would send this data to a backend server
    // For this example, we'll just show a success message
    alert('Appointment request received!\nWe will contact you shortly to confirm.');
    
    // Clear form
    this.reset();
}); 