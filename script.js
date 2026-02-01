function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    emailjs.send("service_00kd56m", "template_r5cs5jw", params).then(alert("Message sent successfully"))
}
import { Carousel, initMDB } from "mdb-ui-kit";

initMDB({ Carousel });