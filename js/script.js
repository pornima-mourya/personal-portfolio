
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        formStatus.textContent =
            `Thank you, ${name}! Your message has been received.`;

        contactForm.reset();

    });
}
