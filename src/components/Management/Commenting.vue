<template>
    <div class="comment-section">
      <h3 class="text-lg font-semibold">Discussion</h3>
      <div class="comment-list">
        <div v-for="(comment, index) in comments" :key="index" class="comment">
          <p><strong>{{ comment.user }}</strong>: {{ comment.text }}</p>
        </div>
      </div>
      <textarea v-model="newComment" class="comment-input" placeholder="Add a comment..."></textarea>
      <button @click="addComment" class="comment-button">Add Comment</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newComment: '',
        comments: [
          { user: 'John Doe', text: 'This is a sample comment.' }, // Example comments
          { user: 'Jane Smith', text: 'This issue seems critical.' },
        ],
      };
    },
    methods: {
      addComment() {
        if (!this.newComment) {
          alert('Please enter a comment!');
          return;
        }
        this.comments.push({ user: 'Current User', text: this.newComment });
        this.newComment = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .comment-section {
    background-color: var(--card-bg-color);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .comment-list {
    margin-bottom: 1rem;
  }
  .comment-input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background-color: var(--input-bg-color);
    border: 1px solid var(--input-border-color);
  }
  .comment-button {
    background-color: var(--btn-bg-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    border: none;
  }
  </style>
  