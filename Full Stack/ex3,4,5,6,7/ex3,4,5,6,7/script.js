// Sample data for catalogue items
const catalogue = [
    { id: 1, name: "XML Bible", author: "Winston", publisher: "Wiley", price: 40.5, cover: "xml_bible.jpg" },
    { id: 2, name: "AI", author: "S. Russell", publisher: "Princeton Hall", price: 63, cover: "ai.jpg" },
    { id: 3, name: "Java 2", author: "Watson", publisher: "BPB Publications", price: 35.5, cover: "java_2.jpg" },
    { id: 4, name: "HTML in 24 Hours", author: "Sam Peter", publisher: "Sam Publication", price: 50, cover: "html_24_hours.jpg" }
];

// Array to store cart items
let cart = [];

// Add items to the cart
function addToCart(itemId) {
    const item = catalogue.find(book => book.id === itemId);
    if (item) {
        const cartItem = cart.find(book => book.id === itemId);
        if (cartItem) {
            cartItem.quantity += 1; // Increment quantity if item already in cart
        } else {
            cart.push({ ...item, quantity: 1 }); // Add new item to cart with quantity 1
        }
    }
    updateCartDisplay();
}

// Display items in the cart
function updateCartDisplay() {
    const cartTableBody = document.getElementById("cart-table-body");
    cartTableBody.innerHTML = ""; // Clear existing table content
    let totalAmount = 0;

    cart.forEach(item => {
        const amount = item.price * item.quantity;
        totalAmount += amount;
        const row = `
            <tr>
                <td>${item.name}</td>
                <td>Rs ${item.price}</td>
                <td>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity(${item.id}, this.value)">
                </td>
                <td>Rs ${amount.toFixed(2)}</td>
                <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
            </tr>
        `;
        cartTableBody.insertAdjacentHTML('beforeend', row);
    });

    const totalRow = `
        <tr>
            <td colspan="3">Total Amount</td>
            <td>Rs ${totalAmount.toFixed(2)}</td>
        </tr>
    `;
    cartTableBody.insertAdjacentHTML('beforeend', totalRow);
}

// Change the quantity of items in the cart
function updateQuantity(itemId, quantity) {
    const item = cart.find(book => book.id === itemId);
    if (item) {
        item.quantity = parseInt(quantity);
    }
    updateCartDisplay();
}

// Remove items from the cart
function removeFromCart(itemId) {
    cart = cart.filter(book => book.id !== itemId);
    updateCartDisplay();
}
