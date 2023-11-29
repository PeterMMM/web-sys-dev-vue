<template>
  <div>
    <header>
      <Nav />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
  /* Add your styles here */
  .active {
    color: brown;
  }
</style>

<script>
export default {
  data() {
    return {
      message: "We Love Web Sys Class.",
      count: 0,
      showWelcome: true,
      students: ['Samuel', 'Kapaw So Min', 'Charles'],
      teacher: {
        firstName: 'Min Maung',
        lastName: 'Maung',
      },
      isActive: true,
    };
  },
  computed: {
    like() {
      return this.count + " Like";
    },
  },
  mounted() {
    console.log("Mounted");
  },
  created() {
    console.log('Created');
  },
  methods: {},
};
</script>