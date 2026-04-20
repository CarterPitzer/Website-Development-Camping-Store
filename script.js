// MOBILE MENU TOGGLE
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("show");
}

// CONTACT FORM
function submitContact(event) {
    event.preventDefault();
    document.getElementById("contact-success").innerText =
        "Your message has been sent!";
}

// LOGIN FORM
function submitLogin(event) {
    event.preventDefault();
    document.getElementById("login-success").innerText =
        "Login successful!";
}

// TRACK ORDER FORM
function trackOrder(event) {
    event.preventDefault();
    let orderNum = document.getElementById("order-number").value;

    if (orderNum.trim() !== "") {
        document.getElementById("order-success").innerText =
            `Order #${orderNum} is being processed.`;
    }
}
