// cart.js
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the existing cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Add event listeners to all "Add to Cart" buttons in the catalogue
    document.querySelectorAll("#catalogue-table button").forEach((button) => {
        button.addEventListener("click", addToCart);
    });

    function addToCart(event) {
        // Get the book details from the row
        const row = event.target.closest("tr");
        const bookName = row.cells[1].textContent;
        const price = parseFloat(row.cells[4].textContent.replace("Rs ", ""));

        // Check if the book is already in the cart
        const existingItem = cartItems.find((item) => item.bookName === bookName);

        if (existingItem) {
            // Increase the quantity if the book is already in the cart
            existingItem.quantity++;
        } else {
            // Add new book to the cart
            cartItems.push({ bookName, price, quantity: 1 });
        }

        // Save the updated cart items to localStorage
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

        // Update the cart display
        updateCartDisplay();
    }

    function updateCartDisplay() {
        const cartTable = document.querySelector("#cart-table");

        // Clear the existing cart table rows
        cartTable.querySelectorAll("tr:not(:first-child)").forEach((row) => row.remove());

        // Calculate the total amount
        let totalAmount = 0;

        // Add each item in the cart to the table
        cartItems.forEach((item) => {
            const row = cartTable.insertRow();
            row.insertCell(0).textContent = item.bookName;
            row.insertCell(1).textContent = `Rs ${item.price}`;
            row.insertCell(2).textContent = item.quantity;
            row.insertCell(3).textContent = `Rs ${item.price * item.quantity}`;
            totalAmount += item.price * item.quantity;
        });

        // Add a row for the total amount
        const totalRow = cartTable.insertRow();
        totalRow.insertCell(0).textContent = "Total Amount";
        totalRow.insertCell(1).textContent = "";
        totalRow.insertCell(2).textContent = "";
        totalRow.insertCell(3).textContent = `Rs ${totalAmount}`;
    }

    // Initial cart display update if on the cart page
    if (document.querySelector("#cart-table")) {
        updateCartDisplay();
    }
});