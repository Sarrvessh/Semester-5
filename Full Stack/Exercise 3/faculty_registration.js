document.getElementById('faculty-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading spinner
    var submitButton = document.querySelector('button');
    var spinner = document.querySelector('.loading-spinner');
    
    submitButton.disabled = true;
    spinner.style.display = 'inline-block';

    // Simulate form submission delay
    setTimeout(function() {
        // Hide loading spinner and re-enable button
        spinner.style.display = 'none';
        submitButton.disabled = false;
        
        // Handle form submission here (e.g., send data to server)
        alert('Faculty registration successful!');
    }, 2000); // Simulate 2 seconds delay
});
