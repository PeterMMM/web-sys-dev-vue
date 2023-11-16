<template>
  <Header/>
  <main>
    <h1 v-if="showWelcome">Welcome Everyone!</h1>
    <h1 v-else>We are Senior Now.</h1>
    <h2>{{ message }}</h2>
    Likes <b> {{ count  }}</b><br>
    <button @click="increateNumber">Cheer!</button><br>
    <button @click="celebrateWelcome">Celebrate Welcome</button>
    <hr>
    <div v-for="student in students" >
      {{ student }}
    </div>
  </main>
</template>

<script >
import Header from './components/Header.vue';

export default {
  data() {
    return {
      message: "We Love Web Sys Class.",
      count: 0,
      showWelcome: true,
      students: [
        'Samuel',
        'Kapaw So Min',
        'Charles'
      ]
    }
  },
  mounted(){
    console.log("Mounted");
    console.log(" message >> "+ this.message);
    console.log('showWelcome',this.showWelcome);
    this.count = 1;
  },
  created() {
    console.log('Created');
  },
  methods: {
    increateNumber(){
      console.log("Call increate Method");
      this.count += 1;
    },
    celebrateWelcome() {
      this.showWelcome = false;
    }
  }
}

</script>

