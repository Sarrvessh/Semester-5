document.addEventListener('DOMContentLoaded', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let totalAmount = 0;

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>
                <button onclick="updateQuantity('${item.name}', -1)">-</button>
                ${item.quantity}
                <button onclick="updateQuantity('${item.name}', 1)">+</button>
            </td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeFromCart('${item.name}')">Remove</button></td>
        `;
        cartItemsContainer.appendChild(row);
        totalAmount += item.price * item.quantity;
    });

    document.getElementById('total-amount').textContent = `Total amount - $${totalAmount.toFixed(2)}`;
});

// Function to remove an item from the cart
function removeFromCart(bookName) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = cart.filter(item => item.name !== bookName);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    location.reload(); // Reload the page to reflect changes
}

// Function to update quantity of a specific book
function updateQuantity(bookName, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.name === bookName);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change); // Ensure quantity is at least 1
        localStorage.setItem('cart', JSON.stringify(cart));
        location.reload(); // Reload to reflect changes
    }
}
