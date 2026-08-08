// ==========================================
// SHIVOHAM ENTERPRISES PRIVATE LIMITED
// WEBSITE JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // CONTACT FORM
    const form = document.getElementById("contact-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            // Prevent page refresh
            event.preventDefault();

            // Get customer details
            const name = form.querySelector('input[name="name"]').value;
            const phone = form.querySelector('input[name="phone"]').value;
            const email = form.querySelector('input[name="email"]').value;
            const message = form.querySelector('textarea[name="message"]').value;

            // Create WhatsApp enquiry message
            const whatsappMessage =
                "Hello SHIVOHAM ENTERPRISES PRIVATE LIMITED,%0A%0A" +
                "I would like to make an enquiry.%0A%0A" +
                "Name: " + encodeURIComponent(name) + "%0A" +
                "Phone: " + encodeURIComponent(phone) + "%0A" +
                "Email: " + encodeURIComponent(email) + "%0A" +
                "Requirement: " + encodeURIComponent(message);

            // SHIVOHAM WhatsApp number
            const whatsappNumber = "919398496081";

            // Open enquiry in WhatsApp
            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                whatsappMessage;

            window.open(whatsappURL, "_blank");

            // Clear form
            form.reset();

        });

    }

});