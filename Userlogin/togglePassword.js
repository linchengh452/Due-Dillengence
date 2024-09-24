document.addEventListener('DOMContentLoaded', function () {
    // 密码框逻辑
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

    // 确认密码框逻辑
    const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
    const confirmPassword = document.querySelector('#confirmPassword');

    toggleConfirmPassword.addEventListener('click', function () {
        const isConfirmPasswordVisible = confirmPassword.getAttribute('type') === 'text';
        confirmPassword.setAttribute('type', isConfirmPasswordVisible ? 'password' : 'text');
        toggleConfirmPassword.classList.remove('icon-view_off', 'icon-view-2');

        if (isConfirmPasswordVisible) {
            toggleConfirmPassword.classList.add('icon-view-2');
        } else {
            toggleConfirmPassword.classList.add('icon-view_off'); 
        }

        console.log(toggleConfirmPassword.classList);
    });
});
