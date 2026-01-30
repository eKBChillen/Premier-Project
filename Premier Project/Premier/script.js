function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    email.js.send("service_00kd56m", "template_dgw822x", params).then(alert("Message sent successfully"))
}