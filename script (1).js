document.addEventListener('DOMContentLoaded', function () {
    const signupButton = document.getElementById('signup-button');
    const errorPopup = document.getElementById('error-popup');
    const closePopupButton = document.getElementById('close-popup');

    signupButton.addEventListener('click', function (event) {
        event.preventDefault();
        showErrorPopup();
    });

    closePopupButton.addEventListener('click', function () {
        hideErrorPopup();
    });

    function showErrorPopup() {
        errorPopup.style.display = 'block';
        setTimeout(hideErrorPopup, 2000); // Hide the popup after 2 seconds
    }

    function hideErrorPopup() {
        errorPopup.style.display = 'none';
    }
});
