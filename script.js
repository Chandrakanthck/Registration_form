document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const output = document.querySelector(".output");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = `
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Password:</strong> ${'*'.repeat(password.length)}</p>
        `;

        const outputData = document.getElementById("output-data");
        outputData.innerHTML = userData;

        output.style.display = "block";

        form.reset();
    });
});
