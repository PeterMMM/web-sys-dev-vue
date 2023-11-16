<template>
  <main>
    <Header />
    <h1 class="mx-10 my-10 text-3xl text-blue-900 italic hover:not-italic ">{{ msg }}</h1>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:shrink-0">
          <img class="h-48 w-full object-cover md:h-full md:w-48" v-bind:src="catImg" alt="Modern building architecture">
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Vue Class</div>
          <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis corrupti voluptatum at. </a>
          <p class="mt-2 text-slate-500">Aute non officia nostrud reprehenderit cupidatat consectetur nostrud laborum officia laborum labore minim eiusmod.Asperiores, harum beatae quae odio velit cum dolorum recusandae labore! Atque et, culpa aut voluptates non earum veniam.</p>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const msg = ref('Welcome to Web System Class!');
    const catImg = ref('./src/assets/images/cat.jpg');
    return {
      msg,
      catImg,
    }
  },
  mounted() {
    console.log("Mounted");
  }
}
</script>