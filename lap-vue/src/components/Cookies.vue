<template>
  <div class="max-w-4xl mx-auto my-8 p-4 min-h-[80vh]">
    <h1 class="text-3xl font-semibold mb-4 mr-auto ml-auto">Cookies</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="cookie in cookies" :key="cookie.id" class="bg-white p-6 rounded-md shadow-md">
        <h2 class="text-xl font-semibold mb-2">{{ cookie.title }}</h2>
        <p class="text-gray-700 mb-4">{{ cookie.description }}</p>
        <img
          :src="getImageUrl(cookie.image)"
          alt="Cookie Image"
          class="w-full h-32 object-cover mb-4 rounded-md"
        />
        <p class="text-gray-500 text-sm">Created at: {{ formatDate(cookie.created_at) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useCookies } from '@/stores/cookies'
import { useAuthStore } from '@/stores/auth'

export default {
  setup() {
    const cookiesStore = useCookies();
    const cookies = ref([]);
    const authStore = useAuthStore();

    onMounted(async () => {
      try {
        await cookiesStore.refreshCookies();
        cookies.value = cookiesStore.cookies;
        // console.log("cookies ", JSON.stringify(cookies.value));
      } catch (error) {
        console.error('Error fetching cookies:', error);
      }
    });
    // onMounted(async () => {
    //   try {
    //     const response = await axios.get('http://localhost:8000/api/test_cookies');
    //     cookies.value = response.data.cookies;
    //   } catch (error) {
    //     console.error('Error fetching cookies:', error);
    //   }
    // });

    const getImageUrl = (imagePath) => {
      if(imagePath == '/storage/images/default_img.webp'){
        return`http://localhost:8000${imagePath}`;
      }else if(imagePath == '') {
        return"http://localhost:8000/storage/images/default_img.webp";
      }
      return imagePath.startsWith('/') ? `http://localhost:8000/storage${imagePath}` : `http://localhost:8000/storage/${imagePath}`;
    };

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString();
    };

    return { cookies, getImageUrl, formatDate, authStore };
  },
  mounted(){
    if(this.authStore.token){
      console.log("login");
    }else{
      console.log("guest");
      this.$router.push({ name: 'Login' });
    }
  }
};
</script>

<style scoped>
</style>
