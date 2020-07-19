<template>
  <v-app-bar  app color="white" dark>
    <v-btn @click="cerrarSesion" color="#233E99" dark>Cerrar Sesión</v-btn>
  </v-app-bar>
</template>
<script>
export default {
   methods: {
    cerrarSesion() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="stylus" scoped></style>