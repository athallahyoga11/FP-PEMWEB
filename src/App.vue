<template>
  <div>
  <router-view></router-view>
  </div>
</template>

<script>
import LoginView from "./components/login.vue"
export default {
  components: {
   LoginView,
  },
};
</script>



<style scoped>

</style>
