function getMessage(m) {
  return `
      <div data-post_id="${m._id}" class="message">
          <div class="message-header">
              <strong>FROM:</strong> ${m.username} <span class="message-date">${new Date(m.createdAt).toLocaleString()}</span>
          </div>
          <div class="message-text">
              <strong>TEXT:</strong> ${m.text}
          </div>
          <div class="message-footer">
              <strong>LIKES:</strong> <span id="likes-${m._id}">${m.likes.length}</span>
          </div>
          <div class="message-buttons">
              <button class="like-button btn btn-success" data-post_id="${m._id}">Like</button>
              <button class="dislike-button btn btn-danger" data-post_id="${m._id}">Dislike</button>
          </div>
      </div>
  `;
}

document.addEventListener("DOMContentLoaded", async () => {
  const messages = await getMessageList();
  const output = document.getElementById("output");
  output.innerHTML = messages.map(getMessage).join("<hr>\n");

  // Add event listeners for Like and Dislike buttons
  document.querySelectorAll(".like-button").forEach(button => {
      button.addEventListener("click", async (event) => {
          const postId = event.target.dataset.post_id;
          await likePost(postId);
      });
  });

  document.querySelectorAll(".dislike-button").forEach(button => {
      button.addEventListener("click", async (event) => {
          const postId = event.target.dataset.post_id;
          await dislikePost(postId);
      });
  });
});

// Function to "like" a post
async function likePost(postId) {
  try {
      // Send a request to like the post (endpoint not provided)
      console.log(`Liking post with ID: ${postId}`);
      // Placeholder: Update the like count in the UI
      const likeCountElement = document.getElementById(`likes-${postId}`);
      likeCountElement.textContent = parseInt(likeCountElement.textContent) + 1;
  } catch (error) {
      console.error("Error liking post:", error);
  }
}

// Function to "dislike" a post
async function dislikePost(postId) {
  try {
      // Send a request to dislike the post (endpoint not provided)
      console.log(`Disliking post with ID: ${postId}`);
      // Placeholder: Update the like count in the UI (simulate decrease)
      const likeCountElement = document.getElementById(`likes-${postId}`);
      likeCountElement.textContent = Math.max(0, parseInt(likeCountElement.textContent) - 1);
  } catch (error) {
      console.error("Error disliking post:", error);
  }
}
