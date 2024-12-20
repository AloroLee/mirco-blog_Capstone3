document.addEventListener("DOMContentLoaded", async () => {
    if (!localStorage.token) {
        window.location.href = "login.html";
        return;
    }

    const messages = await getMessageList();
    const output = document.getElementById("output");

    if (messages.length === 0) {
        output.innerHTML = "<p>No messages available.</p>";
        return;
    }

    output.innerHTML = messages.map(getMessage).join("");
    initializeLikeButtons();
});

// Render message
function getMessage(m) {
    const likes = JSON.parse(localStorage.getItem("likes")) || {};
    const likeCount = likes[m._id] || 0;

    return `
        <div class="message" data-post_id="${m._id}">
            <p><strong>${m.username}</strong> - ${new Date(m.createdAt).toLocaleString()}</p>
            <p>${m.text}</p>
            <div class="likes-container">
                <p><span id="likes-${m._id}">${likeCount}</span> Likes</p>
                <div class="like-buttons">
                    <button class="like" data-post_id="${m._id}">👍</button>
                    <button class="dislike" data-post_id="${m._id}">👎</button>
                </div>
            </div>
        </div>
    `;
}

// Initialize like buttons
function initializeLikeButtons() {
    document.querySelectorAll(".like").forEach(button => {
        button.addEventListener("click", () => {
            const postId = button.dataset.post_id;
            updateLike(postId, 1);
        });
    });

    document.querySelectorAll(".dislike").forEach(button => {
        button.addEventListener("click", () => {
            const postId = button.dataset.post_id;
            updateLike(postId, -1);
        });
    });
}

// Update likes
function updateLike(postId, delta) {
    const likes = JSON.parse(localStorage.getItem("likes")) || {};
    const currentLikes = likes[postId] || 0;
    const newLikes = Math.max(0, currentLikes + delta);

    likes[postId] = newLikes;
    localStorage.setItem("likes", JSON.stringify(likes));

    document.getElementById(`likes-${postId}`).textContent = newLikes;
}
