function showAlert() {
    alert("Button clicked! Thank you for your interest in our Product Management System.");
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("cta-button");
    button.addEventListener("click", showAlert);
});