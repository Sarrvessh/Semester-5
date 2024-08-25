document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const mobile = document.getElementById('mobile').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;

    // Perform validation (if needed)
    if (username && email && password && mobile && address && dob) {
        // For now, just log the values to the console
        console.log({
            username,
            email,
            password,
            mobile,
            address,
            dob
        });

        // You can also send the data to the server here
        // For example, using fetch API to POST the data
        // fetch('/register', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ username, email, password, mobile, address, dob })
        // }).then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.error('Error:', error));
        
        alert('Registration successful!');
    } else {
        alert('Please fill in all required fields.');
    }
});
