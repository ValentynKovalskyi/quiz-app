<script>
import StartPage from './views/StartPage.vue';

export default {
  data() {
    
  },
  components: {
   StartPage
  }
}
</script>
<template>
  <div class="to-dark-blue from-light-blue bg-gradient-to-r">
    <router-view></router-view>
  </div>
</template>

