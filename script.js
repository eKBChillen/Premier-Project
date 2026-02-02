function sendMail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        number: document.querySelector("#number").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    }
    emailjs
    .send("service_00kd56m", "template_r5cs5jw", templateParams)
    .then(() => {
        alert("Message sent successfully");
    })
    .catch((error) => {
        console.log("Error sending message:", error);
        alert("There was an error sending your message. Please try again later.");
    });
}   
