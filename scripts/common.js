// common.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the modals
    var signupModal = document.getElementById("signup-modal");
    var signinModal = document.getElementById("signin-modal");
    var createPostModal = document.getElementById("create-post-modal");

    // Get the buttons that open the modals
    var signupBtn = document.querySelector(".signup-btn");
    var signinBtn = document.querySelector(".signin-btn");
    var allPostsBtn = document.querySelector(".all-posts-btn");
    var createPostBtn = document.querySelector(".create-post-btn");
    var closeModalBtns = document.querySelectorAll(".close");
    var switchModalLink = document.querySelector(".switch-modal");

    // Open the Signup modal
    signupBtn.onclick = function() {
        signupModal.style.display = "block";
    }

    // Open the Signin modal
    signinBtn.onclick = function() {
        signinModal.style.display = "block";
    }

    // Open the Create Post modal
    createPostBtn.onclick = function() {
        createPostModal.style.display = "block";
    }

    // Close the modals when clicking on the close button or outside the modal
    closeModalBtns.forEach(function(btn) {
        btn.onclick = function() {
            signupModal.style.display = "none";
            signinModal.style.display = "none";
            createPostModal.style.display = "none";
        }
    });

    window.onclick = function(event) {
        if (event.target == signupModal || event.target == signinModal || event.target == createPostModal) {
            signupModal.style.display = "none";
            signinModal.style.display = "none";
            createPostModal.style.display = "none";
        }
    }

    // Switch between Signup and Signin modal
    switchModalLink.onclick = function(event) {
        event.preventDefault();
        signinModal.style.display = "none";
        signupModal
