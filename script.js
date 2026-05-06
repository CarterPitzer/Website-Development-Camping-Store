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

// TRACK ORDER
function submitTracking(event) {
    event.preventDefault();
    let orderNum = document.getElementById("order-number").value;

    if (orderNum.trim() !== "") {
        document.getElementById("track-success").innerText =
            `Order #${orderNum} is being processed.`;
    }
}

// CART SYSTEM
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function loadCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    if (!cartItems) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><button onclick="removeItem(${index})">X</button></td>
            </tr>
        `;
    });

    cartTotal.textContent = "$" + total.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function checkout() {
    alert("Checkout complete! (Demo only)");
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

window.onload = loadCart;
