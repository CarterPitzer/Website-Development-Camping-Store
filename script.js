
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}


function submitContact(event) {
    event.preventDefault();
    document.getElementById("contact-success").innerText =
        "Your message has been sent!";
}


function submitLogin(event) {
    event.preventDefault();
    document.getElementById("login-success").innerText =
        "Login successful!";
}


function trackOrder(event) {
    event.preventDefault();
    let orderNum = document.getElementById("order-number").value;

    if (orderNum.trim() !== "") {
        document.getElementById("order-success").innerText =
            `Order #${orderNum} is being processed.`;
    }
}
