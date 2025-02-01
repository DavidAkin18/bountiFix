<template>
    <div class="attachment-card">
      <h3 class="text-lg font-semibold">Upload Attachments</h3>
      <input type="file" @change="handleFileUpload" multiple class="file-input" />
      <div v-if="files.length" class="uploaded-files">
        <p class="font-semibold">Uploaded Files:</p>
        <ul>
          <li v-for="(file, index) in files" :key="index">{{ file.name }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        files: [],
      };
    },
    methods: {
      handleFileUpload(event) {
        this.files = [...event.target.files];
      },
    },
  };
  </script>
  
  <style scoped>
  .attachment-card {
    background-color: var(--card-bg-color);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .file-input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: var(--input-bg-color);
    border: 1px solid var(--input-border-color);
    margin-bottom: 1rem;
  }
  .uploaded-files {
    margin-top: 1rem;
  }
  </style>
  