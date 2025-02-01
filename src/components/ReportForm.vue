<template>
  <div 
    :class="{
      'bg-gray-900 text-white': isDarkMode, 
      'bg-[#dde9f1] text-black': !isDarkMode
    }" 
    class="flex items-center justify-center  pt-32"
  >
    <div 
      :class="{
        'bg-gray-800 shadow-lg': isDarkMode, 
        'bg-white md:shadow-lg': !isDarkMode
      }"
      class="w-full max-w-3xl p-8 rounded-lg"
    >
      <h1 
        :class="{'text-white': isDarkMode, 'text-gray-900': !isDarkMode}" 
        class="text-3xl font-bold text-center mb-6"
      >
        Submit a Vulnerability Report
      </h1>

      <form @submit.prevent="submitReport">
        <!-- Report Title -->
        <div class="mb-4">
          <label for="title" class="block text-sm font-medium mb-2">Report Title</label>
          <input 
            v-model="title" 
            type="text" 
            id="title"
            placeholder="Enter a descriptive title..." 
            :class="{
              'bg-gray-700 text-white border-gray-600': isDarkMode, 
              'bg-white text-black border-gray-300': !isDarkMode
            }" 
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
            required 
          />
        </div>

        <!-- Description -->
        <div class="mb-4">
          <label for="description" class="block text-sm font-medium mb-2">Description</label>
          <textarea 
            v-model="description" 
            id="description"
            placeholder="Provide details about the vulnerability..." 
            :class="{
              'bg-gray-700 text-white border-gray-600': isDarkMode, 
              'bg-white text-black border-gray-300': !isDarkMode
            }" 
            class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-32" 
            required
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit" 
          :class="{
            'bg-blue-600 hover:bg-blue-700': isDarkMode, 
            'bg-blue-500 hover:bg-blue-600': !isDarkMode
          }" 
          class="w-full p-3 text-white font-semibold rounded-lg transition duration-300"
        >
          Submit Report
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  props: {
    isDarkMode: Boolean,
  },
  methods: {
    submitReport() {
      if (this.title && this.description) {
        alert("✅ Report Submitted Successfully!");
        this.title = "";
        this.description = "";
      }
    },
  },
};
</script>
