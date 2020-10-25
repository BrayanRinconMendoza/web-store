<template>
  <v-app>
    <v-app-bar
      fixed
      app
      light
      prominent
    >
      <v-toolbar-title class="icon-and-title">
        <a href="/"> 
          <v-img src="/color-white.png" width="90" height="90" class="logo"></v-img>    
        </a> 
      </v-toolbar-title>
      <v-spacer />
      <div class="buttons-container">
        <v-btn outlined color="indigo" href="/">
          <v-icon>mdi-home</v-icon>
          Home
        </v-btn>
        <v-btn outlined color="indigo" href="/faq">FAQ</v-btn>
        <v-btn outlined color="indigo" class="/plp">Products</v-btn> 
        <v-btn outlined color="indigo" href="/login">
          <v-icon>mdi-account-circle</v-icon>
          Login
        </v-btn> 
      </div>
    </v-app-bar> 
    <v-main>
      <nuxt />
    </v-main>
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
            href="https://www.instagram.com/bicicletasbogota1/"
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
        <v-card-text class="white--text pt-0 text-center">
          <span>HyperDiem Cycling</span>
          <p>Marketplace especializado en la comercialización y distribución de bicicletas, repuestos y demás implementos necesarios para la práctica de ciclismo. HyperDiem Cycling opera desde la ciudad de Bogotá, Colombia.</p>
        </v-card-text>
        <div class="buttons-container">
          <v-btn outlined color="white" href="/contact-us">Contact Us</v-btn> 
        </div>
        <v-divider></v-divider> 
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} - HyperDiem Cycling
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-instagram',
      ],
    })
  }
</script>

<style lang="scss">
  .icon-and-title {
    display: block;
    margin: auto;
    .logo {
      margin-left: 20px; 
    }
  }
  .buttons-container {
    bottom: 0;
    display: block;
    margin: auto;
    margin-bottom: 15px;
  }
</style> 


