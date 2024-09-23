// error handler added
function handleError(error, context = '') {
    console.error(`Error in ${context}:`, error); 
    alert(`An error occurred in ${context}. Please try again.`); 
}

document.addEventListener('DOMContentLoaded', function () {
    try {
        // Password field logic
        const togglePassword = document.querySelector('#togglePassword');
        const password = document.querySelector('#password');

        if (togglePassword && password) {
            togglePassword.addEventListener('click', function () {
                try {
                    const isPasswordVisible = password.getAttribute('type') === 'text';
                    password.setAttribute('type', isPasswordVisible ? 'password' : 'text');
                    togglePassword.classList.remove('icon-view_off', 'icon-view-2');

                    if (isPasswordVisible) {
                        togglePassword.classList.add('icon-view-2');
                    } else {
                        togglePassword.classList.add('icon-view_off');
                    }
                } catch (error) {
                    handleError(error, 'Password toggle click');
                }
            });
        } else {
            console.warn('Password or togglePassword element not found, skipping password toggle logic.');
        }

        // Confirm password field logic
        const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
        const confirmPassword = document.querySelector('#confirmPassword');

        if (toggleConfirmPassword && confirmPassword) {
            toggleConfirmPassword.addEventListener('click', function () {
                try {
                    const isConfirmPasswordVisible = confirmPassword.getAttribute('type') === 'text';
                    confirmPassword.setAttribute('type', isConfirmPasswordVisible ? 'password' : 'text');
                    toggleConfirmPassword.classList.remove('icon-view_off', 'icon-view-2');

                    if (isConfirmPasswordVisible) {
                        toggleConfirmPassword.classList.add('icon-view-2');
                    } else {
                        toggleConfirmPassword.classList.add('icon-view_off');
                    }
                } catch (error) {
                    handleError(error, 'Confirm password toggle click');
                }
            });
        } else {
            console.warn('ConfirmPassword or toggleConfirmPassword element not found, skipping confirm password toggle logic.');
        }
    } catch (error) {
        handleError(error, 'Initialization error');
    }
});
