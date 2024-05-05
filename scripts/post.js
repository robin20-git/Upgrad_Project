document.addEventListener("DOMContentLoaded", function() {
    // Edit Button
    document.querySelector(".edit-btn").addEventListener("click", function() {
        // Toggle edit mode
        document.querySelector(".post-title h1").contentEditable = true;
        document.querySelector(".post-text p").contentEditable = true;
        document.querySelector(".edit-btn").innerHTML = '<i class="fas fa-save"></i> Save';
        document.querySelector(".edit-btn").classList.add("save-btn");
        document.querySelector(".edit-btn").classList.remove("edit-btn");
    });

    // Save Button (after clicking Edit)
    document.querySelector(".save-btn").addEventListener("click", function() {
        // Disable edit mode
        document.querySelector(".post-title h1").contentEditable = false;
        document.querySelector(".post-text p").contentEditable = false;
        document.querySelector(".save-btn").innerHTML = '<i class="fas fa-edit"></i> Edit';
        document.querySelector(".save-btn").classList.add("edit-btn");
        document.querySelector(".save-btn").classList.remove("save-btn");
    });

    // Like Button
    var likeBtn = document.querySelector(".like-btn");
    var likeCount = document.querySelector(".like-count");
    var likeCounter = 0;

    likeBtn.addEventListener("click", function() {
        likeCounter++;
        likeCount.textContent = likeCounter === 1 ? "1 person likes this!" : likeCounter + " people like this!";
        likeBtn.textContent = "Liked!";
        likeBtn.disabled = true;
    });

    // Comment Button
    var commentBtn = document.querySelector(".comment-btn");
    var commentInput = document.querySelector("input[type='text']");
    var allComments = document.querySelector(".all-comments");

    commentBtn.addEventListener("click", function() {
        var commentText = commentInput.value.trim();
        if (commentText !== "") {
            var comment = document.createElement("div");
            comment.classList.add("comment");
            comment.textContent = commentText;
            allComments.prepend(comment);
            commentInput.value = "";
        }
    });
});
