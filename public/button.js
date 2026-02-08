const submitButton = document.getElementById('submit');
const input = document.getElementById('name');
const input2 = document.getElementById('email');
const input3 = document.getElementById('number');
const input4 = document.getElementById('message');

submit.addEventListener("keyup", (e) => {
    

    if (input.value === '' || input2.value === '' || input3.value === '' || input4.value === '') {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
});  


