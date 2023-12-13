<template>
  <form @submit.prevent="login" class="max-w-md mx-auto mt-8">
    <div class="mb-4">
      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
      <input v-model="email" type="text" id="email" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-pink-500" />
    </div>

    <div class="mb-4">
      <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
      <input v-model="password" type="password" id="password" class="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-pink-500" />
    </div>

    <button type="submit" class="bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-pink active:bg-pink-600">Login</button>

    <p v-if="errorMessage" class="text-red-500 mt-2">{{ errorMessage }}</p>

  </form>
</template>

<script>
import { useAuthStore } from '@/stores/auth'

export default {
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  data() {
    return {
      email: '',
      password: '',
      errorMessage: '',
    };
  },

  methods: {
    async login() {
      try {
        const success = await this.authStore.login(
          this.email,
          this.password
        );

        if (success) {
          // Redirect to the home page after successful login
          this.$router.push({ name: 'Cookies' });
        } else {
          // Handle login failure (display an error message)
          this.errorMessage = 'Invalid email or password. Please try again.';
        }
      } catch (error) {
        console.error('Login failed:', error);
        this.errorMessage = 'An error occurred during login. Please try again later.';
      }
    },
  },
};
</script>
