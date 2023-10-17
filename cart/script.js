document.addEventListener('DOMContentLoaded', function () {
    if (window.location.pathname.includes("cart.html")) {
        loadCart();
    }
});

function addToCart(productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cartItems');
    let totalPrice = 0;

    cartItems.innerHTML = '';
    cart.forEach(function (item) {
        let li = document.createElement('li');
        li.textContent = item.name + " - $" + item.price.toLocaleString();
        cartItems.appendChild(li);
        totalPrice += item.price;
    });

    document.getElementById('totalPrice').textContent = totalPrice.toLocaleString();
    document.getElementById('totalPrices').textContent = parseInt(totalPrice/450);
}
loadCart()
function clearCart() {
    localStorage.removeItem('cart');
    loadCart();
}
