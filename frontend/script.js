// Add smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Add a simple animation when the page loads
window.addEventListener('load', () => {
    const mainHeader = document.querySelector('header h1');
    if (mainHeader) {
        mainHeader.style.opacity = '0';
        setTimeout(() => {
            mainHeader.style.transition = 'opacity 1s';
            mainHeader.style.opacity = '1';
        }, 100);
    }
});

// Simple appointment booking function
function bookAppointment() {
    const appointmentSection = document.getElementById('appointments');
    if (appointmentSection) {
        appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update the form submission handler
document.addEventListener('DOMContentLoaded', () => {
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                date: document.getElementById('date').value
            };

            try {
                const response = await fetch('http://localhost:4000/api/appointments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    const result = await response.json();
                    alert('Appointment booked successfully!');
                    this.reset();
                } else {
                    const error = await response.json();
                    alert(error.message || 'Failed to book appointment');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while booking the appointment');
            }
        });
    }
}); 