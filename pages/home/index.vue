<template>
  <div>
    <p>{{users.email}}</p>

    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" class="opciones-filtrar">
          <Navbar />
        </v-col>
        <v-col cols="12" sm="3" class="pNone">
          <p>BIENVENIDOS</p>
        </v-col>
        
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapState } from "vuex";
export default {
  components: {
    Navbar
  },
  computed: {
    ...mapState(["users"])
  }
};
</script>
<style>
@media (min-width: 1264px) {
  .container {
    max-width: 1835px;
  }
}
</style>