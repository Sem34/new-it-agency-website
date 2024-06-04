const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    // WARNING!!!
    // Before trying this project, please register or login using your email to elasticemail.com
    // Or you can also go to smtpjs.com and click the "Setup an SMTP server here" button ==> Then click Login.
    // smtpjs link ==> https://smtpjs.com/
    // elasticemail link ==> https://app.elasticemail.com/marketing/login
    // If you still don't understand this configuration ("Username", "Password", "To", "From", "SecureToken"), try watching the video tutorial from Codehal again.
    // Configuration tutorial starts from minute 09:00 to 12:10 and at minutes 26:21 to 27:25
    // Thank you.

    Email.send({
        SecureToken: "9973628a-fc66-47f2-a8d8-c53f6d2cf347",
        Host: "smtp.elasticemail.com",
        Username: "vylehzhanin.semen@gmail.com",
        Password: "CCADB6012791CBE41340F69F3E91FF8A4A5D",
        To: 'vylehzhanin.semen@gmail.com',
        From: "vylehzhanin.semen@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Success!",
                    text: "Message sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();

        form.reset();
        return false;
    }
});