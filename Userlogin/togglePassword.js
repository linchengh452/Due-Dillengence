document.addEventListener('DOMContentLoaded', function () {
    // Password field logic
    const togglePassword = document.querySelector('#togglePassword'); // Select the toggle button for the password field
    const password = document.querySelector('#password'); // Select the password input field

    togglePassword.addEventListener('click', function () {
        const isPasswordVisible = password.getAttribute('type') === 'text'; // Check if the password is currently visible
        password.setAttribute('type', isPasswordVisible ? 'password' : 'text'); // Toggle between password and text type

        togglePassword.classList.remove('icon-view_off', 'icon-view-2'); // Remove any existing icons

        if (isPasswordVisible) {
            togglePassword.classList.add('icon-view-2'); // Add the icon for hidden password
        } else {
            togglePassword.classList.add('icon-view_off'); // Add the icon for visible password
        }

        console.log(togglePassword.classList); // Log the current class list for debugging
    });

    // Confirm password field logic
    const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword'); // Select the toggle button for the confirm password field
    const confirmPassword = document.querySelector('#confirmPassword'); // Select the confirm password input field

    toggleConfirmPassword.addEventListener('click', function () {
        const isConfirmPasswordVisible = confirmPassword.getAttribute('type') === 'text'; // Check if confirm password is currently visible
        confirmPassword.setAttribute('type', isConfirmPasswordVisible ? 'password' : 'text'); // Toggle between password and text type

        toggleConfirmPassword.classList.remove('icon-view_off', 'icon-view-2'); // Remove any existing icons

        if (isConfirmPasswordVisible) {
            toggleConfirmPassword.classList.add('icon-view-2'); // Add the icon for hidden password
        } else {
            toggleConfirmPassword.classList.add('icon-view_off'); // Add the icon for visible password
        }

        console.log(toggleConfirmPassword.classList); // Log the current class list for debugging
    });
});
