<template>
  <v-app>
    
      <Header />
      
      <div>
        <nuxt />
      </div>
   
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
import Header from "@/components/Header.vue";

export default {
  components: { Header },
  data() {
    return {
      clipped: false,

      fixed: false,

      right: true,
      rightDrawer: false,
      title:"Pension colegio"
     
    };
  }
};
</script>
<style >
.theme--dark.v-footer {
    background-color: #fffdfd;
    color: #070707;
}
.theme--dark.v-system-bar {
    background-color: #fefafa;
    color: rgba(0, 0, 0, 0.7);
}
</style>

