document.addEventListener('DOMContentLoaded', function () {
    const togglePassword = document.querySelector('#togglePassword');
    const password = document.querySelector('#password');

    togglePassword.addEventListener('click', function () {
        const isPasswordVisible = password.getAttribute('type') === 'text';
        password.setAttribute('type', isPasswordVisible ? 'password' : 'text');
        togglePassword.classList.remove('icon-view_off', 'icon-view-2');

        if (isPasswordVisible) {
            togglePassword.classList.add('icon-view-2');
        } else {
            togglePassword.classList.add('icon-view_off'); 
        }
        
        console.log(togglePassword.classList);
    });
});
