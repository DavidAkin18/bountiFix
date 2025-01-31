<template>
  <div class="bg-[#E5E5E5] lg:my-5 w-full">
    <div class="lg: mx-auto shadow-md p-8 bg-white rounded">
      <!-- Background and Profile Section -->

      <!-- Form Section -->
      <div class="w-full mb-8">
        <div class="w-full flex mb-2 items-center justify-between">
          <h2 class="text-md font-bold">Edit Bio</h2>
        </div>
        <hr class="border border-[#AAAAAA]" />
      </div>

      <form @submit.prevent="handleSubmit">
        <!-- First Name -->
        <div class="mb-4">
          <label for="firstName" class="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            placeholder="Your first name"
            v-model="profile.firstName"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Last Name -->
        <div class="mb-4">
          <label for="lastName" class="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            placeholder="Your last name"
            v-model="profile.lastName"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Username -->
        <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Your username"
            v-model="profile.username"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Location -->
        <div class="mb-4">
          <label for="location" class="block text-sm font-medium text-gray-700">Location</label>
          <input
            ref="locationInput"
            type="text"
            id="location"
            placeholder="Your location"
            v-model="profile.location"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Job -->
        <div class="mb-4">
          <label for="job" class="block text-sm font-medium text-gray-700">Job</label>
          <input
            type="text"
            id="job"
            placeholder="Your job title"
            v-model="profile.job"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Website Link -->
        <div class="mb-4">
          <label for="website" class="block text-sm font-medium text-gray-700">Website</label>
          <input
            type="url"
            id="website"
            placeholder="Your website link"
            v-model="profile.website"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <!-- Date of Birth -->
        <div class="mb-4">
          <label for="dateOfBirth" class="block text-sm font-medium text-gray-700">Date of Birth</label>
          <div class="flex gap-3">
            <select
              id="year"
              v-model="profile.dateOfBirth.year"
              class="mt-1 p-2 lg:w-1/6 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="year" disabled>Year</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>

            <select
              id="month"
              v-model="profile.dateOfBirth.month"
              class="mt-1 p-2 lg:w-1/6 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="month" disabled>Month</option>
              <option v-for="month in months" :key="month.value" :value="month.value">{{ month.name }}</option>
            </select>

            <select
              id="day"
              v-model="profile.dateOfBirth.day"
              class="mt-1 p-2 lg:w-1/6 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="day" disabled>Day</option>
              <option v-for="day in daysInMonth" :key="day" :value="day">{{ day }}</option>
            </select>
          </div>
        </div>

        <p @click="showBio = !showBio" class="mt-1 p-2 w-full shadow-lg rounded-md">
          Bio
        </p>

        <!-- Bio -->
        <div class="mb-4">
          <textarea
            id="bio"
            v-model="profile.bio"
            placeholder="Bio"
            v-if="showBio"
            rows="4"
            cols="1"
            class="mt-1 p-2 w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <p @click="showImage = !showImage" class="mt-1 p-2 w-full shadow-xl rounded-md">
          Image
        </p>

        <div v-if="showImage" class="space-y-4 relative background-img mb-2 border-b lg:border-b-0 bg-white lg:bg-[#E5E5E5]">
          <!-- Background Image -->
          <div class="relative" @click="triggerBackgroundInput">
            <img
              :src="profile.backgroundImage"
              alt="Background"
              class="w-full h-40 md:h-80 object-cover object-top"
            />
            <input
              type="file"
              id="background-input"
              accept="image/*"
              @change="handleBackgroundChange"
              class="hidden"
            />
            <!-- Icon indicating upload status -->
            <div class="absolute top-2 left-2 cursor-pointer flex items-center justify-center">
              <i
                class="ri-image-edit-line text-6xl"
                :class="profile.backgroundImage ? 'text-blue-500' : 'text-gray-500'"
                title="Edit Background Picture"
              ></i>
            </div>
          </div>

          <!-- Profile Information Section -->
          <div class="bg-white text-[#000] rounded-lg lg:shadow-lg py-4 px-4">
            <div class="flex items-start justify-between">
              <!-- Profile Picture -->
              <div class="relative -mt-16 flex-shrink-0">
                <img
                  :src="profile.profilePicture"
                  alt="Profile Picture"
                  class="w-20 h-20 md:w-24 md:h-24 border-4 border-white rounded-full bg-white bg-opacity-30"
                />
                <!-- Icon indicating upload status -->
                <div @click="triggerFileInput" class="absolute bottom-0 right-0 cursor-pointer bg-white rounded-full p-1 py-0.5 shadow-lg">
                  <input type="file" id="image" accept="image/*" @change="handleImageUpload" class="hidden" />
                  <i
                    class="ri-image-edit-line text-xl"
                    :class="profile.profilePicture ? 'text-blue-500' : 'text-gray-500'"
                    title="Edit Profile Picture"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div class="flex mt-4 justify-end gap-4">
          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        firstName: '',
        lastName: '',
        username: '',
        location: '',
        job: '',
        website: '',
        dateOfBirth: {
          year: null,
          month: null,
          day: null,
        },
        bio: '',
        profilePicture: null,
        backgroundImage: null,
      },
      showBio: false,
      showImage: false,
      years: Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i),
      months: [
        { name: 'January', value: 1 },
        { name: 'February', value: 2 },
        { name: 'March', value: 3 },
        { name: 'April', value: 4 },
        { name: 'May', value: 5 },
        { name: 'June', value: 6 },
        { name: 'July', value: 7 },
        { name: 'August', value: 8 },
        { name: 'September', value: 9 },
        { name: 'October', value: 10 },
        { name: 'November', value: 11 },
        { name: 'December', value: 12 },
      ],
      // defaultProfilePicture: require('@/assets/images/Vector.png'),
      // defaultBackgroundPicture: require('@/assets/images/coverpPhoto.png'),
    };
  },
  computed: {
    daysInMonth() {
      const year = this.profile.dateOfBirth.year || new Date().getFullYear();
      const month = this.profile.dateOfBirth.month || 1;
      return Array.from({ length: new Date(year, month, 0).getDate() }, (_, i) => i + 1);
    },
  },
  methods: {
    triggerFileInput() {
      const fileInput = document.getElementById('image');
      if (fileInput) fileInput.click();
    },
    triggerBackgroundInput() {
      const backgroundInput = document.getElementById('background-input');
      if (backgroundInput) backgroundInput.click();
    },
    handleImageUpload(e) {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => (this.profile.profilePicture = reader.result);
        reader.readAsDataURL(file);
      }
    },
    handleBackgroundChange(e) {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => (this.profile.backgroundImage = reader.result);
        reader.readAsDataURL(file);
      }
    },
    cancelEdit() {
      this.$router.push('/');
    },
    handleSubmit() {
      const requiredFields = [
      'firstName',
      'lastName',
      'username',
      'location',
      'job',
      'website',
      'dateOfBirth.year',
      'dateOfBirth.month',
      'dateOfBirth.day',
      'bio',
    ];

    const allFieldsFilled = requiredFields.every((field) => {
        const keys = field.split('.'); // Handle nested fields like dateOfBirth
        let value = this.profile;

        keys.forEach((key) => {
          value = value ? value[key] : null;
        });

        return value && value !== 'year' && value !== 'month' && value !== 'day'; // Handle 'year', 'month', 'day' default values
      });

      if (!allFieldsFilled) {
        alert('Please fill all required fields.');
        return;
      }

      // // Save the profile to localStorage or perform any other saving logic
      // localStorage.setItem('profile', JSON.stringify(this.profile));

      // Navigate to /dashboard after successful save
      this.$router.push('/dashboard');
    },
  },
};
</script>
