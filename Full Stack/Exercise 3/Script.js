function showCategory(category) {
    // Hide all category content
    var contents = document.getElementsByClassName('category-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // Show the selected category content
    var selectedCategory = document.getElementById(category);
    if (selectedCategory) {
        selectedCategory.style.display = 'block';
    }

    // Hide the description and login form
    document.getElementById('description').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
}

function showLoginForm() {
    // Hide all category content
    var contents = document.getElementsByClassName('category-content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = 'none';
    }

    // Hide the description
    document.getElementById('description').style.display = 'none';

    // Show the login form
    document.getElementById('login-form').style.display = 'block';
}

document.getElementById('login-form-element').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading spinner
    var submitButton = document.querySelector('.submit-btn');
    var spinner = document.querySelector('.loading-spinner');
    var buttonText = document.querySelector('.btn-text');
    
    submitButton.disabled = true;
    spinner.style.display = 'inline-block';
    buttonText.style.visibility = 'hidden';

    // Simulate form submission delay
    setTimeout(function() {
        // Hide loading spinner and re-enable button
        spinner.style.display = 'none';
        buttonText.style.visibility = 'visible';
        submitButton.disabled = false;
        
        // Handle form submission here (e.g., send data to server)
        alert('Form submitted successfully!');
    }, 2000); // Simulate 2 seconds delay
});
