<template >
  <div class="content-SignIn">
    
    <v-col sm="20" class="d-flex justify-center align-center">
      <div class="btnInicio float-left">
        <h2 class="colorTitulo">SISTEMA DE CONTROL DE PAGOS</h2>
        <div class="color-card d-flex justify-center">
          <v-card
            dark
            elevation-24
            style="width: 400px; padding: 40px; border: 1px; border-radius: 50px;"
          >
            <v-col cols="12">
              <v-img
                class="imgLogo"
                src="https://1.bp.blogspot.com/-_vppKbjq-YE/V-8GWVZMTDI/AAAAAAAA1Lg/pDYmcvcsVz4xoc0xdFkAjZFs755a8OzCgCLcB/s1600/ie-leonardo-da-vinci-ayacucho-insignia.jpg"
              />
            </v-col>
            <v-form @submit.prevent="initUser({email:email,pass:pass})">
              <v-text-field
                clearable
                v-model="email"
                label="Usuario"
                type="email"
                @click:prepend="prependClicked"
                color="white"
                @click:append-outer="appendClicked"
                counter="20"
              ></v-text-field>
              <v-text-field
                clearable
                v-model="pass"
                label="Contraseña"
                type="password"
                @click:prepend="prependClicked"
                color="white"
                @click:append-outer="appendClicked"
              ></v-text-field>
              <br />
              <div class="position-button">
                <v-btn color="lime darken-4" type="submit">INGRESAR</v-btn>
              </div>
            </v-form>
            <p>{{error}}</p>
          </v-card>
        </div>
      </div>
    </v-col>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { auth } from "@/plugins/firebase.js";
export default {
  data() {
    return {
      email: "",
      pass: ""
    };
  },
  computed: {
    ...mapState(["error"])
  },
  methods: {
    ...mapActions(["initUser"]),
    prependClicked() {
      console.log("prepend clicked");
    },
    appendClicked() {
      console.log("append clicked", this.email);
    }
  }
};
</script>
<style >
.content-SignIn {
  margin: 0;
  background-image: url("https://r1.ilikewallpaper.net/ipad-air-wallpapers/download/25746/Ocean-Art-Peace-Blue-Gradation-Blur-ipad-air-wallpaper-ilikewallpaper_com.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  padding: 30px;
  height: 115vh;
  width: 100%;
}
.theme--dark.v-application{
  background: transparent;
  color: black;
}

.imgLogo {
  width: 150px;
  border-radius: 150px;
  display: block;
  margin: auto;
}
.position-button {
  /*height: 150px;*/
  /*IMPORTANTE*/
  display: flex;
  justify-content: center;
  align-items: center;
}
.btnInicio {
  height: 50%;
}
.colorTitulo {
  color: #b8b158;
  font-size: 2rem !important;
  letter-spacing: normal !important;
  padding-bottom: 10px;
}
.theme--dark.v-card {
  background-color: #0f4c7e;
  color: #282525;
}
</style>