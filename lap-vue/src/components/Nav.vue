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
      </div>
    </nav>
  </header>
</template>

<script>
import { useCookies } from '@/stores/cookies'

export default {
  setup(){
    const { companyName } = useCookies();
    return { companyName };
  },
  mounted() {
    console.log("mounted in nav"); 
    console.log("cookie ",JSON.stringify(this.companyName));
  }
}
</script>
