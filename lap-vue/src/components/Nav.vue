<template>
  <header class="bg-white shadow-md">
    <nav class="flex items-center justify-between p-4">
      <div class="flex items-center">
        <a href="#/" class="text-2xl font-bold text-pink-600">{{companyName}}</a>
      </div>
      <div class="flex space-x-4">
        <a href="#/" class="text-gray-700 hover:text-pink-600">Home</a>
        <a href="#/cookies" class="text-gray-700 hover:text-pink-600">Cookies</a>
        <a href="#/about" class="text-gray-700 hover:text-pink-600">About</a>
        <div v-if="authStore.token">
          <button @click="logout" class="text-gray-700 hover:text-pink-600">Logout</button>
        </div>
        <div v-else>
          <a href="#/login" class="text-gray-700 hover:text-pink-600">Login</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { useCookies } from '@/stores/cookies'
import { useAuthStore } from '@/stores/auth'

export default {
  setup(){
    const { companyName } = useCookies();
    const authStore = useAuthStore();

    const logout = () => {
      // Call your logout function here
      authStore.clearToken();
      this.$router.push({ name: 'Login' });
    };

    return { companyName, authStore, logout };
  },
  mounted() {
    console.log("mounted in nav"); 
    // console.log("cookie ",JSON.stringify(this.companyName));
    console.log("useAuthStore ", JSON.stringify(this.authStore.token));
    if(this.authStore.token){
      console.log("login");
    }else{
      console.log("guest");
      this.$router.push({ name: 'Login' });
    }
  }
}
</script>
